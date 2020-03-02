import { Component, OnInit, Input } from '@angular/core';
import { Idea } from '../models/idea';

@Component({
  selector: 'app-print-tags',
  templateUrl: './print-tags.component.html',
  styleUrls: ['./print-tags.component.css']
})
export class PrintTagsComponent implements OnInit {
  @Input() data:Idea;
  constructor() { }

  ngOnInit() {
  }

}