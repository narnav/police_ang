import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProdService } from 'src/app/services/prod.service';
@Component({
  selector: 'app-waga',
  templateUrl: './waga.component.html',
  styleUrls: ['./waga.component.scss']
})
export class WagaComponent {
  constructor(private prdSrv:ProdService){
    prdSrv.getProducts().subscribe(res => console.table(res))
  }
}
