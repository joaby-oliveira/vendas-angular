import { CommonModule } from '@angular/common';
import { SalesmanFormComponent } from './containers/salesman-form/salesman-form.component';
import { SalesmanRootComponent } from './containers/salesman-root/salesman-root.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SalesmanRoutingModule } from './salesman-routing.module';

@NgModule({
  declarations: [SalesmanFormComponent, SalesmanRootComponent],
  imports: [CommonModule, ReactiveFormsModule, SalesmanRoutingModule],
})
export class SalesmanModule {}
