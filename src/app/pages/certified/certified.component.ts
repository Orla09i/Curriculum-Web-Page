import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-certified',
  templateUrl: './certified.component.html',
  styleUrls: ['./certified.component.css']
})
export class CertifiedComponent implements OnInit {

  constructor(public _infoServiceCurso: InfoPaginaService) { }

  ngOnInit() {
  }

}
