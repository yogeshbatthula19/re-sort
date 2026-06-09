document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Custom Cursor Logic
    const cursor = document.querySelector('.custom-cursor');
    
    // Only enable custom cursor if it's not a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isTouchDevice && cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Add hover effects for custom cursor
        const hoverables = document.querySelectorAll('a, button, input, select, textarea, .service-card, .project-card, .range-slider, .checkbox-container, .hero-sticker-img, .brand-strip-item');
        
        hoverables.forEach(item => {
            item.addEventListener('mouseenter', () => {
                cursor.classList.add('hovered');
            });
            item.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovered');
            });
        });
    } else if (cursor) {
        cursor.style.display = 'none'; // Hide if touch device
    }



    // Contact Form Submission Mock
    const contactForm = document.getElementById('booking-lead-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect form details for validation/logging if needed
            const resortName = document.getElementById('resort-name').value;
            const contactName = document.getElementById('contact-name').value;
            const contactEmail = document.getElementById('contact-email').value;

            if (resortName && contactName && contactEmail) {
                contactForm.classList.add('submitted');
            }
        });
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Scroll Header Styling
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        }
    }

    // Video play/pause on hover & click
    const videos = document.querySelectorAll('.looping-video');
    videos.forEach(video => {
        const container = video.closest('.phone-screen') || video.closest('.cinematic-player-box');
        if (container) {
            container.addEventListener('mouseenter', () => {
                video.play().catch(() => {});
            });
            container.addEventListener('mouseleave', () => {
                video.pause();
            });
            container.addEventListener('click', () => {
                if (video.paused) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            });
        }
    });
});
