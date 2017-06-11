import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mje-02',
  templateUrl: './mje02.html',
  styleUrls: ['./mje02.scss'],
})

export class Mje02 implements OnInit {
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
