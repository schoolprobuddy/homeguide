// HomeGuide NZ — Appliances List Page

document.addEventListener('DOMContentLoaded', function() {
  var email = sessionStorage.getItem('hg_email');

  if (!email || !DEMO_PURCHASES[email]) {
    window.location.href = '../index.html';
    return;
  }

  var purchase = DEMO_PURCHASES[email];

  // Render purchase summary
  var summary = document.getElementById('purchase-summary');
  summary.innerHTML =
    '<div class="ps-retailer">' + purchase.retailer + ' — ' + purchase.retailer_city + '</div>' +
    '<div class="ps-invoice">Invoice: ' + purchase.invoice + '</div>' +
    '<div class="ps-date">Purchased: ' + purchase.date + ' &middot; ' + purchase.appliances.length + ' items</div>';

  // Render appliance cards
  var grid = document.getElementById('appliance-grid');
  grid.innerHTML = '';

  purchase.appliances.forEach(function(applianceId) {
    var appliance = APPLIANCE_CATALOG[applianceId];
    if (!appliance) return;

    var badge = getWarrantyBadge(appliance);
    var proBadge = appliance.requires_pro_install
      ? '<div class="ac-badge badge-pro">Pro install</div>'
      : '';

    var card = document.createElement('div');
    card.className = 'appliance-card';
    card.innerHTML =
      '<div class="ac-icon">' + appliance.icon + '</div>' +
      '<div class="ac-info">' +
        '<div class="ac-name">' + appliance.name + '</div>' +
        '<div class="ac-model">' + appliance.model + ' &middot; ' + appliance.specs + '</div>' +
      '</div>' +
      proBadge +
      '<div class="ac-badge ' + badge.class + '">' + badge.label + '</div>' +
      '<div class="ac-arrow">›</div>';

    card.addEventListener('click', function() {
      sessionStorage.setItem('hg_appliance', applianceId);
      window.location.href = 'guide.html';
    });

    grid.appendChild(card);
  });
});

function getWarrantyBadge(appliance) {
  var purchaseDate = new Date(appliance.purchase_date);
  var expiryDate = new Date(purchaseDate);
  expiryDate.setMonth(expiryDate.getMonth() + appliance.warranty_months);
  var now = new Date();
  var monthsLeft = Math.round((expiryDate - now) / (1000 * 60 * 60 * 24 * 30));

  if (monthsLeft <= 0) return { class: 'badge-expired', label: 'Expired' };
  if (monthsLeft <= 3) return { class: 'badge-warning', label: monthsLeft + 'mo left' };
  return { class: 'badge-active', label: 'Active' };
}
