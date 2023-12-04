import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleFormComponent } from './containers/sale-form/sale-form.component';

const routes: Routes = [{ path: 'criar', component: SaleFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleRoutingModule {}
