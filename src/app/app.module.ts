import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importa aquí tus componentes (VS Code suele ayudarte a hacerlo automático)
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
    // Añade aquí todas tus páginas y componentes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }