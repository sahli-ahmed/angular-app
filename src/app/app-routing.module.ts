import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './services/auth-guard.service';
import { AddAppareilComponent } from './add-appareil/add-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

const routes: Routes = [
{path : 'appareils',canActivate:[AuthGuard], component : MonPremierComponent},
  {path : 'appareils/:id',canActivate:[AuthGuard], component : SingleAppareilComponent},
  {path : 'addAppareil',canActivate:[AuthGuard], component : AddAppareilComponent},
  {path : 'users',canActivate:[AuthGuard], component : UserListComponent},
  {path : 'addUser',canActivate:[AuthGuard], component : NewUserComponent},
  {path : 'auth', component : AuthComponent},
  {path : '', component : AuthComponent},
  {path : 'not-found', component : NotFoundComponent},
  {path : 'produits',canActivate:[AuthGuard], component : ProduitsComponent},
  {path : 'addProduit',canActivate:[AuthGuard], component : AddProduitComponent},
  {path : 'updateProduit/:id',canActivate:[AuthGuard], component : UpdateProduitComponent},
  {path : '**', redirectTo:'/not-found'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
