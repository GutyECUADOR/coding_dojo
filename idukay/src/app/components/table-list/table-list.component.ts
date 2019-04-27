import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nombre', 'cedula'];
  dataSource = [
    {position: 1, nombre: 'Jose Gutierrez', cedula: 1600505505},
    {position: 2, nombre: 'Alexandra Cordova', cedula: 175665365}

  ];
  constructor() { }

  ngOnInit() {
  }

}
