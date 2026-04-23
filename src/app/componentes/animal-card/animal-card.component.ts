import { Component, Input } from '@angular/core'; // IMPORTANTE EL INPUT
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent {
  @Input() animal!: Animal; // Esto permite que la página de adopción le pase datos
}