import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../app/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../app/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'order',
        loadChildren: () => import('../app/order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('../app/demo/demo.module').then(m => m.DemoModule)
      },
    ]
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule)
   },
   {
    path: 'auth',
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
   },
  {
   path: '**',
   loadChildren: () => import('../app/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
