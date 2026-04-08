// Function to check if the element is in the viewport
function checkVisibility() {
    const items = document.querySelectorAll('.item');
    const windowHeight = window.innerHeight;

    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        // If the item is in the viewport, add the 'visible' class to trigger animation
        if (itemTop <= windowHeight - 150) { // 150px before fully visible
            item.classList.add('visible');
        }
    });
}

// Listen for scroll events to trigger animation
window.addEventListener('scroll', checkVisibility);

// Check visibility when page loads
checkVisibility();
