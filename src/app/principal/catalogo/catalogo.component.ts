import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogoService } from './catalogo.service';
import { EventoModel } from '../evento/models/evento.model';

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
			this.eventos = this.catalogoService.listarEventosPorCategoria(parseInt(params['id']));
		});
	}

}