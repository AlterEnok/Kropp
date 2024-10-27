const swiper = new Swiper('.swiper-container', {


    // Включение пагинации
    pagination: {
        el: '.swiper-pagination',
        clickable: true,  // Пагинация становится кликабельной
    },
    // Дополнительные параметры
    direction: 'horizontal',  // Горизонтальная смена слайдов
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});



document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap & CartoDB'
    }).addTo(map);

    var customIcon = L.icon({
        iconUrl: '/icons/remark.svg',
        iconSize: [50, 50],
    });

    L.marker([37.7749, -122.4194], { icon: customIcon }).addTo(map);
    L.marker([34.0522, -118.2437], { icon: customIcon }).addTo(map);


    setTimeout(function () {
        map.invalidateSize();
    }, 1000);


});