/**
 * Istana Degan / Udien Barang Antique - Interactive Application Logic
 * Vanilla JavaScript (Murni)
 */

document.addEventListener('DOMContentLoaded', () => {
  // State Management
  let currentCategory = 'all';
  let currentSearchQuery = '';
  let activeModalItem = null;

  // DOM Elements
  const galleryGrid = document.getElementById('galleryGrid');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const resultCountEl = document.getElementById('resultCount');
  const emptyStateEl = document.getElementById('emptyState');
  const isCatalogPage = document.body.classList.contains('catalog-page');

  filterTabs.forEach(tab => {
    const category = tab.dataset.category;
    tab.hidden = category !== 'all' && !ANTIQUE_COLLECTIONS.some(item => item.category === category);
  });
  
  // Modal Elements
  const itemModal = document.getElementById('itemModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalCode = document.getElementById('modalCode');
  const modalEra = document.getElementById('modalEra');
  const modalDimension = document.getElementById('modalDimension');
  const modalCondition = document.getElementById('modalCondition');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const modalHighlights = document.getElementById('modalHighlights');
  const modalWaBtn = document.getElementById('modalWaBtn');
  
  // Navigation & Toast Elements
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mainNav = document.getElementById('mainNav');
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  // Copy Buttons
  const copyRekBcaBtns = document.querySelectorAll('.btn-copy-rek');
  const copyWaBtns = document.querySelectorAll('.btn-copy-wa');

  /**
   * Render Gallery Items based on category & search filter
   */
  function renderGallery() {
    if (!galleryGrid) return;

    const filtered = ANTIQUE_COLLECTIONS.filter(item => {
      const matchCategory = (currentCategory === 'all') || (item.category === currentCategory);
      const query = currentSearchQuery.toLowerCase().trim();
      const matchSearch = !query || 
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query) ||
        item.era.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query);
      
      return matchCategory && matchSearch;
    });

    const visibleItems = isCatalogPage ? filtered : filtered.slice(0, 9);

    // Update Result Counter
    if (resultCountEl) {
      resultCountEl.textContent = isCatalogPage
        ? `Menampilkan ${filtered.length} koleksi`
        : `Menampilkan ${visibleItems.length} koleksi pilihan`;
    }

    // Toggle Empty State
    if (filtered.length === 0) {
      galleryGrid.innerHTML = '';
      if (emptyStateEl) emptyStateEl.classList.remove('hidden');
      return;
    } else {
      if (emptyStateEl) emptyStateEl.classList.add('hidden');
    }

    // Build Cards HTML
    const cardsHtml = visibleItems.map(item => {
      return `
        <article class="antique-card" data-id="${item.id}">
          <div class="card-media">
            <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" />
            <div class="card-overlay">
              <button class="btn-inspect" onclick="window.openDetailModal('${item.id}')" aria-label="Tinjau Detail ${escapeHtml(item.title)}">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                <span>Lihat Detail</span>
              </button>
            </div>
            <span class="card-category-pill">${item.categoryLabel}</span>
          </div>

          <div class="card-body">
            <div class="card-meta">
              <span class="card-id">${item.id}</span>
              <span class="card-era">${item.era}</span>
            </div>
            <h3 class="card-title" onclick="window.openDetailModal('${item.id}')" title="${escapeHtml(item.title)}">
              ${escapeHtml(item.title)}
            </h3>
            <p class="card-desc">${truncateText(item.description, 85)}</p>

            <div class="card-footer">
              <div class="card-price-wrap">
                <span class="price-label">Informasi Harga:</span>
                <span class="price-value">${item.price}</span>
              </div>
              <div class="card-actions">
                <button class="btn-card-detail" onclick="window.openDetailModal('${item.id}')" title="Lihat Spesifikasi">
                  Info
                </button>
                <a href="${createWhatsAppLink(item)}" target="_blank" rel="noopener noreferrer" class="btn-card-wa" title="Tanya ketersediaan item via WhatsApp Pak Tahrudin">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Tanya</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    galleryGrid.innerHTML = cardsHtml;
  }

  /**
   * Helper: Generate WhatsApp inquiry link with pre-filled item info
   */
  function createWhatsAppLink(item) {
    const text = `Halo Pak Tahrudin & Galeri Istana Degan, saya tertarik dengan koleksi antik:\n\n*${item.title}*\nKode: ${item.id}\nKategori: ${item.categoryLabel}\nEra: ${item.era}\n\nApakah barang ini masih tersedia dan boleh saya dapatkan info detail beserta harganya? Terima kasih.`;
    return `https://wa.me/${STORE_PROFILE.waNumberClean}?text=${encodeURIComponent(text)}`;
  }

  /**
   * Open Item Detail Modal
   */
  window.openDetailModal = function(itemId) {
    const item = ANTIQUE_COLLECTIONS.find(c => c.id === itemId);
    if (!item) return;

    activeModalItem = item;

    if (modalImg) {
      modalImg.src = item.image;
      modalImg.alt = item.title;
    }
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalCode) modalCode.textContent = item.id;
    if (modalEra) modalEra.textContent = item.era;
    if (modalDimension) modalDimension.textContent = item.dimension;
    if (modalCondition) modalCondition.textContent = item.condition;
    if (modalPrice) modalPrice.textContent = item.price;
    if (modalDesc) modalDesc.textContent = item.description;

    if (modalHighlights) {
      modalHighlights.innerHTML = item.highlights.map(h => `
        <li>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${escapeHtml(h)}</span>
        </li>
      `).join('');
    }

    if (modalWaBtn) {
      modalWaBtn.href = createWhatsAppLink(item);
    }

    if (itemModal) {
      itemModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  /**
   * Close Detail Modal
   */
  function closeModal() {
    if (itemModal) {
      itemModal.classList.remove('active');
      document.body.style.overflow = '';
      activeModalItem = null;
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && itemModal && itemModal.classList.contains('active')) {
      closeModal();
    }
  });

  /**
   * Category Filter Tabs Listener
   */
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-category');
      renderGallery();
    });
  });

  /**
   * Live Search Listener
   */
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      if (clearSearchBtn) {
        if (currentSearchQuery.length > 0) {
          clearSearchBtn.classList.remove('hidden');
        } else {
          clearSearchBtn.classList.add('hidden');
        }
      }
      renderGallery();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        currentSearchQuery = '';
        clearSearchBtn.classList.add('hidden');
        renderGallery();
        searchInput.focus();
      }
    });
  }

  /**
   * Toast Notification Helper
   */
  let toastTimeout = null;
  function showToast(msg) {
    if (!toastNotification || !toastMessage) return;
    toastMessage.textContent = msg;
    toastNotification.classList.add('active');
    
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastNotification.classList.remove('active');
    }, 3800);
  }

  /**
   * Copy Bank Account Number & Notes
   */
  copyRekBcaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = STORE_PROFILE.bankAccount;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("✓ Nama pemilik rekening berhasil disalin!");
      }).catch(() => {
        showToast(`Nama pemilik rekening: ${textToCopy}`);
      });
    });
  });

  /**
   * Copy Official WhatsApp
   */
  copyWaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const phone = STORE_PROFILE.phone;
      navigator.clipboard.writeText(phone).then(() => {
        showToast(`✓ Nomor WhatsApp resmi (${phone}) berhasil disalin!`);
      }).catch(() => {
        showToast(`✓ WhatsApp: ${phone}`);
      });
    });
  });

  /**
   * Mobile Menu Navigation Toggle
   */
  if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('active');
      mobileNavToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu upon navigation link click
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileNavToggle.setAttribute('aria-expanded', false);
      });
    });
  }

  /**
   * Sticky Header Shadow on Scroll
   */
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (!siteHeader) return;
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // Initial Gallery Render
  renderGallery();
});

/**
 * Utility: HTML Escape
 */
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Utility: Text Truncator
 */
function truncateText(str, maxLength) {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength).trim() + '...';
}
