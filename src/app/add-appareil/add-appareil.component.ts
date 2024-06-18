import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-appareil',
  templateUrl: './add-appareil.component.html',
  styleUrls: ['./add-appareil.component.scss']
})
export class AddAppareilComponent implements OnInit {

  defaultStatus = "Allumer";

  constructor(private appareilService:AppareilService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    //console.log(form);
    const value = form.value;
    const name = value['name'];
    const status = value['status'];
    this.appareilService.addAppareil(name, status);
    this.router.navigate(['appareils']);
  }

}
