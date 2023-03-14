import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProdService } from 'src/app/services/prod.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(private prodSrv:ProdService) {}

  ar:Product[] =  this.prodSrv.getAll()
  singleProd: Product = this.prodSrv.getSingleProd(3)
}
