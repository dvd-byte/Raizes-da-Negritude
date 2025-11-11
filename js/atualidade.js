const sections = document.querySelectorAll("section");

const animarScroll = () => {
  const triggerBottom = window.innerHeight * 0.85; // ponto onde começa a animação
  const triggerTop = window.innerHeight * 0.20; // ponto onde começa o fade-out

  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    const boxBottom = sec.getBoundingClientRect().bottom;

    // fade in
    if (boxTop < triggerBottom && boxBottom > triggerTop) {
      sec.classList.add("visible");
    } else {
      // fade out
      sec.classList.remove("visible");
    }
  });
};

// leitura do scroll
window.addEventListener("scroll", animarScroll);
animarScroll();

