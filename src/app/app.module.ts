import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AnimalCardComponent } from './componentes/animal-card/animal-card.component';

// Páginas
import { HomeComponent } from './pages/home/home.component';
import { AdopcionComponent } from './pages/adopcion/adopcion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AnimalCardComponent, // <--- REVISA QUE ESTÉ AQUÍ
    HomeComponent,
    AdopcionComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }