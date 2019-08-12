import { Injectable } from '@angular/core';
import { CatalogoModel } from './catalogo.model';

@Injectable({
	providedIn: 'root'
})
export class CatalogoService {

	private eventos: CatalogoModel[] = [];

	constructor() {
		for(let i = 0; i < 50; i++){
			this.eventos.push({
				idEvento: i+1,
				idCategoria: Math.floor(Math.random() * (5 - 1 + 1) + 1),
				titulo: 'Lorem ipsum dolor sit amet',
				descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero nunc, tristique eu varius in, malesuada vel odio. Donec ut turpis at sem condimentum facilisis a ut sem. Sed efficitur fringilla sodales. Sed ante magna, aliquet et lectus nec, convallis pulvinar arcu. Ut vel semper enim. Nunc aliquet velit eget luctus vulputate.',
				caminhoDaImagem: `https://picsum.photos/id/${i}/300`
			});
		}
	}

	listarEventos(): CatalogoModel[]{
		return this.eventos;
	}

	listarEventosPorCategoria(id: number): CatalogoModel[]{
		return this.eventos.filter((e)=>{return e.idCategoria === id});
	}
}