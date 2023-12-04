import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SaleRoutingModule } from './sale-routing.module';
import { SaleFormComponent } from './containers/sale-form/sale-form.component';

@NgModule({
  declarations: [SaleFormComponent],
  imports: [CommonModule, SaleRoutingModule],
})
export class SaleModule {}
