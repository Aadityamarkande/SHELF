document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    window.openMobileMenu = function() {
        const overlay = document.getElementById('mobileMenuOverlay');
        overlay.classList.add('active');
    };

    window.closeMobileMenu = function() {
        const overlay = document.getElementById('mobileMenuOverlay');
        overlay.classList.remove('active');
    };
});