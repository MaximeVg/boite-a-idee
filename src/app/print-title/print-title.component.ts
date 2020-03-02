import { Component, OnInit, Input } from '@angular/core';
import { Idea } from '../models/idea';

@Component({
  selector: 'app-print-title',
  templateUrl: './print-title.component.html',
  styleUrls: ['./print-title.component.css']
})
export class PrintTitleComponent implements OnInit {
  @Input() data:Idea;
  constructor() {
   }

  ngOnInit() {
  }

}