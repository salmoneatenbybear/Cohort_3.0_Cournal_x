// Function to filter entries based on user input and section
function filterEntries() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const sectionFilter = document.getElementById('sectionFilter').value.toLowerCase();
    const entries = document.querySelectorAll('.entry');

    entries.forEach(entry => {
        const entryText = entry.textContent.toLowerCase();
        const entrySection = entry.getAttribute('data-section').toLowerCase();

        const matchesText = entryText.includes(input);
        const matchesSection = !sectionFilter || entrySection === sectionFilter;

        entry.style.display = (matchesText && matchesSection) ? '' : 'none';
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(accordion => {
        accordion.addEventListener("click", () => {
            const isActive = accordion.classList.toggle("active");
            const panel = accordion.nextElementSibling;

            accordion.setAttribute("aria-expanded", isActive);

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.classList.remove("show");
            } else {
                panel.style.maxHeight = `${panel.scrollHeight}px`;
                panel.classList.add("show");
            }
        });
    });
});

// Function to toggle the calendar display
function toggleCalendar() {
    const calendarContainer = document.getElementById("calendar-container");
    calendarContainer.style.display = (calendarContainer.style.display === "none" || calendarContainer.style.display === "") ? "block" : "none";
}
