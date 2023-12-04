import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleFormComponent } from './containers/sale-form/sale-form.component';
import { SaleRootComponent } from './containers/sale-root/sale-root.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SaleRootComponent },
  { path: 'criar', component: SaleFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleRoutingModule {}
