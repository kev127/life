import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core'
import { Life } from '../life';

@Component({
  selector: 'app-life-form',
  templateUrl: './life-form.component.html',
  styleUrls: ['./life-form.component.css']
})
export class LifeFormComponent implements OnInit {
  @Input() 
  life: Life
  newLife = new Life("", "", new Date(), "");
  @Output() 
  addLife = new EventEmitter<Life>();

  submitlife() {
    this.addLife.emit(this.newLife);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
