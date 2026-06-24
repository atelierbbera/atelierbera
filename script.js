function addToCart(productName) {
    alert(productName + " ürün sepetinize eklendi!");
function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}

let count = 0;
function addToCart() {
    count++;
    document.getElementById('cart-count').innerText = count;
    alert("Ürün sepetinize eklendi! Lütfen adres bilgilerinizi girin.");
    let address = prompt("İl / İlçe / Açık Adres giriniz:");
    if(address) alert("Adresiniz kaydedildi, ödeme sayfasına yönlendiriliyorsunuz.");
}
