import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'inscrever',
	templateUrl: './inscrever.component.html',
	styleUrls: ['./inscrever.component.css']
})
export class InscreverComponent implements OnInit {

	public passoAtivo: object = {um: true, dois: false, tres: false};

	constructor() { }

	ngOnInit() { }

	setPasso(passo: number){
		switch(passo){
			case 1:
				this.passoAtivo = {um: true, dois: false, tres: false};
				break;
			case 2:
				this.passoAtivo = {um: false, dois: true, tres: false};
				break;
			case 3:
				this.passoAtivo = {um: false, dois: false, tres: true};
				break;
			default:
				this.passoAtivo = {um: true, dois: false, tres: false};
		}
	}

}