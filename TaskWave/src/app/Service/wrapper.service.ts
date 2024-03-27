import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Wrapper } from '../Model/Wrapper';
import { WrapperDTO } from '../Model/WrapperDTO';

@Injectable({
  providedIn: 'root'
})
export class WrapperService {

  constructor(public http : HttpClient) { }

  serviceURL = 'http://localhost:3050/wrapper';
  // crud operations

  // get all wrapper
  getWrappers() : Observable<Wrapper[]> {
	return this.http.get<Wrapper[]>(this.serviceURL);
  }

  // get wrapper by id
  getWrapperById(id : number): Observable<Wrapper> {
	return this.http.get<Wrapper>(this.serviceURL + '/' + id);
  }

  // add wrapper
  addWrapper(wrapper : Wrapper) : Observable<Wrapper> {
	return this.http.post<Wrapper>(this.serviceURL, wrapper);
  }

  // update wrapper
  updateWrapper(wrapper : Wrapper) : Observable<Wrapper>  {
	return this.http.put<Wrapper>(this.serviceURL + '/' + wrapper.id, wrapper);
  }

  // delete wrapper

  deleteWrapper(id : number) {
	return this.http.delete(this.serviceURL + '/' + id);
  }

  getWrappersByProjectId(id: number): Observable<Wrapper[]> {
    return this.http.get<Wrapper[]>(this.serviceURL + '/' + id);
  }
  
}
