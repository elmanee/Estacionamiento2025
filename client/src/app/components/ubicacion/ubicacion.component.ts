import { Component } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent {

}

let posElt: HTMLElement | null;
//console.log(posElt);
let posLinkElt: HTMLAnchorElement | null;

window.addEventListener('load', function(){
    posElt = document.getElementById('Pos');
    posLinkElt = document.querySelector('#PosLink > a') as HTMLAnchorElement;
    console.log(posElt);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geoposOK, geoposKO);
    }
});

function geoposOK(pos: GeolocationPosition) {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    if(posElt && posLinkElt) {
        posElt.textContent = `${lat}, ${long}`;
        posLinkElt.href = `https://maps.google.com/?q=${lat},${long}`;
        posLinkElt.textContent = 'Mostrar tu posición en un mapa';
        
        // Mostrar el mapa en un iframe
        let mapIframe = document.createElement('iframe');
        mapIframe.setAttribute('src', `https://maps.google.com?q=${lat},${long}&output=embed`);
        mapIframe.setAttribute('id', 'map');
        document.getElementById('mapContainer')?.appendChild(mapIframe);

        
const ubicacion = document.getElementById('Pos')?.innerHTML;
//const valorInput: string = ubicacion;

console.log(ubicacion);
    }
}

function geoposKO(err: GeolocationPositionError) {
    console.warn(err.message);
    let msg: string;
    switch(err.code) {
        case err.PERMISSION_DENIED:
            msg = "No nos has dado permiso para obtener tu posición";
            break;
        case err.POSITION_UNAVAILABLE:
            msg = "Tu posición actual no está disponible";
            break;
        case err.TIMEOUT:
            msg = "No se ha podido obtener tu posición en un tiempo prudencial";
            break;
        default:
            msg = "Error desconocido";
            break;
    }
    if(posElt) {
        posElt.textContent = msg;
    }
}