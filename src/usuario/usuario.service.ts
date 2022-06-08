import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioService {

    private usuarios = [{
        id: 1,
        nomeDeUsuario: 'usuario1',
        email: 'ddd',
        senha: 'ddd',
        nomeCompleto: 'ddd',
        dataDeEntrada: new Date()
    }];
 
    public cria(usuario: Usuario){
        this.usuarios.push(usuario);
        return usuario;
    }

    
    public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario{
       return this.usuarios.find(usuario => usuario.nomeDeUsuario === nomeDeUsuario);
    }
}