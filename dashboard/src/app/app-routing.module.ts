import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { RelatoriosComponent } from './main/relatorios/relatorios.component';
import { FaturasComponent } from './main/faturas/faturas.component';
import { ProdutosComponent } from './main/produtos/produtos.component';
import { PerfilComponent } from './main/perfil/perfil.component';

const routes: Routes = [
	{
		path: '',
		component: MainComponent,
		children: [
			{path: 'relatorios', component: RelatoriosComponent},
			{path: 'faturas', component: FaturasComponent},
			{path: 'produtos', component: ProdutosComponent},
			{path: 'perfil', component: PerfilComponent}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }