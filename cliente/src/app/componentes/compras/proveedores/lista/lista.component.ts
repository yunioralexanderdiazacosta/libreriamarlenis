import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../../../servicios/proveedores/proveedores.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaProveedoresComponent implements OnInit {
	/**
    *Almacena cada uno de los proveedores obtenidos de la API
    *
    *@property {Array<any>}
    **/
    proveedores: any = [];

    /**
    *Campo para filtrar datos de la lista
    *
    *@property {string}
    **/
    busqueda: string = ''

    /**
    *Activa o desactiva la precarga
    *
    *@property {number}
    **/
    loader: boolean = true
  	
  	constructor(
  		public proveedoresService: ProveedoresService,
        public toastr: ToastrService
  		) { 
      this.listarProveedores()
    }

  	ngOnInit() {
  	}

  	listarProveedores()
  	{
  		this.proveedoresService.obtenerProveedores().subscribe(
  		res => {
  			this.proveedores = res
            this.proveedores.filter(dato => {
                dato.estatus == 1
                ?  Object.defineProperty(dato, 'estatusTexto', { value: 'Activo' }) 
                :  Object.defineProperty(dato, 'estatusTexto', { value: 'Inactivo' }) 
            })
            this.loader = false
  		},
  		err => {
  			console.log(err)
  		})
  	}

    desactivar(id)
    {    
        if(confirm('¿Esta seguro de que desea dar de baja al proveedor?'))
        {    
           const dato = { estatus: 0 }
           this.proveedoresService.desactivarProveedor(id, dato).subscribe(
           res => {
                this.listarProveedores()
                this.toastr.success('Proveedor desactivado correctamente.', 'Exito')
           }, 
           err => {
               console.log(err)
           })
        }
    }

    activar(id)
    {
        const dato = { estatus: 1 }
        this.proveedoresService.activarProveedor(id, dato).subscribe(
        res => {
            this.toastr.success('Proveedor activado correctamente.', 'Exito')
            this.listarProveedores()
        }, 
        err => {
            console.log(err)
        })
    }
}
