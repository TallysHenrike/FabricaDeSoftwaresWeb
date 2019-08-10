import { Injectable } from '@angular/core';
import { CatalogoModel } from './catalogo.model';

@Injectable({
	providedIn: 'root'
})
export class CatalogoService {

	private itens: CatalogoModel[] = [
		{
			titulo: 'Lorem ipsum dolor sit amet',
			descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero nunc, tristique eu varius in, malesuada vel odio. Donec ut turpis at sem condimentum facilisis a ut sem. Sed efficitur fringilla sodales. Sed ante magna, aliquet et lectus nec, convallis pulvinar arcu. Ut vel semper enim. Nunc aliquet velit eget luctus vulputate.',
			caminhoDaImagem: 'assets/4.jpg'
		},{
			titulo: 'Lorem ipsum dolor sit amet',
			descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero nunc, tristique eu varius in, malesuada vel odio. Donec ut turpis at sem condimentum facilisis a ut sem. Sed efficitur fringilla sodales. Sed ante magna, aliquet et lectus nec, convallis pulvinar arcu. Ut vel semper enim. Nunc aliquet velit eget luctus vulputate.',
			caminhoDaImagem: 'assets/4.jpg'
		},{
			titulo: 'Lorem ipsum dolor sit amet',
			descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero nunc, tristique eu varius in, malesuada vel odio. Donec ut turpis at sem condimentum facilisis a ut sem. Sed efficitur fringilla sodales. Sed ante magna, aliquet et lectus nec, convallis pulvinar arcu. Ut vel semper enim. Nunc aliquet velit eget luctus vulputate.',
			caminhoDaImagem: 'assets/4.jpg'
		},{
			titulo: 'Lorem ipsum dolor sit amet',
			descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero nunc, tristique eu varius in, malesuada vel odio. Donec ut turpis at sem condimentum facilisis a ut sem. Sed efficitur fringilla sodales. Sed ante magna, aliquet et lectus nec, convallis pulvinar arcu. Ut vel semper enim. Nunc aliquet velit eget luctus vulputate.',
			caminhoDaImagem: 'assets/4.jpg'
		},{
			titulo: 'Lorem ipsum dolor sit amet',
			descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero nunc, tristique eu varius in, malesuada vel odio. Donec ut turpis at sem condimentum facilisis a ut sem. Sed efficitur fringilla sodales. Sed ante magna, aliquet et lectus nec, convallis pulvinar arcu. Ut vel semper enim. Nunc aliquet velit eget luctus vulputate.',
			caminhoDaImagem: 'assets/4.jpg'
		},{
			titulo: 'Lorem ipsum dolor sit amet',
			descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero nunc, tristique eu varius in, malesuada vel odio. Donec ut turpis at sem condimentum facilisis a ut sem. Sed efficitur fringilla sodales. Sed ante magna, aliquet et lectus nec, convallis pulvinar arcu. Ut vel semper enim. Nunc aliquet velit eget luctus vulputate.',
			caminhoDaImagem: 'assets/4.jpg'
		},{
			titulo: 'Lorem ipsum dolor sit amet',
			descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero nunc, tristique eu varius in, malesuada vel odio. Donec ut turpis at sem condimentum facilisis a ut sem. Sed efficitur fringilla sodales. Sed ante magna, aliquet et lectus nec, convallis pulvinar arcu. Ut vel semper enim. Nunc aliquet velit eget luctus vulputate.',
			caminhoDaImagem: 'assets/4.jpg'
		},
	];

	constructor() { }

	getItens(){
		return this.itens;
	}
}