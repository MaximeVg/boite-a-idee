import { Injectable } from '@angular/core';

import { Idea } from '../models/idea';
import { LoginService } from '../@shared/login.service';

@Injectable()
export class IdeaService {

  private ideas: Idea[];

  constructor(
    private login: LoginService
  ) {
    this.ideas = [];
   }

  addIdea(titre: string, description: string, tags:string[], nbLike: number, nbDislike: number) {
    this.ideas.push({ titre: titre, description: description , tags: tags, nbLike: nbLike, nbDislike: nbDislike, });
  }

  getIdeas() {
    return this.ideas;
  }

  storeIdeas(){
    localStorage.setItem("Ideas", JSON.stringify(this.ideas));
  }

  loadIdeas(){
    this.ideas = JSON.parse(localStorage.getItem('Ideas'));
    return this.ideas;
  }

  clearIdeas(){
    this.ideas = [];
    localStorage.clear();
  }
}