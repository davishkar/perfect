<?php
// Determine the correct path for assets based on the current directory
$isInPages = strpos($_SERVER['REQUEST_URI'], '/pages/') !== false;
$assetPath = $isInPages ? '../' : '';
?>
<!-- Footer -->
<footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <img src="<?php echo $assetPath; ?>images/logo.png" alt="Perfect-computer-logo" style="max-width: 120px;">
                    <h3>Perfect Computers</h3>
                    <p>Your trusted partner for all laptop needs</p>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Our Branches</h3>
                    <p>⑴ Vita Branch:<br>📌 Pandurang Complex, Near HDFC Bank,<br>Karad Road, Vita – 415 311<br>Phone:
                        +91
                        99706 55533</p>
                    <p>⑵ Kadegaon Branch:<br>📌 Near Palus Bank, Vita Road, Kadegaon – 415 304<br>Phone: +91 99233 44789
                    </p>
                </div>

                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="<?php echo $assetPath; ?>index.php#products">Products</a></li>
                        <li><a href="<?php echo $assetPath; ?>index.php#accessories">Accessories</a></li>
                        <li><a href="<?php echo $assetPath; ?>index.php#contact">Contact</a></li>
                        <li><a href="<?php echo $assetPath; ?>index.php#blog">Blog</a></li>
                        <li><a href="<?php echo $assetPath; ?>index.php#reviews">Reviews</a></li>
                        <li><a href="<?php echo $assetPath; ?>index.php#faq">FAQ</a></li>
                        <li><a href="<?php echo $assetPath; ?>pages/terms.php">Terms and Conditions</a></li>
                        <li><a href="<?php echo $assetPath; ?>pages/privacy.php">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Perfect Computers. All rights reserved.</p>
                <p>Powered by <a href="https://davishkar.github.io/My-Services-Page/" target="_blank">Avishkar Digital Studio<svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#1DA1F2"
                            style="vertical-align: middle; margin-left: 4px;">
                            <path
                                d="M22.25 12c0-5.65-4.6-10.25-10.25-10.25S1.75 6.35 1.75 12 6.35 22.25 12 22.25 22.25 17.65 22.25 12zm-12 5.45l-4.2-4.2 1.06-1.06 3.14 3.14 6.14-6.14 1.06 1.06-7.2 7.2z" />
                        </svg></a></p>
                <small>v 1.0.0</small>
            </div>
        </div>
    </footer>

<!-- Back to Top Button -->
<button id="backToTopBtn" title="Go to top">
    <i class="fas fa-arrow-up"></i>
</button>

<style>
#backToTopBtn {
    display: none;
    position: fixed;
    bottom: 32px;
    left: 32px;
    z-index: 999;
    background: #2563eb;
    color: #fff;
    border: none;
    outline: none;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    cursor: pointer;
    font-size: 1.5rem;
    transition: background 0.2s, box-shadow 0.2s;
}
#backToTopBtn:hover {
    background: #1e40af;
    box-shadow: 0 4px 16px rgba(0,0,0,0.18);
}
</style>

<script>
// Show/hide button on scroll
window.addEventListener('scroll', function() {
    const btn = document.getElementById('backToTopBtn');
    if (window.scrollY > 200) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});
// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.getElementById('backToTopBtn').onclick = scrollToTop;
</script>