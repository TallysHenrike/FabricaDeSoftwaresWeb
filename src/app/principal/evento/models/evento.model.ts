import { PatrocinadorModel } from './patrocinador.model';

export class EventoModel {
    idEvento: number;
    idCategoria: number;
    titulo: string;
    breveDescricao: string;
    descricao: string;
    caminhoDaImagem: string;
    temPatrocinio: boolean;
    urlDoGoogleMaps: string;
    patrocinadores?: PatrocinadorModel[];
}