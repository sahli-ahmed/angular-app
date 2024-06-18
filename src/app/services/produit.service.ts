import { Injectable } from '@angular/core';
import { Produit } from '../models/produit.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class ProduitService{

  apiURL: string = 'http://localhost:8080/produits/api';

  constructor(private router : Router, private http : HttpClient) { }
	
  produits:Produit[] = [];
  /*[
  {id : 1, nom : "Produit 1", prix : 2.55, dateCreation : new Date("01/26/2022")},
  {id : 2, nom : "Produit 2", prix : 300, dateCreation : new Date("12/12/2021")},
  {id : 3, nom : "Produit 3", prix : 455, dateCreation : new Date("05/27/2021")},
  {id : 4, nom : "Produit 4", prix : 600.50, dateCreation : new Date("01/26/2022")}
  ];*/

  listeProduit(): Observable<any[]>{
    return this.http.get<any[]>(this.apiURL);
  }

  ajouterProduit( p : Produit):Observable<any>{
    //console.log(p);
    const produit = {
    'nomProduit': p.nom,
    'prixProduit': p.prix,
    'dateCreation': p.dateCreation
    };
    return this.http.post<any>(this.apiURL, produit, httpOptions);
  } 

  supprimerProduit(id : number) {
    console.log(id);
    const url = this.apiURL + '/' + id;
    return this.http.delete(url, httpOptions);
  }


  
  addProduit(produit:Produit){
    this.produits.push(produit);
  }

  deleteProduit(produit:Produit){
    this.produits.forEach((p, i)=>{
      if (p.id == produit.id)
        this.produits.splice(i , 1);

    });
  }

  updateProduit(p:Produit)
  {
  this.deleteProduit(p);
  this.addProduit(p);
  }

  getProduitById(id : number){
    const produit = this.produits.find(p => p.id == id);

    if (!produit)
      this.router.navigate(['not-found']);
    return produit;
  }
}