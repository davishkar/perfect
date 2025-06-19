<?php
// Determine the correct path for assets based on the current directory
$isInPages = strpos($_SERVER['REQUEST_URI'], '/pages/') !== false;
$assetPath = $isInPages ? '../' : '';
?>
<header class="header">
        <div class="container header-content">
            <img src="<?php echo $assetPath; ?>images/logo.png" alt="Perfect-computer-logo" style="max-width: 90px;">

            <!-- Google Translate Widget -->
           <div id="google_translate_element" style="
                display: inline-block; 
                /* margin-left: 16px; */
                vertical-align: middle;
                background-color: #f8f9fa;
                border: 1px solid #dadce0;
                border-radius: 4px;
                padding: 4px 8px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                transition: all 0.2s ease;
            "></div>

            <nav class="nav-links">
                <a href="<?php echo $assetPath; ?>index.php#home">Home</a>
                <a href="<?php echo $assetPath; ?>pages/about.php">About</a>
                <a href="<?php echo $assetPath; ?>index.php#products">Products</a>
                <a href="<?php echo $assetPath; ?>index.php#services">Services</a>
                <a href="<?php echo $assetPath; ?>index.php#faq">FAQ</a>
                <a href="<?php echo $assetPath; ?>index.php#reviews">Reviews</a>
                <a href="<?php echo $assetPath; ?>pages/about.php#branches">Branch</a>
                <a href="<?php echo $assetPath; ?>index.php#contact">Contact</a>
            </nav>


            <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open navigation menu">
                <i class="fas fa-bars"></i>
            </button>

            <!-- mobile navigation menu  -->
            <nav class="mobile-nav" id="mobileNav">
                <div class="mobile-nav-links">
                    <a href="<?php echo $assetPath; ?>index.php#home">Home</a>
                    <a href="<?php echo $assetPath; ?>pages/about.php">About</a>
                    <a href="<?php echo $assetPath; ?>index.php#products">Products</a>
                    <a href="<?php echo $assetPath; ?>index.php#services">Services</a>
                    <a href="<?php echo $assetPath; ?>index.php#faq">FAQ</a>
                    <a href="<?php echo $assetPath; ?>index.php#reviews">Reviews</a>
                    <a href="<?php echo $assetPath; ?>pages/about.php#branches">Branch</a>
                    <a href="<?php echo $assetPath; ?>index.php#contact">Contact</a>
                </div>
            </nav>
        </div>
    </header>

<script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,hi,mr', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>