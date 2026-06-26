function toggleMenu() {
    const nav = document.getElementById("sideNav");
    nav.style.width = (nav.style.width === "250px") ? "0" : "250px";
}

function toggleSub(id) {
    const sub = document.getElementById(id);
    sub.style.display = (sub.style.display === "block") ? "none" : "block";
}

// Ana ekrana tıklayınca menüyü kapat
document.addEventListener('click', function(event) {
    const nav = document.getElementById("sideNav");
    const menuBtn = document.querySelector(".menu-btn");
    if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
        nav.style.width = "0";
    }
});
