import { Component, OnInit, Inject } from '@angular/core';
import { Produit } from '../models/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  produits : Produit[] = [];

  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
    //this.produits = this.produitService.produits;
    this.produitService.listeProduit().subscribe(prods => {
    //console.log(prods);
      prods.forEach(p =>{
        let prod = new Produit(p.idProduit,p.nomProduit,p.prixProduit,p.dateCreation);
        this.produits.push(prod);
      });
    });

  }

  supprimerProduit(p:Produit){
    const conf = confirm("Etes vous sur de vouloir supprimer le produit : " + p.nom + "?");
    if (conf)
      this.produitService.deleteProduit(p);
  }
  supprimerProduit2(p: Produit)
  {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.produitService.supprimerProduit(p.id).subscribe(() => {
      alert("Produit supprimé !");
    });
    //this.router.navigate(['produits']).then(() => {window.location.reload();});
  }


}
