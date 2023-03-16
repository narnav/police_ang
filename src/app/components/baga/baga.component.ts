import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { getAll } from 'src/app/data/Prod';
import { ProdService } from 'src/app/services/prod.service';
@Component({
  selector: 'app-baga',
  templateUrl: './baga.component.html',
  styleUrls: ['./baga.component.scss'],
})
export class BagaComponent {
  constructor(private prdSr :ProdService){}
  // myProd: Product[] = this.prdSr.getAll();
  // plus() {
  //   this.myProd.push({ desc: 'plus', price: 3 });
  // }
  // minus() {}
}
