/* ============================================================
   IAIS UAE — SERVICES MAIN PAGE
   Uses IAIS_SERVICES from services-data.js
   ============================================================ */

const servicesGrid = document.getElementById('servicesGrid');
const deepDives = document.getElementById('deepDives');
const categoryTabs = document.getElementById('serviceCategoryTabs');
const serviceSearch = document.getElementById('serviceSearch');
const serviceResultCount = document.getElementById('serviceResultCount');

let selectedCategory = SERVICE_CATEGORIES[0]?.name || 'All';
let searchTerm = '';

function escapeServiceHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
}

function renderCategoryCards() {
  servicesGrid.innerHTML = SERVICE_CATEGORIES.map(category => `
    <button
      type="button"
      class="s-card service-category-card"
      data-category="${escapeServiceHtml(category.name)}"
      aria-label="Show ${escapeServiceHtml(category.name)} services"
    >
      <div class="s-icon">${ic(category.icon)}</div>
      <h3>${escapeServiceHtml(category.name)}</h3>
      <p>${escapeServiceHtml(category.description)}</p>
      <span class="learn">${category.count} services ${ic('arrow')}</span>
    </button>
  `).join('');

  servicesGrid.querySelectorAll('.service-category-card').forEach(card => {
    card.addEventListener('click', () => {
      selectedCategory = card.dataset.category;
      searchTerm = '';
      serviceSearch.value = '';
      syncTabs();
      renderServices();
      document.getElementById('serviceBrowser').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}

function renderTabs() {
  const tabs = ['All', ...SERVICE_CATEGORIES.map(category => category.name)];

  categoryTabs.innerHTML = tabs.map(category => `
    <button
      type="button"
      class="p-tab ${category === selectedCategory ? 'active' : ''}"
      data-category="${escapeServiceHtml(category)}"
    >
      ${escapeServiceHtml(category)}
    </button>
  `).join('');

  categoryTabs.querySelectorAll('.p-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      selectedCategory = tab.dataset.category;
      syncTabs();
      renderServices();
    });
  });
}

function syncTabs() {
  categoryTabs.querySelectorAll('.p-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.category === selectedCategory);
  });
}

function filteredServices() {
  let list = selectedCategory === 'All'
    ? [...IAIS_SERVICES]
    : IAIS_SERVICES.filter(service => service.category === selectedCategory);

  if (searchTerm) {
    const q = searchTerm.toLowerCase();
    list = list.filter(service => [
      service.title,
      service.category,
      service.short,
      service.desc,
      ...(service.tags || []),
      ...(service.points || [])
    ].join(' ').toLowerCase().includes(q));
  }

  return list;
}

function renderServices() {
  const list = filteredServices();

  serviceResultCount.textContent =
    `${list.length} service${list.length === 1 ? '' : 's'} shown`;

  if (!list.length) {
    deepDives.innerHTML = `
      <div class="service-empty-state">
        <h3>No matching service found</h3>
        <p>Try another search term or select a different service category.</p>
      </div>
    `;
    return;
  }

  deepDives.innerHTML = list.map((service, index) => `
    <article
      class="deep-row ${index % 2 ? 'rev' : ''}"
      id="${escapeServiceHtml(service.slug)}"
    >
      <div class="deep-visual reveal">
        <img
          src="${escapeServiceHtml(service.img)}"
          alt="${escapeServiceHtml(service.title)}"
          loading="lazy"
        >
        <span class="deep-tagnum">
          SERVICE ${String(index + 1).padStart(2, '0')} / ${String(list.length).padStart(2, '0')}
        </span>
      </div>

      <div class="deep-body reveal">
        <div class="service-category-label">
          ${escapeServiceHtml(service.category)}
        </div>

        <div class="deep-icon">${ic(service.icon)}</div>

        <h3>${escapeServiceHtml(service.title)}</h3>

        <p>${escapeServiceHtml(service.desc)}</p>

        <div class="deep-tags">
          ${(service.tags || []).map(tag =>
            `<span>${escapeServiceHtml(tag)}</span>`
          ).join('')}
        </div>

        <ul class="deep-list">
          ${(service.points || []).map(point => `
            <li>
              ${ic('check')}
              <span>${escapeServiceHtml(point)}</span>
            </li>
          `).join('')}
        </ul>

        <a
          href="${escapeServiceHtml(service.route)}"
          class="btn btn-dark"
          style="margin-top:24px;"
        >
          Open ${escapeServiceHtml(service.title)} Page
        </a>
      </div>
    </article>
  `).join('');

  // common.js only observes reveal elements that existed when it initialized.
  // Observe the dynamically rendered rows here too.
  const newRevealElements = deepDives.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    newRevealElements.forEach(element => observer.observe(element));
  } else {
    newRevealElements.forEach(element => element.classList.add('in'));
  }
}

serviceSearch.addEventListener('input', event => {
  searchTerm = event.target.value.trim();
  renderServices();
});

renderCategoryCards();
renderTabs();
renderServices();

document.getElementById('processSteps').innerHTML = PROCESS.map((process, index) => `
  <div class="p-step">
    <div class="circ">${String(index + 1).padStart(2, '0')}</div>
    <h4>${process.t}</h4>
    <p>${process.d}</p>
  </div>
`).join('');
