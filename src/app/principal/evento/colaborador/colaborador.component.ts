import { Component, OnInit, Input } from '@angular/core';
import { ColaboradorModel } from '../models/colaborador.model';

@Component({
	selector: 'colaborador',
	templateUrl: './colaborador.component.html',
	styleUrls: ['./colaborador.component.css']
})
export class ColaboradorComponent implements OnInit {

	@Input() colaborador: ColaboradorModel;

	constructor() { }

	ngOnInit() { }

}