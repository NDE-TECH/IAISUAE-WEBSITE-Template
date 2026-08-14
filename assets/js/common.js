/* ============================================================
   SITE NAVIGATION MAP (10 routes)
   ============================================================ */
const NAV = [
  {href:'index.html', label:'Home'},
  {href:'about.html', label:'About'},
  {href:'services.html', label:'Services'},
  {href:'industries.html', label:'Industries'},
  {href:'projects.html', label:'Projects'},
  {href:'certifications.html', label:'Certifications'},
  {href:'clients.html', label:'Clients'},
  {href:'careers.html', label:'Careers'},
  {href:'news.html', label:'News & Insights'},
  {href:'contact.html', label:'Contact'},
];

function currentPage(){
  const p = window.location.pathname.split('/').pop();
  return p === '' ? 'index.html' : p;
}

function renderHeader(){
  const cur = currentPage();
  const el = document.getElementById('site-header');

  if(!el) return;

  el.outerHTML = `
  <header id="siteHeader">
    <div class="container nav-wrap">

      <a href="index.html"
         class="logo company-logo"
         aria-label="IAIS UAE Home">

        <img
          src="https://iaisindia.com/wp-content/uploads/2026/08/iaisuae.png"
          alt="IAIS India - IAIS UAE"
          class="header-logo-img"
        >

      </a>

      <nav class="nav-links">
        ${NAV.map(n =>
          `<a href="${n.href}"
              class="${n.href===cur?'active':''}">
              ${n.label}
           </a>`
        ).join('')}
      </nav>

      <div class="nav-actions">
        <a href="about.html" class="btn btn-outline">
          As has above
        </a>

        <a href="contact.html" class="btn btn-primary">
          Contact Us
        </a>
      </div>

      <button
        class="burger"
        id="burgerBtn"
        aria-label="Open menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>
  </header>

  <div class="mobile-nav" id="mobileNav">
    ${NAV.map(n =>
      `<a href="${n.href}">${n.label}</a>`
    ).join('')}

    <a href="contact.html" class="btn btn-gold">
      Get a Quote
    </a>
  </div>`;
}

function renderFooter(){
  const el = document.getElementById('site-footer');
  if(!el) return;
  el.outerHTML = `
  <footer>
    <div class="container">
      <a href="https://iaisindia.com" target="_blank" rel="noopener" class="footer-top-note">
        ${ic('external')} Part of the IAIS Group — visit our India operations at <a href="https://iaisindia.com" target="_blank" rel="noopener">iaisindia.com</a>
      </a>
      <div class="footer-grid">
        <div class="footer-brand">
         <a href="index.html" class="logo company-logo" aria-label="IAIS UAE Home">
  <img
    src="https://iaisindia.com/wp-content/uploads/2026/08/iaisuae.png"
    alt="IAIS India - IAIS UAE"
    class="header-logo-img"
  >
</a>
          <p>Industrial inspection, NDT and asset integrity services across the UAE and GCC — precision engineering for critical infrastructure, backed by the IAIS Group.</p>
          <div class="footer-social">
            <a href="#" aria-label="LinkedIn">${ic('users')}</a>
            <a href="#" aria-label="Website">${ic('globe')}</a>
            <a href="mailto:info@iaisuae.com" aria-label="Email">${ic('mail')}</a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="services.html">NDT Inspection</a></li>
            <li><a href="services.html">Rope Access</a></li>
            <li><a href="services.html">Drone Inspection</a></li>
            <li><a href="services.html">Asset Integrity</a></li>
            <li><a href="services.html">Metallurgical Services</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="about.html">About IAIS UAE</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="certifications.html">Certifications</a></li>
            <li><a href="careers.html">Careers</a></li>
            <li><a href="news.html">News &amp; Insights</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>UAE Office</h5>
          <ul>
            <li><a href="contact.html">Musaffah Industrial Area, Abu Dhabi</a></li>
            <li><a href="tel:+91 9384127579">+91 93841 27579</a></li>
            <li><a href="mailto:info@iaisuae.com">i@iaisindia.com
</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>India Office</h5>
          <ul>
            <li><a href="contact.html">IAIS India — see Contact page</a></li>
            <li><a href="tel:+919384127579">+91 93841 27579</a></li>
            <li><a href="mailto:i@iaisindia.com">i@iaisindia.com</a></li>
            <li><a href="https://iaisindia.com" target="_blank" rel="noopener">iaisindia.com &rarr;</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; <span id="year"></span> IAIS UAE. All rights reserved. Part of the IAIS Group.</span>
        <div class="legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="contact.html">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
  <a href="https://wa.me/+919384127579" target="_blank" rel="noopener" class="whatsapp-float" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.16L2 22l5.09-1.53a9.87 9.87 0 0 0 4.95 1.33h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.09c-.24.68-1.2 1.24-1.96 1.4-.52.11-1.2.2-3.48-.75-2.92-1.21-4.8-4.17-4.95-4.36-.14-.19-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.24-.27.55-.35.73-.35.19 0 .38.002.55.01.18.008.42-.07.65.5.24.58.82 2.01.9 2.16.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.12.99 2.06 1.3 2.35 1.45.29.15.46.13.63-.05.17-.19.72-.84.91-1.13.19-.29.38-.24.63-.14.26.1 1.64.77 1.92.91.29.14.48.21.55.33.07.12.07.7-.17 1.38Z"/></svg>
  </a>
  <button class="to-top" id="toTopBtn" aria-label="Back to top">
    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
  </button>`;
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
}

