import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form.component';
import { ConfirmComponent } from './components/confirm.component';
import { OrdersComponent } from './components/orders.component';

const ROUTES: Routes = [
  { path: '', component: FormComponent },
  { path: 'form', component: FormComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'orders', component: OrdersComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],   
  exports: [RouterModule]
})
export class AppRoutingModule { }

// 