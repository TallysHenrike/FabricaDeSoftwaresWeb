import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { RelatoriosComponent } from './main/relatorios/relatorios.component';
import { FaturasComponent } from './main/faturas/faturas.component';
import { ProdutosComponent } from './main/produtos/produtos.component';
import { PerfilComponent } from './main/perfil/perfil.component';
import { CadastroComponent } from './main/produtos/cadastro/cadastro.component';
import { ListagemComponent } from './main/produtos/listagem/listagem.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		NavComponent,
		MainComponent,
		RelatoriosComponent,
		FaturasComponent,
		ProdutosComponent,
		PerfilComponent,
		CadastroComponent,
		ListagemComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }