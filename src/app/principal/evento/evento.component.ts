import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoService } from '../catalogo/catalogo.service';
import { EventoModel } from './models/evento.model';

@Component({
	selector: 'evento',
	templateUrl: './evento.component.html',
	styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

	public evento: EventoModel;

	constructor(
		private route: ActivatedRoute,
		private catalogoService: CatalogoService
	) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.evento = this.catalogoService.consultarEvento(parseInt(params['id']));
			//console.log(this.evento)
		});
	}

}