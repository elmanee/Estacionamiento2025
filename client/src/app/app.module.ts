import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { VehiculosService } from './services/vehiculos.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReservaListComponent } from './components/reserva-list/reserva-list.component';
import { LugaresListComponent } from './components/lugares-list/lugares-list.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { ReservaFormComponent } from './components/reserva-form/reserva-form.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { InicioseListComponent } from './components/iniciose-list/iniciose-list.component';
import { InicioseFormComponent } from './components/iniciose-form/iniciose-form.component';
import { PerfilFormComponent } from './components/perfil-form/perfil-form.component';
import { EditReserFormComponent } from './components/edit-reser-form/edit-reser-form.component';
import { EditPerFormComponent } from './components/edit-per-form/edit-per-form.component';
import { PagoFormComponent } from './components/pago-form/pago-form.component';
import { PagoListComponent } from './components/pago-list/pago-list.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { ChatBubbleComponent } from './components/chat-bubble/chat-bubble.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ReservaListComponent,
    LugaresListComponent,
    HomeListComponent,
    ReservaFormComponent,
    LoginComponent,
    InicioseListComponent,
    InicioseFormComponent,
    PerfilFormComponent,
    EditReserFormComponent,
    EditPerFormComponent,
    PagoFormComponent,
    PagoListComponent,
    UbicacionComponent,
    WhatsappComponent,
    ChatBubbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    VehiculosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
