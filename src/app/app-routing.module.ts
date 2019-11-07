import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './principal/catalogo/catalogo.component';
import { ApresentacaoComponent } from './principal/apresentacao/apresentacao.component';
import { PrincipalComponent } from './principal/principal.component';
import { EventoComponent } from './principal/evento/evento.component';

const ROUTES: Routes = [
	{
		path: '',
		component: PrincipalComponent,
		children: [
			{path: '', component: ApresentacaoComponent},
			{path: 'categoria/:id', component: CatalogoComponent},
			{path: 'evento/:id', component: EventoComponent}
		]
	},
	{path: 'home', component: ApresentacaoComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(ROUTES)],
	exports: [RouterModule]
})
export class AppRoutingModule { }