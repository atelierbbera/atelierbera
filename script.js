let cartCount = 0;
function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert("Ürün sepete eklendi!");
}

// Hamburger menü tetikleyici
document.getElementById('mobile-menu').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});
function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}
