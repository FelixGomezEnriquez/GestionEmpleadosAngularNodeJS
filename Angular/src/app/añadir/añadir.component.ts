import { Component } from '@angular/core';
import { MongoService } from '../mongo.service';
import { OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-añadir',
  templateUrl: './añadir.component.html',
  styleUrls: ['./añadir.component.css'],
})
export class AñadirComponent {
  constructor(
    private serviMongo: MongoService,
    private rd: Renderer2,
    private messageService: MessageService
  ) {}

  crearEmpleado(): void {
    let body = { nombre: '', apellidos: '' };
    body.nombre = this.rd.selectRootElement('#nombre').value;
    body.apellidos = this.rd.selectRootElement('#apellidos').value;
    console.log(body);
    this.serviMongo.insertarBBDD(body).subscribe((data) => {
      console.log(data);
    });
    this.messageService.add({
      severity: 'success',
      summary: 'OK',
      detail: 'Empleado añadido',
    });
  }
}
