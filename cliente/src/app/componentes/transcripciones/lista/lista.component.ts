import { Component, OnInit } from '@angular/core';
import { TranscripcionesService } from '../../../servicios/transcripciones/transcripciones.service';
import { UsuariosService } from '../../../servicios/usuarios/usuarios.service';
import * as moment from 'moment'; 

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaTranscripcionesComponent implements OnInit {
    /**
    *Activa la busqueda
    *
    *@property {string}
    **/
    busqueda: string = ''

    /**
    *Almacena las transcripciones encontradas
    *
    *@property {any}
    **/
	transcripciones = []

    /**
    *Almacena los datos del usuario conectado
    *
    *@property {any}
    **/
    usuario 

    /**
    *Pagina inicial de la paginacion
    *
    *@property {number}
    **/
    p: number = 1

    /**
    *Activa o desactiva la precarga
    *
    *@property {number}
    **/
    loader: boolean = true

	constructor(
        public transcripcionesService: TranscripcionesService,
        public usuariosService: UsuariosService) {
        this.obtenerUsuario() 
        this.listarTranscripciones()
    }

  	ngOnInit() {}

    /**
    *Obtiene los datos del usuario conectado
    *
    *@return {void}
    **/
    obtenerUsuario()
    {
        this.usuariosService.obtenerUsuario().subscribe(
        res => {
            this.usuario = res
        },     
        err => {
            console.log(err)
        })
    }

  	listarTranscripciones()
  	{
        this.usuariosService.obtenerUsuario().subscribe(
        res => {
            this.usuario = res 
            this.transcripcionesService.obtenerTranscripciones().subscribe(
            (res: any) => {
                this.transcripciones = res
                this.transcripciones.filter(dato => {
                Object.defineProperty(dato, 'tipo', { value: dato.tipos_transcripcione.descripcion })
                Object.defineProperty(dato, 'encargado', { value: dato.usuario.usuario }) 
                dato.estatus_entrega == 0
                ? Object.defineProperty(dato, 'estatusTexto', { value: 'Sin Entregar' })
                : Object.defineProperty(dato, 'estatusTexto', { value: 'Entregado' })
                    if(this.usuario.rol_id == 1)
                    {
                        return dato.created_at = moment().format(dato.created_at)
                    }
                })
                this.loader = false
            },
            err => {
                console.log(err)
            })
        },
        err => {
            console.log(err)
        })
  	}
}
