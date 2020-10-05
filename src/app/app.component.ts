import { Component, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-six';
  menus = [
    {
      name : "Reserva de salas",
      img: "ng-image0.png",
      visible: true,
      alert: false
    }, 
    {
      name : "Reporte de problemas",
      img: "ng-image1.png",
      visible: true,
      alert: false
    }, 
    {
      name : "Mi equipo",
      img: "ng-image3.png",
      visible: true,
      alert: false
    }, 
    {
      name : "Comunicados",
      img: "ng-image2.png",
      visible: true,
      alert: true
    }, 
    {
      name : "Ficha de sintomatologia",
      img: "ng-image4.png",
      visible: true,
      alert: false
    }, 
    {
      name : "Otro oculto",
      img: "ng-image4.png",
      visible: false,
      alert: false
    }
  ]
}
