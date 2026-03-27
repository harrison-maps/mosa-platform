// Tailwind Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                mosaBlack: '#111111',
                mosaGold: '#FFD700',
                mosaRed: '#CC0000',
                mosaWhite: '#FFFFFF',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            }
        }
    }
}

// Function to load external HTML content into a target element
async function loadComponent(componentPath, targetElementId) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
        const html = await response.text();
        document.getElementById(targetElementId).innerHTML = html;
        
        // Setup mobile menu listener after header is loaded
        if (targetElementId === 'header-placeholder') {
            setupMobileMenu();
        }
    } catch (error) {
        console.error("Error loading component:", error);
    }
}

function setupMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    if(btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Load Header and Footer on all pages that have the placeholders
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        loadComponent('components/header.html', 'header-placeholder');
    }

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        loadComponent('components/footer.html', 'footer-placeholder');
    }
});
