import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {

  images = [
    "../../../../assets/img-velka/post30.jpg",
  ];

  @Input('entrada') entrada:any;

  productos:Observable<any[]>

  constructor( 
    private productSvc: ProductsService){}

  ngOnInit(): void {
    console.log(this.entrada)
  }

}
