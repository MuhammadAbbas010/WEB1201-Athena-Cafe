/**
 * catalogue.js – Athena Greek Coffee House
 * Author: Member 2
 * Description: Filter, sort, search – all work simultaneously, no page reload.
 */

const menuItems = [
  { id:1,  name:"Greek Coffee",      category:"hot",     categoryLabel:"Hot Drink",  price:3.50, description:"Slow-brewed in a traditional copper briki, served with rich kaimaki foam and a glass of cold water.", image:"assets/images/greek-coffee.jpg",       alt:"Traditional Greek coffee in a white porcelain cup with rich kaimaki foam" },
  { id:2,  name:"Cappuccino",        category:"hot",     categoryLabel:"Hot Drink",  price:4.50, description:"Velvety steamed milk and espresso topped with a cloud of microfoam, finished with a latte art leaf.", image:"assets/images/cappuccino.jpg",          alt:"Cappuccino in a dark mug with latte art leaf on a vintage table" },
  { id:3,  name:"Metaxa Coffee",     category:"hot",     categoryLabel:"Hot Drink",  price:7.50, description:"A warming blend of Greek coffee and aged Metaxa brandy — a house speciality served in a coupe glass.", image:"assets/images/metaxa.webp",            alt:"Metaxa coffee cocktail in an elegant coupe glass with coffee beans on top" },

  // Espresso – updated image to use its own dedicated photo instead of reusing greek-coffee.jpg
  { id:4,  name:"Espresso",          category:"hot",     categoryLabel:"Hot Drink",  price:3.00, description:"A bold single shot of freshly ground espresso, smooth and intense — served short.", image:"assets/images/espresso.jpg",           alt:"Short espresso in a white cup" },

  { id:5,  name:"Freddo Espresso",   category:"cold",    categoryLabel:"Cold Drink", price:4.00, description:"Double espresso shaken over ice until chilled and frothy — the Greek summer staple.", image:"assets/images/freddo-espresso.jpg",    alt:"Freddo espresso in a tall glass with ice, casting dramatic shadows in sunlight" },
  { id:6,  name:"Freddo Cappuccino", category:"cold",    categoryLabel:"Cold Drink", price:5.00, description:"Iced espresso topped with cold frothed milk and a dusting of cinnamon, light and refreshing.", image:"assets/images/freddo-cappuccino.webp", alt:"Freddo cappuccino with layered espresso and cold milk foam with a blue striped straw" },
  { id:7,  name:"Cold Brew",         category:"cold",    categoryLabel:"Cold Drink", price:5.50, description:"Steeped for 12 hours at low temperature for a smooth, mellow flavour with a swirl of cream.", image:"assets/images/coldbrew.jpg",           alt:"Cold brew coffee in a glass with cream swirling through dark coffee over ice" },
  { id:8,  name:"Greek Lemonade",    category:"cold",    categoryLabel:"Cold Drink", price:4.00, description:"Freshly squeezed lemons, a hint of thyme honey, sparkling water, and fresh mint.", image:"assets/images/lemonade.jpg",           alt:"Fresh Greek lemonade with lemon slices splashing into a tall glass with mint leaves" },
  { id:9,  name:"Baklava",           category:"dessert", categoryLabel:"Dessert",    price:5.50, description:"Layers of crisp filo, crushed pistachios, and cinnamon, drenched in honey syrup.", image:"assets/images/baklava.jpg",            alt:"A single piece of baklava topped with crushed pistachio on a dark serving plate" },
  { id:10, name:"Loukoumades",       category:"dessert", categoryLabel:"Dessert",    price:6.50, description:"Golden honey doughnuts glazed with caramel and dusted with cocoa — a modern Greek classic.", image:"assets/images/loukoumades.jpg",        alt:"Three loukoumades covered in caramel glaze and cocoa on a crackled ceramic plate" },
  { id:11, name:"Tiropita",          category:"food",    categoryLabel:"Food",       price:5.00, description:"Flaky puff pastry filled with a creamy blend of feta and ricotta cheese, baked golden.", image:"assets/images/tiropita.jpg",           alt:"Golden tiropita cheese pastry with black sesame seeds on a slate board" },
  { id:12, name:"Spanakopita",       category:"food",    categoryLabel:"Food",       price:5.50, description:"Traditional spinach and feta rolls wrapped in golden, buttered filo pastry.", image:"assets/images/spanakopita.jpg",        alt:"Three golden spanakopita filo rolls on a white ceramic plate in warm light" }
];

