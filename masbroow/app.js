// ========================
// DATA MENU (dari foto)
// ========================
const menuData = [
  {
    id: 'indomie',
    name: 'Menu Indomie',
    emoji: '🍜',
    items: [
      { id: 'ind1', name: 'Indomie Aja', price: 10000 },
      { id: 'ind2', name: 'Indomie Rebus/Goreng + Telor', price: 14000 },
      { id: 'ind3', name: 'Indomie Rebus/Goreng Spesial', price: 18000 },
      { id: 'ind4', name: 'Indomie Rebus/Goreng Double Mie', price: 20000 },
      { id: 'ind5', name: 'Indomie Rebus/Goreng Double Telor', price: 20000 },
      { id: 'ind6', name: 'Indomie Double Spesial', price: 25000 },
      { id: 'ind7', name: 'Indomie Bangladesh', price: 25000 },
      { id: 'ind8', name: 'Mie Level Toping Telor Ceplok', price: 16000 },
      { id: 'ind9', name: 'Seblak Mie', price: 20000 },
    ]
  },
  {
    id: 'mieayam',
    name: 'Menu Mie Ayam',
    emoji: '🍝',
    items: [
      { id: 'mia1', name: 'Mie Ayam Goreng', price: 16000 },
      { id: 'mia2', name: 'Mie Ayam Goreng + Bakso Kecil', price: 20000 },
      { id: 'mia3', name: 'Mie Ayam Goreng + Bakso Sedeng', price: 25000 },
      { id: 'mia4', name: 'Mie Ayam Goreng + Bakso Jumbo/Telor/Moza', price: 30000 },
      { id: 'mia5', name: 'Mie Ayam', price: 15000 },
      { id: 'mia6', name: 'Mie Ayam Bakso Kecil', price: 20000 },
      { id: 'mia7', name: 'Mie Ayam Bakso Sedeng', price: 25000 },
      { id: 'mia8', name: 'Mie Ayam Bakso Jumbo/Telor/Moza', price: 30000 },
    ]
  },
  {
    id: 'bakso',
    name: 'Menu Bakso',
    emoji: '🥣',
    items: [
      { id: 'bks1', name: 'Bakso Cuanki', price: 15000 },
      { id: 'bks2', name: 'Bakso Kriwil', price: 12000 },
      { id: 'bks3', name: 'Bakso Urat Kecil', price: 15000 },
      { id: 'bks4', name: 'Bakso Urat Sedeng', price: 18000 },
      { id: 'bks5', name: 'Bakso Urat Jumbo', price: 22000 },
      { id: 'bks6', name: 'Bakso Telor', price: 22000 },
      { id: 'bks7', name: 'Bakso Mozarella', price: 22000 },
    ]
  },
  {
    id: 'soto',
    name: 'Menu Soto',
    emoji: '🍲',
    items: [
      { id: 'sot1', name: 'Soto Ayam Campur Kecil', price: 8000 },
      { id: 'sot2', name: 'Soto Ayam Pisah Kecil', price: 13000 },
      { id: 'sot3', name: 'Soto Ayam Campur Besar', price: 10000 },
      { id: 'sot4', name: 'Soto Ayam Pisah Besar', price: 15000 },
      { id: 'sot5', name: 'Soto Sapi Campur Besar', price: 15000 },
      { id: 'sot6', name: 'Soto Sapi Pisah Besar', price: 20000 },
    ]
  },
  {
    id: 'nasgor',
    name: 'Menu Nasi Goreng',
    emoji: '🍳',
    items: [
      { id: 'nsg1', name: 'Nasgor Telor', price: 15000 },
      { id: 'nsg2', name: 'Nasgor Sosis', price: 15000 },
      { id: 'nsg3', name: 'Nasgor Bakso', price: 15000 },
      { id: 'nsg4', name: 'Nasgor Ayam', price: 18000 },
      { id: 'nsg5', name: 'Nasgor Ati Ampela', price: 18000 },
      { id: 'nsg6', name: 'Nasgor Mawut / Magelangan', price: 20000 },
      { id: 'nsg7', name: 'Nasgor Spesial / Acakadul', price: 25000 },
    ]
  },
  {
    id: 'mietek',
    name: 'Mie Tek Tek / Mie Nyemek',
    emoji: '🍢',
    items: [
      { id: 'mtk1', name: 'Mie Tek Tek Goreng Telor', price: 15000 },
      { id: 'mtk2', name: 'Mie Tek Tek Goreng Sosis', price: 15000 },
      { id: 'mtk3', name: 'Mie Tek Tek Goreng Bakso', price: 15000 },
      { id: 'mtk4', name: 'Mie Tek Tek Goreng Ayam', price: 18000 },
      { id: 'mtk5', name: 'Mie Tek Tek Goreng Ati Ampela', price: 18000 },
      { id: 'mtk6', name: 'Mie Tek Tek Goreng Spesial', price: 25000 },
      { id: 'mtk7', name: 'Mie Tek Tek Rebus Ayam', price: 25000 },
      { id: 'mtk8', name: 'Mie Tek Tek Rebus Ati Ampela', price: 20000 },
      { id: 'mtk9', name: 'Mie Tek Tek Rebus Spesial', price: 25000 },
      { id: 'mtk10', name: 'Mie Nyemek', price: 20000 },
    ]
  },
  {
    id: 'kwetiaw',
    name: 'Menu Kwetiaw',
    emoji: '🥘',
    items: [
      { id: 'kwt1', name: 'Kwetiaw Goreng Telor', price: 15000 },
      { id: 'kwt2', name: 'Kwetiaw Goreng Sosis/Bakso', price: 18000 },
      { id: 'kwt3', name: 'Kwetiaw Goreng Ayam', price: 20000 },
      { id: 'kwt4', name: 'Kwetiaw Goreng Ati Ampela', price: 20000 },
      { id: 'kwt5', name: 'Kwetiaw Goreng Spesial', price: 25000 },
      { id: 'kwt6', name: 'Kwetiaw Rebus Telor', price: 18000 },
      { id: 'kwt7', name: 'Kwetiaw Rebus Sosis/Bakso', price: 18000 },
      { id: 'kwt8', name: 'Kwetiaw Rebus Ayam', price: 18000 },
      { id: 'kwt9', name: 'Kwetiaw Rebus Ati Ampela', price: 20000 },
      { id: 'kwt10', name: 'Kwetiaw Rebus Spesial', price: 25000 },
    ]
  },
  {
    id: 'bihun',
    name: 'Menu Bihun',
    emoji: '🫕',
    items: [
      { id: 'bhn1', name: 'Bihun Goreng Sosis/Bakso', price: 17000 },
      { id: 'bhn2', name: 'Bihun Goreng Ayam', price: 20000 },
      { id: 'bhn3', name: 'Bihun Goreng Ati Ampela', price: 20000 },
      { id: 'bhn4', name: 'Bihun Goreng Spesial', price: 25000 },
      { id: 'bhn5', name: 'Bihun Rebus Sosis/Bakso', price: 18000 },
      { id: 'bhn6', name: 'Bihun Rebus Ayam', price: 20000 },
      { id: 'bhn7', name: 'Bihun Rebus Ati Ampela', price: 20000 },
      { id: 'bhn8', name: 'Bihun Rebus Spesial', price: 25000 },
    ]
  },
  {
    id: 'nonpaket',
    name: 'Menu Non Paket (Nasi)',
    emoji: '🍚',
    items: [
      { id: 'npk1', name: 'Ayam Penyet', price: 20000 },
      { id: 'npk2', name: 'Ayam Kremes', price: 20000 },
      { id: 'npk3', name: 'Ayam Bakar', price: 23000 },
      { id: 'npk4', name: 'Lele Penyet', price: 16000 },
      { id: 'npk5', name: 'Lele Kremes', price: 16000 },
      { id: 'npk6', name: 'Lele Bakar', price: 16000 },
      { id: 'npk7', name: 'Telor Penyet', price: 13000 },
    ]
  },
  {
    id: 'paket',
    name: 'Paket Hemat',
    emoji: '🎁',
    isSpecial: true,
    items: [
      { id: 'pkt1', name: 'Paket Ayam Geprek', desc: 'Nasi + Ayam Geprek + Minum', price: 18000, badge: 'BEST SELLER' },
      { id: 'pkt2', name: 'Paket Hemat Besar', desc: 'Nasi + Minum (Es Teh/Prima/VIT) — Paket Ayam Penyet, Kremes, Bakar, Chicken Katzu, Karage, Teriyaki, Rica-Rica Ayam, Sambal Cumi + Telor Dadar, Ceker Mercon + Telor Dadar', price: 25000, badge: 'HEMAT BESAR' },
      { id: 'pkt3', name: 'Paket Hemat Segar', desc: 'Nasi Soto Campur + Es Teh/Prima', price: 15000, badge: 'SEGAR' },
      { id: 'pkt4', name: 'Paket Rames', desc: 'Nasi + Sayur + Lauk + Es + Teh', price: 20000, badge: 'RAMES' },
    ]
  },
];

