import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  items = [{
    title: 'Item 01'
  },{
    title: 'Item 02'
  },{
    title: 'Item 03'
  },{
    title: 'Item 04'
  }]

  constructor() { }

  ngOnInit() {
  }

}
