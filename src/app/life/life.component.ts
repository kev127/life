import { Component, OnInit } from '@angular/core';
import { Life } from '../life';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {
  life: Life[] = [
    new Life('The Way Get Started Is To Quit Talking And Begin Doing.', '~Walt Disney',new Date(2020,3,14),'Jane'),
    new Life('If life were predictable it would cease to be life, and be without flavor.','-Eleanor Roosevelt',new Date(2020,6,9), 'Peter'),
    new Life('Life is what happens when you are busy making other plans.', '-John Lennon',new Date(2020,8,6), 'John'),
  ];
  addNewLife(life){
    let lifeLength = this.life.length;
    life.id = lifeLength+1;
    life.iscompleteDate = new Date(life.completeDate)
    this.life.push(life)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
