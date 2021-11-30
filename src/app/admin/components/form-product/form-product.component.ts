import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form!: FormGroup;
  image$: Observable<any>;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private angularfireStorage: AngularFireStorage,
    ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event){
    event.preventDefault();
/*     if (this.form.valid){
      const product = this.form.value;
      this.productsService.createProduct(product).subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    } */
  }

  uploadFile(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
    const name = 'image.png';
    const fileRef = this.angularfireStorage.ref(name);
    const task = this.angularfireStorage.upload(name, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        // tslint:disable-next-line: deprecation
        this.image$.subscribe(url => {
          console.log(url);
          this.form.get('image').setValue(url);
        });
      })
    // tslint:disable-next-line: deprecation
    ).subscribe();
    console.log(file);
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', [Validators.required, MyValidators.isPriceValid]],  // Las validaciones van en []
      image: [''],
      description: ['', Validators.required],
    });
  }
}
