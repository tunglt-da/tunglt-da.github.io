// ─── Navbar scroll effect ───
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);

    const backTop = document.getElementById('back-to-top');
    if (backTop) backTop.classList.toggle('show', window.scrollY > 300);
});

// ─── Back to top ───
const backTop = document.getElementById('back-to-top');
if (backTop) {
    backTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ─── Smooth scroll for anchor links ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
            }
        }
    });
});