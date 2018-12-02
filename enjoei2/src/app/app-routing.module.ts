import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './Home/home.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
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
  { path: 'produto/detalhes', component: ProductDetailsComponent },
  { path: 'pagamento', component: PagamentoComponent},
  { path: 'perfil', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
