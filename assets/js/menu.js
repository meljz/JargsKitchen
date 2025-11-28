
        // Product Data
   // Product Data
const products = [

    // Burgers
    {
        id: 1,
        name: "Classic Cheeseburger",
        category: "burgers",
        price: 99.00,
        description: "Juicy beef patty topped with melted cheddar, crisp lettuce, tomato, and our signature sauce.",
        image: "../assets/images/menu/burger1.jpg",
        details: ["Single Patty", "Cheddar", "Fresh Veggies"],
        rating: 4.8,
        reviews: 256
    },
    {
        id: 2,
        name: "Bacon BBQ Burger",
        category: "burgers",
        price: 79.00,
        description: "Smoky bacon, tangy BBQ sauce, and melted cheese stacked on a grilled beef patty.",
        image: "../assets/images/menu/burger2.jpg",
        details: ["Bacon", "BBQ Sauce", "Grilled"],
        rating: 4.9,
        reviews: 198
    },
    {
        id: 3,
        name: "Spicy Jalapeño Burger",
        category: "burgers",
        price: 199.00,
        description: "Fiery jalapeños, pepper jack cheese, and spicy mayo for a bold kick.",
        image: "../assets/images/menu/burger3.jpg",
        details: ["Spicy", "Pepper Jack", "Zesty"],
        rating: 4.7,
        reviews: 167
    },


    {
        id: 4,
        name: "Special Burger",
        category: "burgers",
        price: 149.00,
        description: "Golden, crispy fries served hot and lightly salted.",
        image: "../assets/images/menu/burger4.jpg",
        details: ["Crispy", "Golden", "Salty"],
        rating: 4.6,
        reviews: 142
    },
    {   
        id: 5,
        name: "Healthy Burger",
        category: "burgers  ",
        price: 119.00,
        description: "Crunchy nachos loaded with melted cheese and jalapeños.",
        image: "../assets/images/menu/burger5.jpg",
        details: ["Cheesy", "Crunchy", "Spicy"],
        rating: 4.8,
        reviews: 178
    },

    // Chicken
    {
        id: 6,
        name: "Chicken Special",
        category: "chicken",
        price: 320.00,
        description: "Tender chicken served with house seasoning.",
        image: "../assets/images/menu/chicken2.jpg",
        details: ["Juicy", "Savory", "Fresh"],
        rating: 4.5,
        reviews: 134
    },
    {
        id: 7,
        name: "Grilled Chicken",
        category: "chicken",
        price: 99.00,
        description: "Grilled chicken breast with herbs and spices.",
        image: "../assets/images/menu/chicken1.jpg",
        details: ["Grilled", "Herbed", "Tender"],
        rating: 4.9,
        reviews: 221
    },

    // Others
    {
        id: 8,
        name: "Chili Garlic Oil",
        category: "others",
        price: 129.00,
        description: "Homemade chili garlic oil, perfect for dipping or adding spice.",
        image: "../assets/images/menu/chiligarlic.jpg",
        details: ["Spicy", "Savory", "Homemade"],
        rating: 4.7,
        reviews: 167
    },

    // Combos
    {
        id: 9,
        name: "Atchara",
        category: "others",
        price: 119.00,
        description: "Traditional Filipino pickled papaya, served as a refreshing side.",
        image: "../assets/images/menu/atchara.jpg",
        details: ["Pickled", "Tangy", "Fresh"],
        rating: 4.6,
        reviews: 145        
    }
];

       /*
    {
        id: 10,
        name: "Double Patty Combo",
        category: "combos",
        price: 195.00,
        description: "Double cheeseburger with fries and iced cola.",
        image: "../assets/images/menu/combo2.jpg",
        details: ["Double Patty", "Cheddar", "Combo"],
        rating: 4.4,
        reviews: 98
    }


         
            // Pastries
            {
                id: 11,
                name: "Chocolate Croissant",
                category: "pastries",
                price: 95.00,
                description: "Buttery, flaky croissant filled with rich dark chocolate, baked fresh daily.",
                image: "../assets/images/menu/crs.jpg",
                details: ["Fresh", "Chocolate", "Buttery"],
                rating: 4.8,
                reviews: 187
            },
            {
                id: 12,
                name: "Blueberry Muffin",
                category: "pastries",
                price: 85.00,
                description: "Moist and fluffy muffin packed with fresh blueberries and a crumbly top.",
                image: "../assets/images/menu/bffs.webp",
                details: ["Fresh", "Blueberry", "Fluffy"],
                rating: 4.7,
                reviews: 156
            },
            {
                id: 13,
                name: "Cinnamon Roll",
                category: "pastries",
                price: 115.00,
                description: "Warm, gooey cinnamon roll with cream cheese frosting, perfect with coffee.",
                image: "../assets/images/menu/cnrh.png",
                details: ["Warm", "Cinnamon", "Frosted"],
                rating: 4.9,
                reviews: 234
            },
            {
                id: 14,
                name: "Banana Bread",
                category: "pastries",
                price: 75.00,
                description: "Homemade banana bread with walnuts, moist and perfectly spiced.",
                image: "../assets/images/menu/banan.jpg",
                details: ["Homemade", "Walnut", "Moist"],
                rating: 4.6,
                reviews: 123
            },
            {
                id: 15,
                name: "Cheesecake Slice",
                category: "pastries",
                price: 135.00,
                description: "Rich and creamy New York style cheesecake with graham cracker crust.",
                image: "../assets/images/menu/cheese.webp",
                details: ["Creamy", "NY Style", "Rich"],
                rating: 4.8,
                reviews: 198
            },

            // Sandwiches
            {
                id: 16,
                name: "Grilled Cheese",
                category: "sandwiches",
                price: 145.00,
                description: "Classic grilled cheese with aged cheddar on artisan sourdough bread.",
                image: "../assets/images/menu/grec.jpeg",
                details: ["Cheddar", "Sourdough", "Grilled"],
                rating: 4.5,
                reviews: 112
            },
            {
                id: 17,
                name: "Turkey Club",
                category: "sandwiches",
                price: 185.00,
                description: "Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo.",
                image: "../assets/images/menu/turs.jpg",
                details: ["Turkey", "Bacon", "Triple"],
                rating: 4.7,
                reviews: 167
            },
            {
                id: 18,
                name: "Veggie Wrap",
                category: "sandwiches",
                price: 165.00,
                description: "Fresh vegetables, hummus, and avocado wrapped in a spinach tortilla.",
                image: "../assets/images/menu/vegss.jpg",
                details: ["Veggie", "Hummus", "Fresh"],
                rating: 4.4,
                reviews: 89
            },
            {
                id: 19,
                name: "BLT Sandwich",
                category: "sandwiches",
                price: 155.00,
                description: "Crispy bacon, fresh lettuce, and ripe tomatoes on toasted bread.",
                image: "../assets/images/menu/sad.jpg",
                details: ["Bacon", "Fresh", "Toasted"],
                rating: 4.6,
                reviews: 134
            },
            {
                id: 20,
                name: "Chicken Panini",
                category: "sandwiches",
                price: 175.00,
                description: "Grilled chicken breast with pesto, mozzarella, and roasted peppers.",
                image: "../assets/images/menu/chiks.webp",
                details: ["Grilled", "Pesto", "Mozzarella"],
                rating: 4.8,
                reviews: 156
            }*/


        // Cart functionality
        let cart = [];
        let filteredProducts = [...products];

        // DOM Elements
        const productsGrid = document.getElementById('productsGrid');
        const searchInput = document.getElementById('searchInput');
        const categoryFilter = document.getElementById('categoryFilter');
        const sortSelect = document.getElementById('sortSelect');
        const cartSummary = document.getElementById('cartSummary');
        const cartCounter = document.getElementById('cartCounter');
        const cartItemCount = document.getElementById('cartItemCount');
        const cartTotal = document.getElementById('cartTotal');
        const noResults = document.getElementById('noResults');
        const toast = document.getElementById('toast');

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts(products);
            updateCartDisplay();
            
            // Event listeners
            searchInput.addEventListener('input', handleSearch);
            categoryFilter.addEventListener('change', handleFilter);
            sortSelect.addEventListener('change', handleSort);
        });

        // Render products
        function renderProducts(productsToRender) {
            if (productsToRender.length === 0) {
                productsGrid.innerHTML = '';
                noResults.classList.add('show');
                return;
            }

            noResults.classList.remove('show');
            
            productsGrid.innerHTML = productsToRender.map(product => `
                <div class="product-card" data-category="${product.category}">
                    <div class="product-image">
    <img src="${product.image}" alt="${product.name}">
    <div class="product-category">${getCategoryName(product.category)}</div>
</div>

                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-details">
                            ${product.details.map(detail => `<span class="detail-item">${detail}</span>`).join('')}
                        </div>
                        <div class="rating-system">
                            <div class="coffee-beans" data-product-id="${product.id}">
                                ${generateRatingBeans(product.id, product.rating)}
                            </div>
                            <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
                        </div>
                        <div class="product-footer">
                            <div class="product-price">₱${product.price.toFixed(2)}</div>
                            <button class="add-to-cart" onclick="addToCart(${product.id})">
                                🛒 Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');

            // Add rating functionality
            setupRatingSystem();
        }

        // Generate rating beans (unique rating system)
        function generateRatingBeans(productId, rating) {
            const fullBeans = Math.floor(rating);
            const hasHalfBean = rating % 1 >= 0.5;
            let beansHTML = '';

            for (let i = 1; i <= 5; i++) {
                const filled = i <= fullBeans ? 'filled' : '';
                beansHTML += `<div class="coffee-bean ${filled}" data-rating="${i}" onclick="rateProduct(${productId}, ${i})"></div>`;
            }

            return beansHTML;
        }

        // Setup rating system
        function setupRatingSystem() {
            document.querySelectorAll('.coffee-beans').forEach(ratingContainer => {
                const beans = ratingContainer.querySelectorAll('.coffee-bean');
                
                beans.forEach((bean, index) => {
                    bean.addEventListener('mouseenter', function() {
                        // Light up beans up to hovered one
                        beans.forEach((b, i) => {
                            if (i <= index) {
                                b.style.background = 'linear-gradient(135deg, #D4AF37, #DAA520)';
                                b.style.transform = 'scale(1.1)';
                            } else {
                                b.style.background = '#E0E0E0';
                                b.style.transform = 'scale(1)';
                            }
                        });
                    });

                    bean.addEventListener('mouseleave', function() {
                        // Reset to original rating
                        const productId = ratingContainer.dataset.productId;
                        const product = products.find(p => p.id == productId);
                        const rating = product.rating;
                        
                        beans.forEach((b, i) => {
                            if (i < Math.floor(rating)) {
                                b.style.background = 'linear-gradient(135deg, #8B4513, #A0522D)';
                            } else {
                                b.style.background = '#E0E0E0';
                            }
                            b.style.transform = 'scale(1)';
                        });
                    });
                });
            });
        }

        // Rate product
        function rateProduct(productId, rating) {
            const product = products.find(p => p.id === productId);
            if (product) {
                // Calculate new rating (simple average simulation)
                const newRating = ((product.rating * product.reviews) + rating) / (product.reviews + 1);
                product.rating = Math.round(newRating * 10) / 10;
                product.reviews += 1;
                
                // Re-render products to update rating
                renderProducts(filteredProducts);
                
                showToast(`Thanks for rating ${product.name}!`);
            }
        }

        // Get category display name
        function getCategoryName(category) {
                const categoryMap = {
                'other': 'Others',
                'chicken': 'Chicken',
                'sandwiches': 'Sandwiches'
            };
            return categoryMap[category] || category;
        }

        // Add to cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                const existingItem = cart.find(item => item.id === productId);
                
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({
                        ...product,
                        quantity: 1
                    });
                }
                
                updateCartDisplay();
                showToast(`${product.name} added to cart!`);
                
                // Animate the button
                const button = event.target;
                button.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    button.style.transform = 'scale(1)';
                }, 150);
            }
        }

        // Update cart display
        function updateCartDisplay() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            cartItemCount.textContent = totalItems;
            cartTotal.textContent = totalPrice.toFixed(2);
            cartCounter.textContent = totalItems;
            
            if (totalItems > 0) {
                cartSummary.classList.add('show');
                cartCounter.classList.add('show');
            } else {
                cartSummary.classList.remove('show');
                cartCounter.classList.remove('show');
            }
        }

        // Show cart details
        function showCartDetails() {
            if (cart.length === 0) return;
            
            let cartDetails = "🛒 Your Cart:\n\n";
            cart.forEach(item => {
                cartDetails += `${item.name} x${item.quantity} - ₱${(item.price * item.quantity).toFixed(2)}\n`;
            });
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartDetails += `\nTotal: ₱${total.toFixed(2)}`;
            
            alert(cartDetails);
        }

        // Search functionality
        function handleSearch() {
            const searchTerm = searchInput.value.toLowerCase();
            applyFilters();
        }

        // Filter functionality
        function handleFilter() {
            applyFilters();
        }

        // Sort functionality
        function handleSort() {
            applyFilters();
        }

        // Apply all filters and sorting
        function applyFilters() {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedCategory = categoryFilter.value;
            const sortOption = sortSelect.value;
            
            // Filter products
            filteredProducts = products.filter(product => {
                const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                                    product.description.toLowerCase().includes(searchTerm);
                const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
                
                return matchesSearch && matchesCategory;
            });
            
            // Sort products
            switch (sortOption) {
                case 'name':
                    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'price-low':
                    filteredProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    filteredProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'rating':
                    filteredProducts.sort((a, b) => b.rating - a.rating);
                    break;
            }
            
            renderProducts(filteredProducts);
        }

        // Show toast notification
        function showToast(message) {
            document.getElementById('toastMessage').textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('active');
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

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Focus search with Ctrl+F or Cmd+F
            if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
                e.preventDefault();
                searchInput.focus();
            }
            
            // Clear search with Escape
            if (e.key === 'Escape' && document.activeElement === searchInput) {
                searchInput.value = '';
                handleSearch();
            }
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe product cards for animation
        function observeProductCards() {
            document.querySelectorAll('.product-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s ease';
                observer.observe(card);
            });
        }

        // Initialize animations after rendering
        setTimeout(observeProductCards, 100);
