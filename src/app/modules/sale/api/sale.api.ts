import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from '../interfaces/Sale';
import { environment } from 'src/environments/environment';
import { Salesman } from '../../salesman/interfaces/Salesman';

@Injectable({ providedIn: 'root' })
export class SaleApi {
  constructor(private httpClient: HttpClient) {}

  list(): Observable<{ data: Sale[] }> {
    return this.httpClient.get<{ data: Sale[] }>(`${environment.apiUrl}/venda`);
  }

  create(sale: any): Observable<Sale> {
    return this.httpClient.post<Sale>(`${environment.apiUrl}/venda`, sale);
  }

  get(id: string): Observable<Sale> {
    return this.httpClient.get<Sale>(`${environment.apiUrl}/venda/${id}`);
  }

  update(id: string, sale: Sale): Observable<Sale> {
    return this.httpClient.put<Sale>(`${environment.apiUrl}/venda/${id}`, sale);
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/venda/${id}`);
  }
}
