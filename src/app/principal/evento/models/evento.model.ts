import { PatrocinadorModel } from './patrocinador.model';
import { ColaboradorModel } from './colaborador.model';

export class EventoModel {
    idEvento: number;
    idCategoria: number;
    titulo: string;
    breveDescricao: string;
    descricao: string;
    caminhoDaImagem: string;
    temPatrocinio: boolean;
    patrocinadores?: PatrocinadorModel[];
    colaboradores?: ColaboradorModel[];
}