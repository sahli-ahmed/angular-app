import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  name! : string;
  status! : string;
  id! : number;

  constructor(private appareilService : AppareilService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(this.id)!.name;
    this.status = this.appareilService.getAppareilById(this.id)!.status;
  }

}
