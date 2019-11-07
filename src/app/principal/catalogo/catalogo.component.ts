import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogoService } from './catalogo.service';
import { EventoModel } from '../evento/models/evento.model';
import { Categoria } from 'src/app/navegacao/navegacao.model';

@Component({
	selector: 'catalogo',
	templateUrl: './catalogo.component.html',
	styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

	public eventos: EventoModel[];

	constructor(
		private route: ActivatedRoute,
		private catalogoService: CatalogoService
	) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.listarCatalogo(parseInt(params['id']));
		});
	}

	listarCatalogo(id: number) {
		this.catalogoService.listarEventosPorCategoria(id).subscribe(res => {
			this.eventos = res;
		});
	}

}