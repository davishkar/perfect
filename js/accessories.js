 // Sample accessories data with real product images
const accessories = [
    {
        id: 1,
        name: "Logitech MX Master 3",
        specs: "Wireless • Ergonomic • 7 Buttons",
        price: 8500,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
        category: "mouse",
        brand: "logitech",
        budget: "5k-10k",
    },
    {
        id: 2,
        name: "Corsair K70 RGB",
        specs: "Mechanical • RGB Backlit • Cherry MX",
        price: 12000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
        category: "keyboard",
        brand: "corsair",
        budget: "10k+",
    },
    {
        id: 3,
        name: "Dell Premier Backpack",
        specs: "15.6\" Laptop • Water Resistant",
        price: 2500,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
        category: "bags",
        brand: "dell",
        budget: "1k-5k",
    },
    {
        id: 4,
        name: "Hikvision Dome Camera",
        specs: "1080p • Night Vision • Weatherproof",
        price: 3500,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        category: "cctv",
        brand: "hikvision",
        budget: "1k-5k",
    },
    {
        id: 5,
        name: "HP LaserJet Pro",
        specs: "Laser • Wireless • Duplex Printing",
        price: 15000,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop",
        category: "printer",
        brand: "hp",
        budget: "10k+",
    },
    {
        id: 6,
        name: "Razer DeathAdder V3",
        specs: "Gaming • RGB • 30K DPI",
        price: 4500,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e2?w=400&h=300&fit=crop",
        category: "mouse",
        brand: "razer",
        budget: "1k-5k",
    },
    {
        id: 7,
        name: "HyperX Alloy FPS",
        specs: "Mechanical • Compact • Cherry MX Blue",
        price: 6500,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=400&h=300&fit=crop",
        category: "keyboard",
        brand: "hyperx",
        budget: "5k-10k",
    },
    {
        id: 8,
        name: "TP-Link Archer Router",
        specs: "AC1200 • Dual Band • 4 Antennas",
        price: 2800,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop",
        category: "networking",
        brand: "tp-link",
        budget: "1k-5k",
    },
    {
        id: 9,
        name: "Sony WH-1000XM4",
        specs: "Noise Cancelling • Wireless • 30hrs Battery",
        price: 25000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        category: "headphones",
        brand: "sony",
        budget: "20k+",
    },
    {
        id: 10,
        name: "Seagate External HDD",
        specs: "1TB • USB 3.0 • Portable",
        price: 3800,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
        category: "storage",
        brand: "seagate",
        budget: "1k-5k",
    },
    {
        id: 11,
        name: "Webcam HD 1080p",
        specs: "Full HD • Auto Focus • Built-in Mic",
        price: 2200,
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
        category: "webcam",
        brand: "generic",
        budget: "1k-5k",
    },
    {
        id: 12,
        name: "APC UPS 650VA",
        specs: "650VA • Battery Backup • Surge Protection",
        price: 4500,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
        category: "power",
        brand: "apc",
        budget: "1k-5k",
    },
    {
        id: 13,
        name: "Microsoft Wireless Mouse",
        specs: "Wireless • Optical • 3 Buttons",
        price: 1500,
        rating: 4.0,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
        category: "mouse",
        brand: "microsoft",
        budget: "under-1k",
    },
    {
        id: 14,
        name: "Canon PIXMA Printer",
        specs: "Inkjet • Photo Printing • WiFi",
        price: 8500,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop",
        category: "printer",
        brand: "canon",
        budget: "5k-10k",
    },
    {
        id: 15,
        name: "ASUS Gaming Headset",
        specs: "7.1 Surround • RGB • Noise Cancelling Mic",
        price: 5500,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        category: "headphones",
        brand: "asus",
        budget: "5k-10k",
    }
];

let filteredAccessories = [...accessories];
let currentFilters = {
    categories: [],
    brands: [],
    budget: [],
    minPrice: null,
    maxPrice: null,
};

// Utility function for safe DOM element access
function safeGetElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.warn(`Element with ID '${id}' not found`);
    }
    return element;
}

