/* ============================================================
   IAIS UAE — INDIVIDUAL SERVICE PAGE RENDERER
   Each route sets window.IAIS_SERVICE_SLUG in its index.html.
   ============================================================ */

(function () {
  const service = getIAISService(window.IAIS_SERVICE_SLUG);

  if (!service) {
    document.getElementById('servicePage').innerHTML = `
      <section class="page-hero">
        <div class="container">
          <h1>Service not found</h1>
          <p>Please return to the main services page.</p>
          <a href="services.html" class="btn btn-primary" style="margin-top:20px;">
            Browse Services
          </a>
        </div>
      </section>
    `;
    return;
  }

  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));

  const sameCategory = IAIS_SERVICES
    .filter(item => item.category === service.category && item.slug !== service.slug)
    .slice(0, 3);

  const categoryCount = IAIS_SERVICES
    .filter(item => item.category === service.category).length;

  document.getElementById('servicePage').innerHTML = `
    <section
      class="page-hero service-detail-hero"
      style="background-image:url('${esc(service.img)}');"
    >
      <div class="container">
        <div class="breadcrumb">
          <a href="index.html">Home</a> /
          <a href="services.html">Services</a> /
          ${esc(service.category)} /
          ${esc(service.title)}
        </div>

        <div class="eyebrow on-dark">${esc(service.category)}</div>

        <h1>${esc(service.title)}</h1>

        <p>${esc(service.short)}</p>

        <div class="page-hero-stats">
          <div>
            <b>${String(categoryCount).padStart(2, '0')}</b>
            <span>Services in Category</span>
          </div>
          <div>
            <b>UAE</b>
            <span>Primary Coverage</span>
          </div>
          <div>
            <b>GCC</b>
            <span>Regional Support</span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="deep-row service-detail-overview">
          <div class="deep-visual reveal">
            <img
              src="${esc(service.img)}"
              alt="${esc(service.title)}"
              loading="eager"
            >
            <span class="deep-tagnum">${esc(service.category)}</span>
          </div>

          <div class="deep-body reveal">
            <div class="deep-icon">${ic(service.icon)}</div>

            <div class="eyebrow">Service Overview</div>

            <h2 class="service-detail-title">
              ${esc(service.title)} capability for UAE & GCC projects
            </h2>

            <p>${esc(service.desc)}</p>

            <div class="deep-tags">
              ${(service.tags || []).map(tag =>
                `<span>${esc(tag)}</span>`
              ).join('')}
            </div>

            <ul class="deep-list">
              ${(service.points || []).map(point => `
                <li>${ic('check')}<span>${esc(point)}</span></li>
              `).join('')}
            </ul>

            <a
              href="contact.html?service=${encodeURIComponent(service.title)}#inquiryForm"
              class="btn btn-primary"
              style="margin-top:26px;"
            >
              Request This Service
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="alt-bg">
      <div class="container">
        <div class="section-head reveal">
          <div class="eyebrow">Typical Applications</div>
          <h2>Where this service is commonly used</h2>
          <p>
            Representative applications for project planning and service selection.
          </p>
        </div>

        <div class="service-applications-grid reveal-stagger">
          ${(service.applications || []).map((application, index) => `
            <div class="service-application-card">
              <span>${String(index + 1).padStart(2, '0')}</span>
              <h3>${esc(application)}</h3>
              <p>
                The final scope is confirmed against the asset condition,
                access and applicable project requirements.
              </p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="process-band">
      <div class="container">
        <div
          class="section-head center reveal"
          style="margin-left:auto;margin-right:auto;"
        >
          <div class="eyebrow on-dark">How We Work</div>
          <h2>Inspection Process</h2>
          <p>
            A controlled workflow from requirement review through final reporting.
          </p>
        </div>

        <div class="process-steps reveal-stagger" id="detailProcessSteps"></div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-head reveal">
          <div class="eyebrow">Related Services</div>
          <h2>More from ${esc(service.category)}</h2>
          <p>
            Explore related capabilities from the same IAIS UAE service group.
          </p>
        </div>

        <div class="services-grid reveal-stagger">
          ${sameCategory.map(item => `
            <div class="s-card">
              <div class="s-icon">${ic(item.icon)}</div>
              <h3>${esc(item.title)}</h3>
              <p>${esc(item.short)}</p>
              <a href="${esc(item.route)}" class="learn">
                Open service ${ic('arrow')}
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container cta-inner reveal">
        <div>
          <h2>Need ${esc(service.title)} support?</h2>
          <p>
            Share the asset, location and required scope with our engineering team.
          </p>
        </div>

        <div class="cta-actions">
          <a
            href="contact.html?service=${encodeURIComponent(service.title)}#inquiryForm"
            class="btn btn-gold"
          >
            Request a Quote
          </a>

          <a href="services.html" class="btn btn-outline">
            All Services
          </a>
        </div>
      </div>
    </section>
  `;

  document.getElementById('detailProcessSteps').innerHTML =
    PROCESS.map((process, index) => `
      <div class="p-step">
        <div class="circ">${String(index + 1).padStart(2, '0')}</div>
        <h4>${process.t}</h4>
        <p>${process.d}</p>
      </div>
    `).join('');

  // Fix navigation active state on nested /services/... routes.
  requestAnimationFrame(() => {
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href') || '';
      if (href.endsWith('services.html')) {
        link.classList.add('active');
      }
    });
  });

  // Observe dynamically generated reveal elements.
  const elements = document.querySelectorAll('#servicePage .reveal, #servicePage .reveal-stagger');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    elements.forEach(element => observer.observe(element));
  } else {
    elements.forEach(element => element.classList.add('in'));
  }
})();
