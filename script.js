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