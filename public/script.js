document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        const banner = document.getElementById("banner");
        banner.classList.add("show");
        setTimeout(() => banner.classList.remove("show"), 3000); // Hide the banner after 3 seconds
        form.reset(); // Clear the form after submission
    });
});