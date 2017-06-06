import { TCode } from '../../../../core/type/tcode';

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router,
  ) { }

  /* To get value and navigate the link */
  private onClick(value: string): void {
    let url: string = '/pages/tcode/' + value + '/index/6';
    this.router.navigate([url]);
  }

}
