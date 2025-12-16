// Mobile Navigation Fix
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        // Toggle menu on button click
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle the show class
            navLinks.classList.toggle('show');
            
            // Change icon
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('show')) {
                icon.className = 'fas fa-times';
                document.body.style.overflow = 'hidden'; // Prevent background scroll
            } else {
                icon.className = 'fas fa-bars';
                document.body.style.overflow = ''; // Restore scroll
            }
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('show');
                menuToggle.querySelector('i').className = 'fas fa-bars';
                document.body.style.overflow = ''; // Restore scroll
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.navbar') && navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
                menuToggle.querySelector('i').className = 'fas fa-bars';
                document.body.style.overflow = ''; // Restore scroll
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
                menuToggle.querySelector('i').className = 'fas fa-bars';
                document.body.style.overflow = ''; // Restore scroll
            }
        });
    }
    
    // Set current year in footer
    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});