import { Component, OnInit, Input } from '@angular/core';
import { Idea } from '../models/idea';
import { IdeaService } from '../@shared/idea.service';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent implements OnInit {
  @Input() data:Idea;
  constructor(private ideaService: IdeaService) { }

  ngOnInit() {
  }

  onLike(){
    this.data.nbLike++;
    this.ideaService.storeIdeas();
  }

    onDislike(){
    this.data.nbDislike++;
    this.ideaService.storeIdeas();
  }
}