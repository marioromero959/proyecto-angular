import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [];

 /* products = [

    {
      id: '1',
      image: 'assets/img1.jpg',
      title: 'remera',
      price: 100,
      description: 'blabla1'
    },
    {
      id: '2',
      image: 'assets/img2.jpg',
      title: 'remera2',
      price: 200,
      description: 'blabla2'
    },

    {
      id: '3',
      image: 'assets/img3.jpg',
      title: 'remera3',
      price: 300,
      description: 'blabla3'
    },

    {
      id: '4',
      image: 'assets/img4.jpg',
      title: 'remera4',
      price: 400,
      description: 'blabla4'
    },

    {
      id: '5',
      image: 'assets/img5.jpg',
      title: 'remera5',
      price: 500,
      description: 'blabla5'
    },

    {id: '6',
      image: 'assets/img6.jpg',
      title: 'remera6',
      price: 600,
      description: 'blabla6'
    },
  ];*/
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: number){
    console.log(id);
  }

 fetchProducts(){
   this.productsService.getAllProducts().subscribe(products => {
    this.products = products;
  });
 }

}
