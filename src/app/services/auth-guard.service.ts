import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{

	constructor(private authService : AuthService, private router : Router){}

	canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : 
		Observable<boolean> | Promise<boolean> | boolean{

			if (this.authService.isAuth)
				return true;
			else 
				this.router.navigate(['auth']);
			return false;
		}
}