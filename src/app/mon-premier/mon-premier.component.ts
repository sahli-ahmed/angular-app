import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.scss']
})
export class MonPremierComponent implements OnInit {

  lastUpdate = new Date();

  appareils= new Array();

  constructor(private appareilService : AppareilService){

  }
  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }

  onAllumerTout(){
    this.appareilService.switchOnAll();
  }

  onEteindreTout(){
    this.appareilService.switchOfAll();
  }

}
