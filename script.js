function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

function toggleSubmenu(id) {
    const sub = document.getElementById(id);
    // Açık olanı kapat, kapalı olanı aç
    sub.style.display = (sub.style.display === "block") ? "none" : "block";
}
