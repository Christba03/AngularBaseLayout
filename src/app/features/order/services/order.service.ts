import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: any[] = [];

  getOrders(): any[] {
    return this.orders;
  }

  getOrderById(id: string): any {
    return this.orders.find(order => order.id === id);
  }
}
