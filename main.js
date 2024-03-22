document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('.content h1', {
        strings: ["Dera Kayla Khairani"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
});

// JavaScript to handle form submission and display alert
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm'); // Mengambil elemen formulir dengan id 'contactForm'
    form.addEventListener('submit', function(event) { // Menambahkan event listener untuk saat formulir disubmit
        event.preventDefault(); // Mencegah perilaku default dari formulir
            
        // Mengambil nilai email dan pesan dari input
        const email = document.getElementById('exampleFormControlInput1').value;
        const message = document.getElementById('exampleFormControlTextarea1').value;

        // Menampilkan pop-up dengan isi formulir
        alert(`Email: ${email}\nMessage: ${message}`);
            
        // Membersihkan formulir (opsional)
        form.reset();
        });
    });
