import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements CanActivate {

  constructor(private auth:AuthenticationService) { }

  canActivate():boolean{
    return true;//this.auth.isAuthenticated();
  }
}
