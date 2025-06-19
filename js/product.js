// Laptop Store Management System with Enhanced Search
class LaptopStore {
  constructor() {
    this.laptops = [
      {
        id: 1,
        name: "HP Pavilion Gaming",
        specs: "AMD Ryzen 5 • RTX 3050 • 16GB RAM",
        price: 65000,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
        brand: "hp",
        os: "windows",
        budget: "50k-75k",
      },
      {
        id: 2,
        name: "ASUS ROG Strix",
        specs: "Intel i7 • RTX 3060 • 16GB RAM",
        price: 95000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
        brand: "asus",
        os: "windows",
        budget: "75k+",
      },
      {
        id: 3,
        name: "Dell XPS 13",
        specs: "Intel i5 • Iris Xe • 8GB RAM",
        price: 85000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
        brand: "dell",
        os: "windows",
        budget: "75k+",
      },
      {
        id: 4,
        name: "MacBook Air M1",
        specs: "Apple M1 • 8GB RAM • 256GB SSD",
        price: 92000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        brand: "apple",
        os: "macos",
        budget: "75k+",
      },
      {
        id: 5,
        name: "HP 15s",
        specs: "Intel i3 • 8GB RAM • 256GB SSD",
        price: 35000,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
        brand: "hp",
        os: "windows",
        budget: "30k-50k",
      },
      {
        id: 6,
        name: "ASUS VivoBook",
        specs: "AMD Ryzen 3 • 8GB RAM • 256GB SSD",
        price: 32000,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1484662020986-75935d2ebc66?w=400&h=300&fit=crop",
        brand: "asus",
        os: "windows",
        budget: "30k-50k",
      },
      {
        id: 7,
        name: "Lenovo ThinkPad",
        specs: "Intel i5 • 16GB RAM • 512GB SSD",
        price: 78000,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
        brand: "lenovo",
        os: "windows",
        budget: "75k+",
      },
      {
        id: 8,
        name: "Acer Aspire 5",
        specs: "AMD Ryzen 5 • 8GB RAM • 512GB SSD",
        price: 45000,
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
        brand: "acer",
        os: "windows",
        budget: "30k-50k",
      },
    ];

    this.filteredLaptops = [...this.laptops];
    this.currentFilters = {
      brands: [],
      os: [],
      budget: [],
      minPrice: null,
      maxPrice: null,
      searchQuery: '',
    };

    this.elements = {};
    this.searchCache = new Map(); // Cache for search results
    this.searchDebounceTimeout = null;
    this.init();
  }

  // Initialize the store
  init() {
    this.cacheElements();
    this.generateFilterOptions();
    this.setupEventListeners();
    this.setupSearchFunctionality();
    this.displayProducts();
    this.updateResultsCount();
  }

  // Cache DOM elements
  cacheElements() {
    this.elements = {
      productsGrid: document.getElementById('productsGrid'),
      resultsCount: document.getElementById('resultsCount'),
      sortOptions: document.getElementById('sortOptions'),
      minPrice: document.getElementById('minPrice'),
      maxPrice: document.getElementById('maxPrice'),
      filtersPanel: document.getElementById('filtersPanel'),
      brandFilters: document.getElementById('brandFilters'),
      osFilters: document.getElementById('osFilters'),
      budgetFilters: document.getElementById('budgetFilters'),
      searchInput: document.getElementById('searchInput'),
      searchSuggestions: document.getElementById('searchSuggestions'),
      searchContainer: document.querySelector('.search-container'),
    };
  }

