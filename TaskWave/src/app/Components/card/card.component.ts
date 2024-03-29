import { Component, Input } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Card } from '../../Model/Card';
import { CardService } from '../../Service/card.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [DragDropModule], // Ajoutez DragDropModule ici
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'] // Corrigez en 'styleUrls'
})
export class CardComponent {
  @Input() card!: Card;

  constructor(cardService : CardService) { }
}
