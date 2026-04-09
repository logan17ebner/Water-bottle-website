// =========================================
// HYDROFLOW - Water Bottle Website JS
// =========================================

// Product Data
const products = [
  {
    id: 1,
    name: "HydroFlow Classic",
    category: "insulated",
    price: 34.99,
    oldPrice: 44.99,
    desc: "The original. Double-wall insulation keeps drinks cold 24h, hot 12h.",
    colors: ["#3b82f6", "#10b981", "#8b5cf6"],
    badge: "Sale",
    bgColor: "#eff6ff",
    svgColor: "#3b82f6",
    svgLight: "#93c5fd",
  },
  {
    id: 2,
    name: "HydroFlow Pro",
    category: "insulated",
    price: 49.99,
    oldPrice: null,
    desc: "Premium triple-wall insulation with ThermoLock tech. Our best performer.",
    colors: ["#10b981", "#0ea5e9", "#f59e0b"],
    badge: "Best Seller",
    bgColor: "#f0fdf4",
    svgColor: "#10b981",
    svgLight: "#6ee7b7",
  },
  {
    id: 3,
    name: "HydroFlow Sport",
    category: "sport",
    price: 29.99,
    oldPrice: null,
    desc: "Wide-mouth design with flip-top lid. Built for your toughest workouts.",
    colors: ["#f59e0b", "#ef4444", "#0ea5e9"],
    badge: null,
    bgColor: "#fffbeb",
    svgColor: "#f59e0b",
    svgLight: "#fcd34d",
  },
  {
    id: 4,
    name: "HydroFlow Slim",
    category: "sport",
    price: 27.99,
    oldPrice: null,
    desc: "Sleek, slim design fits any cup holder. Perfect for commuters.",
    colors: ["#ef4444", "#ec4899", "#f97316"],
    badge: "New",
    bgColor: "#fff1f2",
    svgColor: "#ef4444",
    svgLight: "#fca5a5",
  },
  {
    id: 5,
    name: "HydroFlow Eco",
    category: "eco",
    price: 39.99,
    oldPrice: null,
    desc: "Made from 100% recycled ocean plastic. Save the planet, sip by sip.",
    colors: ["#059669", "#84cc16", "#0ea5e9"],
    badge: null,
    bgColor: "#f0fdf4",
    svgColor: "#059669",
    svgLight: "#6ee7b7",
  },
  {
    id: 6,
    name: "HydroFlow Kids",
    category: "kids",
    price: 22.99,
    oldPrice: null,
    desc: "Drop-proof, spill-proof, and fun! Perfect size for little hands.",
    colors: ["#ec4899", "#a855f7", "#f59e0b"],
    badge: "New",
    bgColor: "#fdf4ff",
    svgColor: "#ec4899",
    svgLight: "#f9a8d4",
  },
  {
    id: 7,
    name: "HydroFlow Gallon",
    category: "sport",
    price: 44.99,
    oldPrice: null,
    desc: "Half-gallon capacity for serious hydrators and gym warriors.",
    colors: ["#0ea5e9", "#6366f1", "#10b981"],
    badge: null,
    bgColor: "#eff6ff",
    svgColor: "#6366f1",
    svgLight: "#a5b4fc",
  },
  {
    id: 8,
    name: "HydroFlow Bamboo",
    category: "eco",
    price: 42.99,
    oldPrice: 54.99,
    desc: "Stainless steel core with a sustainable bamboo exterior. Naturally beautiful.",
    colors: ["#78350f", "#92400e", "#d97706"],
    badge: "Sale",
    bgColor: "#fefce8",
    svgColor: "#92400e",
    svgLight: "#d97706",
  },
];

// Render a single product SVG bottle shape
function bottleSVG(svgColor, svgLight) {
  return `
    <svg viewBox="0 0 80 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="5" width="30" height="12" rx="4" fill="${svgColor}" opacity="0.85"/>
      <path d="M18 20 Q15 30 15 50 L15 170 Q15 185 40 185 Q65 185 65 170 L65 50 Q65 30 62 20 Z" fill="${svgColor}"/>
      <path d="M20 20 Q18 30 18 50 L18 170 Q18 182 40 182 Q62 182 62 170 L62 50 Q62 30 60 20 Z" fill="${svgLight}" opacity="0.35"/>
      <text x="40" y="108" text-anchor="middle" fill="white" font-size="7.5" font-weight="bold" font-family="Inter, sans-serif">HYDRO</text>
      <text x="40" y="120" text-anchor="middle" fill="white" font-size="7.5" font-weight="bold" font-family="Inter, sans-serif">FLOW</text>
    </svg>
  `;
}

// Render products
function renderProducts(filter) {
  const grid = document.getElementById("products-grid");
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(product => `
    <div class="product-item" data-category="${product.category}">
      ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
      <div class="product-item-img" style="background:${product.bgColor}">
        ${bottleSVG(product.svgColor, product.svgLight)}
      </div>
      <div class="product-item-body">
        <div class="product-tag">${product.category.toUpperCase()}</div>
        <h3>${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <div style="display:flex;gap:8px;margin-bottom:16px;">
          ${product.colors.map(c => `<span style="width:16px;height:16px;border-radius:50%;background:${c};border:2px solid white;box-shadow:0 0 0 1.5px #cbd5e1;display:inline-block;"></span>`).join("")}
        </div>
        <div class="product-footer">
          <div class="product-price">
            $${product.price.toFixed(2)}
            ${product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : ""}
          </div>
          <button class="add-to-cart" onclick="addToCart('${product.name}')">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join("");
}

// Add to cart animation
function addToCart(name) {
  const toast = document.getElementById("cart-toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

// Filter buttons
function initFilters() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(btn.dataset.filter);
    });
  });
}

// Navbar scroll behavior
function initNavbar() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });
}

// Hamburger menu
function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// Scroll animations (Intersection Observer)
function initScrollAnimations() {
  const targets = document.querySelectorAll(
    ".feature-card, .product-item, .testimonial-card, .promise-item"
  );

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "0";
        entry.target.style.transform = "translateY(20px)";
        requestAnimationFrame(() => {
          entry.target.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  targets.forEach(el => {
    el.style.opacity = "0";
    observer.observe(el);
  });
}

// Contact form
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    btn.textContent = "Sending...";
    btn.disabled = true;

    // Simulate a send delay
    setTimeout(() => {
      form.innerHTML = `
        <div class="form-success">
          <div style="font-size:48px;margin-bottom:16px;">✉️</div>
          <h3>Message Sent!</h3>
          <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
        </div>
      `;
    }, 1200);
  });
}

// Smooth scroll for nav links
function initSmoothScroll() {
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      if (href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

// Init all
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("all");
  initFilters();
  initNavbar();
  initHamburger();
  initContactForm();
  initSmoothScroll();
  // Delay scroll animations so initial render isn't blocked
  setTimeout(initScrollAnimations, 300);
});
