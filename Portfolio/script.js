// ==== CÍRCULOS DE HABILIDADES ====
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".circulo").forEach((circulo) => {
    const porcentagem = parseInt(circulo.getAttribute("data-porcentagem"));
    const angulo = (porcentagem / 100) * 360;
    circulo.style.background = `conic-gradient(#4caf50 ${angulo}deg, #e0e0e0 ${angulo}deg 360deg)`;
  });

  // ==== FILTRO DE TRABALHOS ====
  const botoesFiltro = document.querySelectorAll(".filtros button");
  const trabalhos = document.querySelectorAll(".trabalho");

  botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => {
      botoesFiltro.forEach((b) => b.classList.remove("ativo"));
      botao.classList.add("ativo");

      const filtro = botao.getAttribute("data-filtro");

      trabalhos.forEach((trabalho) => {
        const tipo = trabalho.getAttribute("data-tipo");
        trabalho.style.display = (filtro === "todos" || tipo === filtro) ? "block" : "none";
      });
    });
  });

  
});
