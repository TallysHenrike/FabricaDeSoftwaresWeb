import { Component, OnInit } from '@angular/core';
import { Categoria } from './navegacao.model';
import { NavegacaoService } from './navegacao.service';

@Component({
	selector: 'navegacao',
	templateUrl: './navegacao.component.html',
	styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent implements OnInit {

	public categorias: Categoria[];

	constructor(private navegacaoService: NavegacaoService) { }

	ngOnInit() {
		this.navegacaoService.listarCategorias().subscribe(res => {
			this.categorias = res;
		});
	}

}