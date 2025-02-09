import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  processPayment(order: any): void {
    console.log('Processing payment...', order);
  }
}
