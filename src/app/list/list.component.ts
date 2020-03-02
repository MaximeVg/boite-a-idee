import { Component, OnInit } from '@angular/core';

import { IdeaService } from '../@shared/idea.service';
import { Idea } from '../models/idea';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ideas: Idea[];

  constructor(
    private ideaService: IdeaService
  ) {

   }

  ngOnInit() {
    this.ideas = this.ideaService.loadIdeas();  
  }
  getListIdeas(){
    return this.ideas;
  }

  deleteIdeas(){
    this.ideaService.clearIdeas();
  }

  refresh(){
    window.location.reload();
  }
}

