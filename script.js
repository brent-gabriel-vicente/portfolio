const words = ["a Student", "an IT", "a Developer"];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const typedText = document.getElementById("typed-text");
      if (!typedText) return;

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

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();

  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

  const vantaElement = document.getElementById("vanta-bg");
  if (vantaElement && typeof VANTA !== "undefined" && VANTA.NET) {
    VANTA.NET({
      el: "#vanta-bg",
      backgroundAlpha: 1,
      backgroundColor: 0x0,
      color: 0xff,
      maxDistance: 19,
      points: 10,
      spacing: 15,
      showDots: true,
      mouseControls: true,
      touchControls: false,
      gyroControls: false,
      minHeight: document.documentElement.scrollHeight,
      minWidth: 0,
      scale: 1,
      scaleMobile: 1,
    });
  }
});

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const certImage = document.getElementById("cert-image");
    const closeBtn = document.getElementById("modal-close");

    certImage.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.alt = this.alt;
    };

    closeBtn.onclick = function() {
      modal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };