import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(user: any): void {
    console.log('Logging in...', user);
  }

  register(user: any): void {
    console.log('Registering user...', user);
  }
}
