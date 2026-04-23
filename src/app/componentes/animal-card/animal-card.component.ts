import { Component, Input } from '@angular/core';
import { Animal } from '../../models/animal.model'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent {
  @Input() animal!: Animal; // El "!" indica que el animal llegará desde fuera
}