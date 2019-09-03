import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logueado',
  templateUrl: './logueado.component.html',
  styleUrls: ['./logueado.component.css']
})
export class LogueadoComponent implements OnInit {

  email:string = '';
  constructor(private routeActivate:ActivatedRoute) { }

  ngOnInit() {
    this.routeActivate.paramMap.subscribe(e=>
      this.email=e.get('id')
      );
  }

}
