import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [
  ]
})
export class DetalleComponent implements OnInit {
  title: string = 'Detalle Page'
  constructor( private titleHead : Title) { }

  ngOnInit(): void {
    this.titleHead.setTitle( this.title )
  }

}
