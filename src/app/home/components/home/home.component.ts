import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Swiper } from 'swiper/bundle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper;
  products;
  test = []
  constructor(private ps: ProductsService) { }


  public test2(): void{
  }

  ngOnInit() {
    this.products = this.ps.getAllProducts();
    this.test.push(this.products[0])
  }
  public test(): void{
    const array = [1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9];
  }
  ngAfterViewInit(){
    this.mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      }
    });
  }
}
