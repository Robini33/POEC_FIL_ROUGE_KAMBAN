import { Component, Input } from '@angular/core';
import { WrapperService } from '../../Service/wrapper.service';
import { UserService } from '../../Service/user.service';
import { Wrapper } from '../../Model/Wrapper';
import { Card } from '../../Model/Card';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { Project } from '../../Model/Project';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [CommonModule, CardComponent, WrapperComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
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
    // Wrapper.cards.push(this.card);
    // this.wrapperService.updateWrapper(Wrapper).subscribe();
  }
}