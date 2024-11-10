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



const articlesPerPage = 4;
let currentPage = 1;

const articles = document.querySelectorAll('.article-card-wrapper');
const totalPages = Math.max(1, Math.ceil(articles.length / articlesPerPage)); // Ensure totalPages is at least 1
const pageNumberDisplay = document.getElementById('page-number');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

// Function to show only articles for the current page
function showPage(page) {
    // Hide all articles initially
    articles.forEach(article => article.style.display = 'none');

    // Calculate start and end index for the articles to show
    const start = (page - 1) * articlesPerPage;
    const end = start + articlesPerPage;

    // Display only the articles for the current page
    for (let i = start; i < end && i < articles.length; i++) {
        articles[i].style.display = 'block';
    }

    // Update page number display and button states
    pageNumberDisplay.textContent = `Page ${page} of ${totalPages}`;

    // Disable both buttons if there's only one page
    if (totalPages === 1) {
        prevButton.disabled = true;
        nextButton.disabled = true;
    } else {
        prevButton.disabled = page === 1;
        nextButton.disabled = page === totalPages;
    }
}




// Pagination button event listeners
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
});



// Initialize the first page view for smaller article pagination
showPage(currentPage);

document.getElementById('contactForm').addEventListener('submit', function (event) {
    if (!event.target.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }
    event.target.classList.add('was-validated');
});
