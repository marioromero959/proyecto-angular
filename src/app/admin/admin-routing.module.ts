import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'products/create',
        component: FormProductComponent
      },
      {
        path: 'products/edit/:id',
        component: ProductEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
