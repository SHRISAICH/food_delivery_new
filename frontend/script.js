
const FOODS = [
  {
    id: 1,
    name: "Margherita Royale",
    category: "pizza",
    price: 349,
    originalPrice: 449,
    rating: 4.8,
    time: "22 min",
    badge: "Bestseller",
    badgeType: "",
    desc: "Hand-tossed crust with San Marzano tomatoes, fresh mozzarella, and fragrant basil.",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80"
  },
  {
    id: 2,
    name: "BBQ Chicken Pizza",
    category: "pizza",
    price: 429,
    originalPrice: null,
    rating: 4.6,
    time: "28 min",
    badge: "Spicy",
    badgeType: "",
    desc: "Smoky BBQ sauce, grilled chicken, red onion, and a three-cheese blend.",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80"
  },
  {
    id: 3,
    name: "Double Smash Burger",
    category: "burger",
    price: 299,
    originalPrice: 369,
    rating: 4.9,
    time: "18 min",
    badge: "New",
    badgeType: "new",
    desc: "Two smashed beef patties, American cheese, secret sauce, pickles, and brioche bun.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80"
  },
  {
    id: 4,
    name: "Crispy Chicken Burger",
    category: "burger",
    price: 259,
    originalPrice: null,
    rating: 4.7,
    time: "20 min",
    badge: "Veg Free",
    badgeType: "",
    desc: "Double-fried crispy chicken thigh with chipotle mayo and coleslaw.",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80"
  },
  {
    id: 5,
    name: "Salmon Sushi Platter",
    category: "sushi",
    price: 699,
    originalPrice: 849,
    rating: 4.9,
    time: "30 min",
    badge: "Premium",
    badgeType: "",
    desc: "Fresh Atlantic salmon nigiri and maki with wasabi, pickled ginger, and soy.",
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80"
  },
  {
    id: 6,
    name: "Dragon Roll",
    category: "sushi",
    price: 549,
    originalPrice: null,
    rating: 4.7,
    time: "28 min",
    badge: "New",
    badgeType: "new",
    desc: "Tempura shrimp inside, avocado and tobiko on top, drizzled with eel sauce.",
    img: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&q=80"
  },
  {
    id: 7,
    name: "Truffle Carbonara",
    category: "pasta",
    price: 389,
    originalPrice: 479,
    rating: 4.8,
    time: "25 min",
    badge: "Chef's Pick",
    badgeType: "",
    desc: "Rigatoni with guanciale, egg yolk cream, pecorino, black pepper, and shaved truffle.",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80"
  },
  {
    id: 8,
    name: "Arrabiata Penne",
    category: "pasta",
    price: 299,
    originalPrice: null,
    rating: 4.5,
    time: "20 min",
    badge: "Veg",
    badgeType: "veg",
    desc: "Penne in a fiery San Marzano tomato sauce with garlic, chilli, and fresh parsley.",
    img: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=400&q=80"
  },
  {
    id: 9,
    name: "Mango Tango Smoothie",
    category: "drinks",
    price: 179,
    originalPrice: 219,
    rating: 4.6,
    time: "10 min",
    badge: "Veg",
    badgeType: "veg",
    desc: "Fresh Alphonso mango blended with yogurt, cardamom, and a hint of saffron.",
    img: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&q=80"
  },
  {
    id: 10,
    name: "Cold Brew Float",
    category: "drinks",
    price: 199,
    originalPrice: null,
    rating: 4.7,
    time: "8 min",
    badge: "New",
    badgeType: "new",
    desc: "18-hour cold brew topped with vanilla bean ice cream and caramel drizzle.",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80"
  },
  {
    id: 11,
    name: "Nutella Lava Cake",
    category: "dessert",
    price: 249,
    originalPrice: 299,
    rating: 4.9,
    time: "15 min",
    badge: "Bestseller",
    badgeType: "",
    desc: "Warm chocolate cake with a molten Nutella centre, served with vanilla ice cream.",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80"
  },
  {
    id: 12,
    name: "Tiramisu Jar",
    category: "dessert",
    price: 219,
    originalPrice: null,
    rating: 4.7,
    time: "12 min",
    badge: "Veg",
    badgeType: "veg",
    desc: "Classic Italian tiramisu layered in a mason jar with espresso-soaked ladyfingers.",
    img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80"
  },
  {
    id: 13,
    name: "Acai Power Bowl",
    category: "healthy",
    price: 329,
    originalPrice: 399,
    rating: 4.8,
    time: "15 min",
    badge: "Veg",
    badgeType: "veg",
    desc: "Blended acai with granola, banana, blueberries, honey, and coconut flakes.",
    img: "https://images.unsplash.com/photo-1490323933-33ac17c32d3e?w=400&q=80"
  },
  {
    id: 14,
    name: "Grilled Veggie Wrap",
    category: "healthy",
    price: 259,
    originalPrice: null,
    rating: 4.5,
    time: "18 min",
    badge: "Veg",
    badgeType: "veg",
    desc: "Grilled zucchini, bell peppers, hummus, spinach, and feta in a whole wheat wrap.",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80"
  },
  {
    id: 15,
    name: "Pepperoni Overload",
    category: "pizza",
    price: 479,
    originalPrice: 579,
    rating: 4.9,
    time: "26 min",
    badge: "Bestseller",
    badgeType: "",
    desc: "Double pepperoni on a thick crust with stretch mozzarella and Italian herbs.",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80"
  }
];

