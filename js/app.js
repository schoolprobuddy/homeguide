// HomeGuide NZ — Main App (index.html)

let qrScanner = null;
let qrStarted = false;

function switchTab(tab, el) {
  document.querySelectorAll('.ltab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
  el.classList.add('active');
  document.getElementById('tab-' + tab).classList.remove('hidden');
  if (tab !== 'qr' && qrStarted) {
    stopQR();
  }
}

function startQR() {
  var btn = document.getElementById('qr-start-btn');
  var reader = document.getElementById('qr-reader');

  if (qrStarted) return;
  qrStarted = true;
  btn.textContent = 'Scanning…';
  btn.disabled = true;
  reader.style.display = 'block';

  qrScanner = new Html5Qrcode('qr-reader');
  qrScanner.start(
    { facingMode: 'environment' },
    { fps: 10, qrbox: { width: 220, height: 220 } },
    function(decodedText) {
      stopQR();
      handleQRResult(decodedText);
    },
    function(err) {}
  ).catch(function(err) {
    btn.textContent = 'Camera not available — use email instead';
    btn.disabled = false;
    qrStarted = false;
  });
}

function stopQR() {
  if (qrScanner) {
    qrScanner.stop().catch(function() {});
    qrScanner = null;
  }
  qrStarted = false;
}

function handleQRResult(text) {
  var email = QR_LOOKUP[text];
  var resultDiv = document.getElementById('qr-result');
  resultDiv.classList.remove('hidden');

  if (email && DEMO_PURCHASES[email]) {
    resultDiv.textContent = '✓ Purchase found! Loading your appliances…';
    sessionStorage.setItem('hg_email', email);
    setTimeout(function() {
      window.location.href = 'pages/appliances.html';
    }, 800);
  } else {
    // Try treating QR as direct email
    if (DEMO_PURCHASES[text]) {
      sessionStorage.setItem('hg_email', text);
      resultDiv.textContent = '✓ Found! Loading…';
      setTimeout(function() {
        window.location.href = 'pages/appliances.html';
      }, 800);
    } else {
      resultDiv.textContent = 'QR code not recognised. Try the email lookup instead.';
      resultDiv.style.background = '#FCEBEB';
      resultDiv.style.color = '#A32D2D';
    }
  }
}

function lookupByEmail() {
  var email = document.getElementById('email-input').value.trim().toLowerCase();
  var errorDiv = document.getElementById('email-error');
  errorDiv.classList.add('hidden');

  if (!email) {
    errorDiv.textContent = 'Please enter your email address.';
    errorDiv.classList.remove('hidden');
    return;
  }

  if (DEMO_PURCHASES[email]) {
    sessionStorage.setItem('hg_email', email);
    window.location.href = 'pages/appliances.html';
  } else {
    errorDiv.textContent = 'No purchase found for this email. Try demo@homeguide.nz to explore the demo.';
    errorDiv.classList.remove('hidden');
  }
}

// Allow Enter key on email input
document.addEventListener('DOMContentLoaded', function() {
  var input = document.getElementById('email-input');
  if (input) {
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') lookupByEmail();
    });
  }
});
