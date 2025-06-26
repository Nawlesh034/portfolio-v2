// Portfolio JavaScript - Modern Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initLoadingScreen();
    initScrollProgress();
    initMobileMenu();
    initSmoothScrolling();
    initTypingAnimation();
    initScrollAnimations();
    initBackToTop();
    initNavbarScroll();
    initSkillInteractions();
    initPortfolioFilters();
    initContactForm();
});

// Loading Screen
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');

    // Hide loading screen after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            // Remove from DOM after animation
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1000);
    });
}

// Scroll Progress Bar
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        progressBar.style.width = scrollPercent + '%';
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        let isOpen = false;

        mobileMenuBtn.addEventListener('click', function() {
            if (isOpen) {
                // Close menu
                mobileMenu.classList.add('opacity-0', 'invisible');
                mobileMenu.classList.remove('opacity-100', 'visible');
                isOpen = false;

                // Update button icon to hamburger
                this.innerHTML = `
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                `;
            } else {
                // Open menu
                mobileMenu.classList.remove('opacity-0', 'invisible');
                mobileMenu.classList.add('opacity-100', 'visible');
                isOpen = true;

                // Update button icon to X
                this.innerHTML = `
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                `;
            }
        });

        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('opacity-0', 'invisible');
                mobileMenu.classList.remove('opacity-100', 'visible');
                isOpen = false;

                // Reset button icon
                mobileMenuBtn.innerHTML = `
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                `;
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (isOpen && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.add('opacity-0', 'invisible');
                mobileMenu.classList.remove('opacity-100', 'visible');
                isOpen = false;

                // Reset button icon
                mobileMenuBtn.innerHTML = `
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                `;
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Typing Animation
function initTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    const texts = [
        'Frontend Developer',
        'UI/UX Designer',
        'React Specialist',
        'Creative Problem Solver'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeText() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            // Pause at end of text
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }

        setTimeout(typeText, typingSpeed);
    }

    // Start typing animation
    typeText();
}

