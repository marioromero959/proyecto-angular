import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  /*
  products = [

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

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<any>(`${environment.url_api}/products`);
  }

  getProduct(id: string){
    return this.http.get<any>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: any){
    return this.http.post(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<any>){
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string){
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }

}
