import { Component, OnInit } from '@angular/core';
import { SaleApi } from '../../api/sale.api';
import { Sale } from '../../interfaces/Sale';
import { SalesmanApi } from 'src/app/modules/salesman/api/salesman.api';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'sale-root.component.html',
})
export class SaleRootComponent implements OnInit {
  constructor(
    private saleApi: SaleApi,
    private salesmanApi: SalesmanApi,
    private router: Router
  ) {}

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
  editSale(sale: Sale) {
    this.router.navigate(['vendas/editar'], { queryParams: { id: sale.id } });
  }

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

  calculateCommission(price: number, commissionRate: number): number {
    return price * (commissionRate / 100);
  }
}
