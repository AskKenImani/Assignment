// Countdown function for a single timer
function startCountdown(timerId, hours, minutes, seconds) {
    const countdown = setInterval(function () {
        if (seconds > 0) {
            seconds--;
        } else if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
        } else {
            clearInterval(countdown);
        }

        document.getElementById(timerId).textContent = `${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Start countdown for all timers on page load
window.onload = function () {
    // Select all timer elements
    const timers = document.querySelectorAll('.timer');
    
    // Start countdown for each timer (you can customize the hours, minutes, and seconds for each timer)
    timers.forEach((timer, index) => {
        // Customize the countdown time for each timer
        let hours = 8;
        let minutes = 15;
        let seconds = 20;
        
        // Set a unique ID for each timer
        const timerId = `timer${index + 1}`;
        startCountdown(timerId, hours, minutes, seconds);
    });
};

// Function to show dropdown on hover
function toggleDropdown(show) {
    const dropdown = document.querySelector('.dropdown1');
    if (show) {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

// Get the element for the help section
const questionElement = document.querySelector('.question');

// Add event listeners for hover effect
questionElement.addEventListener('mouseover', function() {
    toggleDropdown(true); // Show dropdown when mouse is over the question element
});

questionElement.addEventListener('mouseout', function() {
    toggleDropdown(false); // Hide dropdown when mouse leaves the question element
});
