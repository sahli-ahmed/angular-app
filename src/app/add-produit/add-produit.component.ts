import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
})
export class AddProduitComponent implements OnInit {

  newProduit = new Produit(0,'',0,new Date());

  message :string = '';

  constructor(private produitService : ProduitService) { }

  ngOnInit(): void {
  }

  addProduit() {
    this.produitService.addProduit(this.newProduit);
    this.message = "Produit " + this.newProduit.nom + " ajouté avec succès !";


  }
  addProduit2(){
    this.produitService.ajouterProduit(this.newProduit).subscribe(prod => {
    //console.log(prod);
    });
    //this.router.navigate(['produits']);
  }

}