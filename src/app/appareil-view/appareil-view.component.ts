import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  @Input() appareilName! : string;
  @Input() appareilStatus! : string;
  @Input() indexOfAppareil! : number;
  @Input() id! : number;

  constructor(private appareilService:AppareilService) {
    
   }

  ngOnInit() {
  }

  getStatus(){
    return this.appareilStatus;
  }
  onAllumer(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  onEteint(){
    this.appareilService.switchOfOne(this.indexOfAppareil);
  }
  getColor(){
    if(this.appareilStatus=="Eteint")
      return "red";
    else
      return "green";
  }

}
