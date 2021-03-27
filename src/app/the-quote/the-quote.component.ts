import { Component ,OnInit} from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-the-quote',
  templateUrl: './the-quote.component.html',
  styleUrls: ['./the-quote.component.css']
})
export class TheQuoteComponent implements OnInit {
  
  title = "welcome to crazy quotes";
   quotes:Quote[] = [
    new Quote (1,'Lilian','Progress','Slow progress is still progress','Albert Einstein', new Date(2019,7,12),0,0),
    new Quote (2,'Wendy','Personality','Be the person yor dog thinks you are.','Max Frisch',new Date(2019,7,14),0,0),
    new Quote (3,'Mikey','Life','The great myth of our times is that technology is communication.','Libby Larsen',new Date(2019,6,3),0,0),
    new Quote (4,'Beatrice','Communication','Communications tools don’t get socially interesting until they get technologically boring.','Clay Shirky',new Date(2019,7,7),0,0),
    new Quote (5,'Charles','Code and people','Programs must be written for people to read, and only incidentally for machines to execute.','Harold Abelson',new Date(2019,7,17),0,0),
    new Quote (6,'Alfred','Tech and life','For a list of all the ways technology has failed to improve the quality of life, please press three.','Alice Kahn',new Date(2019,7,15),0,0)

   ];
  
   get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }
     addedQuote(quote:any){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead:any, index:number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index:number) {
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  
   constructor() { }

  ngOnInit() {
  }
}
