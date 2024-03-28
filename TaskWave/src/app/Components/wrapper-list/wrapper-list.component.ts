import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { WrapperService } from '../../Service/wrapper.service';
import { Wrapper } from '../../Model/Wrapper';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../Model/Project';
import { Observable } from 'rxjs';
import { WrapperDTO } from '../../Model/WrapperDTO';
import { HttpParams } from '@angular/common/http';
import { ProjectService } from '../../Service/project.service';

@Component({
  selector: 'app-wrapper-list',
  standalone: true,
  imports: [CommonModule, WrapperComponent],
  templateUrl: './wrapper-list.component.html',
  styleUrl: './wrapper-list.component.css'
})
export class WrapperListComponent {
  projectId : number = 0;
  project! : Project;
  wrappersList : any = [];
	
constructor(public wrapperService : WrapperService, public projectService : ProjectService, private route: ActivatedRoute) {
  this.projectId = this.route.snapshot.params['id'];
  console.log(this.projectId);
  this.wrappersList = this.getWrappers(this.projectId); 
}
  getWrappers(id : number) {
      this.wrapperService.getWrappersByProjectId(id).subscribe((response:Wrapper[]) => {
        this.wrappersList = response;
    });
  }

}
