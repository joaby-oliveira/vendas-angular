import { Salesman } from '../../salesman/interfaces/Salesman';

export interface Sale {
  id: string;
  product_name: string;
  price: number;
  salesman_id: string;
  salesman: Salesman;
}
