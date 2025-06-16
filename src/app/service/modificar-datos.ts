// src/app/services/data-transform.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransformService {
  private originalData = [
    {
      "aseguradora": "AFIRME",
      "cotizacion": {
        "cliente": {
          "tipoPersona": "fisica",
          "nombre": "prueba",
          "apellidoPat": "prueba",
          "apellidoMat": "prueba",
          "rfc": "",
          "fechaNacimiento": "01-01-2005",
          "ocupacion": "",
          "curp": "",
          "direccion": {
            "calle": "oriente 945",
            "noExt": "410",
            "noInt": "021",
            "colonia": "prueba",
            "codPostal": "56618",
            "poblacion": "mexico",
            "ciudad": "cdmx",
            "pais": "mexico"
          },
          "edad": "18",
          "genero": "MASCULINO",
          "telefono": "",
          "email": ""
        }
      }
    }
  ];

  getOriginalData() {
    return [...this.originalData]; // Retorna una copia para no modificar el original
  }

  getModifiedData() {
    // Crear una copia profunda del arreglo original
    const modifiedData = JSON.parse(JSON.stringify(this.originalData));
    
    // Modificar al menos 5 campos
    modifiedData[0].aseguradora = "MAPFRE";
    modifiedData[0].cotizacion.cliente.nombre = "Juan";
    modifiedData[0].cotizacion.cliente.apellidoPat = "Pérez";
    modifiedData[0].cotizacion.cliente.fechaNacimiento = "15-05-1990";
    modifiedData[0].cotizacion.cliente.edad = "33";
    modifiedData[0].cotizacion.cliente.direccion.calle = "Poniente 256";
    modifiedData[0].cotizacion.cliente.direccion.colonia = "Centro";
    modifiedData[0].cotizacion.cliente.genero = "FEMENINO";
    
    return modifiedData;
  }
}