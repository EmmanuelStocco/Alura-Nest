import { Usuario } from "./usuario.entity";
export declare class UsuarioService {
    private usuarios;
    cria(usuario: Usuario): Usuario;
    buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario;
}
