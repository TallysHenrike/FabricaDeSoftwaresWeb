import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoService } from '../catalogo/catalogo.service';
import { EventoModel } from './models/evento.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'evento',
	templateUrl: './evento.component.html',
	styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

	public evento: EventoModel;

	constructor(
		private route: ActivatedRoute,
		private catalogoService: CatalogoService,
		public sanitizer: DomSanitizer
	) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.buscarEvento(parseInt(params['id']));
			//console.log(this.evento)
		});
	}

	buscarEvento(id: number) {
		this.catalogoService.consultarEvento(id).subscribe(res => {
			this.evento = res;
		});
	}
}