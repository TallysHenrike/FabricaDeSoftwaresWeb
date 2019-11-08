import { PatrocinadorModel } from './patrocinador.model';

export class EventoModel {
    idEvento: number;
    idCategoria: number;
    titulo: string;
    breveDescricao: string;
    descricao: string;
    imagemPrincipal: string;
    temPatrocinio: boolean;
    urlDoGoogleMaps: string;
    patrocinadores?: PatrocinadorModel[];
}