/**
 * PICK.IT Hero Section - Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Initialize Elements
    // ========================================
    
    const menuLinks = document.querySelectorAll('.menu-link');
    const logo = document.querySelector('.logo');
    const btnExplore = document.querySelector('.btn-explore');
    const mainImage = document.querySelector('.main-image');
    
    // ========================================
    // Menu Links Hover Interaction
    // ========================================
    
    menuLinks.forEach(function(link) {
        // Mouse enter - reduce opacity
        link.addEventListener('mouseenter', function() {
            this.style.opacity = '0.7';
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'all 0.25s ease';
        });
        
        // Mouse leave - restore opacity
        link.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ========================================
    // Logo Hover Interaction
    // ========================================
    
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.opacity = '0.7';
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'all 0.25s ease';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
    }
    
    // ========================================
    // Explore Button Interaction
    // ========================================
    
    if (btnExplore) {
        btnExplore.addEventListener('mouseenter', function() {
            this.style.opacity = '0.85';
            this.style.transform = 'scale(1.03)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
            this.style.transition = 'all 0.25s ease';
        });
        
        btnExplore.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
        
        // Click event - log and visual feedback
        btnExplore.addEventListener('click', function(e) {
            e.preventDefault();
            
            console.log('Explore Picks button clicked - Navigating to picks section...');
            
            // Visual feedback animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.03)';
            }, 100);
            
            // Simulate navigation (could add smooth scroll here)
            // Example: window.scrollTo({ top: 800, behavior: 'smooth' });
        });
    }
    
    // ========================================
    // Main Image Hover Effect
    // ========================================
    
    if (mainImage) {
        mainImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.4s ease';
            this.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.15)';
        });
        
        mainImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.1)';
        });
    }
    
    // ========================================
    // Keyboard Accessibility
    // ========================================
    
    // Add focus styles for keyboard navigation
    const allInteractiveElements = document.querySelectorAll('a, button, .btn-explore');
    
    allInteractiveElements.forEach(function(element) {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #000000';
            this.style.outlineOffset = '3px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // ========================================
    // Console Log for Page Load
    // ========================================
    
    console.log('PICK.IT Hero Section loaded successfully.');
    
});