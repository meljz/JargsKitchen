
        // Form validation and submission
        const form = document.getElementById('contactForm');
        const submitButton = document.getElementById('submitButton');
        const successMessage = document.getElementById('successMessage');

        // Form fields
        const nameField = document.getElementById('customerName');
        const phoneField = document.getElementById('customerPhone');
        const emailField = document.getElementById('customerEmail');
        const messageField = document.getElementById('customerMessage');

        // Error elements
        const nameError = document.getElementById('nameError');
        const phoneError = document.getElementById('phoneError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');

        // Validation functions
        function validateName() {
            const name = nameField.value.trim();
            if (name.length < 2) {
                showError(nameField, nameError, 'Name must be at least 2 characters long');
                return false;
            }
            showValid(nameField, nameError);
            return true;
        }

        function validatePhone() {
            const phone = phoneField.value.trim();
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(phone)) {
                showError(phoneField, phoneError, 'Please enter a valid phone number');
                return false;
            }
            showValid(phoneField, phoneError);
            return true;
        }

        function validateEmail() {
            const email = emailField.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showError(emailField, emailError, 'Please enter a valid email address');
                return false;
            }
            showValid(emailField, emailError);
            return true;
        }

        function validateMessage() {
            const message = messageField.value.trim();
            if (message.length < 10) {
                showError(messageField, messageError, 'Message must be at least 10 characters long');
                return false;
            }
            showValid(messageField, messageError);
            return true;
        }

        function showError(field, errorElement, message) {
            field.classList.add('error');
            field.classList.remove('valid');
            field.parentElement.classList.remove('valid');
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }

        function showValid(field, errorElement) {
            field.classList.remove('error');
            field.classList.add('valid');
            field.parentElement.classList.add('valid');
            errorElement.classList.remove('show');
        }

        // Real-time validation
        nameField.addEventListener('blur', validateName);
        nameField.addEventListener('input', function() {
            if (this.value.length > 0) validateName();
        });

        phoneField.addEventListener('blur', validatePhone);
        phoneField.addEventListener('input', function() {
            if (this.value.length > 0) validatePhone();
        });

        emailField.addEventListener('blur', validateEmail);
        emailField.addEventListener('input', function() {
            if (this.value.length > 0) validateEmail();
        });

        messageField.addEventListener('blur', validateMessage);
        messageField.addEventListener('input', function() {
            if (this.value.length > 0) validateMessage();
        });

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate all fields
            const isNameValid = validateName();
            const isPhoneValid = validatePhone();
            const isEmailValid = validateEmail();
            const isMessageValid = validateMessage();

            if (isNameValid && isPhoneValid && isEmailValid && isMessageValid) {
                submitForm();
            } else {
                // Scroll to first error
                const firstError = document.querySelector('.form-input.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstError.focus();
                }
            }
        });

        function submitForm() {
            // Show loading state
            submitButton.classList.add('submitting');
            submitButton.disabled = true;
            document.querySelector('.button-text').textContent = 'Sending...';

            // Simulate form submission (replace with actual API call)
            setTimeout(function() {
                // Hide loading state
                submitButton.classList.remove('submitting');
                submitButton.disabled = false;
                document.querySelector('.button-text').textContent = 'Send Message';

                // Show success message
                successMessage.classList.add('show');
                
                // Reset form
                form.reset();
                
                // Remove validation classes
                document.querySelectorAll('.form-input').forEach(input => {
                    input.classList.remove('error', 'valid');
                });
                document.querySelectorAll('.form-group').forEach(group => {
                    group.classList.remove('valid');
                });
                document.querySelectorAll('.error-message').forEach(error => {
                    error.classList.remove('show');
                });

                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Hide success message after 5 seconds
                setTimeout(function() {
                    successMessage.classList.remove('show');
                }, 5000);

            }, 2000); // Simulate 2-second delay
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('active');
        }

        // Utility functions
        function getDirections() {
            // Open Google Maps with cafe location
            const address = encodeURIComponent('123 Coffee Street, Brew District, Capas, Central Luzon, Philippines');
            window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
        }

        function openSocial(platform) {
            const urls = {
                facebook: 'https://facebook.com/cheyancafe',
                instagram: 'https://instagram.com/cheyancafe', 
                twitter: 'https://twitter.com/cheyancafe',
                tiktok: 'https://tiktok.com/@cheyancafe'
            };
            
            alert(`Opening ${platform.charAt(0).toUpperCase() + platform.slice(1)}!\nFollow us at: ${urls[platform]}`);
            // window.open(urls[platform], '_blank');
        }

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

        // Auto-resize textarea
        messageField.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });

        // Phone number formatting
        phoneField.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            // Add Philippines country code if not present
            if (value.length > 0 && !value.startsWith('63')) {
                if (value.startsWith('9')) {
                    value = '63' + value;
                } else if (value.startsWith('09')) {
                    value = '63' + value.substring(1);
                }
            }
            
            // Format as +63 XXX XXX XXXX
            if (value.length >= 2) {
                value = '+' + value.substring(0, 2) + ' ' + 
                        value.substring(2, 5) + ' ' + 
                        value.substring(5, 8) + ' ' + 
                        value.substring(8, 12);
            }
            
            e.target.value = value.trim();
        });

        // Character counter for message
        messageField.addEventListener('input', function() {
            const maxLength = 500;
            const currentLength = this.value.length;
            
            if (!this.nextElementSibling || !this.nextElementSibling.classList.contains('char-counter')) {
                const counter = document.createElement('div');
                counter.className = 'char-counter';
                counter.style.cssText = 'text-align: right; font-size: 0.8rem; color: #666; margin-top: 0.5rem;';
                this.parentElement.appendChild(counter);
            }
            
            const counter = this.parentElement.querySelector('.char-counter');
            counter.textContent = `${currentLength}/${maxLength} characters`;
            
            if (currentLength > maxLength) {
                counter.style.color = '#e74c3c';
                this.value = this.value.substring(0, maxLength);
            } else {
                counter.style.color = '#666';
            }
        });
