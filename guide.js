// HomeGuide NZ — Guide Page

document.addEventListener('DOMContentLoaded', function() {
  var applianceId = sessionStorage.getItem('hg_appliance');
  var email = sessionStorage.getItem('hg_email');

  if (!applianceId || !APPLIANCE_CATALOG[applianceId]) {
    window.location.href = 'appliances.html';
    return;
  }

  var appliance = APPLIANCE_CATALOG[applianceId];
  var purchase = email ? DEMO_PURCHASES[email] : null;

  // Set appliance hero - use product image if available, fall back to emoji
  var ahIcon = document.getElementById('ah-icon');
  if (appliance.image) {
    ahIcon.innerHTML = '<img src="' + appliance.image + '" alt="' + appliance.name + '" style="width:100%;height:100%;object-fit:contain;border-radius:10px;" onerror="this.outerHTML=\'' + appliance.icon + '\'">';
  } else {
    ahIcon.textContent = appliance.icon;
  }
  document.getElementById('ah-name').textContent = appliance.name;
  document.getElementById('ah-model').textContent = 'Model: ' + appliance.model + ' · ' + appliance.specs;
  document.getElementById('ah-retailer').textContent = purchase
    ? 'Purchased from ' + purchase.retailer
    : '';
  document.title = appliance.name + ' — HomeGuide NZ';

  // Pro install banner
  if (appliance.requires_pro_install) {
    document.getElementById('pro-banner').classList.remove('hidden');
    document.getElementById('pro-reason').textContent = ' ' + (appliance.pro_install_reason || '');
    document.getElementById('find-installer').classList.remove('hidden');
    renderInstallers(appliance.pro_install_trades || []);
  }

  // Warranty status bar
  renderWarrantyBar(appliance);

  // Render all guide content
  renderUnbox(appliance.guides.unbox);
  renderInstall(appliance.guides.install);
  renderTroubleshoot(appliance.guides.troubleshoot);
  renderWarrantyTab(appliance);
});

function renderWarrantyBar(appliance) {
  var purchaseDate = new Date(appliance.purchase_date);
  var expiryDate = new Date(purchaseDate);
  expiryDate.setMonth(expiryDate.getMonth() + appliance.warranty_months);
  var now = new Date();

  var totalMs = expiryDate - purchaseDate;
  var usedMs = now - purchaseDate;
  var pct = Math.max(0, Math.min(100, Math.round((1 - usedMs / totalMs) * 100)));
  var monthsLeft = Math.max(0, Math.round((expiryDate - now) / (1000 * 60 * 60 * 24 * 30)));

  var fillClass = pct > 50 ? 'ws-fill-green' : pct > 20 ? 'ws-fill-amber' : 'ws-fill-red';
  var statusText = monthsLeft <= 0 ? 'Expired' : monthsLeft <= 3 ? monthsLeft + ' months remaining — expiring soon' : monthsLeft + ' months remaining';

  document.getElementById('warranty-status').innerHTML =
    '<div class="ws-row">' +
      '<span class="ws-label">Warranty</span>' +
      '<span class="ws-value">' + appliance.guides.warranty.coverage + '</span>' +
    '</div>' +
    '<div class="ws-track"><div class="ws-fill ' + fillClass + '" style="width:' + pct + '%"></div></div>' +
    '<div class="ws-expiry">' +
      '<span>' + statusText + '</span>' +
      '<span>Expires ' + expiryDate.toLocaleDateString('en-NZ', { month: 'long', year: 'numeric' }) + '</span>' +
    '</div>';
}

function renderUnbox(guide) {
  if (!guide) return;
  renderVideo('unbox-video-wrap', guide.video_id, guide.video_title);
  renderSteps('unbox-steps', guide.steps);
}

function renderInstall(guide) {
  if (!guide) return;
  renderVideo('install-video-wrap', guide.video_id, guide.video_title);
  renderSteps('install-steps', guide.steps);
}

function renderVideo(containerId, videoId, title) {
  if (!videoId) return;
  var wrap = document.getElementById(containerId);
  if (!wrap) return;
  wrap.outerHTML =
    '<div class="video-embed-wrap" id="' + containerId + '">' +
      '<iframe src="https://www.youtube.com/embed/' + videoId + '?rel=0&modestbranding=1" ' +
        'title="' + (title || 'Installation guide') + '" ' +
        'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
        'allowfullscreen></iframe>' +
    '</div>' +
    '<p class="video-label">' + (title || '') + '</p>';
}

