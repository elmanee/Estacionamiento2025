import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaListComponent } from './components/reserva-list/reserva-list.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { LugaresListComponent } from './components/lugares-list/lugares-list.component';
import { LoginComponent } from './components/login/login.component';
import { InicioseListComponent } from './components/iniciose-list/iniciose-list.component';
import { ReservaFormComponent } from './components/reserva-form/reserva-form.component'
import { InicioseFormComponent } from './components/iniciose-form/iniciose-form.component';
import { PerfilFormComponent } from './components/perfil-form/perfil-form.component';
import { EditReserFormComponent } from './components/edit-reser-form/edit-reser-form.component';
import { EditPerFormComponent } from './components/edit-per-form/edit-per-form.component';
import { PagoFormComponent } from './components/pago-form/pago-form.component';
import { PagoListComponent } from './components/pago-list/pago-list.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeListComponent
  }, 
  
  {
    path:'home/reserva',
    component: ReservaListComponent
  },  
  {
    path:'home/registros/add',
    component: ReservaFormComponent
  },
  {
    path:'home/lugares/add',
    component: LugaresListComponent
  },
  {
    path:'home/login',
    component: LoginComponent
  },
  {
    path:'home/crea_cuenta',
    component: InicioseFormComponent

  },
  {
    path:'home/perfil',
    component: PerfilFormComponent

  },
  {
  path:'home/editRese/:id',
  component: EditReserFormComponent

},
{
  path:'home/editPer/:idUs',
  component: EditPerFormComponent

},
{
  path:'home/pago',
  component: PagoFormComponent

},
{
  path:'home/pagoTabla',
  component: PagoListComponent

},
{
  path: 'home/ubicacion',
  component: UbicacionComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

