import { Injectable } from '@angular/core';
import { EventoModel } from '../evento/models/evento.model';
import { PatrocinadorModel } from '../evento/models/patrocinador.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CatalogoService {

	private eventos: EventoModel[] = [];

	constructor(private httpClient: HttpClient){}

    listarCategorias():  Observable<PatrocinadorModel[]>{
		return this.httpClient.get<PatrocinadorModel[]>(`http://localhost/restrito/patrocinador/listar`);
    }

	listarEventos(): Observable<EventoModel[]> {
		return this.httpClient.get<EventoModel[]>(`http://localhost/restrito/evento/listar`);
	}

	listarEventosPorCategoria(id: number): Observable<EventoModel[]> {
		return this.httpClient.get<EventoModel[]>(`http://localhost/restrito/evento/listarEventosPorCategoria/${id}`);
	}

	consultarEvento(id: number): EventoModel{
		let evento = null;
		this.eventos.forEach((e)=>{if(e.idEvento === id) evento = e });
		return evento;
	}
}