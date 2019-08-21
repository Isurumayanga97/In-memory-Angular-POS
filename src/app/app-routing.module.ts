import {NgModule} from '@angular/core';

import {CustomerComponent} from './customer/customer.component';
import {ItemComponent} from './item/item.component';
import {DashbardComponent} from './dashbard/dashbard.component';
import {NotFoundComponent} from './not-found/not-found.component';
// import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';

const appRouting: Routes = [
  {path: '', redirectTo: '/dashoard', pathMatch: 'full'},
  {path: 'customer', component: CustomerComponent},
  {path: 'item', component: ItemComponent},
  {path: 'dashoard', component: DashbardComponent},
  // {path: 'app', component: AppComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRouting)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

export const routingComponents = [CustomerComponent, ItemComponent, DashbardComponent , NotFoundComponent];
