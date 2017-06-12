import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mje-03',
  templateUrl: './mje03.html',
  styleUrls: ['./mje03.scss'],
})

export class Mje03 implements OnInit {
  id: string;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params['id'];
        console.log(this.id);
      });
  }
}
