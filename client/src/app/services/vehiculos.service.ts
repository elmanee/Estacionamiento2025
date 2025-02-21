import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Vehiculo } from '../models/Vehiculo';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  private vehiculo: Vehiculo[] = [
    { idVehiculo: undefined, matricula: 'ABC123', nombreDue: 'Dueño 1', modelo: 'Modelo 1', color: 'Rojo', espacio: 'A1' },
    { idVehiculo: undefined, matricula: 'XYZ789', nombreDue: 'Dueño 2', modelo: 'Modelo 2', color: 'Azul', espacio: 'B2' },
    // ...
  ];


  API_URI = 'http://localhost:3000/api';
 // API_URI= 'http://localhost:3000/src/data';

  constructor(private http: HttpClient) {}

  getReservas(){
    return this.http.get(`${this.API_URI}/vehiculos`)
  }

  getReserva(IdVehiculo: string | number | undefined): Observable<Vehiculo> {
    return this.http.get(`${this.API_URI}/vehiculos/${IdVehiculo}`);
  }

  saveVehiculos(vehiculo: Vehiculo){
    return this.http.post(`${this.API_URI}/vehiculos`,vehiculo)
}

deleteVehiculo(matricula: string) {
  return this.http.delete(`${this.API_URI}/vehiculos/${matricula}`);
}



  updateVehiculo(updateVehiculo : Vehiculo): Observable<Vehiculo>{
  return this.http.put(`${this.API_URI}/vehiculos`,updateVehiculo);
}

updateVehiculos(matricula: string | number | undefined,update: Vehiculo): Observable<Vehiculo>{
  return this.http.put(`${this.API_URI}/vehiculos/${matricula}`,update);
}
getVehiculoPorId(IdVehiculo: string | number | undefined): Vehiculo | undefined {
  // Buscar el vehículo por ID en la lista de vehículos
  return this.vehiculo.find(vehiculo => vehiculo.idVehiculo === IdVehiculo);
}
}