function renderSteps(containerId, steps) {
  if (!steps || !steps.length) return;
  var container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = steps.map(function(step, i) {
    var numClass = step.type === 'danger' ? 'gs-num-danger' : step.type === 'warn' ? 'gs-num-warn' : 'gs-num-normal';
    var numText = step.type === 'danger' ? '!' : step.type === 'warn' ? '!' : (i + 1);
    var noteHtml = step.note ? '<div class="gs-note">' + step.note + '</div>' : '';
    return '<div class="gs-item">' +
      '<div class="gs-num ' + numClass + '">' + numText + '</div>' +
      '<div class="gs-text">' + step.text + noteHtml + '</div>' +
    '</div>';
  }).join('');
}

function renderTroubleshoot(items) {
  if (!items || !items.length) return;
  var container = document.getElementById('troubleshoot-steps');
  if (!container) return;

  container.innerHTML = items.map(function(item) {
    var fixList = item.fixes.map(function(f) {
      return '<li>' + f + '</li>';
    }).join('');
    return '<div class="ts-item">' +
      '<div class="ts-symptom">' + item.symptom + '</div>' +
      '<div class="ts-fix"><ul>' + fixList + '</ul></div>' +
    '</div>';
  }).join('');
}

function renderWarrantyTab(appliance) {
  var w = appliance.guides.warranty;
  var purchaseDate = new Date(appliance.purchase_date);
  var expiryDate = new Date(purchaseDate);
  expiryDate.setMonth(expiryDate.getMonth() + appliance.warranty_months);

  var includesList = (w.includes || []).map(function(i) { return '<li>' + i + '</li>'; }).join('');
  var excludesList = (w.excludes || []).map(function(i) { return '<li>' + i + '</li>'; }).join('');

  document.getElementById('warranty-detail').innerHTML =
    '<div class="warranty-detail-card">' +
      '<div class="wdc-row"><span class="wdc-label">Coverage</span><span class="wdc-value">' + w.coverage + '</span></div>' +
      '<div class="wdc-row"><span class="wdc-label">Purchase date</span><span class="wdc-value">' + purchaseDate.toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' }) + '</span></div>' +
      '<div class="wdc-row"><span class="wdc-label">Expiry date</span><span class="wdc-value">' + expiryDate.toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' }) + '</span></div>' +
      '<div class="wdc-row"><span class="wdc-label">What\'s covered</span><span class="wdc-value" style="text-align:right;font-size:12px;font-weight:400"><ul style="list-style:none">' + includesList + '</ul></span></div>' +
      '<div class="wdc-row"><span class="wdc-label">Not covered</span><span class="wdc-value" style="text-align:right;font-size:12px;font-weight:400;color:#A32D2D"><ul style="list-style:none">' + excludesList + '</ul></span></div>' +
    '</div>';

  var repairs = w.repairs || [];
  var repairsHtml = '';
  if (repairs.length === 0 || (repairs.length === 1 && !repairs[0].date.match(/\d/))) {
    repairsHtml = '<div class="rh-empty">No repairs logged yet. Your service visits will appear here.</div>';
  } else {
    repairsHtml = repairs.map(function(r) {
      return '<div class="rh-item">' +
        '<div class="rh-dot"></div>' +
        '<div class="rh-desc">' + r.description + '<div class="rh-date">' + r.date + '</div></div>' +
        '<div class="rh-status">' + r.status + '</div>' +
      '</div>';
    }).join('');
  }

  document.getElementById('repair-history').innerHTML =
    '<div class="repair-history">' +
      '<div class="rh-header">Repair history</div>' +
      repairsHtml +
    '</div>';
}

function renderInstallers(trades) {
  var list = document.getElementById('installer-list');
  if (!list || !trades.length) return;
  list.innerHTML = trades.map(function(t) {
    return '<div class="installer-card">' +
      '<div class="installer-icon">' + t.icon + '</div>' +
      '<div class="installer-info">' +
        '<div class="installer-name">' + t.name + '</div>' +
        '<div class="installer-type">' + t.type + '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function switchGuide(tab, el) {
  document.querySelectorAll('.guide-panel').forEach(function(p) { p.classList.add('hidden'); });
  document.querySelectorAll('.gtab').forEach(function(t) { t.classList.remove('active'); });
  document.getElementById('panel-' + tab).classList.remove('hidden');
  el.classList.add('active');
}

function shareWarranty() {
  var applianceId = sessionStorage.getItem('hg_appliance');
  var appliance = APPLIANCE_CATALOG[applianceId];
  if (!appliance) return;

  var text = 'HomeGuide NZ — Warranty Info\n' +
    appliance.name + ' (' + appliance.model + ')\n' +
    'Purchased: ' + appliance.purchase_date + '\n' +
    'Coverage: ' + appliance.guides.warranty.coverage;

  if (navigator.share) {
    navigator.share({ title: 'Warranty Info — ' + appliance.name, text: text });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(function() {
      alert('Warranty details copied to clipboard.');
    });
  }
}
