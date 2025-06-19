// Product Data
const products = [
    {
        id: 1,
        name: "HP Pavilion Gaming",
        specs: "AMD Ryzen 5 • RTX 3050 • 16GB RAM",
        price: "₹65,000",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=220&fit=crop&crop=center",
        brand: "hp",
        os: "windows",
        budget: "50k"
    },
    {
        id: 2,
        name: "ASUS ROG Strix",
        specs: "Intel i7 • RTX 3060 • 16GB RAM",
        price: "₹95,000",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=220&fit=crop&crop=center",
        brand: "asus",
        os: "windows",
        budget: "75k"
    },
    {
        id: 3,
        name: "Dell XPS 13",
        specs: "Intel i5 • Iris Xe • 8GB RAM",
        price: "₹85,000",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=220&fit=crop&crop=center",
        brand: "dell",
        os: "windows",
        budget: "75k"
    },
    {
        id: 4,
        name: "MacBook Air M1",
        specs: "Apple M1 • 8GB RAM • 256GB SSD",
        price: "₹92,000",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=220&fit=crop&crop=center",
        brand: "apple",
        os: "macos",
        budget: "75k"
    },
    {
        id: 5,
        name: "HP 15s",
        specs: "Intel i3 • 8GB RAM • 256GB SSD",
        price: "₹35,000",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=220&fit=crop&crop=center",
        brand: "hp",
        os: "windows",
        budget: "30k"
    },
    {
        id: 6,
        name: "ASUS VivoBook",
        specs: "AMD Ryzen 3 • 8GB RAM • 256GB SSD",
        price: "₹32,000",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=220&fit=crop&crop=center",
        brand: "asus",
        os: "windows",
        budget: "30k"
    }
];

// Accessories Data
const accessories = [
    {
        id: 1,
        name: "Laptop Backpack",
        price: "₹1,999",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=220&fit=crop&crop=center"
    },
    {
        id: 2,
        name: "Laptop Stand",
        price: "₹1,499",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=220&fit=crop&crop=center"
    },
    {
        id: 3,
        name: "Wireless Mouse",
        price: "₹799",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=220&fit=crop&crop=center"
    },
    {
        id: 4,
        name: "Laptop Cooling Pad",
        price: "₹1,299",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=220&fit=crop&crop=center"
    }
];

// Blog Posts Data (was missing in original code)
// const blogPosts = [
//     {
//         id: 1,
//         title: "Best Gaming Laptops 2024",
//         excerpt: "Discover the top gaming laptops that deliver exceptional performance...",
//         image: "images/blog/gaming-laptops.jpg"
//     },
//     {
//         id: 2,
//         title: "Laptop Buying Guide",
//         excerpt: "Everything you need to know before buying your next laptop...",
//         image: "images/blog/buying-guide.jpg"
//     }
// ];

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Starting initialization...');
    
    // Add debugging
    console.log('Products data:', products);
    console.log('Accessories data:', accessories);
    
    initializeProducts();
    initializeAccessories();
    initializeBlogPosts();
    initializeFilters();
    initializeContactForm();
    initializeMap();
});

