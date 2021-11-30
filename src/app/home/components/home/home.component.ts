import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Swiper } from 'swiper/bundle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper;

  constructor() { }

  ngOnInit() {
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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      }
    });
  }
}
