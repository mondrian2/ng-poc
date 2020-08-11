import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/auth/login';
import { AuthGuard } from './_helpers';
import { OrdersComponent } from './pages/panel/orders/orders.component';
import { OrderDetailsComponent } from './pages/panel/order-details/order-details.component';


const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'pedidos', component: OrdersComponent, canActivate: [AuthGuard] },
  { path:'pedido/:id', component: OrderDetailsComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
