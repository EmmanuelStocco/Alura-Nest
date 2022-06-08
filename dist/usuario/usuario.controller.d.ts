import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario.entity";
export declare class UsuarioController {
    private UsuarioService;
    constructor(UsuarioService: UsuarioService);
    buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario;
    cria(usuario: Usuario): Usuario;
}
