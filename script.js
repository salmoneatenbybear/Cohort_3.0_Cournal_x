// Function to filter entries based on user input
function filterEntries() {
    const input = document.getElementById('searchInput').value.toLowerCase().trim();
    const entries = document.querySelectorAll('.entry');

    // Loop through all entry sections
    entries.forEach(entry => {
        const entryText = entry.textContent.toLowerCase();

        // Check if entry text includes the search term
        const matchesText = entryText.includes(input);

        // Show or hide the entry based on match
        entry.style.display = (matchesText || input === '') ? '' : 'none';
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

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 8,  
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "shape": {
            "type": "image",  
            "image": {
                "src": "monkey.png",  
                "width": 1,  
                "height": 1  
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 10,  
            "random": true
        },
        "move": {
            "enable": true,
            "speed": 4,  
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        }
    },
    "retina_detect": true
});

// Function to toggle light and dark mode
function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    
    
    body.classList.toggle('light-mode');

    
    const icon = themeToggleBtn.querySelector('i');
    if (body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }

    
    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
}


document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        const icon = document.getElementById('themeToggleBtn').querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});


document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