const COUPONS = {
  FEAST50: 0.50,   // 50% off
  SAVE20:  0.20,   // 20% off
  FEASTLY: 0.15,   // 15% off
};

// ─── STATE ───────────────────────────────────────────────────
let activeCategory = "all";
let searchQuery = "";
let sortMode = "default";
let appliedCoupon = null;
let discountPct = 0;

// ─── CART HELPERS ────────────────────────────────────────────
function getCart() {
  return JSON.parse(localStorage.getItem("feastly_cart") || "[]");
}
function saveCart(cart) {
  localStorage.setItem("feastly_cart", JSON.stringify(cart));
}
function getCartCount() {
  return getCart().reduce((s, i) => s + i.qty, 0);
}
function getCartItem(id) {
  return getCart().find(i => i.id === id);
}
function addToCart(id) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === id);
  if (idx > -1) {
    cart[idx].qty += 1;
  } else {
    const food = FOODS.find(f => f.id === id);
    cart.push({ id: food.id, name: food.name, price: food.price, img: food.img, category: food.category, qty: 1 });
  }
  saveCart(cart);
  updateCartUI();
}
function removeFromCart(id) {
  let cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  updateCartUI();
}
function setQty(id, qty) {
  let cart = getCart();
  if (qty < 1) { removeFromCart(id); return; }
  const idx = cart.findIndex(i => i.id === id);
  if (idx > -1) cart[idx].qty = qty;
  saveCart(cart);
  updateCartUI();
}
function clearCart() {
  saveCart([]);
  updateCartUI();
}

// ─── TOAST ───────────────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById("toast");
  const msgEl = document.getElementById("toast-msg");
  if (!toast) return;
  msgEl.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2500);
}

// ─── UPDATE CART BADGE ────────────────────────────────────────
function updateCartBadge() {
  const count = getCartCount();
  ["cart-count", "cart-count-mobile"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = count;
  });
}

