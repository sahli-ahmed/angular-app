import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../models/produit.model';


@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.scss']
})
export class UpdateProduitComponent implements OnInit {

  currentProduit!:Produit;

  constructor(private produitService:ProduitService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.currentProduit = this.produitService.getProduitById(this.activatedRoute.snapshot.params['id'])!;
    console.log(this.currentProduit);

  }

updateProduit(){
  this.produitService.updateProduit(this.currentProduit);
  this.router.navigate(['produits']);
}

}
