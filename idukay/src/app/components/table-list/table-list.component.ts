import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nombre', 'isready'];
  dataSource = [
    {position: 1, nombre: 'Jose Gutierrez', isready: true},
    {position: 2, nombre: 'Alexandra Cordova', isready: false}

  ];
  constructor() {
  }

  ngOnInit() {
  }

}
