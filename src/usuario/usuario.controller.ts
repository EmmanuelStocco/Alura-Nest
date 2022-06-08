import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario.entity";

@Controller('/users')
export class UsuarioController {
 
    constructor(private UsuarioService: UsuarioService){}

    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string): Usuario {
        const usuarioEncontrado = this.UsuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
        console.log(nomeDeUsuario);
        return usuarioEncontrado;
    }

    @Post()
    public cria(@Body() usuario: Usuario): Usuario{
        const usuarioCriado = this.UsuarioService.cria(usuario);
        console.log(usuarioCriado);
        return usuarioCriado;
    }

    
}