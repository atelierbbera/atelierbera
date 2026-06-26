<script>
    let cart = 0;

    // Menü açma/kapama
    function toggleNav() {
        let nav = document.getElementById("sideNav");
        nav.style.width = (nav.style.width === "280px") ? "0" : "280px";
    }

    // Menü alt başlık açma
    function toggleSub(id) {
        let el = document.getElementById(id);
        el.style.display = (el.style.display === "block") ? "none" : "block";
    }

    // Ürünleri Listeleme (Footer'ı bozmadan)
    function showProducts(category) {
        const mainContent = document.getElementById('main-content');
        
        // Ürün listeleme ekranını oluştur
        let html = `<div class="product-grid">`;

        if (category === 'recel') {
            const recelProducts = [
                {name: "Strawberry Jam", old: "750 TL", price: "650 TL"},
                {name: "Mandarin Jam", old: "750 TL", price: "650 TL"},
                {name: "Lemon Jam", old: "750 TL", price: "650 TL"},
                {name: "Raspberry Jam", old: "750 TL", price: "650 TL"},
                {name: "Blueberry Jam", old: "750 TL", price: "650 TL"},
                {name: "Jam Collection", old: "1200 TL", price: "1000 TL", isCollection: true}
            ];

            recelProducts.forEach(p => {
                html += `
                <div class="product-card">
                    <h3>${p.name}</h3>
                    <p class="old-price">${p.old}</p>
                    <p class="new-price">${p.price}</p>
                    <button class="btn-add" onclick="${p.isCollection ? 'openCollection()' : 'addToCart(this)'}">
                        ${p.isCollection ? 'Detaya Git' : 'Sepete Ekle'}
                    </button>
                </div>`;
            });
        } else {
            html += `<h2 style="grid-column: span 2; text-align:center; padding: 50px;">Çok yakında sizlerle..</h2>`;
        }
        
        html += `</div>`;
        mainContent.innerHTML = html; // Sadece bu alanı günceller, footer yerinde kalır
        document.getElementById("sideNav").style.width = "0";
    }

    // Jam Collection Detay (Burayı ileride modal'a çevireceğiz)
    function openCollection() {
        alert("Jam Collection Seçenekleri:\n1. Seçenek\n2. Seçenek\n3. Seçenek\n4. Seçenek\nLütfen seçiminizi yapın.");
    }

    // Sepete Ekleme Animasyonu
    function addToCart(btn) {
        cart++;
        document.getElementById('cart-count').innerText = cart;
        btn.innerText = "Sepete Eklendi";
        btn.style.backgroundColor = "#555";
        setTimeout(() => {
            btn.innerText = "Sepete Ekle";
            btn.style.backgroundColor = "#800020";
        }, 2000);
    }

    // Menü dışına tıklanınca kapatma
    document.addEventListener('click', function(event) {
        const nav = document.getElementById("sideNav");
        const menuBtn = document.querySelector(".menu-btn");
        if (nav.style.width === "280px" && !nav.contains(event.target) && !menuBtn.contains(event.target)) {
            nav.style.width = "0";
        }
    });
</script>
