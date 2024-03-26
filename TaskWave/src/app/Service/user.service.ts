import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserDTO } from '../Model/UserDTO';
import { LogsDTO } from '../Model/LogsDTO';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  serviceURL = 'http://localhost:3050/user';

  connected : boolean = false;
  currentUser : UserDTO | null = null;


  // update user
  updateUser(user: User) : Observable<User> {
	return this.http.put<User>(this.serviceURL + '/' + user.id, user);
  }

  convertUserToUserDTO(user : User) : UserDTO {
	let userDTO : UserDTO = {
	  id : user.id,
	  email : user.email,
	  password : user.password,
	  firstname : user.firstname,
	  lastname : user.lastname,
	  projectsIds : user.projects?.map(project => project.id)
	};
	return userDTO;
  }

  // Connect user
  connectUser(logDTO : LogsDTO)  {
	this.http.post<UserDTO>(this.serviceURL + '/login', logDTO).subscribe(
	  (data : UserDTO) => {
		this.currentUser = {
		  id : data.id!,
		  email : data.email!,
		  password : data.password!,
		  firstname : data.firstname!,
		  lastname : data.lastname!,
		  projectsIds : data.projectsIds!
		};
		this.connected = true;
	  }
	);
  }
  inscription(userDTO : UserDTO) {
	this.http.post<UserDTO>(this.serviceURL + '/register', userDTO).subscribe(
	  (data : UserDTO) => {
		console.log(data);
	  }
	);
  }


  // Disconnect user
  disconnectUser() {
	this.currentUser = null;
	this.connected = false;
  }

}
