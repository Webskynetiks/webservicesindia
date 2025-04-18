// Dynamically load SMTPJS script
(function() {
    const script = document.createElement('script');
    script.src = 'https://smtpjs.com/v3/smtp.js';
    script.async = true;
    document.head.appendChild(script);
})();


// Loader functionality
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('hidden');
    }
});

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Services dropdown functionality
    const servicesBtn = document.getElementById('services-btn');
    const servicesDropdown = document.getElementById('services-dropdown');
    let timeoutId;

    if (servicesBtn && servicesDropdown) {
        // Main dropdown - mouse enter/leave
        servicesBtn.parentElement.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId);
            servicesDropdown.classList.remove('hidden');
        });

        servicesBtn.parentElement.addEventListener('mouseleave', (e) => {
            // Check if the mouse is moving to the dropdown
            if (!e.relatedTarget || !servicesDropdown.contains(e.relatedTarget)) {
                timeoutId = setTimeout(() => {
                    if (!servicesDropdown.matches(':hover')) {
                        servicesDropdown.classList.add('hidden');
                    }
                }, 100);
            }
        });

        // Also add click functionality for mobile/touch devices
        servicesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            servicesDropdown.classList.toggle('hidden');
        });

        // Keep dropdown visible when hovering over it
        servicesDropdown.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId);
            servicesDropdown.classList.remove('hidden');
        });

        servicesDropdown.addEventListener('mouseleave', (e) => {
            // Check if the mouse is moving back to the button
            if (!e.relatedTarget || !servicesBtn.contains(e.relatedTarget)) {
                timeoutId = setTimeout(() => {
                    servicesDropdown.classList.add('hidden');
                }, 100);
            }
        });
    }

    // Add event listeners for submenu items
    document.querySelectorAll('.submenu-parent').forEach(parent => {
        const submenu = parent.querySelector('.submenu');
        
        if (submenu) {
            parent.addEventListener('mouseenter', () => {
                submenu.style.display = 'block';
            });
            
            parent.addEventListener('mouseleave', () => {
                submenu.style.display = 'none';
            });
            
            // Add click functionality for mobile/touch devices
            const parentLink = parent.querySelector('a');
            if (parentLink) {
                parentLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                });
            }
        }
    });

    // Mobile dropdown toggle
    const mobileDropdownBtn = document.getElementById('mobile-dropdown-btn');
    const mobileDropdown = document.getElementById('mobile-dropdown');

    if (mobileDropdownBtn && mobileDropdown) {
        mobileDropdownBtn.addEventListener('click', () => {
            mobileDropdown.classList.toggle('hidden');
        });
    }
    
    // Mobile submenu toggles
    document.querySelectorAll('.mobile-submenu-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const submenu = btn.nextElementSibling;
            if (submenu) {
                submenu.classList.toggle('hidden');
                
                // Rotate the arrow icon
                const arrow = btn.querySelector('svg');
                if (arrow) {
                    arrow.style.transform = submenu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
                    arrow.style.transition = 'transform 0.3s ease';
                }
            }
        });
    });
});



const backToTopBtn = document.getElementById('backToTopBtn');

         // Clears any inline left if set

// Optional: adjust bottom and size too
backToTopBtn.style.bottom = '100px';    // Distance from bottom
backToTopBtn.style.height = '40px';
backToTopBtn.style.padding = '8px 12px';
backToTopBtn.style.fontSize = '16px';

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  if (scrollPercent > 70) {
    backToTopBtn.classList.remove('hidden');
  } else {
    backToTopBtn.classList.add('hidden');
  }
});




