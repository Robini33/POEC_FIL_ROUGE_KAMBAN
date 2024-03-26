import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Project } from '../Model/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(public http : HttpClient) { }

  serviceURL = 'http://localhost:3050/project';
  // crud operations

  // get all project
  getProjects() : Observable<Project[]> {
	return this.http.get<Project[]>(this.serviceURL);
  }

  // get project by id
  getProjectById(id : number): Observable<Project> {
	return this.http.get<Project>(this.serviceURL + '/' + id);
  }

  // add project
  addProject(project : Project) : Observable<Project> {
	return this.http.post<Project>(this.serviceURL, project);
  }

  // update project
  updateProject(project : Project) : Observable<Project>  {
	return this.http.put<Project>(this.serviceURL + '/' + project.id, project);
  }

  // delete project

  deleteProject(id : number) {
	return this.http.delete(this.serviceURL + '/' + id);
  }
}
