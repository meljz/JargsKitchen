
        // Mobile menu toggle
        function toggleMobileMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('active');
        }

        // Smooth scrolling
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

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(139, 69, 19, 0.98)';
            } else {
                header.style.background = 'rgba(139, 69, 19, 0.95)';
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        // Observe all elements with animate-on-scroll class
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            observer.observe(element);
        });

        // Flavor meters animation
        const flavorObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fills = entry.target.querySelectorAll('.flavor-fill');
                    fills.forEach((fill, index) => {
                        setTimeout(() => {
                            fill.style.transition = 'width 1s ease';
                        }, index * 200);
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('.blend-card').forEach(card => {
            flavorObserver.observe(card);
        });

        // Journey steps animation
        const journeyObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const steps = entry.target.querySelectorAll('.journey-step');
                    steps.forEach((step, index) => {
                        setTimeout(() => {
                            step.style.animation = 'fadeInUp 0.6s ease forwards';
                        }, index * 200);
                    });
                }
            });
        }, observerOptions);

        const journeySection = document.querySelector('.journey-infographic');
        if (journeySection) {
            journeyObserver.observe(journeySection);
        }

        // Method cards hover effect enhancement
        document.querySelectorAll('.method-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Promise items stagger animation
        const promiseObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = document.querySelectorAll('.promise-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.animation = 'fadeInUp 0.6s ease forwards';
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        const promiseSection = document.querySelector('.quality-promise');
        if (promiseSection) {
            promiseObserver.observe(promiseSection);
        }
