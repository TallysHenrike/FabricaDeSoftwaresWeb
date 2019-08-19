import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'inscrever',
	templateUrl: './inscrever.component.html',
	styleUrls: ['./inscrever.component.css']
})
export class InscreverComponent implements OnInit {

	perfil = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
	});

	constructor() { }

	ngOnInit() { }

}