// Utility function for safe query selector
function safeQuerySelector(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn(`Element with selector '${selector}' not found`);
    }
    return element;
}

// Initialize the page
function init() {
    try {
        generateFilterOptions();
        displayProducts(filteredAccessories);
        updateResultsCount();
        setupPriceFilters();
        setupSearchBar();
        console.log("Page initialized successfully");
    } catch (error) {
        console.error("Error initializing page:", error);
    }
}

// Generate filter options dynamically
function generateFilterOptions() {
    try {
        const categories = [...new Set(accessories.map((item) => item.category))].sort();
        const brands = [...new Set(accessories.map((item) => item.brand))].sort();
        const budget = [...new Set(accessories.map((item) => item.budget))].sort();

        generateCheckboxFilters("categoryFilters", categories, "category");
        generateCheckboxFilters("brandFilters", brands, "brand");
        generateCheckboxFilters("budgetFilters", budget, "budget");
    } catch (error) {
        console.error("Error generating filter options:", error);
    }
}

function generateCheckboxFilters(containerId, options, filterType) {
    const container = safeGetElement(containerId);
    if (!container) return;

    try {
        container.innerHTML = "";

        options.forEach((option) => {
            const filterItem = document.createElement("div");
            filterItem.className = "filter-item";

            const displayName = option.charAt(0).toUpperCase() + option.slice(1).replace(/-/g, ' ');
            const checkboxId = `${filterType}_${option}`;

            filterItem.innerHTML = `
                <input type="checkbox" id="${checkboxId}" 
                       onchange="handleFilterChange('${filterType}', '${option}')">
                <label for="${checkboxId}">${displayName}</label>
            `;

            container.appendChild(filterItem);
        });
    } catch (error) {
        console.error(`Error generating ${filterType} filters:`, error);
    }
}

// Handle filter changes
function handleFilterChange(filterType, value) {
    try {
        const checkbox = safeGetElement(`${filterType}_${value}`);
        if (!checkbox) return;

        const isChecked = checkbox.checked;
        const filterKey = filterType === "category" ? "categories" : 
                          filterType === "brand" ? "brands" : "budget";

        if (isChecked) {
            if (!currentFilters[filterKey].includes(value)) {
                currentFilters[filterKey].push(value);
            }
        } else {
            currentFilters[filterKey] = currentFilters[filterKey].filter(
                (item) => item !== value
            );
        }

        applyFilters();
    } catch (error) {
        console.error("Error handling filter change:", error);
    }
}

// Setup price range filters
function setupPriceFilters() {
    try {
        const minPriceInput = safeGetElement("minPrice");
        const maxPriceInput = safeGetElement("maxPrice");

        if (minPriceInput) {
            minPriceInput.addEventListener("input", function () {
                currentFilters.minPrice = this.value ? parseFloat(this.value) : null;
                applyFilters();
            });
        }

        if (maxPriceInput) {
            maxPriceInput.addEventListener("input", function () {
                currentFilters.maxPrice = this.value ? parseFloat(this.value) : null;
                applyFilters();
            });
        }
    } catch (error) {
        console.error("Error setting up price filters:", error);
    }
}

// Setup search bar functionality
function setupSearchBar() {
    try {
        const searchInput = document.querySelector('.search-bar input');
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase().trim();
                searchProducts(searchTerm);
            });
        }
    } catch (error) {
        console.error("Error setting up search bar:", error);
    }
}

// Search products function
function searchProducts(searchTerm) {
    try {
        if (!searchTerm) {
            applyFilters();
            return;
        }

        filteredAccessories = accessories.filter((item) => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm) ||
                                item.brand.toLowerCase().includes(searchTerm) ||
                                item.category.toLowerCase().includes(searchTerm) ||
                                item.specs.toLowerCase().includes(searchTerm);
            
            if (!matchesSearch) return false;

            // Apply existing filters
            if (currentFilters.categories.length > 0 && !currentFilters.categories.includes(item.category)) {
                return false;
            }
            if (currentFilters.brands.length > 0 && !currentFilters.brands.includes(item.brand)) {
                return false;
            }
            if (currentFilters.budget.length > 0 && !currentFilters.budget.includes(item.budget)) {
                return false;
            }
            if (currentFilters.minPrice !== null && item.price < currentFilters.minPrice) {
                return false;
            }
            if (currentFilters.maxPrice !== null && item.price > currentFilters.maxPrice) {
                return false;
            }

            return true;
        });

        displayProducts(filteredAccessories);
        updateResultsCount();
    } catch (error) {
        console.error("Error searching products:", error);
    }
}

