import Tema from './Tema'
import User from './User'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    tema?: Tema| null;
    nome?: User|null;
}

export default Postagem;