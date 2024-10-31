document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.previousElementSibling; // Select the expandable content
        const isVisible = content.style.display === 'block';
        
        // Toggle the display state
        content.style.display = isVisible ? 'none' : 'block';
        
        // Update button text based on content visibility
        this.textContent = isVisible ? 'Read More' : 'Show Less';
    });
});
