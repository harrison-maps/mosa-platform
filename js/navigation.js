// Back Button Navigation Handler
function initializeBackButton() {
    const backButton = document.getElementById('backBtn');
    
    if (!backButton) return;
    
    // Show/hide back button based on whether there's history
    if (window.history.length <= 1) {
        backButton.style.display = 'none';
    }
    
    // Add click handler for back navigation
    backButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.back();
    });
}

// Initialize back button when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeBackButton();
});
