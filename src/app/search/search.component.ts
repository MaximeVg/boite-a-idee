import { Component, OnInit } from '@angular/core';
import { ListComponent }  from '../list/list.component';
import { Idea } from '../models/idea';
import { IdeaService } from '../@shared/idea.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  getIdea:Idea[];
  result:Idea[];
  suceed: boolean;
  failMsg: string[];


  selectedOption: string;
  options = [
    { name: "Title", value: 1 },
    { name: "Description", value: 2 },
    { name: "Tags", value: 3}
  ]
  constructor(private ideaService: IdeaService) {
   this.getIdea = this.ideaService.getIdeas();
   this.result = [];
   }

  ngOnInit() {
    this.getIdea = this.ideaService.loadIdeas();
    this.selectedOption = "Title";
    this.suceed = false;
  }

  onEnter(value:string){

    this.result = [];

    if(this.selectedOption === "Title"){
      for(var i = 0, len = this.getIdea.length; i < len; i++) 
      {
        if(this.getIdea[i].titre.toUpperCase().includes(value.toUpperCase())){
          this.result.push(this.getIdea[i]);
          this.suceed = true;
        }
      }
    }
    if(this.selectedOption === "Description"){
      for(var i = 0, len = this.getIdea.length; i < len; i++) 
      {
        if(this.getIdea[i].description.toUpperCase().includes(value.toUpperCase())){
          this.result.push(this.getIdea[i]);
          this.suceed = true;
        }
      }
    }
    
    if(this.selectedOption === "Tags"){
      for(var i = 0, len = this.getIdea.length; i < len; i++){
        for(var j = 0, tagsLen= this.getIdea[i].tags.length; j< tagsLen; j++){
          if(this.getIdea[i].tags[j].toUpperCase().includes(value.toUpperCase())){
            this.result.push(this.getIdea[i]);
            this.suceed = true;
          }
        }
      }
    }
    if(this.suceed == false){
      this.failMsg = ["No results ..."];
    }
  }



}