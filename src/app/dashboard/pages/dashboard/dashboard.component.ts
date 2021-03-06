import { Component, OnInit } from '@angular/core';
import { IngresoEgresoService } from 'src/app/services/ingreso-egreso.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor(
    public ingresoEgresoService: IngresoEgresoService
  ) { }

  ngOnInit(): void {
    this.ingresoEgresoService.initEgresoIngresoListener()
  }

}
