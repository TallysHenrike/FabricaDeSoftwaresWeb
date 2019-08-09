import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { PrincipalComponent } from './principal/principal.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NavegacaoService } from './navegacao/navegacao.service';
import { CatalogoComponent } from './principal/catalogo/catalogo.component';
import { DetalhesComponent } from './principal/detalhes/detalhes.component';
import { ApresentacaoComponent } from './principal/apresentacao/apresentacao.component';
import { LazyLoadingIMGDirective } from './utilitarios/lazy-loading-img.directive';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    NavegacaoComponent,
    PrincipalComponent,
    RodapeComponent,
    CatalogoComponent,
    DetalhesComponent,
    ApresentacaoComponent,
    LazyLoadingIMGDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NavegacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
