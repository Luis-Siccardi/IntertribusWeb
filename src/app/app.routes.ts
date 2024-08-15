import { Routes } from '@angular/router';
import { ExplicacionRutasComponent } from './explicacion-rutas/explicacion-rutas.component';
import { MarcadorDePuntosComponent } from './pages/marcador-de-puntos/marcador-de-puntos.component';
import { InformativaComponent } from './pages/informativa/informativa.component';
import { SeccionesComponent } from './pages/secciones/secciones.component';
import { ContadoresDePuntosComponent } from './pages/contadores-de-puntos/contadores-de-puntos.component';


export const routes: Routes = [
    {path: '', component:ExplicacionRutasComponent},
    {path: 'marcadorDePuntos', component:MarcadorDePuntosComponent},
    {path: 'informativa', component:InformativaComponent},
    {path: 'secciones', component:SeccionesComponent},
    {path: 'contadoresDePuntos', component:ContadoresDePuntosComponent}
    //{path: 'header', component:HeaderComponent}
];
