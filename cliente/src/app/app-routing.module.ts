import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciarsesionComponent } from './componentes/iniciarsesion/iniciarsesion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

/****************************************** CLIENTE *********************************************************/
import { ListaClientesComponent } from './componentes/clientes/lista/lista.component';
import { ClientesEdicionComponent } from './componentes/clientes/edicion/edicion.component';
import { HistoricoClienteComponent } from './componentes/clientes/historico/historico.component';
/***********************************************************************************************************/

/****************************************** VENTAS *********************************************************/
import { ListaVentasComponent } from './componentes/ventas/lista/lista.component';
import { NuevaVentaComponent } from './componentes/ventas/nueva/nueva.component';
import { DetallesVentaComponent } from './componentes/ventas/detalles/detalles.component';
/***********************************************************************************************************/

/**************************************** COMPRAS **********************************************************/
import { ListaComprasComponent } from './componentes/compras/lista/lista.component';
import { NuevaCompraComponent } from './componentes/compras/nueva/nueva.component';
import { DetallesCompraComponent } from './componentes/compras/detalles/detalles.component';

import { ListaProveedoresComponent } from './componentes/compras/proveedores/lista/lista.component';
import { ProveedorEdicionComponent } from './componentes/proveedores/edicion/edicion.component';
/***********************************************************************************************************/

/***************************************** INVENTARIO ******************************************************/
import { ListaInventarioComponent } from './componentes/inventario/lista/lista.component';
import { ListaEntradasComponent } from './componentes/inventario/entradas/lista/lista.component';
import { NuevaEntradaComponent } from './componentes/inventario/entradas/nueva/nueva.component';
import { CategoriasProductosComponent } from './componentes/inventario/categorias/categorias.component';
import { ProductosEdicionComponent } from './componentes/productos/edicion/edicion.component';
/***********************************************************************************************************/

/************************************* TRANSCRIPCIONES *****************************************************/
import { ListaTranscripcionesComponent } from './componentes/transcripciones/lista/lista.component';
import { NuevaTranscripcionComponent  } from './componentes/transcripciones/nueva/nueva.component';
import { EditarTrancripcionComponent  } from './componentes/transcripciones/editar/editar.component';
import { EdicionTranscripcionComponent } from './componentes/transcripciones/edicion/edicion.component';
import { AlmacenamientoComponent } from './componentes/transcripciones/almacenamiento/almacenamiento.component';
/***********************************************************************************************************/

/****************************************** REPORTES *******************************************************/
import { ReportesSeleccionComponent } from './componentes/reportes/seleccion/seleccion.component';
import { ReporteVentasComponent } from './componentes/reportes/ventas/ventas.component';
import { ReporteComprasComponent } from './componentes/reportes/compras/compras.component';
import { ReporteTransPendientesComponent } from './componentes/reportes/trans-pendientes/trans-pendientes.component';
import { ReporteInventarioComponent } from './componentes/reportes/inventario/inventario.component';
import { ReporteFotocopiasComponent } from './componentes/reportes/fotocopias/fotocopias.component';
/***********************************************************************************************************/

/****************************************** ESTADISTICAS *******************************************************/
import { EstadisticasSeleccionComponent } from './componentes/estadisticas/seleccion/seleccion.component';
import { EstadisticasVentasComponent } from './componentes/estadisticas/ventas/ventas.component';
import { EstadisticasEmpleadosComponent } from './componentes/estadisticas/empleados/empleados.component';
import { EstadisticasFotocopiasComponent } from './componentes/estadisticas/fotocopias/fotocopias.component';
/***********************************************************************************************************/

/****************************************** EMPLEADOS *******************************************************/
import { ListaEmpleadosComponent } from './componentes/ajustes/empleados/lista/lista.component';
/***********************************************************************************************************/

