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
const products = {
    'recel': [
        {name: "Strawberry Jam", old: "750 TL", price: "650 TL"},
        {name: "Mandarin Jam", old: "750 TL", price: "650 TL"},
        {name: "Lemon Jam", old: "750 TL", price: "650 TL"},
        {name: "Raspberry Jam", old: "750 TL", price: "650 TL"},
        {name: "Blueberry Jam", old: "750 TL", price: "650 TL"},
        {name: "Jam Collection", old: "1200 TL", price: "1000 TL", isCollection: true}
    ]
};

function showProducts(category) {
    const main = document.querySelector('.hero');
    const footer = document.querySelector('footer');
    
    // Ana ekranı gizle
    main.style.display = 'none';
    
    let html = `<div class="product-grid">`;
    
    if (category === 'recel') {
        products.recel.forEach(p => {
            html += `
            <div class="product-card">
                <h3>${p.name}</h3>
                <p class="old-price">${p.old}</p>
                <p class="new-price">${p.price}</p>
                <button class="btn-add" onclick="${p.isCollection ? 'openCollection()' : 'alert(\'Sepete eklendi\')'}">
                    ${p.isCollection ? 'Detaya Git' : 'Sepete Ekle'}
                </button>
            </div>`;
        });
    } else {
        html = `<div style="text-align:center; padding: 50px;"><h2>Çok yakında sizlerle..</h2></div>`;
    }
    
    html += `</div>`;
    document.body.innerHTML += html; // Veya bir içerik div'ine yazdır
}

function openCollection() {
    // Jam Collection için 4 seçenekli yapı
    let options = "1. Seçenek, 2. Seçenek, 3. Seçenek, 4. Seçenek";
    alert("Koleksiyon Seçenekleri: " + options);
}
