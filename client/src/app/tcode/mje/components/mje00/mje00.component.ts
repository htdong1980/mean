import { TCode } from '../../../../core/models/tcode';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mje-00',
  templateUrl: './mje00.html',
  styleUrls: ['./mje00.scss'],
})

export class Mje00 {

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
    let url: string = '/pages/tcode/' + this.prefix + '/' + value + '/:6';
    this.router.navigate([url]);
  }
}