// Apply all active filters
function applyFilters() {
    try {
        filteredAccessories = accessories.filter((item) => {
            // Category filter
            if (currentFilters.categories.length > 0 && !currentFilters.categories.includes(item.category)) {
                return false;
            }

            // Brand filter
            if (currentFilters.brands.length > 0 && !currentFilters.brands.includes(item.brand)) {
                return false;
            }

            // Budget filter
            if (currentFilters.budget.length > 0 && !currentFilters.budget.includes(item.budget)) {
                return false;
            }

            // Price filter
            if (currentFilters.minPrice !== null && item.price < currentFilters.minPrice) {
                return false;
            }

            if (currentFilters.maxPrice !== null && item.price > currentFilters.maxPrice) {
                return false;
            }

            return true;
        });

        displayProducts(filteredAccessories);
        updateResultsCount();
    } catch (error) {
        console.error("Error applying filters:", error);
    }
}

// Sort products
function sortProducts() {
    try {
        const sortSelect = safeGetElement("sortOptions");
        if (!sortSelect) return;

        const sortBy = sortSelect.value;

        switch (sortBy) {
            case "name":
                filteredAccessories.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "price-low":
                filteredAccessories.sort((a, b) => a.price - b.price);
                break;
            case "price-high":
                filteredAccessories.sort((a, b) => b.price - a.price);
                break;
            case "rating":
                filteredAccessories.sort((a, b) => b.rating - a.rating);
                break;
            case "category":
                filteredAccessories.sort((a, b) => a.category.localeCompare(b.category));
                break;
            case "brand":
                filteredAccessories.sort((a, b) => a.brand.localeCompare(b.brand));
                break;
        }

        displayProducts(filteredAccessories);
    } catch (error) {
        console.error("Error sorting products:", error);
    }
}

// Generate star rating
function generateStars(rating) {
    try {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = "";

        for (let i = 0; i < fullStars; i++) {
            stars += "★";
        }
        if (hasHalfStar) {
            stars += "☆";
        }
        for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
            stars += "☆";
        }

        return stars;
    } catch (error) {
        console.error("Error generating stars:", error);
        return "☆☆☆☆☆";
    }
}

