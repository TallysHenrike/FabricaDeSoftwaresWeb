import { Component, OnInit, Input } from '@angular/core';
import { CatalogoService } from './catalogo.service';
import { CatalogoModel } from './catalogo.model';

@Component({
	selector: 'catalogo',
	templateUrl: './catalogo.component.html',
	styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

	public itens: CatalogoModel[];

	constructor(private catalogoService: CatalogoService) { }

	ngOnInit() {
		this.itens = this.catalogoService.getItens();
	}

}