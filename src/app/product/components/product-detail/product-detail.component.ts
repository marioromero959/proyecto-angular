import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductsService
  ) { }

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      // this.fetchProduct(id);
    //  this.product = this.ProductService.getProduct(id);
    });
  }

/*   fetchProduct(id: string){
    this.ProductService.getProduct(id).subscribe(product => {
    this.product = product;
    });
  }

  createProduct(){
    const newProduct: any = {
      id: '233',
      title: 'hola',
      image: 'assets/img1.jpg',
      price: 3000,
      description: 'blabla'
    };
    this.ProductService.createProduct(newProduct).subscribe(
      product => {
        this.product = product;
      }
    );
  }

  updateProduct(){
    const newProduct: Partial<any> = {
      id: '222',
      title: 'chau',
      image: 'assets/img1.jpg',
      price: 200,
      description: 'blabla'
    };

    this.ProductService.updateProduct('4', newProduct).subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct(){
    this.ProductService.deleteProduct('1').subscribe(rta => {
      console.log(rta);
    });
  } */
}
