import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesmanRootComponent } from './containers/salesman-root/salesman-root.component';
import { SalesmanFormComponent } from './containers/salesman-form/salesman-form.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', component: SalesmanRootComponent },
  { path: 'criar', component: SalesmanFormComponent },
  { path: 'editar', component: SalesmanFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesmanRoutingModule {}
