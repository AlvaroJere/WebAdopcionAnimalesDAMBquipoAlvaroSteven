import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importación de componentes según requerimientos del Word [cite: 23, 32, 40]
import { HomeComponent } from './pages/home/home.component';
import { AdopcionComponent } from './pages/adopcion/adopcion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  // Redirección inicial 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  // Ruta de Inicio (incluye Cover, Carrusel, etc. según el Word) [cite: 26]
  { path: 'home', component: HomeComponent },
  
  // Ruta de Catálogo (Adopción) [cite: 32]
  { path: 'adopcion', component: AdopcionComponent },
  
  // Ruta de Contacto con validaciones [cite: 41]
  { path: 'contacto', component: ContactoComponent },
  
  // Comodín para rutas no existentes [cite: 44]
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }