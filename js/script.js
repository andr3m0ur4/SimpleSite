let map

window.onload = () => {

    initialize()

    let conteudo = document.createElement('p')
    conteudo.innerHTML = 'Minha Casa!!'
    conteudo.style.color = '#bb1600'
    conteudo.style.fontSize = '18px'
    conteudo.style.fontWeight = '600'
    conteudo.style.padding = '10px 0'
    addMarker(-22.799454, -45.226788, '', conteudo)

    //map.panTo({'lat': -23.550520, 'lng': -46.633309})
    //map.setZoom(8)
}

function initialize() {
    let map_prop = {
        center: new google.maps.LatLng(-22.7982578, -45.2229969),
        scrollwheel: false,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map = new google.maps.Map(document.getElementById('mapa'), map_prop)
}

function addMarker(lat, long, icon, content, click = true) {
    let latLng = {'lat': lat, 'lng': long}

    let marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: icon
    })

    let infoWindow = new google.maps.InfoWindow({
        content: content,
        maxWidth: 200,
        pixelOffset: new google.maps.Size(0, 20)
    })

    if (click) {
        google.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(map, marker)
        })
    } else {
        infoWindow.open(map, marker)
    }
}