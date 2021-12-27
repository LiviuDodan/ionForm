import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterGuard implements CanActivate {

  canActivate(){
    if (localStorage.getItem('role') === 'admin' || localStorage.getItem('role') === 'user'){
      return true;
    } else {
      return false;
    }
  }

}
