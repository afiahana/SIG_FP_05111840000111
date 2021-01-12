mapboxgl.accessToken = 'pk.eyJ1IjoiYWZpYTEzNyIsImEiOiJja2phMHdqZ3YxanlhMnFwOXg0MnZtZHZyIn0.DlJtDqhpGQNIBtTmZIzXFQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [112.73119465854336, -7.249224053894039], //Starting Position [lng, lat]
    zoom: 12
});

//Add Popup to Marker
var popup1 = new mapboxgl.Popup({ offset: 25 }).setHTML(
    '<b>Satu Atap Co-Working Place And Food Station</b><br>Jl. Pacar No.2, Ketabang, Kec. Genteng,<br>Kota SBY, Jawa Timur 60272'
    );

var popup2 = new mapboxgl.Popup({ offset: 25 }).setHTML(
    '<b>KORIDOR Coworking Space</b><br>Siola, Tunjungan St No.1, Genteng, Surabaya City, East Java 60275'
    );

var popup3 = new mapboxgl.Popup({ offset: 25 }).setHTML(
    '<b>C2O Library & Collabtive</b><br>Jalan Doktor Cipto No.22, DR. Soetomo, Kec. Tegalsari, Kota SBY, Jawa Timur 60264'
    );

var popup4 = new mapboxgl.Popup({ offset: 25 }).setHTML(
    '<b>SUB Co, Co-Working Space</b><br>Jl. Raya Darmo Harapan I, Tanjungsari, Kec.Sukomanunggal, Kota SBY, Jawa Timur 60187'
    );

var popup5 = new mapboxgl.Popup({ offset: 25 }).setHTML(
    '<b>Revio Space : Coworking, Rental Office, Virtual Office and Event Space</b><br>Jl. Kaliwaron No.58, Mojo, Kec. Gubeng, Kota SBY, Jawa Timur 60285'
    );

var popup6 = new mapboxgl.Popup({ offset: 25 }).setHTML(
    '<b>Virto Office</b><br>Ruko Galaxi Bumi Permai J1-23A surabaya, Semolowaru, Kec. Sukolilo, Kota SBY, Jawa Timur 60119'
    );

var popup7 = new mapboxgl.Popup({ offset: 25 }).setHTML(
    '<b>Urban Office</b><br>Jl. Dr. Ir. H. Soekarno No.470, Kedung Baruk, Kec. Rungkut, Kota SBY, Jawa Timur 60298'
    );

var popup8 = new mapboxgl.Popup({ offset: 25 }).setHTML(
    '<b>Regus - Surabaya, Pakuwon Centre</b><br>Pakuwon Centre, Jl. Embong Malang No.1-5, Kedungdoro, Kec. Tegalsari, Kota SBY, Jawa Timur 60261'
    );

var popup9 = new mapboxgl.Popup({ offset: 25 }).setHTML(
    '<b>Visma Coffee, Art & Co - Working Space</b><br>Jl. Tegalsari No.35, Tegalsari, Kec. Tegalsari, Kota SBY, Jawa Timur 60262'
    );

//Add Marker
var satuatap = new mapboxgl.Marker({
    color: "#5bc0de",
    draggable: true
    }).setLngLat([112.74715419677179, -7.257022665629893])
    .setPopup(popup1)
    .addTo(map);

var koridor = new mapboxgl.Marker({
    color: "#5bc0de",
    draggable: true
    }).setLngLat([112.73758913980654, -7.256278619020413])
    .setPopup(popup2)
    .addTo(map);

var c20 = new mapboxgl.Marker({
    color: "#5bc0de",
    draggable: true
    }).setLngLat([112.73886783926937, -7.2815595266046795])
    .setPopup(popup3)
    .addTo(map);

var subco = new mapboxgl.Marker({
    color: "#9d12de",
    draggable: true
    }).setLngLat([112.69079828027098, -7.272872523717246])
    .setPopup(popup4)
    .addTo(map);

var revio = new mapboxgl.Marker({
    color: "#5bc0de",
    draggable: true
    }).setLngLat([112.76742646591678, -7.2634096112084645])
    .setPopup(popup5)
    .addTo(map);

var virto = new mapboxgl.Marker({
    color: "#f542c2",
    draggable: true
    }).setLngLat([112.78414792976318, -7.301860266677569])
    .setPopup(popup6)
    .addTo(map);

var urban = new mapboxgl.Marker({
    color: "#f542c2",
    draggable: true
    }).setLngLat([112.78073675007838, -7.320993912300061])
    .setPopup(popup7)
    .addTo(map);

var regus = new mapboxgl.Marker({
    color: "#5bc0de",
    draggable: true
    }).setLngLat([112.73980280248479, -7.261544687342133])
    .setPopup(popup8)
    .addTo(map);

var visma = new mapboxgl.Marker({
    color: "#5bc0de",
    draggable: true
    }).setLngLat([112.73830987404767, -7.265949207007246])
    .setPopup(popup9)
    .addTo(map);

// Search box
map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    }),
    'top-right'
);

//Add GeolocateControl to Get User Current Position
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
}));

// driving direction
map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
);