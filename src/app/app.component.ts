import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MarcadorDePuntosComponent } from './pages/marcador-de-puntos/marcador-de-puntos.component';
import { ExplicacionRutasComponent } from './explicacion-rutas/explicacion-rutas.component';
import { InformativaComponent } from './pages/informativa/informativa.component';
import { SeccionesComponent } from './pages/secciones/secciones.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ExplicacionRutasComponent,//borrar despues
    HeaderComponent,
    FooterComponent, 
    MarcadorDePuntosComponent,
    InformativaComponent,
    SeccionesComponent,  

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IntertribusWeb';
}
