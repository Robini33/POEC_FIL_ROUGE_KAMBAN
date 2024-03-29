import { Component, Input } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop'; // Importez DragDropModule
import { WrapperService } from '../../Service/wrapper.service';
import { UserService } from '../../Service/user.service';
import { Wrapper } from '../../Model/Wrapper';
import { Card } from '../../Model/Card';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { Project } from '../../Model/Project';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'; // Import pour drag and drop

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [CommonModule, CardComponent, DragDropModule], // Ajoutez DragDropModule ici
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'] // Corrigez ici en 'styleUrls' et assurez-vous que c'est un tableau
})
export class WrapperComponent {
  @Input() wrapper!: Wrapper;
  @Input() card!: Card;
  @Input() newTitle!: String;
  project!: Project;
  cardList: Card[] = [];

  constructor(public wrapperService: WrapperService, public users: UserService) { }

  ngOnInit() {
    if (this.wrapper) {
      this.cardList = this.wrapper.cards;
    }
  }

  addTask(newTitle: String, wrapper: Wrapper) {
    // Logique pour ajouter une tâche
  }

  // Ajoutez cette méthode pour gérer le drop des cartes
  onDrop(event: CdkDragDrop<Card[]>) {
    moveItemInArray(this.cardList, event.previousIndex, event.currentIndex);
    // Mettez à jour le service ou la base de données si nécessaire
  }
}
