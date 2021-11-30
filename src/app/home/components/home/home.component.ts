import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductsService} from 'src/app/core/services/products/products.service';
import {Swiper} from 'swiper/bundle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper;
  products;
  test = [];

  constructor(private ps: ProductsService) {
  }


  ngOnInit() {
    this.products = this.ps.getAllProducts();
    this.test.push(this.products[0]);
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
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
