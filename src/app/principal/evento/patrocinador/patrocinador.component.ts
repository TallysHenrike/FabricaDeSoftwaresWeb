import { Component, OnInit, Input } from '@angular/core';
import { PatrocinadorModel } from '../models/patrocinador.model';

@Component({
	selector: 'patrocinador',
	templateUrl: './patrocinador.component.html',
	styleUrls: ['./patrocinador.component.css']
})
export class PatrocinadorComponent implements OnInit {

	@Input() patrocinador: PatrocinadorModel;

	constructor() { }

	ngOnInit() { }

}