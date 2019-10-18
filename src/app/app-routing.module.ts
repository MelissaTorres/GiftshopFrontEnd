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
        path: 'productsIndex',
        component: LayoutComponent,
        loadChildren: './productsIndex/productsIndex.module#ProductsIndexModule',
        data: {
          title: 'productsIndex.$TITLE'
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
        path: 'products/addProduct',
        component: LayoutComponent,
        loadChildren: './productsAdd/productsAdd.module#ProductsAddModule',
        data: {
          title: 'products.$TITLE'
        }
      }, 
      {
        //path: 'products/editProduct/0b7d5f48-f328-4085-ecea-08d751ba3997',
        path: 'products/editProduct/:id',
        component: LayoutComponent,
        loadChildren: './prodsEdit/prodsEdit.module#ProdsEditModule',
        data: {
          title: 'products.$TITLE'
        }
      },
      {
        path: 'products/productInfo/:id',
        component: LayoutComponent,
        loadChildren: './productsInfo/productsInfo.module#ProductsInfoModule',
        data: {
          title: 'products.$TITLE'
        }
      },
      {
        path: 'productsIndex/productInfo/:id',
        component: LayoutComponent,
        loadChildren: './productsInfo/productsInfo.module#ProductsInfoModule',
        data: {
          title: 'products.$TITLE'
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
