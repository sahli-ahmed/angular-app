import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService{
	
  users:User[] = [
  {
    firstName : 'Ahmed',
    lastName : 'SAHLI',
    email : 'sahli-ahmed@hotmail.fr',
    drinkPreference : 'Beer',
    hobbies : ['coder','foot ball']
  }
  ];
  
  addUser(user:User){
    this.users.push(user);
  }
}