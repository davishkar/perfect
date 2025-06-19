<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfect Computers - Your Trusted Laptop Store</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>

<body>
    

<?php include 'includes/header.php'; ?>


<main>
     <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1 class="fade-in">Perfect Computers</h1>
            <p class="hero-location fade-in">Your Trusted Laptop Store in Vita & Kadegaon</p>
            <p class="subheadline fade-in">One-Stop Shop for Premium Laptops</p>
            <p class="hero-support fade-in">Find the perfect device for every need - from gaming to business, student to
                professional. We've got you covered with genuine products and expert support.</p>
            <div class="cta-buttons fade-in">
                <a href="#products" class="btn btn-primary">Explore Laptops</a>
                <a href="tel:+919970655533" class="btn btn-secondary">Call Now</a>
            </div>
        </div>
    </section>

    <!-- Image Slider -->
    <section class="slider-section">
        <div class="slider-container">
            <div class="slider">
                <div class="slide active">
                    <img src="images/vitashop-5.JPG" alt="Special Offer">
                    <div class="slide-content">
                        <h2>Special Offer</h2>
                        <p>Get 20% off on selected laptops</p>
                        <a href="#products" class="btn btn-primary">Shop Now</a>
                    </div>
                </div>
                <!-- More slides will be added dynamically via JavaScript -->
            </div>
            <button class="slider-btn prev"><i class="fas fa-chevron-left"></i></button>
            <button class="slider-btn next"><i class="fas fa-chevron-right"></i></button>
        </div>
    </section>

    <!-- Brands Section -->
    <section id="brands" class="brands-slider-section">
        <div class="container">
            <h2>Shop by Brand</h2>
            <div class="brands-slider-wrapper">
                <button class="brands-arrow prev" aria-label="Previous brands">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <div class="brands-slider" role="region" aria-label="Brand carousel">
                    <div class="brand-slide">
                        <div class="brand-logo brand-apple">
                            <i class="fab fa-apple"></i>
                        </div>
                    </div>
                    <div class="brand-slide">
                        <div class="brand-logo brand-asus">
                            <img src="images/brands/asus.png" alt="ASUS">
                        </div>
                    </div>
                    <div class="brand-slide">
                        <div class="brand-logo brand-lenovo">
                            <img src="images/brands/lenovo.png" alt="Lenovo">
                        </div>
                    </div>
                    <div class="brand-slide">
                        <div class="brand-logo brand-dell">
                            <img src="images/brands/dell.png" alt="Dell">
                        </div>
                    </div>
                    <div class="brand-slide">
                        <div class="brand-logo brand-hp">
                            <img src="images/brands/hp.png" alt="HP">
                        </div>
                    </div>
                    <div class="brand-slide">
                        <div class="brand-logo brand-acer">
                            <img src="images/brands/acer.png" alt="Acer">
                        </div>
                    </div>
                    <div class="brand-slide">
                        <div class="brand-logo brand-msi">
                            <img src="images/brands/mis.png" alt="MSI">
                        </div>
                    </div>
                    <div class="brand-slide">
                        <div class="brand-logo brand-canon">
                            <img src="images/brands/canon.png" alt="Canon">
                        </div>
                    </div>
                    <div class="brand-slide">
                        <div class="brand-logo brand-epson">
                            <img src="images/brands/icons8-epson-96.png" alt="Epson">
                        </div>
                    </div>
                </div>
                <button class="brands-arrow next" aria-label="Next brands">
                    <i class="fas fa-chevron-right"></i>
                </button>
                <div class="pause-indicator">Auto-scroll paused</div>
            </div>
        </div>
    </section>

    <script>
        class BrandsSlider {
            constructor() {
                this.slider = document.querySelector('.brands-slider');
                this.prevBtn = document.querySelector('.brands-arrow.prev');
                this.nextBtn = document.querySelector('.brands-arrow.next');
                this.pauseIndicator = document.querySelector('.pause-indicator');

                this.scrollAmount = 245; // Width of one slide + gap
                this.autoScrollInterval = null;
                this.autoScrollDelay = 3500; // 3.5 seconds
                this.isPaused = false;
                this.resumeTimeout = null;

                this.init();
            }

            init() {
                this.setupEventListeners();
                this.startAutoScroll();
                this.updateArrowStates();
            }

            setupEventListeners() {
                // Manual navigation
                this.prevBtn.addEventListener('click', () => {
                    this.scrollPrev();
                    this.handleManualInteraction();
                });

                this.nextBtn.addEventListener('click', () => {
                    this.scrollNext();
                    this.handleManualInteraction();
                });

                // Pause on hover
                this.slider.addEventListener('mouseenter', () => this.pauseAutoScroll());
                this.slider.addEventListener('mouseleave', () => this.resumeAutoScroll());

                // Handle manual scrolling
                let scrollTimeout;
                this.slider.addEventListener('scroll', () => {
                    this.updateArrowStates();
                    this.pauseAutoScroll();

                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        this.resumeAutoScroll();
                    }, 2000);
                });

                // Touch events for mobile
                let touchTimeout;
                this.slider.addEventListener('touchstart', () => this.pauseAutoScroll());
                this.slider.addEventListener('touchend', () => {
                    clearTimeout(touchTimeout);
                    touchTimeout = setTimeout(() => this.resumeAutoScroll(), 2500);
                });

                // Keyboard navigation
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowLeft') {
                        this.scrollPrev();
                        this.handleManualInteraction();
                    } else if (e.key === 'ArrowRight') {
                        this.scrollNext();
                        this.handleManualInteraction();
                    }
                });
            }

            scrollNext() {
                const maxScroll = this.slider.scrollWidth - this.slider.clientWidth;
                const currentScroll = this.slider.scrollLeft;

                if (currentScroll >= maxScroll - 10) {
                    // Reset to beginning with smooth transition
                    this.slider.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    this.slider.scrollBy({
                        left: this.scrollAmount,
                        behavior: 'smooth'
                    });
                }
            }

            scrollPrev() {
                if (this.slider.scrollLeft <= 10) {
                    // Go to end
                    this.slider.scrollTo({
                        left: this.slider.scrollWidth - this.slider.clientWidth,
                        behavior: 'smooth'
                    });
                } else {
                    this.slider.scrollBy({
                        left: -this.scrollAmount,
                        behavior: 'smooth'
                    });
                }
            }

            updateArrowStates() {
                const maxScroll = this.slider.scrollWidth - this.slider.clientWidth;
                const currentScroll = this.slider.scrollLeft;

                // Always show arrows for infinite scroll effect
                this.prevBtn.style.opacity = '1';
                this.nextBtn.style.opacity = '1';
            }

            startAutoScroll() {
                if (this.autoScrollInterval) return;

                this.autoScrollInterval = setInterval(() => {
                    if (!this.isPaused && !document.hidden) {
                        this.scrollNext();
                    }
                }, this.autoScrollDelay);
            }

            stopAutoScroll() {
                if (this.autoScrollInterval) {
                    clearInterval(this.autoScrollInterval);
                    this.autoScrollInterval = null;
                }
            }

            pauseAutoScroll() {
                this.isPaused = true;
                this.pauseIndicator.classList.add('show');
            }

            resumeAutoScroll() {
                this.isPaused = false;
                this.pauseIndicator.classList.remove('show');

                // Restart auto-scroll if it was stopped
                if (!this.autoScrollInterval) {
                    this.startAutoScroll();
                }
            }

            handleManualInteraction() {
                this.pauseAutoScroll();
                clearTimeout(this.resumeTimeout);
                this.resumeTimeout = setTimeout(() => {
                    this.resumeAutoScroll();
                }, 3000);
            }
        }

        // Initialize the slider when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new BrandsSlider();
        });

        // Handle visibility change (pause when tab is not active)
        document.addEventListener('visibilitychange', () => {
            const sliderInstance = document.querySelector('.brands-slider');
            if (sliderInstance) {
                if (document.hidden) {
                    sliderInstance.dispatchEvent(new Event('mouseenter'));
                } else {
                    sliderInstance.dispatchEvent(new Event('mouseleave'));
                }
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            const slider = document.querySelector('.brands-slider');
            if (slider) {
                // Recalculate scroll amount based on new dimensions
                const brandSlide = slider.querySelector('.brand-slide');
                if (brandSlide) {
                    const rect = brandSlide.getBoundingClientRect();
                    const gap = 25; // CSS gap value
                    window.sliderInstance.scrollAmount = rect.width + gap;
                }
            }
        });
    </script>

    <!-- Product Filters -->
    <!-- <section class="filters-section">
        <div class="container">
            <h2>Find Your Perfect Laptop</h2>
            <div class="filter-blocks">
                <div class="filter-block">
                    <h3>Brands</h3>
                    <div class="filter-options">
                        <button class="filter-btn" data-brand="hp">HP</button>
                        <button class="filter-btn" data-brand="asus">Asus</button>
                        <button class="filter-btn" data-brand="dell">Dell</button>
                    </div>
                </div>
                <div class="filter-block">
                    <h3>Operating System</h3>
                    <div class="filter-options">
                        <button class="filter-btn" data-os="windows">Windows</button>
                        <button class="filter-btn" data-os="macos">macOS</button>
                    </div>
                </div>
                <div class="filter-block">
                    <h3>Budget</h3>
                    <div class="filter-options">
                        <button class="filter-btn" data-budget="30k">₹30K</button>
                        <button class="filter-btn" data-budget="50k">₹50K</button>
                        <button class="filter-btn" data-budget="75k">₹75K+</button>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!-- Product Listing -->
    <section id="products" class="products-section">
        <div class="container">
            <h2>Featured Laptops</h2>
            <div class="product-grid">
                <!-- Products will be dynamically loaded here -->
            </div>
            <div class="view-more-container">
                <button class="btn btn-outline view-more-btn"><a href="pages/product.php">View More Products</a>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    </section>

    <!-- Accessories Section -->
    <section id="accessories" class="accessories-section">
        <div class="container">
            <h2>Essential Accessories</h2>
            <div class="accessories-grid">
                <!-- Accessories will be dynamically loaded here -->
            </div>
            <div class="view-more-container">
                <button class="btn btn-outline view-more-btn">
                    <a href="pages/accessories.php">View More Accessories</a>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    </section>


    <style>
        .view-more-container {
            text-align: center;
            margin: 2rem 0;
        }

        .view-more-btn {
            padding: 12px 24px;
            font-size: 16px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
        }

        .view-more-btn:hover i {
            transform: translateX(4px);
        }

        .store-visit-banner {
            background: #ff6b6b;
            color: white;
            padding: 10px;
            margin-bottom: 20px;
            font-weight: 500;
            font-size: 16px;
            border-radius: 5px;
        }

        .store-visit-banner a {
            color: #fff;
            text-decoration: underline;
            font-weight: bold;
        }

        .store-visit-banner a:hover {
            color: #ffeb3b;
        }

        .info-banner {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            text-align: center;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .info-banner p {
            margin: 0;
            font-size: 16px;
            font-weight: 500;
            letter-spacing: 0.5px;
        }

        .products-section {
            padding: 60px 0;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .products-section h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 40px;
            color: #333;
        }

        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }

        /* Responsive design */
        @media (max-width: 768px) {
            .info-banner p {
                font-size: 14px;
            }

            .products-section h2 {
                font-size: 2rem;
            }

            .product-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
        }
    </style>
    <!-- Founder's Desk -->
    <!-- <section id="about" class="founder-section">
        <div class="container">
            <div class="founder-card">
                <div class="founder-image">
                    <img src="images/handsome-bearded-businessman-rubbing-hands-having-deal.jpg" alt="Founder">
                </div>
                <div class="founder-content">
                    <h2>From the Founder's Desk</h2>
                    <p>Welcome to Perfect Computers, where we've been serving our community with the best technology
                        solutions since 2011. Our commitment to quality and customer satisfaction drives everything we
                        do.</p>
                    <div class="founder-signature">
                        <p>Swapnil Mali</p>
                        <span>Founder & CEO</span>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!-- Services Section -->
    <section class="services-section" id="services">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">What We Offer</h2>
                <p class="section-subtitle">Complete computer solutions tailored to your needs. From quick fixes to
                    complex custom builds, we've got you covered with professional service and guaranteed results.</p>

                <div class="highlight-stats">
                    <div class="stat-item">
                        <span class="stat-number">14+</span>
                        <span class="stat-label">Years Experience</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">5000+</span>
                        <span class="stat-label">Happy Customers</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">95%</span>
                        <span class="stat-label">Success Rate</span>
                    </div>
                </div>
            </div>

            <div class="services-grid">
                <div class="services-grid">
                    <div class="service-card">
                        <div class="service-icon">💻</div>
                        <h3 class="service-title">लॅपटॉप व डेस्कटॉप विक्री</h3>
                        <ul class="service-features">
                            <li>नवीन व Refurbished लॅपटॉप्स</li>
                            <li>बजेट अनुकूल व ब्रॅंडेड पर्याय</li>
                            <li>सर्व प्रकारचे डेस्कटॉप सेटअप</li>
                        </ul>
                    </div>

                    <div class="service-card">
                        <div class="service-icon">🔒</div>
                        <h3 class="service-title">CCTV कॅमेरा सिस्टम्स</h3>
                        <ul class="service-features">
                            <li>घर, ऑफिस व दुकानांसाठी CCTV इन्स्टॉलेशन</li>
                            <li>ऑनलाईन आणि ऑफ्लाइन मॉनिटरिंग</li>
                            <li>DVR/NVR ची सगायी सोल्यूशन्स</li>
                        </ul>
                    </div>

                    <div class="service-card">
                        <div class="service-icon">🖨</div>
                        <h3 class="service-title">प्रिंटर विक्री व सर्व्हिस</h3>
                        <ul class="service-features">
                            <li>Inkjet, LaserJet, All-in-One प्रिंटर</li>
                            <li>प्रिंटर रिपेअर व कार्टेज रिफिलिंग</li>
                        </ul>
                    </div>

                    <div class="service-card">
                        <div class="service-icon">🧰</div>
                        <h3 class="service-title">रिपेअरिंग व सर्विसिंग</h3>
                        <ul class="service-features">
                            <li>लॅपटॉप/डेस्कटॉप हार्डवेयर व सॉफ्टवेयर रिपेअर</li>
                            <li>Windows इंस्टॉलेशन, फॉर्मॅटिंग, डेटा बॅकअप</li>
                            <li>Antivirus व सॉफ्टवेयर इंस्टॉलेशन</li>
                        </ul>
                    </div>

                    <div class="service-card">
                        <div class="service-icon">🏰</div>
                        <h3 class="service-title">अ‍ॅक्सेसेरीझ विक्री</h3>
                        <ul class="service-features">
                            <li>Wireless Mouse, Keyboards, Laptop Bags</li>
                            <li>HDMI, LAN, Power Cables व इतर संगणक सामग्री</li>
                        </ul>
                    </div>

                    <div class="service-card">
                        <div class="service-icon">💳</div>
                        <h3 class="service-title">सोयीच्या खरेदी योजना</h3>
                        <ul class="service-features">
                            <li>0% डाऊन पेमेंटवर लॅपटॉप/प्रिंटर</li>
                            <li>EMI व फायनान्स सुविधा</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="premium-services">
                <div class="premium-content">
                    <h3 class="premium-title">Enterprise Solutions</h3>
                    <p class="premium-description">Comprehensive IT services for businesses of all sizes. Keep your
                        operations running smoothly with our professional support.</p>

                    <div class="premium-features">
                        <div class="premium-feature">
                            <h4>🏢 On-Site Support</h4>
                            <p>Dedicated technicians for your business location with same-day response times.</p>
                        </div>
                        <div class="premium-feature">
                            <h4>🔄 Maintenance Contracts</h4>
                            <p>Regular system maintenance and updates to prevent issues before they occur.</p>
                        </div>
                        <div class="premium-feature">
                            <h4>☁️ Cloud Solutions</h4>
                            <p>Secure cloud migration and backup solutions to protect your business data.</p>
                        </div>
                        <div class="premium-feature">
                            <h4>📞 24/7 Emergency Support</h4>
                            <p>Round-the-clock technical support for critical business systems and emergencies.</p>
                        </div>
                    </div>

                    <a href="#contact" class="premium-btn">Get Enterprise Quote</a>
                </div>
            </div>
        </div>
    </section>
    <!-- Google Reviews -->
    <section class="reviews-section" id="reviews">
        <div class="container">
            <h2>What Our Customers Say</h2>
            <div class="reviews-slider">

                <div class="review-card">
                    <div class="review-rating">★★★★★</div>
                    <div class="review-text">
                        "Excellent service, my laptop was fixed quickly and no hidden and extras with the cost. The best
                        shop I am very happy with the services. I would definitely recommend to anyone."
                    </div>
                    <div class="review-author">- SURAJ MALI</div>
                </div>

                <div class="review-card">
                    <div class="review-rating">★★★★★</div>
                    <div class="review-text">
                        "Excellent services provided by perfect computers for CCTV installation at Pare-Padali. Post
                        sales services are also excllent. Quality of material as well as service 10/10."
                    </div>
                    <div class="review-author">- atul sanvi</div>
                </div>

                <div class="review-card">
                    <div class="review-rating">★★★★★</div>
                    <div class="review-text">
                        "Perfect is Perfect.... your service is also good.... and ur familer with every customer... keep
                        it up all the best...."
                    </div>
                    <div class="review-author">- Mahesh Babar</div>
                </div>

                <div class="review-card">
                    <div class="review-rating">★★★★★</div>
                    <div class="review-text">
                        "I bought two computers from Perfect Computer. Thank you very much indeed for giving us their
                        features and software and hardware in a very nice way as we believe...Request everyone to visit
                        at least once. In a perfect computer two things are obtained with confidence. The first is faith
                        and the second is also faith. Thank You Swapnil Mali sir."
                    </div>
                    <div class="review-author">- Kishor Subhash Suryawanshi</div>
                </div>

                <div class="review-card">
                    <div class="review-rating">★★★★★</div>
                    <div class="review-text">
                        "खूप छान सेवा आहे....कमी वेळात काटेकोर काम आणि वाजवी खर्चात चिंतेचे समाधान झाले....जर आपल्या
                        लॅपटॉप व pc बद्दल जास्त काळजी असेल तर माझी खालील पूर्ण review कमी अनुभव वाचा .....माझ्या hp
                        लॅपटॉप चा एक हेवी प्रॉब्लेम होता....मी २-३ सो कॉल्ड नामांकित शॉप्स मध्ये लॅपटॉप घेऊन गेलो माझा
                        निव्वळ टाइमपास करण्यात आला ...काहींनी लॅपटॉप चा जास्त च मोठा issue आहे आणि याला पुण्याला न्यावा
                        लागेल विटा मध्ये कोणी रिपैर करू शकणार नाही असे सांगितले .....लॅपटॉप न रीपैर करता फॉल्ट न सापडत
                        दोघांनी माझ्याकडून सर्व्हिस चार्जेस घेतले ते अनुक्रमे ५००/- व ३०० अशे होते आणि सांगितले की
                        लॅपटॉप ला कमीत कमी ८-१० हजार खर्च आहे असे सांगितले मग निराश होवुन मी लॅपटॉप घरी घेऊन आलो
                        lockdown सुरू असल्याने पुण्याला जाणे शक्य न्हवते आणि पुण्याला यांच्याकडून पाठवावा असा विश्वास
                        ठेवायला मन तयार न्हवते....अशा वेळी मला कराड रोड विटा येथे परफेक्ट कॉम्प्युटर नावाची पाटी दिसली
                        दुकान बाहेरून चांगले वाटले म्हणून एकदा आत जाऊन चौकशी केली आणि त्यांनी लगेच लॅपटॉप हातात करायला
                        घेतला व आश्वासन दील्याप्रमाणे त्याच दिवशी लॅपटॉप चा खर्च किती आहे ते कळविले.....दुसऱ्या दिवशी
                        मला लॅपटॉप हातात मिळाला आणि बदल्यात खर्च आला फक्त २६००/- रुपये तेही बिलासह....सध्या १५ दिवस झाले
                        लॅपटॉप खूप छान चालत आहे.... सॉरी माफ करा माझी मराठी लिहिण्याची स्टाईल थोडी dramatic आहे पण हि
                        रिव्ह्यू genuine आहे..... धन्यवाद परफेक्ट कॉम्प्युटर विटा.....मित्रानो बिनधास्त होऊन आपलं
                        कोणतंही इलेक्ट्रॉनिक gadget परफेक्ट कॉम्प्युटर मधे न्या आणि निश्चिंत व्हा...."
                    </div>
                    <div class="review-author">- RAJDEEP KAMBLE</div>
                </div>
            </div>
            <div class="reviews-actions">
                <a href="https://www.google.co.in/maps/place/Perfect+Computers/@17.2733843,74.5246518,15z/data=!4m12!1m2!2m1!1sPerfect+Computers!3m8!1s0x3bc16637f7f00293:0xb308d1d1f22a02f3!8m2!3d17.2733539!4d74.5349515!9m1!1b1!15sChFQZXJmZWN0IENvbXB1dGVyc1oTIhFwZXJmZWN0IGNvbXB1dGVyc5IBDmNvbXB1dGVyX3N0b3JlqgFfCg0vZy8xMWc2amI0M2gzEAEqFSIRcGVyZmVjdCBjb21wdXRlcnMoADIeEAEiGudvR_OecUIDJEBnq1O1BnejqIGR_LTMGPglMhUQAiIRcGVyZmVjdCBjb21wdXRlcnPgAQA!16s%2Fg%2F11g6jb43h3?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank" class="btn btn-primary">View All Reviews</a>
                <a href=" https://g.page/r/CfMCKvLR0QizEBE/review " target="_blank" class="btn btn-secondary">Share Your
                    Experience</a>
            </div>
        </div>
    </section>

    <script>
        // Read More functionality
        document.addEventListener('DOMContentLoaded', function () {
            const reviewTexts = document.querySelectorAll('.review-text');
            const maxLength = 200; // Maximum characters to show initially

            reviewTexts.forEach(function (reviewText) {
                const fullText = reviewText.textContent.trim();

                // Only add read more if text is longer than maxLength
                if (fullText.length > maxLength) {
                    const truncatedText = fullText.substring(0, maxLength) + '...';

                    // Create read more button
                    const readMoreBtn = document.createElement('button');
                    readMoreBtn.className = 'read-more-btn';
                    readMoreBtn.textContent = 'Read More';

                    // Set initial truncated state
                    reviewText.textContent = truncatedText;
                    reviewText.classList.add('truncated');

                    // Insert button after review text
                    reviewText.insertAdjacentElement('afterend', readMoreBtn);

                    // Toggle functionality
                    readMoreBtn.addEventListener('click', function () {
                        if (reviewText.classList.contains('truncated')) {
                            // Show full text
                            reviewText.textContent = fullText;
                            reviewText.classList.remove('truncated');
                            reviewText.classList.add('expanded');
                            readMoreBtn.textContent = 'Read Less';
                        } else {
                            // Show truncated text
                            reviewText.textContent = truncatedText;
                            reviewText.classList.remove('expanded');
                            reviewText.classList.add('truncated');
                            readMoreBtn.textContent = 'Read More';
                        }
                    });
                }
            });
        });
    </script>

    <!-- Branches Section -->
    <section id="branches" class="branches-section">
        <div class="container branches-grid">
            <!-- Branches Info -->
            <div class="branches-info">
                <div class="branch-card">
                    <h3>1. Vita Branch</h3>
                    <div class="branch-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15237.581711509934!2d74.3168158871582!3d17.29645999999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc16637f7f00293%3A0xb308d1d1f22a02f3!2sPerfect%20Computers!5e0!3m2!1sen!2sin!4v1747998512295!5m2!1sen!2sin"
                            width="100%" height="180" style="border:0; border-radius:12px;" allowfullscreen=""
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div class="branch-details">
                        <div class="branch-address">Pandurang Complex, Near HDFC Bank, Karad Road, Vita – 415311</div>
                        <div class="branch-phone"><a href="tel:+919970655533">+91 99706 55533</a></div>
                    </div>
                </div>

                <div class="branch-card">
                    <h3>2. Kadegaon Branch</h3>
                    <div class="branch-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15237.581711509934!2d74.3168158871582!3d17.29645999999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc17bc4a0d6dcb9%3A0xceae3de279dc5943!2sPerfect%20Computers!5e0!3m2!1sen!2sin!4v1747998604727!5m2!1sen!2sin"
                            width="100%" height="180" style="border:0; border-radius:12px;" allowfullscreen=""
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div class="branch-details">
                        <div class="branch-address">Near Palus Bank, Vita Road, Kadegaon – 415304</div>
                        <div class="branch-phone"><a href="tel:+919923344789">+91 99233 44789</a></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--floting button-->
    <div class="floating-buttons">
        <a href="https://wa.me/919970655533" class="whatsapp-btn">
            <i class="fab fa-whatsapp"></i>
        </a>
        <a href="tel:+919970655533" class="call-btn">
            <i class="fas fa-phone"></i>
        </a>
    </div>
    </section>
    <!-- Contact Section -->
    <section id="contact" class="contact-section">
        <div class="contact-container">
            <!-- Contact Info -->
            <div class="contact-info">
                <h2>Get in Touch</h2>
                <p>Have questions about our products or services? We'd love to hear from you. Send us a message and
                    we'll respond as soon as possible.</p>

                <div class="contact-details">
                    <div class="contact-item">
                        <div class="contact-item-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-item-content">
                            <h4>Visit Our Stores</h4>
                            <p>Vita & Kadegaon Branches</p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-item-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-item-content">
                            <h4>Call Us</h4>
                            <p>+91 99706 55533 | +91 99233 44789</p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-item-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-item-content">
                            <h4>Email Us</h4>
                            <p>perfect.vita@hotmail.com</p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-item-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="contact-item-content">
                            <h4>Working Hours</h4>
                            <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="contact-form-wrapper">
                <div class="success-message" id="successMessage">
                    <i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully.
                </div>

                <h3>Contact Us</h3>
                <form id="contactForm">
                    <div class="form-group">
                        <input type="text" id="name" name="name" required placeholder="Your Full Name">
                    </div>
                    <div class="form-group">
                        <input type="tel" id="mobile" name="mobile" required placeholder="Mobile Number">
                    </div>
                    <div class="form-group">
                        <input type="text" id="subject" name="subject" required placeholder="Subject">
                    </div>
                    <div class="form-group">
                        <textarea id="message" name="message" required placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-paper-plane"></i> Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>

    <section class="faq-section" id="faq">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Frequently Asked Questions</h2>
                <p class="section-subtitle">Get answers to common questions about Perfect Computers' services, products,
                    and support.</p>
            </div>

            <div class="faq-grid">
                <div class="faq-item">
                    <div class="faq-question">
                        <span>What types of computer services do you offer?</span>
                        <svg class="faq-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            We provide comprehensive computer services including <strong>hardware repairs</strong>,
                            <strong>software troubleshooting</strong>, <strong>virus removal</strong>, <strong>data
                                recovery</strong>, <strong>system upgrades</strong>, and <strong>custom PC
                                builds</strong>. We also offer network setup, maintenance contracts, and IT consulting
                            for businesses.
                        </div>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <span>How long does a typical repair take?</span>
                        <svg class="faq-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            Most repairs are completed within <strong>24-48 hours</strong>. Simple software issues may
                            be resolved the same day, while complex hardware repairs or data recovery can take
                            <strong>3-5 business days</strong>. We always provide a realistic timeline upfront and keep
                            you updated throughout the process.
                        </div>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <span>Do you offer warranties on your work?</span>
                        <svg class="faq-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            Yes! We provide a <strong>90-day warranty</strong> on all repair work and <strong>1-year
                                warranty</strong> on new parts installed. Custom PC builds come with comprehensive
                            warranties on all components. If the same issue occurs within the warranty period, we'll fix
                            it at no additional charge.
                        </div>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <span>Can you recover data from a crashed hard drive?</span>
                        <svg class="faq-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            We specialize in data recovery with a <strong>95% success rate</strong>. We can recover data
                            from failed hard drives, SSDs, USB drives, and memory cards. We offer a <strong>no data, no
                                charge</strong> policy - you only pay if we successfully recover your files. Free
                            diagnosis is included with all data recovery services.
                        </div>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <span>Do you provide on-site service?</span>
                        <svg class="faq-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            Yes, we offer <strong>on-site service</strong> for both residential and business customers
                            within a 25-mile radius. This includes network setup, system installations, and
                            troubleshooting that can't be resolved remotely. On-site service is available <strong>Monday
                                through Saturday</strong> with same-day appointments often available.
                        </div>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <span>What are your pricing and payment options?</span>
                        <svg class="faq-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            We offer <strong>competitive, transparent pricing</strong> with free estimates on all work.
                            We accept cash, check, and all major credit cards. For business customers, we offer
                            <strong>NET 30 payment terms</strong> and flexible maintenance contracts. No hidden fees -
                            the price we quote is the price you pay.
                        </div>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <span>Do you work on both PC and Mac computers?</span>
                        <svg class="faq-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            Absolutely! Our certified technicians are experienced with <strong>Windows PCs, Macs, and
                                Linux systems</strong>. We service all major brands including Dell, HP, Lenovo, Apple,
                            ASUS, and custom-built computers. We also work on laptops, desktops, and all-in-one systems.
                        </div>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <span>How can I schedule an appointment?</span>
                        <svg class="faq-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            You can schedule an appointment by <strong>calling us directly</strong>, <strong>filling out
                                our online contact form</strong>, or <strong>visiting our store</strong> during business
                            hours. We also offer online scheduling through our website for your convenience. Emergency
                            services are available for critical business systems.
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact-cta">
                <h3>Still Have Questions?</h3>
                <p>Can't find the answer you're looking for? Our friendly team is here to help!</p>
                <a href="#contact" class="cta-button">Contact Us Today</a>
            </div>
        </div>
    </section>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const faqItems = document.querySelectorAll('.faq-item');

            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                const answer = item.querySelector('.faq-answer');

                question.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');

                    // Close all other FAQ items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                            otherItem.querySelector('.faq-answer').classList.remove('active');
                        }
                    });

                    // Toggle current item
                    if (isActive) {
                        item.classList.remove('active');
                        answer.classList.remove('active');
                    } else {
                        item.classList.add('active');
                        answer.classList.add('active');
                    }
                });
            });
        });
    </script>
</main>

<?php include 'includes/footer.php'; ?>

 <script src="js/main.js"></script>
    <script src="js/slider.js"></script>
    <!-- <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script> -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
        });
    </script>
</body>
</html>