import { RespaldosBdComponent } from './componentes/respaldos-bd/respaldos-bd.component';
import { CambiarContrasenaComponent } from './componentes/ajustes/cambiar-contrasena/cambiar-contrasena.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'iniciarsesion',
		pathMatch: 'full'
	},

	{
		path: 'iniciarsesion',
		component: IniciarsesionComponent
	},

	{
		path: 'inicio',
		component: InicioComponent
	},


    /************ CLIENTES ***************/
	{
		path: 'clientes',
		component: ListaClientesComponent
	},

	{
		path: 'clientes/edicion/:id',
		component: ClientesEdicionComponent
	},

	{
		path: 'clientes/historico/:id',
		component: HistoricoClienteComponent
	},
    /*************************************/

    /************ VENTAS *****************/
	{
		path: 'ventas',
		component: ListaVentasComponent
	},

	{
		path: 'ventas/nueva',
		component: NuevaVentaComponent
	},

	{
		path: 'ventas/detalles/:id',
		component: DetallesVentaComponent
	},
	/*************************************/

	/*********** COMPRAS ****************/
	{
		path: 'compras',
		component: ListaComprasComponent
	},

	{
		path: 'compras/nueva',
		component: NuevaCompraComponent
	},

	{
		path: 'compras/detalles/:id',
		component: DetallesCompraComponent
	},

	{
		path: 'proveedores',
		component: ListaProveedoresComponent
	},

	{
		path: 'proveedores/edicion/:id',
		component: ProveedorEdicionComponent
	},
	/************************************/

	/*********** INVENTARIO *************/
	{
		path: 'inventario',
		component: ListaInventarioComponent
	},

	{
		path: 'inventario/entradas',
		component: ListaEntradasComponent
	},

	{
		path: 'inventario/editar/:id',
		component: ProductosEdicionComponent
	},

	{
		path: 'inventario/nueva-entrada',
		component: NuevaEntradaComponent
	},

	{
		path: 'inventario/categorias-productos',
		component: CategoriasProductosComponent
	},
	/************************************/

	/*********** TRANSCRIPCIONES ********/
	{
		path: 'transcripciones',
		component: ListaTranscripcionesComponent
	},

	{
		path: 'transcripciones/nueva',
		component: NuevaTranscripcionComponent
	},

	{
		path:'transcripciones/editar/:id',
		component: EditarTrancripcionComponent
	},

	{
		path: 'transcripciones/actualizar/:id',
		component: EdicionTranscripcionComponent
	},

	{
		path: 'transcripciones/almacenamiento',
		component: AlmacenamientoComponent
	},
	/************************************/

	/************* REPORTES *************/
	{
		path: 'reportes',
		component: ReportesSeleccionComponent
	},

    {
    	path: 'reportes/ventas/:desde/:hasta',
    	component: ReporteVentasComponent
    },

    {
    	path: 'reportes/compras/:desde/:hasta',
    	component: ReporteComprasComponent
    },

    {
    	path: 'reportes/transcripciones-pendientes',
    	component: ReporteTransPendientesComponent
    },

    {
		path: 'reportes/inventario',
    	component: ReporteInventarioComponent
    },

    {
    	path: 'reportes/fotocopias/:desde/:hasta',
    	component: ReporteFotocopiasComponent
    },
	/************************************/

    /*********** ESTADISTICAS ***********/
    {
    	path: 'estadisticas',
    	component: EstadisticasSeleccionComponent
    },

    {
    	path: 'estadisticas/ventas',
    	component: EstadisticasVentasComponent
    },

    {
    	path: 'estadisticas/empleados/:id/mes/:mes',
    	component: EstadisticasEmpleadosComponent
    },

    {
    	path: 'estadisticas/fotocopias/:mes',
    	component: EstadisticasFotocopiasComponent
    },
    /************************************/

    /*********** EMPLEADOS ***********/
    {
    	path: 'empleados',
    	component: ListaEmpleadosComponent
    },
    /************************************/

    /*********** RESPALDOS ***********/
    {
    	path: 'respaldos',
    	component: RespaldosBdComponent
    },
    /************************************/

    /*********** CAMBIAR CONTRASEÑA ***********/
    {
    	path: 'cambiar-contrasena',
    	component: CambiarContrasenaComponent
    }
    /************************************/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
