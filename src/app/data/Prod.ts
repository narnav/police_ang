import { Product } from '../models/product';

const ar: Product[] = [
  { desc: 'sugar',price:8 },
  { desc: 'milk', price: 13 },
  { desc: 'milkshake', price: 13 },
  { desc: 'milk', price: 13 },
  { desc: 'milk', price: 13 },
  {desc:"m&m",price:9}
];

export const getSingleProd=(id:number)=>{
  return ar[id]
}

export const getAll=()=>{
  return ar
}