// Initialize Products
function initializeProducts() {
    console.log('Initializing products...');
    
    const productGrid = document.querySelector('.product-grid');
    console.log('Product grid element:', productGrid);
    
    if (!productGrid) {
        console.error('Product grid not found! Make sure your HTML has an element with class "product-grid"');
        return;
    }

    // Clear existing content first
    productGrid.innerHTML = '';
    
    products.forEach((product, index) => {
        console.log(`Creating product card ${index + 1}:`, product.name);
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
    
    console.log(`Successfully added ${products.length} products to the grid`);
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = product.id; // Add this for filtering functionality
    
    // Handle missing images gracefully
    const imageHTML = product.image ? 
        `<img src="${product.image}" alt="${product.name}" onerror="this.src='./images/logo.jpg?text=Image+Not+Found'">` :
        `<img src="/images/logo.jpg?text=No+Image" alt="${product.name}">`;
    
    card.innerHTML = `
        ${imageHTML}
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="specs">${product.specs}</p>
            <div class="price">${product.price}</div>
            <div class="rating">
                ${createStarRating(product.rating)}
                <span>(${product.rating})</span>
            </div>
            <div class="product-actions">
                <button class="btn btn-primary" onclick="showProductDetails(${product.id})">View Details</button>
                <a class="btn whatsapp-product-btn" 
                   href="https://wa.me/919970655533?text=${encodeURIComponent('I’m interested in the laptop "' + product.name + '". Could you please share more details about it?')}" 
                   target="_blank">
                   <i class="fab fa-whatsapp"></i> WhatsApp
                </a>
            </div>
        </div>
    `;
    return card;
}

// Initialize Accessories
function initializeAccessories() {
    console.log('Initializing accessories...');
    
    const accessoriesGrid = document.querySelector('.accessories-grid');
    console.log('Accessories grid element:', accessoriesGrid);
    
    if (!accessoriesGrid) {
        console.error('Accessories grid not found! Make sure your HTML has an element with class "accessories-grid"');
        return;
    }

    // Clear existing content first
    accessoriesGrid.innerHTML = '';

    accessories.forEach((accessory, index) => {
        console.log(`Creating accessory card ${index + 1}:`, accessory.name);
        const accessoryCard = createAccessoryCard(accessory);
        accessoriesGrid.appendChild(accessoryCard);
    });
    
    console.log(`Successfully added ${accessories.length} accessories to the grid`);
}

function createAccessoryCard(accessory) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Handle missing images gracefully
    const imageHTML = accessory.image ? 
        `<img src="${accessory.image}" alt="${accessory.name}" onerror="this.src='https://via.placeholder.com/250x200/e2e8f0/64748b?text=Image+Not+Found'">` :
        `<img src="https://via.placeholder.com/250x200/e2e8f0/64748b?text=No+Image" alt="${accessory.name}">`;
    
    card.innerHTML = `
        ${imageHTML}
        <div class="product-info">
            <h3>${accessory.name}</h3>
            <div class="price">${accessory.price}</div>
            <div class="product-actions">
                <button class="btn btn-success">Add to Cart</button>
                <a class="btn whatsapp-product-btn" 
                   href="https://wa.me/919970655533?text=${encodeURIComponent('I am interested in purchasing an accessory.: ' + accessory.name + '. Could you please provide more details?')}" 
                   target="_blank">
                   <i class="fab fa-whatsapp"></i> WhatsApp
                </a>
            </div>
        </div>
    `;
    return card;
}

// Initialize Blog Posts
// function initializeBlogPosts() {
//     console.log('Initializing blog posts...');
    
//     const blogGrid = document.querySelector('.blog-grid');
//     if (!blogGrid) {
//         console.log('Blog grid not found - skipping blog initialization');
//         return;
//     }

//     blogPosts.forEach(post => {
//         const blogCard = createBlogCard(post);
//         blogGrid.appendChild(blogCard);
//     });
    
//     console.log(`Successfully added ${blogPosts.length} blog posts`);
// }

// function createBlogCard(post) {
//     const card = document.createElement('div');
//     card.className = 'product-card';
//     card.innerHTML = `
//         <img src="${post.image}" alt="${post.title}" onerror="this.src='https://via.placeholder.com/300x200/e2e8f0/64748b?text=Blog+Image'">
//         <div class="product-info">
//             <h3>${post.title}</h3>
//             <p>${post.excerpt}</p>
//             <button class="btn btn-secondary">Read More</button>
//         </div>
//     `;
//     return card;
// }

// Initialize Filters
function initializeFilters() {
    console.log('Initializing filters...');
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    console.log('Found filter buttons:', filterButtons.length);
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterType = button.dataset.brand || button.dataset.os || button.dataset.budget;
            const filterValue = button.textContent.toLowerCase().trim();
            console.log('Filtering by:', filterType, filterValue);
            filterProducts(filterType, filterValue);
        });
    });
}

function filterProducts(type, value) {
    const productCards = document.querySelectorAll('.product-card');
    let visibleCount = 0;
    
    productCards.forEach(card => {
        const productId = parseInt(card.dataset.id);
        const product = products.find(p => p.id === productId);
        
        if (product && product[type] && product[type].toLowerCase() === value.toLowerCase()) {
            card.style.display = 'block';
            visibleCount++;
        } else if (value === 'all') {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    console.log(`Filter applied: ${visibleCount} products visible`);
}




// Utility Functions
function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }

    return stars;
}

function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    // Create a better modal or detail view
    const details = `Product Details:
    
Name: ${product.name}
Specifications: ${product.specs}
Price: ${product.price}
Rating: ${product.rating}/5 stars
Brand: ${product.brand.toUpperCase()}
OS: ${product.os.toUpperCase()}`;

    alert(details);
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Test function to manually trigger product loading
function testProductLoading() {
    console.log('Testing product loading...');
    console.log('Products array:', products);
    
    const productGrid = document.querySelector('.product-grid');
    console.log('Product grid element:', productGrid);
    
    if (productGrid) {
        initializeProducts();
    } else {
        console.error('Product grid element not found!');
    }
}

// Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileNav = document.getElementById('mobileNav');
        const menuIcon = mobileMenuBtn.querySelector('i');
        
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            
            // Change icon from bars to times when menu is open
            if (mobileNav.classList.contains('active')) {
                menuIcon.className = 'fas fa-times';
            } else {
                menuIcon.className = 'fas fa-bars';
            }
        });

        // Close mobile menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                menuIcon.className = 'fas fa-bars';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = mobileNav.contains(event.target);
            const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnMenuBtn && mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                menuIcon.className = 'fas fa-bars';
            }
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

// Make test function available globally
window.testProductLoading = testProductLoading;