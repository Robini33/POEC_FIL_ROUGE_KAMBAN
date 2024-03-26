import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './Service/user.service';
import { ProjectListComponent } from './Components/project-list/project-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskWave';
}
