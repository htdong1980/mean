import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'box-child',
  templateUrl: './boxChild.html',
  styleUrls: ['./boxChild.scss'],
})
export class BoxChild implements OnInit {
  public firstCardContent: string;
  public secondCardContent: string;
  public thirdCardContent: string;
  public fourthCardContent: string;

  ngOnInit() {
    this.firstCardContent = 'First Card';
    this.secondCardContent = 'Second Card';
    this.thirdCardContent = 'Third Card';
    this.fourthCardContent = 'Fourth Card';
  }
}
