import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: [
  ]
})
export class EstadisticaComponent implements OnInit {
  private title : string = 'Estadistica Page'
  constructor( private titleHead : Title ) { }

  ngOnInit(): void {
    this.titleHead.setTitle( this.title )
  }

}
