import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

   ar: Product[] = [
    { desc: 'sugar',price:8 },
    { desc: 'milk', price: 13 },
    { desc: 'milkshake', price: 13 },
    { desc: 'milk', price: 13 },
    { desc: 'milk', price: 13 },
    {desc:"m&m",price:9}
  ];

   getSingleProd=(id:number)=>{
    return this.ar[id]
  }

  getAll=()=>{
    return this.ar
  }

  constructor() { }
}
