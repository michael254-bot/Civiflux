document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show'); // close menu after click
  });
});


function updateClock() {
    const clockElement = document.getElementById('real-time-clock');
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Add leading zeros
    const displayHours = hours < 10 ? '0' + hours : hours;
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the time with the AM/PM suffix
    clockElement.textContent = `${displayHours}:${displayMinutes}:${displaySeconds} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();


