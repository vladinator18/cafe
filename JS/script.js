// Smooth scroll and active nav state
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Smooth scroll (if sections exist)
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// Hide loading screen after page loads
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Wait 2 seconds, then fade out
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 2000);
});