import { Injectable } from '@angular/core';
import { EventoModel } from '../evento/models/evento.model';
import { PatrocinadorModel } from '../evento/models/patrocinador.model';
import { ColaboradorModel } from '../evento/models/colaborador.model';

@Injectable({
	providedIn: 'root'
})
export class CatalogoService {

	private eventos: EventoModel[] = [];

	constructor() {
		for(let e = 0; e < 50; e++){
			let patrocinadores: PatrocinadorModel[] = [];
			let colaboradores: ColaboradorModel[] = [];
			for(let i = 0; i < 4; i++){
				patrocinadores.push({
					idPatrocinador: i+1,
					idEvento: e+1,
					nome: `Patrocinador ${i+1}`,
					descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
					caminhoDaImagem: `https://picsum.photos/id/${i}/200`
				});

				colaboradores.push({
					idColaborador: i+1,
					idEvento: e+1,
					nome: `Colaborador ${i+1}`,
					descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
					caminhoDaImagem: `https://picsum.photos/id/${i}/200`
				});
			}

			this.eventos.push({
				idEvento: e+1,
				idCategoria: Math.floor(Math.random() * (5 - 1 + 1) + 1),
				titulo: `Lorem ipsum dolor sit amet ${e+1}`,
				breveDescricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero nunc, tristique eu varius in, malesuada vel odio. Donec ut turpis at sem condimentum facilisis a ut sem. Sed efficitur fringilla sodales. Sed ante magna, aliquet et lectus nec, convallis pulvinar arcu. Ut vel semper enim. Nunc aliquet velit eget luctus vulputate.',
				descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet velit eleifend metus pretium, vitae volutpat libero volutpat. Proin dapibus mattis sapien eu tempus. Pellentesque hendrerit, ipsum at finibus vestibulum, enim odio consectetur ante, ut porta sapien nibh convallis nunc. Maecenas gravida mauris at diam interdum, vel faucibus lorem viverra. Nunc egestas, diam eget blandit mattis, tellus nisi faucibus lacus, eget gravida elit augue non quam. Nunc feugiat purus et neque ornare malesuada. Quisque a ipsum a tortor dapibus scelerisque. Sed venenatis vitae nisl et gravida. Fusce scelerisque risus id mattis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque vitae magna at tempor. Fusce mollis magna ut eros ultricies, vitae dictum nulla ultrices. Nullam ut ipsum purus. Duis elementum orci urna, id aliquet orci porta nec. Praesent lacinia est sit amet mi scelerisque, sit amet dignissim orci viverra. Donec eu eros in libero sagittis commodo. Maecenas ac diam lacus. Nullam porttitor at ante in porta. Nulla id velit eu risus interdum ornare sit amet id velit. Mauris ligula mi, luctus convallis nisi a, suscipit semper orci. Quisque et elit a felis efficitur mattis vitae eu tortor.',
				caminhoDaImagem: `https://picsum.photos/id/${e}/300`,
				patrocinadores: patrocinadores,
				colaboradores: colaboradores
			});
		}
	}

	listarEventos(): EventoModel[]{
		return this.eventos;
	}

	listarEventosPorCategoria(id: number): EventoModel[]{
		return this.eventos.filter((e)=>{return e.idCategoria === id});
	}

	consultarEvento(id: number): EventoModel{
		let evento = null;
		this.eventos.forEach((e)=>{if(e.idEvento === id) evento = e });
		return evento;
	}
}