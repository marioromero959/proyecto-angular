import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(){}

    products:any = [
  {
    name:'Top Fiorella',
    price: 500,
    description:'Top blanco de seda',
    image:'../../assets/banner1.png'
  },
  {
    name:'Top Fiorella',
    price: 500,
    description:'Top blanco de seda',
    image:'../../assets/banner1.png'
  },
  {
    name:'Top Fiorella',
    price: 500,
    description:'Top blanco de seda',
    image:'../../assets/banner1.png'
  },
  {
    name:'Top Fiorella',
    price: 500,
    description:'Top blanco de seda',
    image:'../../assets/banner1.png'
  },
  {
    name:'Top Fiorella',
    price: 500,
    description:'Top blanco de seda',
    image:'../../assets/banner1.png'
  },
  {
    name:'Top Fiorella',
    price: 500,
    description:'Top blanco de seda',
    image:'../../assets/banner1.png'
  },
  {
    name:'Top Fiorella',
    price: 500,
    description:'Top blanco de seda',
    image:'../../assets/banner1.png'
  }]


getAllProducts(){
  return this.products;
}

/*   getAllProducts(){
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
 */
}
