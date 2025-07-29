// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    
    // Add reveal class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('reveal');
        observer.observe(section);
    });
});

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.style.width;
            progressBar.style.width = '0%';
            setTimeout(() => {
                progressBar.style.width = width;
            }, 300);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Download CV functionality
const downloadBtn = document.querySelector('.btn-secondary');
if (downloadBtn && downloadBtn.textContent.includes('Download CV')) {
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // You can add actual CV download functionality here
        alert('CV download functionality can be implemented here. You can link to a PDF file.');
    });
}

// Social media links (update with your actual profiles)
document.addEventListener('DOMContentLoaded', () => {
    const linkedinLink = document.querySelector('.hero-social a[href="#"]:nth-child(2)');
    const githubLink = document.querySelector('.hero-social a[href="#"]:nth-child(3)');
    
    if (linkedinLink) {
        linkedinLink.href = 'https://linkedin.com/in/your-profile'; // Update with your LinkedIn
    }
    
    if (githubLink) {
        githubLink.href = 'https://github.com/your-username'; // Update with your GitHub
    }
});

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to cards
    const cards = document.querySelectorAll('.course-card, .publication-card, .stat-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add a back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    transition: all 0.3s ease;
    z-index: 1000;
`;

document.body.appendChild(backToTopBtn);

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Back to top functionality
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to back to top button
backToTopBtn.addEventListener('mouseenter', () => {
    backToTopBtn.style.transform = 'translateY(-3px)';
    backToTopBtn.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
});

backToTopBtn.addEventListener('mouseleave', () => {
    backToTopBtn.style.transform = 'translateY(0)';
    backToTopBtn.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.3)';
}); 