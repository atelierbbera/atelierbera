function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}

// Ürün eklendiğinde sayaç artar
let count = 0;
function addToCart() {
    count++;
    document.getElementById('cart-count').innerText = count;
    alert("Ürün sepetinize eklendi.");
}
