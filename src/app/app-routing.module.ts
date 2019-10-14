import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './shared/components/layout/layout.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './core/guards/auth.guard';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'auth',
    component: LayoutComponent,
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'app.HOME'
    },
    children: [
      {
        path: 'examples',
        component: LayoutComponent,
        loadChildren: './examples/examples.module#ExamplesModule',
        data: {
          title: 'examples.$TITLE'
        }
      },
      {
        path: 'products',
        component: LayoutComponent,
        loadChildren: './products/products.module#ProductsModule',
        data: {
          title: 'products.$TITLE'
        }
      },
      {
        path: 'productsInfo',
        component: LayoutComponent,
        loadChildren: './productsInfo/productsInfo.module#ProductsInfoModule',
        data: {
          title: 'productsInfo.$TITLE'
        }
      },
      {
        path: 'orders',
        component: LayoutComponent,
        loadChildren: './orders/orders.module#OrdersModule',
        data: {
          title: 'orders.$TITLE'
        }
      }, 
      {
        path: 'orderDetails',
        component: LayoutComponent,
        loadChildren: './orderDetails/orderDetails.module#orderDetailsModule',
        data: {
          title: 'orderDetails.$TITLE'
        }
      }, 
      {
        path: 'categories',
        component: LayoutComponent,
        loadChildren: './categories/categories.module#CategoriesModule',
        data: {
          title: 'categories.$TITLE'
        }
      }
    ]
  },
  {
    path: 'error',
    component: ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
