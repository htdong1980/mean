import { Component } from '@angular/core';

export class TCode {
  id: number;
  tcode: string;
}

@Component({
  selector: 'mje-10',
  templateUrl: './mje10.html',
  styleUrls: ['./mje10.scss'],
})

export class Mje10 {

  prefix: string = 'mje';

  userRight: TCode[] = [
    { 'id': 1, 'tcode': 'mje01' },
    { 'id': 1, 'tcode': 'mje03' },
    { 'id': 2, 'tcode': 'mje02' },
    { 'id': 2, 'tcode': 'mje04' },
    { 'id': 2, 'tcode': 'mje06' },
    { 'id': 2, 'tcode': 'mje05' },
    { 'id': 3, 'tcode': 'mje16' },
    { 'id': 4, 'tcode': 'mje12' },
    { 'id': 4, 'tcode': 'mje14' },
    { 'id': 4, 'tcode': 'mje15' },
    { 'id': 4, 'tcode': 'mje13' },
    { 'id': 4, 'tcode': 'mje11' },
  ];

  constructor() {


  }

}
