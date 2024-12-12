import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { IProduct } from '../../interfaces/common.interface';
import { products } from '../../consts';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public getProducts(): Observable<IProduct[]> {
    return from([products]);
  }
}
