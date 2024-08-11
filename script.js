// Function to filter entries based on user input
function filterEntries() {
    // Get the value from the search input
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    
    // Get all entry sections
    const entries = document.getElementsByClassName('entry');

    // Loop through all entries and hide those that don't match the query
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        
        // Check if the entry contains the search keyword or date
        if (entry.innerHTML.toLowerCase().indexOf(filter) > -1) {
            entry.style.display = ''; // Show the entry
        } else {
            entry.style.display = 'none'; // Hide the entry
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(function(accordion) {
        accordion.addEventListener("click", function() {
            this.classList.toggle("active");

            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.classList.remove("show");
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.classList.add("show");
            }
        });
    });
});








