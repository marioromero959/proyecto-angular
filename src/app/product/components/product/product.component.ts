import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private cartService: CartService,
  ) { }

@Input() product: any;
@Output() productClicked: EventEmitter<any> = new EventEmitter();


addCard(){
  console.log('añadido');
  this.productClicked.emit(this.product.id);
  this.cartService.addCart(this.product);
}

  ngOnInit(): void {
  }

}
