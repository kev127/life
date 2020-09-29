import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Life } from '../life';

@Component({
  selector: 'app-life-details',
  templateUrl: './life-details.component.html',
  styleUrls: ['./life-details.component.css']
})
export class LifeDetailsComponent implements OnInit {

  @Input() 
  life: Life;
  @Output() 
  isComplete = new EventEmitter<boolean>();

  lifeDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  upvotesNumber: number=0;
  upvote() {
    this.upvotesNumber++;

  }
  downvoteNumber: number=0
  downvote(){
    this.downvoteNumber--;
  }
  constructor() { }

  ngOnInit(): void {
  }

}