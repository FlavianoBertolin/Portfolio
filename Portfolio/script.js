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
  // ==== FORMULÁRIO DE CONTATO COM MODAL DE SUCESSO ====
 document.getElementById("meu_form").addEventListener("submit", async (e) => {
    e.preventDefault(); // Impede o formulário de recarregar a página

    const form = e.target;
    const dados = new FormData(form);

    // Envia os dados via POST para o FormSubmit
    await fetch(form.action, {
        method: "POST",
        body: dados
    });

    // Mostra o modal
    document.getElementById("modal-sucesso").style.display = "flex";

    // Limpa os campos do formulário
    form.reset();
});

document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("btn-transition");

    if (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault(); // impede o link de trocar a página

            const transition = document.getElementById("transition");

            // ativa a animação
            transition.classList.add("active");

            // espera a animação terminar e troca a página
            setTimeout(() => {
                window.location.href = this.href;
            }, 500); // tempo precisa bater com o CSS
        });
    }
});


});
