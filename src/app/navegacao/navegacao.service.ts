import { Categoria } from './navegacao.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

@Injectable()
export class NavegacaoService {
	
	constructor(private httpClient: HttpClient){}

    listarCategorias():  Observable<Categoria[]>{
		httpOptions.headers.append('Access-Control-Allow-Origin', '*');
		httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
		httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

        return this.httpClient.get<Categoria[]>(`http://localhost/restrito/categoria/listar`, httpOptions);
    }
}