  // Setup search functionality
  setupSearchFunctionality() {
    if (!this.elements.searchInput) return;

    const searchInput = this.elements.searchInput;
    const searchSuggestions = this.elements.searchSuggestions;

    // Real-time search with debouncing
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      
      // Clear previous timeout
      if (this.searchDebounceTimeout) {
        clearTimeout(this.searchDebounceTimeout);
      }

      // Debounce search to avoid excessive filtering
      this.searchDebounceTimeout = setTimeout(() => {
        this.handleSearchInput(query);
      }, 300);
    });

    // Handle Enter key
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const query = e.target.value.trim();
        this.performSearch(query);
        this.hideSearchSuggestions();
      }
    });

    // Handle Escape key to clear search
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.clearSearch();
        searchInput.blur();
      }
    });

    // Show suggestions on focus if there's a value
    searchInput.addEventListener('focus', () => {
      const query = searchInput.value.trim();
      if (query.length > 0) {
        this.showSearchSuggestions(query);
      }
    });

    // Handle clicks outside search to hide suggestions
    document.addEventListener('click', (e) => {
      if (!this.elements.searchContainer?.contains(e.target)) {
        this.hideSearchSuggestions();
      }
    });
  }

  // Handle search input with suggestions
  handleSearchInput(query) {
    this.currentFilters.searchQuery = query;

    if (query.length === 0) {
      this.hideSearchSuggestions();
      this.applyFilters();
      return;
    }

    if (query.length >= 2) {
      this.showSearchSuggestions(query);
    }

    // Apply search immediately for better UX
    this.applyFilters();
  }

  // Generate search suggestions
  generateSearchSuggestions(query) {
    const queryLower = query.toLowerCase();
    const suggestions = new Set();
    const maxSuggestions = 8;

    // Check cache first
    const cacheKey = queryLower;
    if (this.searchCache.has(cacheKey)) {
      return this.searchCache.get(cacheKey);
    }

    this.laptops.forEach(laptop => {
      // Match laptop names
      if (laptop.name.toLowerCase().includes(queryLower)) {
        suggestions.add({
          type: 'product',
          text: laptop.name,
          subtitle: `${this.formatFilterLabel(laptop.brand)} - ₹${laptop.price.toLocaleString()}`,
          id: laptop.id
        });
      }

      // Match brands
      if (laptop.brand.toLowerCase().includes(queryLower)) {
        suggestions.add({
          type: 'brand',
          text: this.formatFilterLabel(laptop.brand),
          subtitle: 'Brand',
          value: laptop.brand
        });
      }

      // Match specs
      if (laptop.specs.toLowerCase().includes(queryLower)) {
        suggestions.add({
          type: 'spec',
          text: laptop.name,
          subtitle: laptop.specs,
          id: laptop.id
        });
      }
    });

    // Add popular searches
    const popularSearches = this.getPopularSearches(queryLower);
    popularSearches.forEach(search => suggestions.add(search));

    const result = Array.from(suggestions).slice(0, maxSuggestions);
    
    // Cache the result
    this.searchCache.set(cacheKey, result);
    
    return result;
  }

  // Get popular/trending searches
  getPopularSearches(query) {
    const popular = [
      { type: 'popular', text: 'Gaming laptops', subtitle: 'Popular search' },
      { type: 'popular', text: 'Budget laptops under 50k', subtitle: 'Popular search' },
      { type: 'popular', text: 'MacBook', subtitle: 'Popular search' },
      { type: 'popular', text: 'RTX laptops', subtitle: 'Popular search' },
      { type: 'popular', text: 'Intel i7', subtitle: 'Popular search' },
      { type: 'popular', text: '16GB RAM', subtitle: 'Popular search' },
    ];

    return popular.filter(item => 
      item.text.toLowerCase().includes(query)
    );
  }

  // Show search suggestions
  showSearchSuggestions(query) {
    if (!this.elements.searchSuggestions || query.length < 2) return;

    const suggestions = this.generateSearchSuggestions(query);
    
    if (suggestions.length === 0) {
      this.hideSearchSuggestions();
      return;
    }

    const suggestionHTML = suggestions.map(suggestion => {
      const icon = this.getSuggestionIcon(suggestion.type);
      return `
        <div class="search-suggestion" 
             data-type="${suggestion.type}" 
             data-value="${suggestion.value || suggestion.text}"
             data-id="${suggestion.id || ''}"
             onclick="laptopStore.selectSuggestion('${suggestion.type}', '${suggestion.value || suggestion.text}', ${suggestion.id || 'null'})">
          <div class="suggestion-icon">${icon}</div>
          <div class="suggestion-content">
            <div class="suggestion-text">${this.highlightMatch(suggestion.text, query)}</div>
            <div class="suggestion-subtitle">${suggestion.subtitle}</div>
          </div>
        </div>
      `;
    }).join('');

    this.elements.searchSuggestions.innerHTML = suggestionHTML;
    this.elements.searchSuggestions.style.display = 'block';
  }

  // Get icon for suggestion type
  getSuggestionIcon(type) {
    const icons = {
      product: '💻',
      brand: '🏷️',
      spec: '⚙️',
      popular: '🔥'
    };
    return icons[type] || '🔍';
  }

  // Highlight matching text in suggestions
  highlightMatch(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  }

  // Hide search suggestions
  hideSearchSuggestions() {
    if (this.elements.searchSuggestions) {
      this.elements.searchSuggestions.style.display = 'none';
    }
  }

  // Select a search suggestion
  selectSuggestion(type, value, id = null) {
    const searchInput = this.elements.searchInput;
    
    switch (type) {
      case 'product':
      case 'spec':
        if (id) {
          const laptop = this.getLaptopById(id);
          if (laptop) {
            searchInput.value = laptop.name;
            this.performSearch(laptop.name);
          }
        }
        break;
      
      case 'brand':
        searchInput.value = value;
        this.performSearch(value);
        break;
      
      case 'popular':
        searchInput.value = value;
        this.performSearch(value);
        break;
      
      default:
        searchInput.value = value;
        this.performSearch(value);
    }
    
    this.hideSearchSuggestions();
  }

  // Perform search
  performSearch(query = null) {
    if (query !== null) {
      this.currentFilters.searchQuery = query;
      if (this.elements.searchInput) {
        this.elements.searchInput.value = query;
      }
    }
    
    this.applyFilters();
    
    // Track search analytics (optional)
    this.trackSearch(this.currentFilters.searchQuery);
  }

  // Clear search
  clearSearch() {
    this.currentFilters.searchQuery = '';
    if (this.elements.searchInput) {
      this.elements.searchInput.value = '';
    }
    this.hideSearchSuggestions();
    this.applyFilters();
  }

  // Advanced search functionality
  searchLaptops(query) {
    if (!query || query.trim() === '') {
      return [...this.laptops];
    }

    const searchTerm = query.toLowerCase().trim();
    const searchWords = searchTerm.split(/\s+/);
    
    return this.laptops.filter(laptop => {
      const searchableText = [
        laptop.name,
        laptop.brand,
        laptop.specs,
        laptop.os,
        laptop.budget,
        laptop.price.toString()
      ].join(' ').toLowerCase();

      // Exact match gets highest priority
      if (searchableText.includes(searchTerm)) {
        return true;
      }

      // Partial word matching
      return searchWords.every(word => 
        searchableText.includes(word)
      );
    });
  }

  // Track search for analytics
  trackSearch(query) {
    if (!query) return;
    
    // This could send data to analytics service
    console.log(`Search performed: "${query}" - Results: ${this.filteredLaptops.length}`);
  }

  // Setup event listeners
  setupEventListeners() {
    // Sort functionality
    if (this.elements.sortOptions) {
      this.elements.sortOptions.addEventListener('change', () => this.sortProducts());
    }

    // Price range filters
    if (this.elements.minPrice) {
      this.elements.minPrice.addEventListener('input', (e) => {
        this.currentFilters.minPrice = e.target.value ? parseFloat(e.target.value) : null;
        this.applyFilters();
      });
    }

    if (this.elements.maxPrice) {
      this.elements.maxPrice.addEventListener('input', (e) => {
        this.currentFilters.maxPrice = e.target.value ? parseFloat(e.target.value) : null;
        this.applyFilters();
      });
    }

    // Mobile filters toggle
    document.addEventListener('click', (e) => this.handleOutsideClick(e));
  }

  // Generate filter options dynamically
  generateFilterOptions() {
    const brands = [...new Set(this.laptops.map(laptop => laptop.brand))].sort();
    const os = [...new Set(this.laptops.map(laptop => laptop.os))].sort();
    const budget = [...new Set(this.laptops.map(laptop => laptop.budget))].sort();

    this.createFilterGroup('brandFilters', brands, 'brand');
    this.createFilterGroup('osFilters', os, 'os');
    this.createFilterGroup('budgetFilters', budget, 'budget');
  }

  // Create filter group
  createFilterGroup(containerId, options, filterType) {
    const container = this.elements[containerId];
    if (!container) return;

    container.innerHTML = '';
    const fragment = document.createDocumentFragment();

    options.forEach(option => {
      const filterItem = document.createElement('div');
      filterItem.className = 'filter-item';
      filterItem.innerHTML = `
        <input type="checkbox" id="${filterType}_${option}" 
               data-filter-type="${filterType}" data-filter-value="${option}">
        <label for="${filterType}_${option}">${this.formatFilterLabel(option)}</label>
      `;

      // Add event listener
      const checkbox = filterItem.querySelector('input');
      checkbox.addEventListener('change', (e) => this.handleFilterChange(e));

      fragment.appendChild(filterItem);
    });

    container.appendChild(fragment);
  }

  // Format filter labels
  formatFilterLabel(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  // Handle filter changes
  handleFilterChange(e) {
    const { filterType, filterValue } = e.target.dataset;
    const isChecked = e.target.checked;
    const filterKey = this.getFilterKey(filterType);

    if (isChecked) {
      if (!this.currentFilters[filterKey].includes(filterValue)) {
        this.currentFilters[filterKey].push(filterValue);
      }
    } else {
      this.currentFilters[filterKey] = this.currentFilters[filterKey].filter(
        item => item !== filterValue
      );
    }

    this.applyFilters();
  }

  // Get filter key mapping
  getFilterKey(filterType) {
    const mapping = {
      brand: 'brands',
      os: 'os',
      budget: 'budget'
    };
    return mapping[filterType] || filterType;
  }

  // Apply all active filters including search
  applyFilters() {
    // Start with search results
    let filtered = this.searchLaptops(this.currentFilters.searchQuery);
    
    // Apply other filters
    filtered = filtered.filter(laptop => {
      return this.passesAllFilters(laptop);
    });

    this.filteredLaptops = filtered;
    this.displayProducts();
    this.updateResultsCount();
  }

  // Check if laptop passes all filters (excluding search)
  passesAllFilters(laptop) {
    // Brand filter
    if (this.currentFilters.brands.length > 0 && 
        !this.currentFilters.brands.includes(laptop.brand)) {
      return false;
    }

    // OS filter
    if (this.currentFilters.os.length > 0 && 
        !this.currentFilters.os.includes(laptop.os)) {
      return false;
    }

    // Budget filter
    if (this.currentFilters.budget.length > 0 && 
        !this.currentFilters.budget.includes(laptop.budget)) {
      return false;
    }

    // Price range filter
    if (this.currentFilters.minPrice !== null && 
        laptop.price < this.currentFilters.minPrice) {
      return false;
    }

    if (this.currentFilters.maxPrice !== null && 
        laptop.price > this.currentFilters.maxPrice) {
      return false;
    }

    return true;
  }

  // Sort products
  sortProducts() {
    const sortBy = this.elements.sortOptions.value;
    const sortFunctions = {
      name: (a, b) => a.name.localeCompare(b.name),
      'price-low': (a, b) => a.price - b.price,
      'price-high': (a, b) => b.price - a.price,
      rating: (a, b) => b.rating - a.rating,
      brand: (a, b) => a.brand.localeCompare(b.brand),
    };

    if (sortFunctions[sortBy]) {
      this.filteredLaptops.sort(sortFunctions[sortBy]);
      this.displayProducts();
    }
  }

  // Generate star rating
  generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return '★'.repeat(fullStars) + 
           (hasHalfStar ? '☆' : '') + 
           '☆'.repeat(emptyStars);
  }

  // Create product card HTML
  createProductCard(laptop) {
    const whatsappMessage = encodeURIComponent(
      `I'm interested in the laptop "${laptop.name}". Could you please share more details about it?`
    );

    return `
      <div class="product-card" data-product-id="${laptop.id}">
        <div class="product-image">
          <img src="${laptop.image}" 
               alt="${laptop.name}" 
               onerror="this.src='${this.getPlaceholderImage()}'">
        </div>
        <div class="product-info">
          <div class="product-brand">${this.formatFilterLabel(laptop.brand)}</div>
          <div class="product-name">${laptop.name}</div>
          <div class="rating">
            <div class="stars">${this.generateStars(laptop.rating)}</div>
            <div class="rating-value">${laptop.rating}</div>
          </div>
          <div class="product-specs">${laptop.specs}</div>
          <div class="product-price">
            <div class="price">₹${laptop.price.toLocaleString()}</div>
            <div class="product-actions">
              <button class="btn btn-primary" onclick="laptopStore.showProductDetails(${laptop.id})">
                View Details
              </button>
              <a class="btn whatsapp-product-btn" 
                 href="https://wa.me/919970655533?text=${whatsappMessage}" 
                 target="_blank">
                <i class="fab fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Get placeholder image
  getPlaceholderImage() {
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRjBGMEYwIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5Ij7wn5K7PC90ZXh0Pgo8L3N2Zz4=';
  }

  // Display products
  displayProducts() {
    if (!this.elements.productsGrid) return;

    if (this.filteredLaptops.length === 0) {
      const searchTerm = this.currentFilters.searchQuery;
      const message = searchTerm 
        ? `No laptops found for "${searchTerm}"`
        : 'No laptops found';
      
      this.elements.productsGrid.innerHTML = `
        <div class="no-products">
          <h3>${message}</h3>
          <p>Try adjusting your filters or search terms to see more results</p>
          ${searchTerm ? `<button onclick="laptopStore.clearSearch()" class="btn btn-secondary">Clear Search</button>` : ''}
        </div>
      `;
      return;
    }

    const fragment = document.createDocumentFragment();
    const tempDiv = document.createElement('div');
    
    tempDiv.innerHTML = this.filteredLaptops
      .map(laptop => this.createProductCard(laptop))
      .join('');

    while (tempDiv.firstChild) {
      fragment.appendChild(tempDiv.firstChild);
    }

    this.elements.productsGrid.innerHTML = '';
    this.elements.productsGrid.appendChild(fragment);
  }

  // Update results count
  updateResultsCount() {
    if (!this.elements.resultsCount) return;

    const count = this.filteredLaptops.length;
    const searchTerm = this.currentFilters.searchQuery;
    
    let text = `${count} ${count === 1 ? 'laptop' : 'laptops'} found`;
    
    if (searchTerm) {
      text += ` for "${searchTerm}"`;
    }
    
    this.elements.resultsCount.textContent = text;
  }

  // Clear all filters including search
  clearAllFilters() {
    // Reset filter state
    this.currentFilters = {
      brands: [],
      os: [],
      budget: [],
      minPrice: null,
      maxPrice: null,
      searchQuery: '',
    };

    // Clear search input
    if (this.elements.searchInput) {
      this.elements.searchInput.value = '';
    }

    // Hide suggestions
    this.hideSearchSuggestions();

    // Uncheck all checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = false;
    });

    // Clear price inputs
    if (this.elements.minPrice) this.elements.minPrice.value = '';
    if (this.elements.maxPrice) this.elements.maxPrice.value = '';

    // Reset products
    this.filteredLaptops = [...this.laptops];
    this.displayProducts();
    this.updateResultsCount();
  }

  // Toggle mobile filters
  toggleMobileFilters() {
    if (!this.elements.filtersPanel) return;

    const isActive = this.elements.filtersPanel.classList.contains('active');
    const closeButton = this.elements.filtersPanel.querySelector('.filter-close');

    if (isActive) {
      this.elements.filtersPanel.classList.remove('active');
      if (closeButton) closeButton.style.display = 'none';
    } else {
      this.elements.filtersPanel.classList.add('active');
      if (closeButton) closeButton.style.display = 'block';
    }
  }

  // Handle outside clicks for mobile
  handleOutsideClick(event) {
    if (window.innerWidth > 768) return;

    const filtersPanel = this.elements.filtersPanel;
    const filterToggle = document.querySelector('.mobile-filter-toggle');

    if (filtersPanel && filterToggle &&
        filtersPanel.classList.contains('active') &&
        !filtersPanel.contains(event.target) &&
        !filterToggle.contains(event.target)) {
      this.toggleMobileFilters();
    }
  }

  // Show product details (modal, redesigned)
  showProductDetails(laptopId) {
    const laptop = this.laptops.find(l => l.id === laptopId);
    if (!laptop) return;

    // Remove any existing modal
    const oldModal = document.querySelector('.product-modal');
    if (oldModal) oldModal.remove();

    // Modal HTML
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
      <div class="modal-overlay" onclick="document.querySelector('.product-modal').remove()"></div>
      <div class="modal-content">
        <button class="modal-close" onclick="document.querySelector('.product-modal').remove()" aria-label="Close">×</button>
        <div class="modal-header">
          <img src="${laptop.image}" alt="${laptop.name}" class="modal-image" onerror="this.src='${this.getPlaceholderImage()}'">
          <div class="modal-info">
            <h2>${laptop.name}</h2>
            <p class="modal-brand">${this.formatFilterLabel(laptop.brand)}</p>
            <div class="modal-rating">
              <span class="stars">${this.generateStars(laptop.rating)}</span>
              <span>${laptop.rating}/5</span>
            </div>
            <p class="modal-price" style="color:#2563eb;font-weight:600;font-size:1.2rem;">₹${laptop.price.toLocaleString()}</p>
          </div>
        </div>
        <div class="modal-body">
          <h3>Specifications</h3>
          <p>${laptop.specs}</p>
          ${laptop.category ? `<h3>Category</h3><p>${this.formatFilterLabel(laptop.category)}</p>` : ''}
          ${laptop.budget ? `<h3>Budget Range</h3><p>${laptop.budget}</p>` : ''}
        </div>
        <div class="modal-footer">
          <a href="https://wa.me/919970655533?text=${encodeURIComponent('I\'m interested in the laptop \'' + laptop.name + '\'. Could you please share more details about it?')}" target="_blank" rel="noopener noreferrer" class="whatsapp-btn">
            <i class="fab fa-whatsapp"></i> Contact on WhatsApp
          </a>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Modal styles (inline for now, can be moved to CSS)
    const style = document.createElement('style');
    style.textContent = `
      .product-modal {
        position: fixed;
        top: 0; left: 0; width: 100vw; height: 100vh;
        z-index: 9999;
        display: flex; align-items: center; justify-content: center;
        padding: 2vw;
      }
      .modal-overlay {
        position: absolute; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.5); cursor: pointer;
      }
      .modal-content {
        background: #fff;
        border-radius: 16px;
        padding: 2rem;
        max-width: 420px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        z-index: 1;
        box-shadow: 0 8px 32px rgba(0,0,0,0.18);
        animation: fadeIn .2s;
        display: flex;
        flex-direction: column;
      }
      .modal-close {
        position: absolute; top: 1rem; right: 1rem;
        background: none; border: none; font-size: 1.5rem; cursor: pointer;
        color: #64748b;
      }
      .modal-header {
        display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1rem;
      }
      .modal-image {
        width: 80px; height: 80px; object-fit: contain; border-radius: 8px; background: #f1f5f9;
        flex-shrink: 0;
      }
      .modal-info h2 {
        margin: 0 0 0.5rem 0; color: #222; font-size: 1.2rem;
      }
      .modal-brand {
        color: #666; text-transform: capitalize; margin-bottom: 0.5rem;
      }
      .modal-rating {
        display: flex; align-items: center; gap: 0.5rem; font-size: 1rem;
      }
      .modal-rating .stars { color: #fbbf24; }
      .modal-price { margin-top: 0.5rem; }
      .modal-body h3 { margin: 1rem 0 0.5rem 0; color: #333; font-size: 1rem; }
      .modal-footer { margin-top: 1.5rem; text-align: center; }
      .whatsapp-btn {
        background: #25D366; color: white; padding: 0.75rem 1.5rem;
        border-radius: 25px; text-decoration: none; display: inline-flex;
        align-items: center; gap: 0.5rem; font-weight: bold; font-size: 1rem;
        border: none; transition: background 0.2s;
        width: 100%;
        justify-content: center;
      }
      .whatsapp-btn:hover { background: #128C7E; }
      @keyframes fadeIn { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: translateY(0);} }
      @media (max-width: 600px) {
        .product-modal { padding: 0.5rem; }
        .modal-content { padding: 1rem; max-width: 98vw; }
        .modal-header { flex-direction: column; align-items: center; gap: 0.5rem; }
        .modal-image { width: 60px; height: 60px; }
        .modal-close { top: 0.5rem; right: 0.5rem; font-size: 1.2rem; }
        .modal-info h2 { font-size: 1rem; }
        .whatsapp-btn { font-size: 0.95rem; padding: 0.6rem 1rem; }
      }
      @media (max-width: 400px) {
        .modal-content { padding: 0.5rem; }
        .modal-image { width: 48px; height: 48px; }
      }
    `;
    document.head.appendChild(style);
  }

  // Add to cart functionality
  addToCart(laptopId) {
    const laptop = this.laptops.find(l => l.id === laptopId);
    if (laptop) {
      alert(`Added ${laptop.name} to cart!\nPrice: ₹${laptop.price.toLocaleString()}`);
    }
  }

  // Get laptop by ID
  getLaptopById(id) {
    return this.laptops.find(laptop => laptop.id === id);
  }

  // Get search suggestions for external use
  getSearchSuggestions(query) {
    return this.generateSearchSuggestions(query);
  }

  // Public method for external search calls
  search(query) {
    this.performSearch(query);
  }
}

// Initialize the laptop store when DOM is loaded
let laptopStore;

document.addEventListener('DOMContentLoaded', () => {
  laptopStore = new LaptopStore();
});

// Expose functions globally for backward compatibility
window.toggleMobileFilters = () => laptopStore?.toggleMobileFilters();
window.clearAllFilters = () => laptopStore?.clearAllFilters();
window.addToCart = (id) => laptopStore?.addToCart(id);
window.showProductDetails = (id) => laptopStore?.showProductDetails(id);
window.performSearch = (query) => laptopStore?.search(query);