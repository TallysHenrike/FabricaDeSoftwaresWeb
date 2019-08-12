import { Categoria } from './navegacao.model';

export class NavegacaoService {
    private categorias: Categoria[] = [];
    
    constructor(){
		for(let i = 0; i < 4; i++){
			this.categorias.push({
				idCategoria: i+1,
				nome: `Lorem ipsum ${i+1}`,
				descricao: 'Descrição de Lorem ipsum',
				caminhoDaImagem: 'caminho/imagem.png'
			});
		}
	}

    listarCategorias(): Categoria[]{
        return this.categorias;
    }
}