// Consultation Form Popup
const consultationForm = {
    init() {
        // Create the popup HTML structure with enhanced design
        const popupHTML = `
            <div id="consultation-popup" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 transition-opacity duration-300">
                <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transition-all duration-300 scale-95 opacity-0">
                    <div class="flex justify-between items-center mb-6">
                        <div class="flex items-center">
                            <div class="bg-[#015790] p-2 rounded-lg mr-3">
                                <i class="fas fa-headset text-white text-xl"></i>
                            </div>
                            <h2 class="text-2xl font-bold text-[#015790]">Free Consultation</h2>
                        </div>
                        <button id="close-popup" class="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                    <form id="consultation-form" class="space-y-5">
                        <div class="relative">
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <div class="relative">
                                <i class="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <input type="text" id="name" name="name" required
                                    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#015790] focus:border-[#015790] transition-all duration-200"
                                    placeholder="Enter your name">
                            </div>
                        </div>
                        
                        <div class="relative">
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <div class="relative">
                                <i class="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <input type="email" id="email" name="email" required
                                    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#015790] focus:border-[#015790] transition-all duration-200"
                                    placeholder="Enter your email">
                            </div>
                        </div>
                        
                        <div class="relative">
                            <label for="mobile" class="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                            <div class="relative">
                                <i class="fas fa-phone absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <input type="tel" id="mobile" name="mobile" required
                                    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#015790] focus:border-[#015790] transition-all duration-200"
                                    placeholder="Enter your mobile number">
                            </div>
                        </div>
                        
                        <div class="relative">
                            <label for="services" class="block text-sm font-medium text-gray-700 mb-1">Services</label>
                            <div class="relative">
                                <i class="fas fa-briefcase absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <select id="services" name="services" required
                                    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#015790] focus:border-[#015790] transition-all duration-200 appearance-none bg-white">
                                    <option value="">Select a service</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Graphic Design">Graphic Design</option>
                                    <option value="Content Writing">Content Writing</option>
                                </select>
                                <i class="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                            </div>
                        </div>
                        
                        <div class="relative">
                            <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <div class="relative">
                                <i class="fas fa-comment absolute left-3 top-3 text-gray-400"></i>
                                <textarea id="subject" name="subject" rows="3" required
                                    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#015790] focus:border-[#015790] transition-all duration-200"
                                    placeholder="Enter your message"></textarea>
                            </div>
                        </div>
                        
                        <button type="submit"
                            class="w-full bg-[#015790] text-white py-3 px-4 rounded-lg hover:bg-[#014a7a] transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#015790] focus:ring-offset-2 flex items-center justify-center">
                            <span>Submit Request</span>
                            <i class="fas fa-paper-plane ml-2"></i>
                        </button>
                    </form>
                </div>
            </div>
        `;

        // Add the popup to the body
        document.body.insertAdjacentHTML('beforeend', popupHTML);

        // Add event listeners
        document.querySelectorAll('a[href="tel:+919212378780"]').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.showPopup();
            });
        });

        document.getElementById('close-popup').addEventListener('click', () => {
            this.hidePopup();
        });

        document.getElementById('consultation-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });

        // Close popup when clicking outside
        document.getElementById('consultation-popup').addEventListener('click', (e) => {
            if (e.target.id === 'consultation-popup') {
                this.hidePopup();
            }
        });
    },

    showPopup() {
        const popup = document.getElementById('consultation-popup');
        const formContainer = popup.querySelector('div');
        
        popup.classList.remove('hidden');
        // Trigger reflow
        void popup.offsetWidth;
        
        popup.classList.add('opacity-100');
        formContainer.classList.remove('scale-95', 'opacity-0');
        formContainer.classList.add('scale-100', 'opacity-100');
    },

    hidePopup() {
        const popup = document.getElementById('consultation-popup');
        const formContainer = popup.querySelector('div');
        
        popup.classList.remove('opacity-100');
        formContainer.classList.remove('scale-100', 'opacity-100');
        formContainer.classList.add('scale-95', 'opacity-0');
        
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 300);
    },

    handleSubmit() {
        const form = document.getElementById('consultation-form');
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = `
            <span>Submitting...</span>
            <i class="fas fa-spinner fa-spin ml-2"></i>
        `;
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());



        Email.send({
            Host: "smtp.elasticemail.com",
            Port: 2525,
            Username: "sales@skynetiks.com",
            Password: "A67B232604CAF3ECE4584F9DE30A17054104", // ⚠️ Replace with secure backend for production
            To: "sales@skynetiks.com",
            From: "sales@skynetiks.com",
            Subject: `New Enquiry: ${data.services}`,
            Body: `
               <b>Name:</b> ${data.name}<br/>
                <b>Email:</b> ${data.email}<br/>
                <b>Mobile:</b> ${data.mobile}<br/>
                <b>Services:</b> ${data.services}<br/>
                <b>Subject:</b> ${data.subject}<br/>
            `
          }).then(message => {
            console.log("SMTPJS response:", message);
            if (message === "OK") {
              alert("Your enquiry has been sent successfully!");
              document.getElementById("consultation-form").reset();
            
            } else {
              alert("Failed to send your enquiry. Please try again.");
            }
          }).catch(error => {
            console.error("Email sending error:", error);
            alert("Something went wrong while sending the email.");
          });
      

        // Simulate API call
        setTimeout(() => {
            // Here you would typically send the data to your server
            console.log('Form submitted:', data);
            
            // Show success message
            submitButton.innerHTML = `
                <span>Success!</span>
                <i class="fas fa-check ml-2"></i>
            `;
            
            setTimeout(() => {
                this.hidePopup();
                // Reset form
                form.reset();
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            }, 1500);
        }, 1500);
    }
};

// Initialize the consultation form when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    consultationForm.init();
});







         




  





        