// Display products
function displayProducts(products) {
    const grid = safeGetElement("productsGrid");
    if (!grid) return;

    try {
        if (products.length === 0) {
            grid.innerHTML = `
                <div class="no-products">
                    <h3>No accessories found</h3>
                    <p>Try adjusting your filters or search terms to see more results</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = products
            .map((item) => `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${item.image}" alt="${item.name}" 
                             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRjBGMEYwIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5Ij7wn5K7PC90ZXh0Pgo8L3N2Zz4='">
                        <div class="product-category">${item.category}</div>
                    </div>
                    <div class="product-info">
                        <div class="product-brand">${item.brand}</div>
                        <div class="product-name">${item.name}</div>
                        <div class="rating">
                            <div class="stars">${generateStars(item.rating)}</div>
                            <div class="rating-value">${item.rating}</div>
                        </div>
                        <div class="product-specs">${item.specs}</div>
                        <div class="product-price">
                            <div class="price">₹${item.price.toLocaleString()}</div>
                            <div class="product-actions">
                                <button class="btn btn-primary" onclick="showProductDetails(${item.id})">View Details</button>
                                <a class="btn whatsapp-product-btn" 
                                   href="https://wa.me/919970655533?text=${encodeURIComponent('I\'m interested in the accessory \"' + item.name + '\". Could you please share more details about it?')}" 
                                   target="_blank"
                                   rel="noopener noreferrer">
                                   <i class="fab fa-whatsapp"></i> WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `)
            .join("");
    } catch (error) {
        console.error("Error displaying products:", error);
        grid.innerHTML = `
            <div class="no-products">
                <h3>Error loading products</h3>
                <p>Please refresh the page and try again</p>
            </div>
        `;
    }
}

// Update results count
function updateResultsCount() {
    try {
        const count = filteredAccessories.length;
        const countElement = safeGetElement("resultsCount");
        if (countElement) {
            countElement.textContent = `${count} ${count === 1 ? "accessory" : "accessories"} found`;
        }
    } catch (error) {
        console.error("Error updating results count:", error);
    }
}

// Clear all filters
function clearAllFilters() {
    try {
        // Reset filter state
        currentFilters = {
            categories: [],
            brands: [],
            budget: [],
            minPrice: null,
            maxPrice: null,
        };

        // Uncheck all checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
            checkbox.checked = false;
        });

        // Clear price inputs
        const minPrice = safeGetElement("minPrice");
        const maxPrice = safeGetElement("maxPrice");
        if (minPrice) minPrice.value = "";
        if (maxPrice) maxPrice.value = "";

        // Clear search input
        const searchInput = document.querySelector('.search-bar input');
        if (searchInput) searchInput.value = "";

        // Reset products
        filteredAccessories = [...accessories];
        displayProducts(filteredAccessories);
        updateResultsCount();
    } catch (error) {
        console.error("Error clearing filters:", error);
    }
}

// Toggle mobile filters - FIXED VERSION
function toggleMobileFilters() {
    try {
        const filtersPanel = safeGetElement("filtersPanel");
        if (!filtersPanel) {
            console.warn("Filters panel not found");
            return;
        }

        const closeButton = filtersPanel.querySelector(".filter-close");
        
        if (filtersPanel.classList.contains("active")) {
            filtersPanel.classList.remove("active");
            if (closeButton) {
                closeButton.style.display = "none";
            }
        } else {
            filtersPanel.classList.add("active");
            if (closeButton) {
                closeButton.style.display = "block";
            }
        }
    } catch (error) {
        console.error("Error toggling mobile filters:", error);
    }
}

// Show product details with better modal
function showProductDetails(itemId) {
    try {
        const item = accessories.find((a) => a.id === itemId);
        if (!item) {
            console.error("Product not found");
            return;
        }

        // Create a better modal instead of alert
        const modal = document.createElement('div');
        modal.className = 'product-modal';
        modal.innerHTML = `
            <div class="modal-overlay" onclick="closeProductModal()"></div>
            <div class="modal-content">
                <button class="modal-close" onclick="closeProductModal()">×</button>
                <div class="modal-header">
                    <img src="${item.image}" alt="${item.name}" class="modal-image">
                    <div class="modal-info">
                        <h2>${item.name}</h2>
                        <p class="modal-brand">${item.brand}</p>
                        <div class="modal-rating">
                            <span class="stars">${generateStars(item.rating)}</span>
                            <span>${item.rating}/5</span>
                        </div>
                        <p class="modal-price">₹${item.price.toLocaleString()}</p>
                    </div>
                </div>
                <div class="modal-body">
                    <h3>Specifications</h3>
                    <p>${item.specs}</p>
                    <h3>Category</h3>
                    <p>${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                    <h3>Budget Range</h3>
                    <p>${item.budget.replace(/-/g, ' ').toUpperCase()}</p>
                </div>
                <div class="modal-footer">
                    <a href="https://wa.me/919970655533?text=${encodeURIComponent(
                        "I'm interested in the accessory \"" + item.name + "\". Could you please share more details about it?"
                    )}" target="_blank" rel="noopener noreferrer" class="whatsapp-btn">
                        <i class="fab fa-whatsapp"></i> Contact on WhatsApp
                    </a>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        
        // Add styles for modal
        const style = document.createElement('style');
        style.textContent = `
            .product-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                cursor: pointer;
            }
            .modal-content {
                background: white;
                border-radius: 10px;
                padding: 2rem;
                max-width: 500px;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
                z-index: 1;
                margin: 1rem;
            }
            .modal-close {
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
            }
            .modal-header {
                display: flex;
                gap: 1rem;
                margin-bottom: 1rem;
            }
            .modal-image {
                width: 120px;
                height: 90px;
                object-fit: cover;
                border-radius: 8px;
            }
            .modal-info h2 {
                margin: 0 0 0.5rem 0;
                color: #333;
            }
            .modal-brand {
                color: #666;
                text-transform: capitalize;
                margin-bottom: 0.5rem;
            }
            .modal-price {
                font-size: 1.2rem;
                font-weight: bold;
                color: #667eea;
            }
            .modal-body h3 {
                margin: 1rem 0 0.5rem 0;
                color: #333;
            }
            .modal-footer {
                margin-top: 1.5rem;
                text-align: center;
            }
            .whatsapp-btn {
                background: #25D366;
                color: white;
                padding: 0.75rem 1.5rem;
                border-radius: 25px;
                text-decoration: none;
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                font-weight: bold;
            }
            .whatsapp-btn:hover {
                background: #128C7E;
            }
        `;
        document.head.appendChild(style);
        
    } catch (error) {
        console.error("Error showing product details:", error);
        // Fallback to alert if modal fails
        alert(`Product Details:\n\nName: ${item.name}\nCategory: ${item.category}\nBrand: ${item.brand}\nSpecs: ${item.specs}\nPrice: ₹${item.price.toLocaleString()}\nRating: ${item.rating}/5`);
    }
}

