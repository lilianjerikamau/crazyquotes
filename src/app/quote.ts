


export class Quote {
  showDetails: boolean;
  completeDate?: Date;
  maxlikes?: number;
  constructor(public id:number,public name:string,public title:string,public quote:string,public author:string, public datePosted: Date,public upvotes:number, public downvotes:number){
      this.showDetails=false;
      
    }
}
