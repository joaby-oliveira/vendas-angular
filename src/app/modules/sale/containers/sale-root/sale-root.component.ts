import { Component, OnInit } from '@angular/core';
import { SaleApi } from '../../api/sale.api';
import { Sale } from '../../interfaces/Sale';
import { SalesmanApi } from 'src/app/modules/salesman/api/salesman.api';

@Component({
  templateUrl: 'sale-root.component.html',
})
export class SaleRootComponent implements OnInit {
  constructor(private saleApi: SaleApi, private salesmanApi: SalesmanApi) {}

  sales!: Sale[];
  error!: { message: string };

  ngOnInit(): void {
    this.saleApi.list().subscribe({
      next: ({ data }) => {
        this.sales = data;
      },
      error: () => {
        this.error.message =
          'Erro inesperado ao listar vendas, tente novamente mais tarde';
      },
    });
  }
  editSale(sale: Sale) {}

  deleteSale(sale: Sale) {
    this.saleApi.delete(sale.id).subscribe({
      next: () => {
        this.sales = this.sales.filter((item) => item.id !== sale.id);
      },
      error: () => {
        console.log('nao excluiu');
      },
    });
  }
}
