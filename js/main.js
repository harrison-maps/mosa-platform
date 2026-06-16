// Tailwind custom color config — applied globally
const tailwindConfig = document.createElement('script');
tailwindConfig.textContent = `
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          mosaBlack: '#1a1a2e',
          mosaRed:   '#8B0000',
          mosaGold:  '#D4AF37',
        },
        fontFamily: {
          serif: ['"Playfair Display"', 'Georgia', 'serif'],
        }
      }
    }
  }
`;
document.head.appendChild(tailwindConfig);

// Load header and footer components
async function loadComponent(path, targetId) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error('Failed: ' + path);
    document.getElementById(targetId).innerHTML = await res.text();
    if (targetId === 'header-placeholder') setupMobileMenu();
  } catch (e) {
    console.error(e);
  }
}

function setupMobileMenu() {
  const btn  = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('header-placeholder'))
    loadComponent('components/header.html', 'header-placeholder');
  if (document.getElementById('footer-placeholder'))
    loadComponent('components/footer.html', 'footer-placeholder');
});
