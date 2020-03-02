import { Component, OnInit, ViewChild } from '@angular/core';

import { IdeaService } from '../@shared/idea.service';

import { Idea } from '../models/idea';
import { LoginService } from '../@shared/login.service';

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.css']
})
export class AddIdeaComponent implements OnInit {
  loginError = '';
  tags:string[]=[];
  constructor(
    private ideaService: IdeaService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.ideaService.loadIdeas();
  }

  onCreer(Titre:string, Description:string) {
    if(this.ideaService.ideas == null){
      this.ideaService = new IdeaService();
    }
    if(this.loginService.getLogIn() == ''){
      this.loginError = "You need to be logged in to add an idea";
    }
    this.ideaService.addIdea(Titre, Description, this.tags, 0, 0, this.loginService.getLogIn());
    this.ideaService.storeIdeas();
  }

  onEnter(event: any) {
    this.tags.push(event.target.value);
  }
}