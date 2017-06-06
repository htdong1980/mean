import { TCode } from '../../../../core/type/tcode';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vdr-10',
  templateUrl: './vdr10.html',
  styleUrls: ['./vdr10.scss'],
})

export class Vdr10 {

  prefix: string = 'vdr';

  userRight: TCode[] = [
    { 'id': 1, 'tcode': 'vdr01' },
    { 'id': 1, 'tcode': 'vdr03' },
    { 'id': 2, 'tcode': 'vdr02' },
    { 'id': 2, 'tcode': 'vdr04' },
    { 'id': 2, 'tcode': 'vdr06' },
    { 'id': 2, 'tcode': 'vdr05' },
    { 'id': 3, 'tcode': 'vdr16' },
    { 'id': 4, 'tcode': 'vdr12' },
    { 'id': 4, 'tcode': 'vdr14' },
    { 'id': 4, 'tcode': 'vdr15' },
    { 'id': 4, 'tcode': 'vdr13' },
    { 'id': 4, 'tcode': 'vdr11' },
  ];

  constructor(
    private router: Router
  ) { }

  /* To get value and navigate the link */
  private onClick(value: string): void {
    let url: string = '/pages/tcode/' + value + '/index/6';
    this.router.navigate([url]);
  }

}
