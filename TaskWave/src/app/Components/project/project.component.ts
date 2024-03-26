import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProjectService } from '../../Service/project.service';
import { UserService } from '../../Service/user.service';
import { Project } from '../../Model/Project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
	constructor(public projects : ProjectService, public users : UserService) { }

	deleteProject(arg0: Project) {
	}

	@Input() project! : Project;

}
