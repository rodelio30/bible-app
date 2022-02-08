/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public segment = 'card';
  public arr = new Array(25);

  newTestamentItems: any[] = [];
  oldTestamentItems: any[] = [];

  constructor() {
    for (let i = 0; i < 27; i++) {
      this.newTestamentItems.push({
        name: newbooks[i]
      });
    }
    for (let i = 0; i < 27; i++) {
      this.oldTestamentItems.push({
        name: oldbooks[i]
      });
    }

  }
  // constructor() { }

  ngOnInit() {
    // console.log(this.books);
  }
}
  // eslint-disable-next-line @typescript-eslint/member-ordering
  const newbooks = [
    'Mateo',
    'Marcos',
    'Lucas',
    'John',
    'Gawa',
    'Roma',
    '1 Corinto',
    '2 Corinto',
    'Galacia',
    'Efeso',
    'Filipos',
    'Colosas',
    '1 Tesalonica',
    '2 Tesalonica',
    '1 Timoteo',
    '2 Timoteo',
    'Tito',
    'Filemon',
    'Hebrew',
    'Santiago',
    '1 Pedro',
    '2 Pedro',
    '1 John',
    '2 John',
    '3 John',
    'Judas',
    'Pahayag'
  ];

const oldbooks = [
  'Genesis',
  'Exodus',
  'Lucas',
  'John',
  'Gawa',
  'Roma',
  '1 Corinto',
  '2 Corinto',
  'Galacia',
  'Efeso',
  'Filipos',
  'Colosas',
  '1 Tesalonica',
  '2 Tesalonica',
  '1 Timoteo',
  '2 Timoteo',
  'Tito',
  'Filemon',
  'Hebrew',
  'Santiago',
  '1 Pedro',
  '2 Pedro',
  '1 John',
  '2 John',
  '3 John',
  'Judas',
  'Pahayag'
];
