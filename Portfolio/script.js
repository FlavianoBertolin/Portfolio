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
    e.preventDefault();

    const form = e.target;
    const dados = new FormData(form);

    await fetch(form.action, {
        method: "POST",
        body: dados
    });

    document.getElementById("modal-sucesso").style.display = "flex";

    form.reset();
});

// ===== FECHAR O MODAL =====
document.getElementById("btn-fechar-modal").addEventListener("click", () => {
    document.getElementById("modal-sucesso").style.display = "none";
});

// Fechar clicando fora da caixa
document.getElementById("modal-sucesso").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.style.display = "none";
    }
});


// ==== TRANSIÇÃO (SEU CÓDIGO ORIGINAL) ====
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn-transition");

    if (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault();

            const transition = document.getElementById("transition");
            transition.classList.add("active");

            setTimeout(() => {
                window.location.href = this.href;
            }, 500);
        });
    }
});

});
