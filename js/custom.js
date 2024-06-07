// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// slick slider
$('.product_container').slick({
    infinite: true,
    center: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }

    ]
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function sendMessage(event) {
    event.preventDefault(); // Mencegah pengiriman formulir default
  
    // Ambil data dari input
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Buat pesan WhatsApp
    const whatsappNumber = "6288221401935"; // Ganti dengan nomor WhatsApp admin
    const whatsappMessage = `Nama: ${name}%0ANomor HandPhone: ${phone}%0AEmail: ${email}%0APesan: ${message}`;
  
    // Buat URL WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
    // Buka WhatsApp Web dengan pesan yang sudah terisi
    window.open(whatsappUrl, "_blank");
  }