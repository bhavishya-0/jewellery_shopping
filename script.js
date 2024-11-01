
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for navigation links
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });

                    // Update active link
                    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // Form submission
            const contactForm = document.getElementById('contact-form');
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const formData = new FormData(contactForm);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');

                // Here you would typically send this data to a server
                console.log('Form submitted:', { name, email, message });

                // Show a success message
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            });
        });
