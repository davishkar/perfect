<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfect Computers - Your Trusted Accessories Store</title>

    <link rel="stylesheet" href="../css/responsive.css">
    <link rel="stylesheet" href="../css/layout.css">
    <link rel="stylesheet" href="../css/accessories.css">
     <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="icon" type="image/x-icon" href="../favicon_io/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="../favicon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../favicon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../favicon_io/favicon-16x16.png">
    <link rel="manifest" href="../favicon_io/site.webmanifest">
</head>

<body>
   
<?php include '../includes/header.php'; ?>
   
    <!-- Breadcrumbs -->
    <div class="breadcrumbs">
    <a href="../index.php">Home</a>
    <a href="../index.php#accessories">Accessories</a>
    <span>All Products</span>
</div>
   
    <!-- Mobile Filter Toggle -->
    <button class="mobile-filter-toggle" onclick="toggleMobileFilters()">
        🔍 Show Filters
    </button>

    <main class="main-content">
        <div class="filters" id="filtersPanel">
            <button class="filter-close" onclick="toggleMobileFilters()" style="display: none;">
                ✕ Close Filters
            </button>

            <div class="filter-section">
                <h3>Category</h3>
                <div class="filter-group" id="categoryFilters"></div>
            </div>

            <div class="filter-section">
                <h3>Brand</h3>
                <div class="filter-group" id="brandFilters"></div>
            </div>

            <div class="filter-section">
                <h3>Price Range</h3>
                <div class="price-range">
                    <input type="number" id="minPrice" placeholder="Min ₹" min="0">
                    <span>-</span>
                    <input type="number" id="maxPrice" placeholder="Max ₹" min="0">
                </div>
            </div>

            <div class="filter-section">
                <h3>Budget Range</h3>
                <div class="filter-group" id="budgetFilters"></div>
            </div>

            <button class="clear-filters" onclick="clearAllFilters()">Clear All Filters</button>
        </div>

        <div class="products-section">
            <div class="products-header">
                <div class="results-count" id="resultsCount">Loading products...</div>
                <select class="sort-dropdown" id="sortOptions" onchange="sortProducts()">
                    <option value="name">Sort by Name</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating: High to Low</option>
                    <option value="category">Category</option>
                    <option value="brand">Brand</option>
                </select>
            </div>
            <div class="products-grid" id="productsGrid"></div>
        </div>
    </main>

    
<?php include '../includes/footer.php'; ?>
    <!-- JavaScript remains the same -->
   <script src="../js/accessories.js"></script>
   <script src="../js/main.js"></script>
   <script>
   document.addEventListener('DOMContentLoaded', function() {
       const mobileMenuBtn = document.getElementById('mobileMenuBtn');
       const mobileNav = document.getElementById('mobileNav');
       const menuIcon = mobileMenuBtn.querySelector('i');
       
       mobileMenuBtn.addEventListener('click', function() {
           mobileNav.classList.toggle('active');
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
   });
   </script>
</body>

</html>
