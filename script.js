const words = ["a Student", "an IT", "a Developer"];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const typedText = document.getElementById("typed-text");

      if (wordIndex >= words.length) wordIndex = 0;

      let currentWord = words[wordIndex];

      if (!isDeleting) {
        typedText.textContent = currentWord.substring(0, letterIndex++);
      } else {
        typedText.textContent = currentWord.substring(0, letterIndex--);
      }

      if (!isDeleting && letterIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
      } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex++;
        setTimeout(typeEffect, 500);
      } else {
        setTimeout(typeEffect, isDeleting ? 100 : 200);
      }
    }

    function showSection(sectionId) {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => section.style.display = 'none');

      const selectedSection = document.getElementById(sectionId);
      selectedSection.style.display = 'block';

      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(link => link.classList.remove('active'));

      const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
      if (activeLink) activeLink.classList.add('active');
    }

    document.addEventListener("DOMContentLoaded", () => {
      typeEffect();
      showSection('home');
    });
    