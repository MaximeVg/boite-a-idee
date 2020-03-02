import { Component, OnInit, Input } from '@angular/core';
import { Idea } from '../models/idea';
import { IdeaService } from '../@shared/idea.service';

@Component({
  selector: 'app-print-description',
  templateUrl: './print-description.component.html',
  styleUrls: ['./print-description.component.css']
})
export class PrintDescriptionComponent implements OnInit {
  @Input() data:Idea;
  constructor() { }

  ngOnInit() {
  }

}