import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SaleRoutingModule } from './sale-routing.module';

import { SaleRootComponent } from './containers/sale-root/sale-root.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SaleFormComponent } from './containers/sale-form/sale-form.component';

@NgModule({
  declarations: [SaleFormComponent, SaleRootComponent],
  imports: [
    CommonModule,
    SaleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class SaleModule {}
