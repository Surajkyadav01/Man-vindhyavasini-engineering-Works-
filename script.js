const themeToggle = document.getElementById('theme-toggle');
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const body = document.body;

// Theme Toggle Logic
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-theme')) {
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});

// Three-dot Menu Logic
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// Lightbox (Zoom Photo)
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    lightbox.style.display = 'flex';
}