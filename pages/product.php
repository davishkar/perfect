<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfect Computers - Your Trusted Laptop Store</title>

    <link rel="stylesheet" href="../css/responsive.css">
    <link rel="stylesheet" href="../css/layout.css">
    <link rel="stylesheet" href="../css/product.css">
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
<main>

    <!-- Breadcrumbs -->
    <div class="breadcrumbs">
    <a href="../index.php">Home</a>
    <a href="../index.php#products">Products</a>
    <span>Laptops</span>
</div>

<!-- Search Section -->
    <div class="search-section">
        <div class="search-container">
            <div class="search-input-wrapper">
                <i class="fas fa-search" style="color: #999; margin-right: 0.5rem;"></i>
                <input type="text" class="search-input" id="searchInput" placeholder="Search for laptops, brands, models..." autocomplete="off">
                <button class="search-btn" onclick="performSearch()">
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <div class="search-suggestions" id="searchSuggestions"></div>
        </div>
    </div>

    <!-- Mobile Filter Toggle -->
    <button class="mobile-filter-toggle" onclick="toggleMobileFilters()">
        🔍 Show Filters
    </button>

        <div class="main-content">
            <div class="filters" id="filtersPanel">
                <button class="filter-close" onclick="toggleMobileFilters()" style="display: none;">
                    ✕ Close Filters
                </button>

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
                    <h3>Operating System</h3>
                    <div class="filter-group" id="osFilters"></div>
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
                        <option value="brand">Brand</option>
                    </select>
                </div>
                <div class="products-grid" id="productsGrid"></div>
            </div>
        </div>
    </div>

</main>

<?php include '../includes/footer.php'; ?>
<script src="../js/product.js"></script>
    <script src="../js/main.js"></script>
</body>

</html>
