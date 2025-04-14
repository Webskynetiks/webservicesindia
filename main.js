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





         




  

  // window.addEventListener('DOMContentLoaded', () => {
  //   const whatsappBtn = document.querySelector('a[href*="wa.me"]');

  //   if (whatsappBtn) {
  //     // Remove 'bottom-5' if it exists
  //     whatsappBtn.classList.remove('bottom-5');

  //     // Set position to 70% from the top
  //     whatsappBtn.style.top = '60vh';
  //   }
  // });




        