// ========================
// STATE
// ========================
let cart = {}; // { itemId: { name, price, qty } }

// ========================
// INIT
// ========================
document.addEventListener('DOMContentLoaded', () => {
  renderTabs();
  renderAllMenus();
});

// ========================
// RENDER TABS
// ========================
function renderTabs() {
  const tabs = document.getElementById('catTabs');
  tabs.innerHTML = menuData.map((cat, i) => `
    <button class="cat-tab ${i === 0 ? 'active' : ''}"
      onclick="scrollToCategory('${cat.id}', this)">
      <span class="cat-emoji">${cat.emoji}</span>
      ${cat.name}
    </button>
  `).join('');
}

function scrollToCategory(id, el) {
  const target = document.getElementById('cat-' + id);
  if (target) {
    const offset = 130;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

// ========================
// RENDER ALL MENUS
// ========================
function renderAllMenus() {
  const section = document.getElementById('menuSection');
  section.innerHTML = menuData.map(cat => {
    if (cat.isSpecial) return renderPaketBlock(cat);
    return renderMenuBlock(cat);
  }).join('');
}

function renderMenuBlock(cat) {
  return `
    <div class="category-block" id="cat-${cat.id}">
      <div class="cat-title">
        <span class="cat-title-emoji">${cat.emoji}</span>
        <h2>${cat.name}</h2>
        <div class="cat-title-line"></div>
      </div>
      <div class="menu-grid">
        ${cat.items.map(item => renderMenuCard(item)).join('')}
      </div>
    </div>
  `;
}

function renderMenuCard(item) {
  const inCart = cart[item.id] && cart[item.id].qty > 0;
  const qty = inCart ? cart[item.id].qty : 0;
  return `
    <div class="menu-card ${inCart ? 'in-cart' : ''}" id="card-${item.id}">
      <div class="menu-card-top">
        <span class="menu-name">${item.name}</span>
        <span class="menu-price">${formatRp(item.price)}</span>
      </div>
      <div class="menu-controls">
        ${inCart ? `
          <div class="qty-wrap">
            <button class="qty-btn qty-minus" onclick="changeQty('${item.id}', '${item.name}', ${item.price}, -1)">−</button>
            <span class="qty-num">${qty}</span>
            <button class="qty-btn qty-plus" onclick="changeQty('${item.id}', '${item.name}', ${item.price}, 1)">+</button>
          </div>
        ` : `
          <button class="add-btn" onclick="changeQty('${item.id}', '${item.name}', ${item.price}, 1)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Tambah
          </button>
        `}
      </div>
    </div>
  `;
}

function renderPaketBlock(cat) {
  return `
    <div class="category-block" id="cat-${cat.id}">
      <div class="cat-title">
        <span class="cat-title-emoji">${cat.emoji}</span>
        <h2>${cat.name}</h2>
        <div class="cat-title-line"></div>
      </div>
      <div class="paket-grid">
        ${cat.items.map(item => renderPaketCard(item)).join('')}
      </div>
    </div>
  `;
}

function renderPaketCard(item) {
  return `
    <div class="paket-card" id="card-${item.id}">
      <div class="paket-badge">${item.badge}</div>
      <div class="paket-title">${item.name}</div>
      <div class="paket-desc">${item.desc}</div>
      <div class="paket-price">${formatRp(item.price)}</div>
      <button class="paket-add" onclick="changeQty('${item.id}', '${item.name}', ${item.price}, 1)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width="14" height="14"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Tambah ke Keranjang
      </button>
    </div>
  `;
}

// ========================
// CART LOGIC
// ========================
function changeQty(id, name, price, delta) {
  if (!cart[id]) cart[id] = { name, price, qty: 0 };
  cart[id].qty = Math.max(0, cart[id].qty + delta);
  if (cart[id].qty === 0) delete cart[id];

  refreshCard(id, name, price);
  updateCartUI();
}

function refreshCard(id, name, price) {
  const card = document.getElementById('card-' + id);
  if (!card) return;
  const inCart = cart[id] && cart[id].qty > 0;
  const qty = inCart ? cart[id].qty : 0;

  card.classList.toggle('in-cart', inCart);
  const controls = card.querySelector('.menu-controls');
  if (!controls) return;

  controls.innerHTML = inCart ? `
    <div class="qty-wrap">
      <button class="qty-btn qty-minus" onclick="changeQty('${id}', '${name}', ${price}, -1)">−</button>
      <span class="qty-num">${qty}</span>
      <button class="qty-btn qty-plus" onclick="changeQty('${id}', '${name}', ${price}, 1)">+</button>
    </div>
  ` : `
    <button class="add-btn" onclick="changeQty('${id}', '${name}', ${price}, 1)">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      Tambah
    </button>
  `;
}

function updateCartUI() {
  const items = Object.entries(cart);
  const totalQty = items.reduce((s, [, v]) => s + v.qty, 0);
  const totalPrice = items.reduce((s, [, v]) => s + v.price * v.qty, 0);

  // Cart count badge
  const countEl = document.getElementById('cartCount');
  countEl.textContent = totalQty;
  countEl.classList.add('bump');
  setTimeout(() => countEl.classList.remove('bump'), 200);

  // Cart drawer items
  const cartItemsEl = document.getElementById('cartItems');
  const cartEmptyEl = document.getElementById('cartEmpty');
  const cartFooterEl = document.getElementById('cartFooter');

  if (items.length === 0) {
    cartEmptyEl.style.display = 'flex';
    cartItemsEl.style.display = 'none';
    cartFooterEl.style.display = 'none';
  } else {
    cartEmptyEl.style.display = 'none';
    cartItemsEl.style.display = 'flex';
    cartFooterEl.style.display = 'flex';

    cartItemsEl.innerHTML = items.map(([id, item]) => `
      <div class="cart-item">
        <div class="ci-info">
          <div class="ci-name">${item.name}</div>
          <div class="ci-price">${formatRp(item.price * item.qty)}</div>
        </div>
        <div class="ci-controls">
          <button class="ci-minus" onclick="changeQty('${id}', '${item.name}', ${item.price}, -1)">−</button>
          <span class="ci-qty">${item.qty}</span>
          <button class="ci-plus" onclick="changeQty('${id}', '${item.name}', ${item.price}, 1)">+</button>
        </div>
      </div>
    `).join('');

    document.getElementById('subtotalVal').textContent = formatRp(totalPrice);
    document.getElementById('totalVal').textContent = formatRp(totalPrice);
  }

  // Floating cart (mobile)
  const floatCart = document.getElementById('floatCart');
  if (totalQty > 0) {
    floatCart.style.display = 'flex';
    document.getElementById('floatCount').textContent = `${totalQty} item`;
    document.getElementById('floatTotal').textContent = formatRp(totalPrice);
  } else {
    floatCart.style.display = 'none';
  }
}

// ========================
// CART TOGGLE
// ========================
function toggleCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = drawer.classList.contains('open');
  drawer.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function clearCart() {
  cart = {};
  renderAllMenus();
  updateCartUI();
  showToast('Keranjang dikosongkan');
}

// ========================
// KONFIRMASI ORDER
// ========================
function konfirmasiOrder() {
  const items = Object.entries(cart);
  if (items.length === 0) return;

  const totalPrice = items.reduce((s, [, v]) => s + v.price * v.qty, 0);
  const note = document.getElementById('noteInput').value.trim();

  // Build receipt
  const receiptHtml = items.map(([, item]) => `
    <div class="receipt-row">
      <span class="r-name">${item.name}</span>
      <span class="r-qty">x${item.qty}</span>
      <span class="r-price">${formatRp(item.price * item.qty)}</span>
    </div>
  `).join('');

  document.getElementById('modalReceipt').innerHTML = receiptHtml;
  document.getElementById('modalTotal').textContent = `Total: ${formatRp(totalPrice)}`;
  document.getElementById('modalNoteDisplay').textContent = note ? `📝 Catatan: ${note}` : '';

  // Close cart, open modal
  toggleCart();
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  cart = {};
  renderAllMenus();
  updateCartUI();
  document.getElementById('noteInput').value = '';
  showToast('✅ Selamat makan! Jangan lupa bayar di kasir 😄');
}

// ========================
// SCROLL SPY (auto update tab)
// ========================
window.addEventListener('scroll', () => {
  const offset = 160;
  let current = menuData[0].id;
  menuData.forEach(cat => {
    const el = document.getElementById('cat-' + cat.id);
    if (el && el.getBoundingClientRect().top < offset) {
      current = cat.id;
    }
  });
  document.querySelectorAll('.cat-tab').forEach((tab, i) => {
    tab.classList.toggle('active', menuData[i].id === current);
  });
});

// ========================
// TOAST
// ========================
function showToast(msg) {
  const old = document.getElementById('toast');
  if (old) old.remove();

  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed;
    bottom: 90px; left: 50%;
    transform: translateX(-50%) translateY(10px);
    background: #1A0A0A;
    color: #fff;
    font-family: 'Nunito', sans-serif;
    font-size: 13px; font-weight: 700;
    padding: 11px 22px;
    border-radius: 30px;
    box-shadow: 0 8px 28px rgba(0,0,0,0.25);
    z-index: 9999;
    white-space: nowrap;
    opacity: 0;
    transition: all 0.28s ease;
  `;
  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => toast.remove(), 280);
  }, 3000);
}

// ========================
// HELPER
// ========================
function formatRp(num) {
  return 'Rp' + num.toLocaleString('id-ID');
}
