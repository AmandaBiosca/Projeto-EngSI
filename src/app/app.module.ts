import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdutoComponent } from './features/produto/produto.component';
import { BuscaComponent } from './features/busca/busca.component';
import { PerfilComponent } from './features/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProdutoComponent,
    BuscaComponent,
    PerfilComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
