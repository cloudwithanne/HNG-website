function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000); // Update the clock every second

// Initial call to display the clock immediately on page load
updateClock();