function initChrome(){
  renderHeader();
  renderFooter();

  const header = document.getElementById('siteHeader');
  const toTopBtn = document.getElementById('toTopBtn');
  window.addEventListener('scroll', () => {
    if(header) header.classList.toggle('scrolled', window.scrollY > 40);
    if(toTopBtn) toTopBtn.classList.toggle('show', window.scrollY > 600);
  });
  if(toTopBtn) toTopBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  const burger = document.getElementById('burgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  if(burger && mobileNav){
    burger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.classList.remove('menu-open');
    }));
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});
  revealEls.forEach(el => io.observe(el));

  // Counters
  function animateCount(el){
    const target = parseInt(el.dataset.count, 10);
    const duration = 1600;
    const start = performance.now();
    function frame(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(eased * target);
      el.childNodes[0].nodeValue = val;
      if(progress < 1) requestAnimationFrame(frame);
      else el.childNodes[0].nodeValue = target;
    }
    requestAnimationFrame(frame);
  }
  const counterEls = document.querySelectorAll('[data-count]');
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        animateCount(entry.target);
        cio.unobserve(entry.target);
      }
    });
  }, {threshold:0.4});
  counterEls.forEach(el => cio.observe(el));
}

/* Generic contact/inquiry form success handler */
function wireForm(formId, fieldsId, successId){
  const form = document.getElementById(formId);
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById(fieldsId).style.display = 'none';
    document.getElementById(successId).classList.add('show');
  });
}

/* FAQ accordion */
function wireFaq(containerId){
  const wrap = document.getElementById(containerId);
  if(!wrap) return;
  wrap.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      wrap.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if(!wasOpen) item.classList.add('open');
    });
  });
}

document.addEventListener('DOMContentLoaded', initChrome);

const SERVICE_DETAIL_PAGES = [
  'ndt-inspection.html',
  'rope-access.html',
  'drone-inspection.html',
  'pwht.html',
  'heat-treatment.html',
  'asset-integrity.html',
  'corrosion-monitoring.html',
  'mechanical-testing.html',
  'metallurgical-services.html'
];

const INDUSTRY_DETAIL_PAGES = [
  'oil-gas.html',
  'petrochemical.html',
  'marine.html',
  'offshore.html',
  'power-plants.html',
  'construction.html',
  'manufacturing.html',
  'renewable-energy.html'
];

function currentPage() {
  const cleanPath = window.location.pathname.replace(/\/+$/, '');
  const page = cleanPath.split('/').pop();

  return page || 'index.html';
}

function activeNavPage() {
  const path = window.location.pathname;
  const page = currentPage();

  // Nested service pages
  if (/\/services\//.test(path)) {
    return 'services.html';
  }

  // Individual service pages
  if (SERVICE_DETAIL_PAGES.includes(page)) {
    return 'services.html';
  }

  // Individual industry pages
  if (INDUSTRY_DETAIL_PAGES.includes(page)) {
    return 'industries.html';
  }

  return page;
}
