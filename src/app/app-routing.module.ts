import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'vendas',
  },
  {
    path: 'vendas',
    loadChildren: () =>
      import('src/app/modules/sale/sale.module').then((m) => m.SaleModule),
  },
  {
    path: 'vendedores',
    loadChildren: () =>
      import('src/app/modules/salesman/salesman.module').then(
        (m) => m.SalesmanModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