// ─── RENDER FOOD CARDS (index.html) ──────────────────────────
function renderFoods() {
  const grid = document.getElementById("food-grid");
  const emptyState = document.getElementById("empty-state");
  const countEl = document.getElementById("item-count");
  if (!grid) return;

  let items = FOODS.filter(f => {
    const catMatch = activeCategory === "all" || f.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const searchMatch = !q || f.name.toLowerCase().includes(q) || f.category.toLowerCase().includes(q) || f.desc.toLowerCase().includes(q);
    return catMatch && searchMatch;
  });

  // Sort
  if (sortMode === "price-asc")  items = [...items].sort((a, b) => a.price - b.price);
  if (sortMode === "price-desc") items = [...items].sort((a, b) => b.price - a.price);
  if (sortMode === "rating")     items = [...items].sort((a, b) => b.rating - a.rating);

  if (countEl) countEl.textContent = items.length;

  if (items.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }
  if (emptyState) emptyState.style.display = "none";

  grid.innerHTML = items.map((f, i) => {
    const inCart = getCartItem(f.id);
    const qty = inCart ? inCart.qty : 0;
    return `
      <div class="food-card" style="animation-delay:${i * 0.05}s" data-id="${f.id}">
        <div class="food-card-img">
          <img src="${f.img}" alt="${f.name}" loading="lazy" />
          ${f.badge ? `<span class="food-badge ${f.badgeType}">${f.badge}</span>` : ""}
          <span class="food-rating">${f.rating}</span>
        </div>
        <div class="food-card-body">
          <div class="food-card-meta">
            <span class="food-category-tag">${f.category}</span>
            <span class="food-time">🕐 ${f.time}</span>
          </div>
          <h3 class="food-name">${f.name}</h3>
          <p class="food-desc">${f.desc}</p>
          <div class="food-card-footer">
            <div class="food-price">
              ₹${f.price}
              ${f.originalPrice ? `<span>₹${f.originalPrice}</span>` : ""}
            </div>
            ${qty > 0
              ? `<div class="qty-control">
                   <button class="qty-btn" onclick="decrementCard(${f.id})">−</button>
                   <span class="qty-val">${qty}</span>
                   <button class="qty-btn" onclick="incrementCard(${f.id})">+</button>
                 </div>`
              : `<button class="add-btn" onclick="handleAdd(${f.id})">
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                   Add
                 </button>`
            }
          </div>
        </div>
      </div>`;
  }).join("");
}

function handleAdd(id) {
  addToCart(id);
  const food = FOODS.find(f => f.id === id);
  showToast(`${food.name} added to cart!`);
  renderFoods();
}
function incrementCard(id) {
  const item = getCartItem(id);
  if (item) setQty(id, item.qty + 1);
  renderFoods();
}
function decrementCard(id) {
  const item = getCartItem(id);
  if (!item) return;
  if (item.qty === 1) {
    removeFromCart(id);
    showToast("Item removed from cart");
  } else {
    setQty(id, item.qty - 1);
  }
  renderFoods();
}

// ─── UPDATE CART UI (both pages) ─────────────────────────────
function updateCartUI() {
  updateCartBadge();
  if (document.body.classList.contains("cart-page")) {
    renderCartPage();
  }
}

