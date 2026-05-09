// ========================
// STATE
// ========================
let selectedMode = null;
let screenHistory = ['landing'];

// ========================
// NAVIGASI SCREEN
// ========================
function showScreen(to, direction = 'forward') {
  const current = document.querySelector('.screen.active');
  const next    = document.getElementById('screen-' + to);
  if (!next || !current) return;

  if (direction === 'forward') {
    current.classList.add('slide-out');
    next.style.display = 'block';
    next.classList.add('slide-in');
  } else {
    current.classList.add('slide-back-out');
    next.style.display = 'block';
    next.classList.add('slide-back-in');
  }

  setTimeout(() => {
    current.classList.remove('active', 'slide-out', 'slide-back-out');
    current.style.display = '';
    next.classList.remove('slide-in', 'slide-back-in');
    next.classList.add('active');
  }, 380);
}

// ========================
// PILIH MODE
// ========================
function selectMode(mode) {
  selectedMode = mode;

  // Update badge di screen kantin
  const badge = document.getElementById('modeBadge');
  if (mode === 'langsung') {
    badge.textContent = '⚡ Pesan Langsung';
    badge.style.background = 'rgba(255,107,43,0.1)';
    badge.style.color = '#FF6B2B';
    badge.style.borderColor = 'rgba(255,107,43,0.2)';
  } else {
    badge.textContent = '🤝 Mode Jastip';
    badge.style.background = 'rgba(59,130,246,0.1)';
    badge.style.color = '#3B82F6';
    badge.style.borderColor = 'rgba(59,130,246,0.2)';
  }

  screenHistory.push('kantin');
  showScreen('kantin');
}

// ========================
// PILIH KANTIN
// ========================
function goToKantin(kantin) {
  if (kantin === 'masbroow') {
    // Link ke halaman Mas Broow yang sudah dibuat
    showToast('🔗 Membuka Kantin Mas Broow...');
    setTimeout(() => {
      // Ganti dengan path sebenarnya ke masbroow/index.html
      window.location.href = '../Web%20App/masbroow/index.html';
    }, 600);

  } else if (kantin === 'tribun') {
    // Masuk ke screen pilih stand Tribun
    screenHistory.push('tribun');
    showScreen('tribun');
  }
}

// ========================
// PILIH STAND (Tribun)
// ========================
function goToStand(stand) {
  const standNames = {
    'tribun-nasi'     : 'Stand Nasi & Lauk',
    'tribun-gorengan' : 'Stand Gorengan',
    'tribun-minum'    : 'Stand Minuman',
  };
  const name = standNames[stand] || stand;
  showToast(`🔗 Membuka ${name}...`);

  // TODO: arahkan ke halaman menu masing-masing stand
  // Saat ini simulasi — ganti dengan window.location.href = '...'
  setTimeout(() => {
    showToast(`⚙️ Halaman ${name} belum tersedia. Coming soon!`);
  }, 1200);
}

// ========================
// BACK NAVIGATION
// ========================
function goBack() {
  screenHistory.pop();
  const prev = screenHistory[screenHistory.length - 1] || 'landing';
  showScreen(prev, 'back');
}

function backToKantin() {
  screenHistory.pop();
  showScreen('kantin', 'back');
}

// ========================
// TOAST
// ========================
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ========================
// KEYBOARD NAVIGATION
// ========================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === 'Backspace') {
    const active = document.querySelector('.screen.active');
    if (active && active.id !== 'screen-landing') {
      goBack();
    }
  }
});
