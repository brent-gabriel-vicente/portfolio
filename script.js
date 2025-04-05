function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');

    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));

    const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    showSection('home');
});
