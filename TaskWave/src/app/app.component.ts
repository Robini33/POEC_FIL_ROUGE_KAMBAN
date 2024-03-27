import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './Service/user.service';
import { ProjectListComponent } from './Components/project-list/project-list.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectListComponent, HeaderComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskWave';

  constructor(public user : UserService) { }
  public connected = this.user.connected;
  run () {
    console.log("app");
  }
  
}
