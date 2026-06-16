/**
 * MOSA Platform - Main Component Injector
 * Dynamically loads and injects reusable components into all pages
 */

document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('header-placeholder', 'components/header.html');
    await loadComponent('footer-placeholder', 'components/footer.html');
    initializeMobileMenu();
});

/**
 * Load and inject a component into a target element
 * @param {string} placeholderId - ID of the target element
 * @param {string} componentPath - Path to the component HTML file
 */
async function loadComponent(placeholderId, componentPath) {
    try {
        const placeholder = document.getElementById(placeholderId);
        if (!placeholder) {
            console.warn(`Placeholder ${placeholderId} not found`);
            return;
        }
        
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`Failed to load ${componentPath}: ${response.statusText}`);
        }
        
        const html = await response.text();
        placeholder.innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

/**
 * Initialize mobile menu toggle functionality
 */
function initializeMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!toggleBtn || !mobileMenu) return;
    
    toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close menu when a link is clicked
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

/**
 * Utility: Smooth scroll to element
 */
function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Utility: Add theme switching (light/dark mode)
 */
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

// Apply saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
}