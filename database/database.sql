create database ng_vehiculos_bd;
use ng_vehiculos_bd;

create table vehiculo(
    matricula varchar(50) not null primary key,
    nombreDue varchar(50),
    modelo varchar (100),
    color varchar (20),
    espacio varchar(10),

    created_at timestamp default current_timestamp


);

DESCRIBE vehiculo;

create table reserva(
    IdRese varchar(50) not null primary key,
    IdUsuario varchar(10),
    IdPago varchar(10),
    nombre varchar (50),


    created_at timestamp default current_timestamp,

  constraint FK_nombre FOREIGN KEY (nombre) References vehiculo (nombre)
  On update Cascade 
  On Delete Cascade

);

DESCRIBE reserva;

create table usuario(
    IdUsuario Int (11) not null auto_increment primary key,
    nombre varchar(50),
    apeP varchar (50),
    apeM varchar (50),
    telefono varchar(10),
    correo varchar(100) ,
    password1 varchar(100),
    password2 varchar(100),

    created_at timestamp default current_timestamp

);

DESCRIBE usuario;


--====================================================================================================================

create table usuario(
    IdUsuario Int (11) not null auto_increment primary key,
    nombre varchar(50),
    apeP varchar (50),
    apeM varchar (50),
    telefono varchar(10),
    correo varchar(100) ,
    password1 varchar(100),
    password2 varchar(100),

    created_at timestamp default current_timestamp

);

DESCRIBE usuario;

create table vehiculo(
    IdVehiculo Int (11) not null auto_increment primary key,
    matricula varchar(50),
    nombreDue varchar(50),
    modelo varchar (100),
    color varchar (20),
    espacio char(2),
	IdUsuario Int(11),
    Estatus varchar(255),
    IDPago Int (11),

    created_at timestamp default current_timestamp,

 constraint FK_IdUsuario FOREIGN KEY (IdUsuario) References usuario (IdUsuario)
  On update Cascade 
  On Delete Cascade,

  constraint FK_espacio FOREIGN KEY ( espacio) References lugar ( espacio)
  On update Cascade 
  On Delete Cascade,

   constraint FK_IDPago FOREIGN KEY (IDPago) References pago (IDPago)
  On update Cascade 
  On Delete Cascade
);

DESCRIBE vehiculo;

create table lugar(
    espacio char(2) not null primary key,

    created_at timestamp default current_timestamp
);

DESCRIBE lugar;


create table pago(
    IDPago Int (11) not null auto_increment primary key,
    concepto varchar(50),
    monto varchar(50),
    Estatus varchar(50),

    created_at timestamp default current_timestamp

);

DESCRIBE pago;



