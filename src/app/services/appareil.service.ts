import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AppareilService{

constructor(private router : Router) { }

	appareils= [
  {
    id : 1,
    name : "ordinateur",
    status : "Allumer"
  },
  {
    id : 2,
    name : "tablette",
    status : "Eteint"
  },
  {
    id : 3,
    name : "télévision",
    status : "Eteint"
  },
  {
    id : 4,
    name : "chauffage",
    status : "Allumer"
  }
  ];

  switchOnAll(){
  	for(let appareil of this.appareils){
  		appareil.status="Allumer";
  	}
  }

  switchOfAll(){
  	for(let appareil of this.appareils){
  		appareil.status="Eteint";
  	}
  }

  switchOnOne(index:number){
  	this.appareils[index].status = "Allumer";
  }

  switchOfOne(index:number){
  	this.appareils[index].status = "Eteint";
  }

  getAppareilById(id : number){
    const appareil = this.appareils.find(
      (app) => { return app.id == id }
      );
    if (!appareil)
      this.router.navigate(['not-found']);
    return appareil;
  }

  addAppareil(name:string, status:string){
    const appareilObject = {name:'', status:'', id:0};
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[this.appareils.length - 1].id + 1;
    this.appareils.push(appareilObject);

  }
}