import { Component, OnInit, Input } from '@angular/core';
import { EventoModel } from '../../evento/models/evento.model';

@Component({
	selector: 'cartao',
	templateUrl: './cartao.component.html',
	styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

	@Input() evento: EventoModel;

	constructor() { }

	ngOnInit() { }

}