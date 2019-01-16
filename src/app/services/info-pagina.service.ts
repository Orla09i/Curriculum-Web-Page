import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  info_portafolio: any[] = [];
  info_icon: any[] = [];
  info_cursos: any[] = [];
  cargada = false;

  constructor( private http: HttpClient) {
    this.cargarInfo();
    this.cargarInfoPortalio();
    this.cargarInfoIcono();
    this.cargarInfoCursos();
  }

  private cargarInfo() {
    this.http.get('https://curriculum-9f9d2.firebaseio.com/Persona.json')
      .subscribe( (resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
        // console.log(resp);

      });
  }

  private cargarInfoPortalio() {
    this.http.get('https://curriculum-9f9d2.firebaseio.com/Portafolio.json')
      .subscribe( (resp: any[]) => {

        this.cargada = true;
        this.info_portafolio = resp;
        // console.log(resp);

      });
  }

  private cargarInfoIcono() {
    this.http.get('https://curriculum-9f9d2.firebaseio.com/Iconos_Habilidades.json')
      .subscribe( (resp: any[]) => {

        this.cargada = true;
        this.info_icon = resp;
        // console.log(resp);

      });
  }

  private cargarInfoCursos() {
    this.http.get('https://curriculum-9f9d2.firebaseio.com/cursos.json')
      .subscribe( (resp: any[]) => {

        this.cargada = true;
        this.info_cursos = resp;
        // console.log(resp);

      });
  }
}
