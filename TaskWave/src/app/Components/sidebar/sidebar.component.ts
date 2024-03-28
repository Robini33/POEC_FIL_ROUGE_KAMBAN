import { Component, HostBinding } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../../Service/sidebar.service';
import {MatIconModule} from '@angular/material/icon'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, MatIconModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(public sidebarService: SidebarService) {}

  @HostBinding('class.is-expanded')
  get isExpanded() {
    return this.sidebarService.isExpanded;
  }
}
