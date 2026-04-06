document.addEventListener('DOMContentLoaded', () => {
    // Navbar Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Update icon based on menu state
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons(); // Regrow icons
    });

    // Close mobile menu when a link is clicked
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });

    // Intersection Observer for Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Unobserve after revealing to prevent repeated animations
                // observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15, // Reveal when 15% of element is visible
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Contact Form Handling (Demo)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            alert(`Thanks for reaching out, ${formData.get('user_name') || 'Fitness Enthusiast'}! We will get back to you soon.`);
            contactForm.reset();
        });
    }

    // Sticky Navbar transparency change on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(13, 13, 13, 0.95)';
            header.style.padding = '5px 0';
        } else {
            header.style.background = 'rgba(13, 13, 13, 0.9)';
            header.style.padding = '0';
        }
    });
});