// Close product modal
function closeProductModal() {
    try {
        const modal = document.querySelector('.product-modal');
        if (modal) {
            modal.remove();
        }
    } catch (error) {
        console.error("Error closing modal:", error);
    }
}

// Toggle mobile menu - IMPROVED VERSION
// function toggleMobileMenu() {
//     try {
//         const navLinks = safeQuerySelector('.nav-links');
//         const mobileBtn = safeQuerySelector('.mobile-menu-btn');
        
//         if (navLinks) {
//             navLinks.classList.toggle('mobile-active');
            
//             // Update button icon
//             if (mobileBtn) {
//                 const icon = mobileBtn.querySelector('i');
//                 if (icon) {
//                     icon.className = navLinks.classList.contains('mobile-active') 
//                         ? 'fas fa-times' 
//                         : 'fas fa-bars';
//                 }
//             }
//         }
//     } catch (error) {
//         console.error("Error toggling mobile menu:", error);
//     }
// }

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    init();
});

// Close mobile filters when clicking outside - FIXED VERSION
document.addEventListener("click", function (event) {
    try {
        if (window.innerWidth <= 768) {
            const filtersPanel = safeGetElement("filtersPanel");
            const filterToggle = safeQuerySelector(".mobile-filter-toggle");

            if (filtersPanel && filterToggle && 
                filtersPanel.classList.contains("active") &&
                !filtersPanel.contains(event.target) &&
                !filterToggle.contains(event.target)) {
                toggleMobileFilters();
            }
        }
    } catch (error) {
        console.error("Error in click event handler:", error);
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    try {
        // Close mobile filters on desktop
        if (window.innerWidth > 768) {
            const filtersPanel = safeGetElement("filtersPanel");
            if (filtersPanel && filtersPanel.classList.contains("active")) {
                filtersPanel.classList.remove("active");
                const closeButton = filtersPanel.querySelector(".filter-close");
                if (closeButton) {
                    closeButton.style.display = "none";
                }
            }
        }
    } catch (error) {
        console.error("Error handling window resize:", error);
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(event) {
    try {
        // Close modal on Escape key
        if (event.key === 'Escape') {
            const modal = document.querySelector('.product-modal');
            if (modal) {
                closeProductModal();
            }
        }
    } catch (error) {
        console.error("Error handling keyboard events:", error);
    }
});