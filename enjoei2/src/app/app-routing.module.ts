import { ProductRegisterComponent } from './product-register/product-register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './Home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HeaderComponent,
  //   data: {
  //     breadcrumb: 'Home'
  //   },
  //   children: [
  //     {
  //       path: 'produtos/detalhes',
  //       component: ProductDetailsComponent,
  //       data: {
  //         breadcrumb: 'Produtos Detalhes'
  //       }
  //     }

  //   ]
  // },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'perfil', component: ProfileComponent},
  { path: 'publicar', component: ProductRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
