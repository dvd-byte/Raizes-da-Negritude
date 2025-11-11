// Seleciona todas as sections
const sections = document.querySelectorAll("section");

const animarScroll = () => {
  const triggerBottom = window.innerHeight * 0.85; // ponto onde começa a animação
  const triggerTop = window.innerHeight * 0.15; // ponto onde começa o fade-out

  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    const boxBottom = sec.getBoundingClientRect().bottom;

    // Se a section entrou na área visível → aparece (fade in)
    if (boxTop < triggerBottom && boxBottom > triggerTop) {
      sec.classList.add("visible");
    } else {
      // Se saiu da área visível → some (fade out)
      sec.classList.remove("visible");
    }
  });
};

// Escuta o scroll e roda a função
window.addEventListener("scroll", animarScroll);
animarScroll();
