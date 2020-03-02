export class Idea {
  titre: string;
  description: string;
  tags: string[];
  nbLike: number;
  nbDislike: number;
  author: string;

  constructor(titre:string, description:string, tags:string[]){
    this.titre=titre;
    this.description=description;
    this.tags=tags;
    this.nbLike=0;
    this.nbDislike=0;
    this.author = '';
  }
}