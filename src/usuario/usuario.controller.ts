import { Body, Controller, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";

@Controller('/users')
export class UsuarioController {

    private UsuarioService = new UsuarioService();
    
    @Post()
    public cria(@Body() usuario){
        const usuarioCriado = this.UsuarioService.cria(usuario);
        return usuarioCriado;
    }

    
}