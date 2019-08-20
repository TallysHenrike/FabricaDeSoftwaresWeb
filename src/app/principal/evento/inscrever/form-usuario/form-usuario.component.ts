import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'form-usuario',
	templateUrl: './form-usuario.component.html',
	styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

	@Output() proximoPasso: any = new EventEmitter();

	constructor() { }

	ngOnInit() { }

	proximo(): Observable<number> {
		return this.proximoPasso.emit(2);
	}

}