// Scroll Animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.group, .space-y-8, .space-y-6');
    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in-up');
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// Back to Top Button
function initBackToTop() {
    // Create back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
    `;
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });
}

// Skill Interactions
function initSkillInteractions() {
    const skillCards = document.querySelectorAll('.skill-card');
    const modal = document.getElementById('skill-modal');
    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLevel = document.getElementById('modal-level');
    const modalProgress = document.getElementById('modal-progress');
    const closeModal = document.getElementById('close-modal');

    // Add click event to each skill card
    skillCards.forEach(card => {
        card.addEventListener('click', function() {
            const skill = this.dataset.skill;
            const description = this.dataset.description;
            const level = this.dataset.level;
            const isLearning = this.dataset.learning === 'true';
            const icon = this.querySelector('img').cloneNode(true);

            // Populate modal content
            modalIcon.innerHTML = '';
            modalIcon.appendChild(icon);
            modalTitle.textContent = skill;
            modalDescription.textContent = description;
            modalLevel.textContent = level + '%';

            // Set progress bar width
            setTimeout(() => {
                modalProgress.style.width = level + '%';
            }, 300);

            // Add learning indicator if applicable
            if (isLearning) {
                modalTitle.innerHTML += ' <span class="text-blue-500 text-lg">📚</span>';
            }

            // Show modal with animation
            modal.classList.remove('opacity-0', 'invisible');
            modal.querySelector('.bg-white').classList.remove('scale-95');
            modal.querySelector('.bg-white').classList.add('scale-100');

            // Add pulse animation to clicked card
            this.classList.add('animate-pulse');
            setTimeout(() => {
                this.classList.remove('animate-pulse');
            }, 1000);
        });

        // Add hover sound effect (optional)
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Close modal functionality
    function closeSkillModal() {
        modal.classList.add('opacity-0', 'invisible');
        modal.querySelector('.bg-white').classList.add('scale-95');
        modal.querySelector('.bg-white').classList.remove('scale-100');
        modalProgress.style.width = '0%';
    }

    closeModal.addEventListener('click', closeSkillModal);

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeSkillModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('invisible')) {
            closeSkillModal();
        }
    });

    // Add stagger animation to skill cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    skillCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Portfolio Filters and Interactions
function initPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.portfolio-filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('close-project-modal');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;

            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.remove('bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
                btn.classList.add('bg-white/10');
            });

            this.classList.add('active');
            this.classList.remove('bg-white/10');
            this.classList.add('bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

            // Filter portfolio items
            portfolioItems.forEach(item => {
                const categories = item.dataset.category.split(' ');

                if (filter === 'all' || categories.includes(filter)) {
                    item.style.display = 'block';
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';

                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';

                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Portfolio item animations on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });

    portfolioItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });

    // Close modal functionality
    function closeProjectModal() {
        modal.classList.add('opacity-0', 'invisible');
        modal.querySelector('.bg-gradient-to-br').classList.add('scale-95');
        modal.querySelector('.bg-gradient-to-br').classList.remove('scale-100');
    }

    closeModalBtn.addEventListener('click', closeProjectModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('invisible')) {
            closeProjectModal();
        }
    });
}

// Project Modal Data
const projectData = {
    ecommerce: {
        title: 'Airbnb Clone',
        category: 'Web Application',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: 'A comprehensive booking app where multiple users can log in, register, and list their apartments for booking. Built with secure user authentication, booking management, and image storage capabilities.',
        technologies: ['ReactJS', 'Node.js', 'MongoDB', 'JWT', 'Tailwind CSS', 'Multer'],
        features: [
            'User authentication and authorization with JWT',
            'Apartment listing and booking management',
            'Image storage and handling with Multer',
            'Secure user authentication and authorization',
            'Booking management system',
            'User profile management',
            'Responsive design for all devices',
            'Real-time booking updates'
        ],
        challenges: 'Implementing secure user authentication, booking management, and optimizing image storage for apartment listings.',
        github: '#',
        demo: 'https://airbnc-frontend.vercel.app/'
    },
    taskapp: {
        title: 'AI Form Builder',
        category: 'Web Application',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: 'A Form Builder App where multiple users can generate forms for any purpose using AI prompts. Features payment integration using Strapi for secure transactions and form management.',
        technologies: ['ReactJS', 'NextJS', 'Tailwind CSS', 'Drizzle ORM', 'Neon Postgres', 'Strapi', 'Google Gemini API'],
        features: [
            'AI-powered form generation using prompts',
            'Multiple user support and authentication',
            'Payment integration using Strapi',
            'Secure transaction handling',
            'Form customization and management',
            'Real-time form generation',
            'Responsive design for all devices',
            'Database integration with Neon Postgres'
        ],
        challenges: 'Implementing AI-powered form generation, payment integration using Strapi, and enabling users to handle transactions securely.',
        github: '#',
        demo: 'https://ai-form-generator-beta.vercel.app/'
    },
    banking: {
        title: 'Banki Web App',
        category: 'UI/UX Design',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: 'Modern mobile banking interface design focusing on user experience, security, and accessibility. Created comprehensive design system and interactive prototypes.',
        technologies: ['Figma', 'Adobe XD', 'Principle', 'InVision'],
        features: [
            'Intuitive navigation and user flow',
            'Biometric authentication design',
            'Transaction history and analytics',
            'Bill payment and transfers',
            'Investment portfolio tracking',
            'Accessibility compliance',
            'Dark mode support',
            'Micro-interactions and animations'
        ],
        challenges: 'Balancing security requirements with user-friendly design and ensuring accessibility.',
        github: '#',
        demo: 'https://banki-web-app.vercel.app/'
    },
    weather: {
        title: 'React Redux App',
        category: 'Web Application',
        image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: 'Interactive weather dashboard with beautiful data visualizations, forecasts, and location-based weather information.',
        technologies: ['JavaScript', 'Chart.js', 'OpenWeather API', 'CSS3', 'HTML5'],
        features: [
            'Current weather conditions',
            '7-day weather forecast',
            'Interactive weather maps',
            'Location-based weather data',
            'Weather alerts and notifications',
            'Historical weather data',
            'Beautiful data visualizations',
            'Responsive design'
        ],
        challenges: 'Creating smooth animations and handling large datasets for weather visualizations.',
        github: '#',
        demo: 'https://react-redux-phi-rust.vercel.app/'
    },
    foodapp: {
        title: 'Quiz App',
        category: 'Mobile Application',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: 'Complete food delivery mobile application with real-time tracking, payment integration, and restaurant management features.',
        technologies: ['React Native', 'Firebase', 'Google Maps API', 'Stripe', 'Redux'],
        features: [
            'Restaurant discovery and menus',
            'Real-time order tracking',
            'Multiple payment options',
            'User reviews and ratings',
            'Push notifications',
            'Delivery route optimization',
            'Restaurant dashboard',
            'Customer support chat'
        ],
        challenges: 'Implementing real-time tracking and optimizing app performance for smooth user experience.',
        github: '#',
        demo: 'https://quiz-mauve-six.vercel.app/'
    },
    portfolio: {
        title: 'Creative Portfolio',
        category: 'Website Design',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: 'Modern portfolio website with smooth animations, interactive elements, and responsive design showcasing creative work.',
        technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'GSAP', 'Intersection Observer'],
        features: [
            'Smooth scroll animations',
            'Interactive project showcases',
            'Responsive grid layouts',
            'Contact form integration',
            'SEO optimization',
            'Fast loading performance',
            'Cross-browser compatibility',
            'Accessibility features'
        ],
        challenges: 'Creating smooth animations while maintaining performance and ensuring cross-browser compatibility.',
        github: '#',
        demo: '#'
    }
};

// // Open Project Modal
function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');

    modalContent.innerHTML = `
        <div class="grid lg:grid-cols-2 gap-8">
            <div>
                <img src="${project.image}" alt="${project.title}" class="w-full h-64 lg:h-80 object-cover rounded-xl mb-6" />
                <div class="flex gap-4">
                    <a href="${project.demo}" class="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-center font-semibold">
                        Live Demo
                    </a>
                    <a href="${project.github}" class="flex-1 px-6 py-3 border border-gray-400 text-gray-300 rounded-lg hover:bg-gray-400 hover:text-gray-900 transition-all duration-300 text-center font-semibold">
                        GitHub
                    </a>
                </div>
            </div>
            <div class="text-white">
                <div class="mb-4">
                    <span class="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">${project.category}</span>
                </div>
                <h2 class="text-3xl font-bold mb-4">${project.title}</h2>
                <p class="text-gray-300 mb-6 leading-relaxed">${project.description}</p>

                <div class="mb-6">
                    <h3 class="text-xl font-semibold mb-3">Technologies Used</h3>
                    <div class="flex flex-wrap gap-2">
                        ${project.technologies.map(tech => `<span class="px-3 py-1 bg-white/10 text-white text-sm rounded-full">${tech}</span>`).join('')}
                    </div>
                </div>

                <div class="mb-6">
                    <h3 class="text-xl font-semibold mb-3">Key Features</h3>
                    <ul class="space-y-2">
                        ${project.features.map(feature => `<li class="flex items-start"><span class="text-blue-400 mr-2">•</span><span class="text-gray-300">${feature}</span></li>`).join('')}
                    </ul>
                </div>

                <div>
                    <h3 class="text-xl font-semibold mb-3">Challenges & Solutions</h3>
                    <p class="text-gray-300 leading-relaxed">${project.challenges}</p>
                </div>
            </div>
        </div>
    `;

    // Show modal
    modal.classList.remove('opacity-0', 'invisible');
    modal.querySelector('.bg-gradient-to-br').classList.remove('scale-95');
    modal.querySelector('.bg-gradient-to-br').classList.add('scale-100');
}

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const messageText = document.getElementById('message-text');

    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject') || 'New Contact Form Message';
        const message = formData.get('message');

        // Basic validation
        if (!name || !email || !message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="relative z-10">Sending...</span>';
        submitBtn.disabled = true;

        // Method 1: Using Formspree (Recommended - Easier Setup)
        // Uncomment this section and replace YOUR_FORM_ID with your Formspree form ID
        /*
        fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;

                // Show success message
                showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');

                // Reset form
                contactForm.reset();

                // Add success animation to form
                contactForm.classList.add('animate-pulse');
                setTimeout(() => {
                    contactForm.classList.remove('animate-pulse');
                }, 1000);
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.log('FAILED...', error);

            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            // Show error message
            showFormMessage('Sorry, there was an error sending your message. Please try again later.', 'error');
        });
        */

        // Method 2: Using EmailJS (More Complex Setup)
        // Uncomment this section and configure EmailJS
        /*
        // Initialize EmailJS (add this at the top of the function)
        emailjs.init("YOUR_PUBLIC_KEY");

        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_name: 'Nawlesh Nand',
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);

                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;

                // Show success message
                showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');

                // Reset form
                contactForm.reset();

                // Add success animation to form
                contactForm.classList.add('animate-pulse');
                setTimeout(() => {
                    contactForm.classList.remove('animate-pulse');
                }, 1000);
            })
            .catch(function(error) {
                console.log('FAILED...', error);

                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;

                // Show error message
                showFormMessage('Sorry, there was an error sending your message. Please try again later.', 'error');
            });
        */

        // Temporary fallback - Remove this when you implement one of the above methods
        setTimeout(() => {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            // Show message asking to configure form
            showFormMessage('Please configure the contact form by following the setup instructions in FORMSPREE_SETUP.md or EMAILJS_SETUP.md', 'error');
        }, 1000);
    });

    // Form field animations
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });

        input.addEventListener('input', function() {
            if (this.value) {
                this.classList.remove('border-red-300');
                this.classList.add('border-green-300');
            }
        });
    });
}

// Helper Functions
function showFormMessage(message, type) {
    const formMessage = document.getElementById('form-message');
    const messageText = document.getElementById('message-text');

    messageText.textContent = message;
    formMessage.classList.remove('hidden');

    if (type === 'success') {
        formMessage.classList.remove('bg-red-100', 'text-red-700', 'border-red-300');
        formMessage.classList.add('bg-green-100', 'text-green-700', 'border-green-300', 'border');
    } else {
        formMessage.classList.remove('bg-green-100', 'text-green-700', 'border-green-300');
        formMessage.classList.add('bg-red-100', 'text-red-700', 'border-red-300', 'border');
    }

    // Auto hide after 5 seconds
    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 5000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Scroll to Top Function (for footer button)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}