/* ── State ── */
let currentFilter = "all";
let currentSort   = "default";
let currentSearch = "";

/* ── Render ── */
function renderCatalogue() {
  const grid       = document.getElementById("catalogue-grid");
  const emptyState = document.getElementById("empty-state");
  const countEl    = document.getElementById("count-number");

  let filtered = menuItems.filter(item =>
    currentFilter === "all" ? true : item.category === currentFilter
  );

  if (currentSearch.trim() !== "") {
    const kw = currentSearch.toLowerCase();
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(kw) ||
      item.description.toLowerCase().includes(kw) ||
      item.categoryLabel.toLowerCase().includes(kw)
    );
  }

  filtered = sortItems(filtered, currentSort);
  countEl.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.hidden = false;
  } else {
    emptyState.hidden = true;
    grid.innerHTML = filtered.map((item, i) => buildCard(item, i)).join("");
  }
}

/**
 * Sorts items by the selected option.
 * @param {Array} items
 * @param {string} sortValue
 * @returns {Array}
 */
function sortItems(items, sortValue) {
  const s = [...items];
  switch (sortValue) {
    case "name-asc":   return s.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":  return s.sort((a, b) => b.name.localeCompare(a.name));
    case "price-asc":  return s.sort((a, b) => a.price - b.price);
    case "price-desc": return s.sort((a, b) => b.price - a.price);
    default:           return s;
  }
}

/**
 * Builds a single card HTML string.
 * @param {Object} item
 * @param {number} index
 * @returns {string}
 */
function buildCard(item, index) {
  const price = item.price.toFixed(2);
  const delay = (index * 0.06).toFixed(2);
  return `
    <article class="menu-card" style="animation-delay:${delay}s" data-category="${item.category}" aria-label="${item.name}, ${item.categoryLabel}, €${price}">
      <div class="card-visual">
        <img src="${item.image}" alt="${item.alt}" class="card-photo" loading="lazy">
        <span class="card-badge">${item.categoryLabel}</span>
      </div>
      <div class="card-body">
        <h2 class="card-name">${item.name}</h2>
        <p class="card-desc">${item.description}</p>
        <div class="card-footer">
          <span class="card-price">€${price}</span>
          <span class="card-tag">${item.categoryLabel}</span>
        </div>
      </div>
    </article>`;
}

/* ── Event Listeners ── */
function initEventListeners() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  /* Filter buttons */
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-pressed","false"); });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed","true");
      currentFilter = btn.dataset.filter;
      renderCatalogue();
    });
  });

  /* Sort */
  document.getElementById("menu-sort").addEventListener("change", e => {
    currentSort = e.target.value;
    renderCatalogue();
  });

  /* Search – debounced */
  let debounce;
  document.getElementById("menu-search").addEventListener("input", e => {
    clearTimeout(debounce);
    debounce = setTimeout(() => { currentSearch = e.target.value; renderCatalogue(); }, 250);
  });

  /* Reset button */
  document.getElementById("reset-btn").addEventListener("click", () => {
    currentFilter = "all"; currentSort = "default"; currentSearch = "";
    document.getElementById("menu-search").value = "";
    document.getElementById("menu-sort").value = "default";
    filterButtons.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-pressed","false"); });
    document.querySelector('[data-filter="all"]').classList.add("active");
    document.querySelector('[data-filter="all"]').setAttribute("aria-pressed","true");
    renderCatalogue();
  });
}

/* ── Init ── */
document.addEventListener("DOMContentLoaded", () => {
  renderCatalogue();
  initEventListeners();
});