import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'products', loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule) },
    { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule) },
    { path: 'checkout', loadChildren: () => import('./features/checkout/checkout.module').then(m => m.CheckoutModule) },
    { path: 'orders', loadChildren: () => import('./features/order/order.module').then(m => m.OrderModule) },
    { path: '**', redirectTo: 'products' }
];
