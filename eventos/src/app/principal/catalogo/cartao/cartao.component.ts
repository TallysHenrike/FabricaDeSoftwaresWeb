import { Component, OnInit, Input } from '@angular/core';
import { CatalogoModel } from '../catalogo.model';

@Component({
	selector: 'cartao',
	templateUrl: './cartao.component.html',
	styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

	@Input() evento: CatalogoModel;

	constructor() { }

	ngOnInit() { }

}