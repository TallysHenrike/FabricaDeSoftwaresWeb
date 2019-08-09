import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './principal/catalogo/catalogo.component';
import { DetalhesComponent } from './principal/detalhes/detalhes.component';
import { ApresentacaoComponent } from './principal/apresentacao/apresentacao.component';
import { PrincipalComponent } from './principal/principal.component';

const ROUTES: Routes = [
	{
		path: '',
		component: PrincipalComponent,
		children: [
			{path: '', component: ApresentacaoComponent},
			{path: 'categoria/:id', component: CatalogoComponent},
			{path: 'detalhes/:id', component: DetalhesComponent}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(ROUTES)],
	exports: [RouterModule]
})
export class AppRoutingModule { }