// ─── RENDER CART PAGE ────────────────────────────────────────
function renderCartPage() {
  const cart = getCart();
  const layout = document.getElementById("cart-layout");
  const emptyEl = document.getElementById("cart-empty");
  const listEl = document.getElementById("cart-items-list");

  if (!layout) return;

  if (cart.length === 0) {
    layout.style.display = "none";
    if (emptyEl) emptyEl.style.display = "block";
    return;
  }
  if (emptyEl) emptyEl.style.display = "none";
  layout.style.display = "grid";

  listEl.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" loading="lazy" />
      <div class="cart-item-info">
        <div class="cart-item-cat">${item.category}</div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price-unit">₹${item.price} per item</div>
      </div>
      <div class="cart-item-controls">
        <div class="cart-item-total">₹${item.price * item.qty}</div>
        <div class="cart-item-qty">
          <button class="item-qty-btn" onclick="cartDecrement(${item.id})">−</button>
          <span class="item-qty-val">${item.qty}</span>
          <button class="item-qty-btn" onclick="cartIncrement(${item.id})">+</button>
        </div>
        <button class="remove-btn" onclick="cartRemove(${item.id})">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
          Remove
        </button>
      </div>
    </div>
  `).join("");

  updateSummary();
}

function cartIncrement(id) {
  const item = getCartItem(id);
  if (item) setQty(id, item.qty + 1);
  renderCartPage();
}
function cartDecrement(id) {
  const item = getCartItem(id);
  if (!item) return;
  if (item.qty === 1) {
    cartRemove(id);
  } else {
    setQty(id, item.qty - 1);
    renderCartPage();
  }
}
function cartRemove(id) {
  removeFromCart(id);
  showToast("Item removed from cart");
  renderCartPage();
}

function updateSummary() {
  const cart = getCart();
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const gst = Math.round(subtotal * 0.05);
  const deliveryFee = subtotal > 499 ? 0 : 40;
  const discountAmt = Math.round(subtotal * discountPct);
  const total = subtotal + gst + deliveryFee - discountAmt;

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set("subtotal", `₹${subtotal}`);
  set("gst", `₹${gst}`);
  set("delivery-fee", deliveryFee === 0 ? "FREE 🎉" : `₹${deliveryFee}`);
  set("discount-amount", `−₹${discountAmt}`);
  set("total-price", `₹${total}`);

  const discountRow = document.getElementById("discount-row");
  if (discountRow) discountRow.style.display = discountPct > 0 ? "flex" : "none";
}

// ─── COUPON ───────────────────────────────────────────────────
function setupCoupon() {
  const btn = document.getElementById("coupon-btn");
  const input = document.getElementById("coupon-input");
  const msg = document.getElementById("coupon-msg");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const code = input.value.trim().toUpperCase();
    if (COUPONS[code] !== undefined) {
      discountPct = COUPONS[code];
      appliedCoupon = code;
      msg.textContent = `✓ ${Math.round(discountPct * 100)}% discount applied!`;
      msg.className = "coupon-hint success";
      updateSummary();
    } else {
      msg.textContent = "✕ Invalid promo code. Try FEAST50, SAVE20, or FEASTLY";
      msg.className = "coupon-hint error";
    }
  });

  input.addEventListener("keydown", e => { if (e.key === "Enter") btn.click(); });
}

// ─── CHECKOUT MODAL ───────────────────────────────────────────
function setupCheckout() {
  const btn = document.getElementById("checkout-btn");
  const modal = document.getElementById("order-modal");
  const closeBtn = document.getElementById("modal-close");
  const orderIdEl = document.getElementById("order-id");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const cart = getCart();
    if (cart.length === 0) return;
    const orderId = Math.floor(100000 + Math.random() * 900000);
    if (orderIdEl) orderIdEl.textContent = orderId;
    if (modal) modal.style.display = "grid";
    clearCart();
    renderCartPage();
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      window.location.href = "index.html";
    });
  }
  if (modal) {
    modal.addEventListener("click", e => {
      if (e.target === modal) modal.style.display = "none";
    });
  }
}

// ─── CATEGORY FILTER ─────────────────────────────────────────
function setupCategories() {
  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.cat;
      renderFoods();
      // Scroll to menu
      const menu = document.getElementById("menu");
      if (menu) menu.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

// ─── SEARCH ───────────────────────────────────────────────────
function setupSearch() {
  const input = document.getElementById("search-input");
  const clearBtn = document.getElementById("search-clear");
  if (!input) return;

  let debounceTimer;
  input.addEventListener("input", () => {
    searchQuery = input.value;
    clearBtn.classList.toggle("visible", searchQuery.length > 0);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(renderFoods, 250);
  });

  clearBtn?.addEventListener("click", () => {
    input.value = "";
    searchQuery = "";
    clearBtn.classList.remove("visible");
    renderFoods();
    input.focus();
  });
}

// ─── SORT ────────────────────────────────────────────────────
function setupSort() {
  const sel = document.getElementById("sort-select");
  if (!sel) return;
  sel.addEventListener("change", () => {
    sortMode = sel.value;
    renderFoods();
  });
}

// ─── CLEAR CART BUTTON ────────────────────────────────────────
function setupClearCart() {
  const btn = document.getElementById("clear-cart-btn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    if (getCart().length === 0) return;
    if (confirm("Clear all items from your cart?")) {
      clearCart();
      showToast("Cart cleared");
      renderCartPage();
    }
  });
}

// ─── MOBILE MENU ─────────────────────────────────────────────
function setupMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (!btn) return;
  btn.addEventListener("click", () => menu.classList.toggle("open"));
}

// ─── INIT ────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  setupMobileMenu();

  if (!document.body.classList.contains("cart-page")) {
    // Home page
    renderFoods();
    setupCategories();
    setupSearch();
    setupSort();
  } else {
    // Cart page
    renderCartPage();
    setupCoupon();
    setupCheckout();
    setupClearCart();
  }
});
