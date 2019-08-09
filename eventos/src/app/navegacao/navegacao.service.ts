import { Categoria } from './navegacao.model';

export class NavegacaoService {
    private categorias: Categoria[] = [
		{
			idCategoria: 1,
			nome: 'Business Intelligence',
			descricao: 'Descrição de Business Intelligence',
			caminhoDaImagem: 'caminho/imagem.png'
		},
		{
			idCategoria: 2,
			nome: 'Desenvolvimento Móvel',
			descricao: 'Descrição de Desenvolvimento Movel',
			caminhoDaImagem: 'caminho/imagem.png'
		},
		{
			idCategoria: 3,
			nome: 'DevOps',
			descricao: 'Descrição de DevOps',
			caminhoDaImagem: 'caminho/imagem.png'
		},
		{
			idCategoria: 4,
			nome: 'Inteligência artificial',
			descricao: 'Descrição de Internet das coisas',
			caminhoDaImagem: 'caminho/imagem.png'
		}
    ];
    
    constructor(){}

    getCategorias(): Categoria[]{
        return this.categorias;
    }
}