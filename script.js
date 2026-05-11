function toggleInfo(botao) {
  const card = botao.parentElement;

  const info = card.querySelector(".info_extra");

  info.classList.add("show");
}

function fecharInfo(info) {
  info.classList.remove("show");
}

function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

/*grafico de pizza*/
const ctx = document.getElementById("meuGrafico");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Mundo Aberto Imersivo", "RPG com Escolhas", "Gameplay Difícil/Desafiador", "História Emocional/Cinematográfica", "Puzzle/Inteligência", "Ambientação Futurista"],
    datasets: [
      {
        data: [32, 24, 18, 15, 6, 5],
        backgroundColor: ["#ff0000", "#1c00ff", "#fff500", "#e418bd", "#19ff37", "#7415ed" ],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
        legend: {
            labels: {
                color: 'white',
                font: {
                    size: 14,
                }
            }
        }
    }
  },
});
