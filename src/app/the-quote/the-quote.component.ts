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
    new Quote (3,'Mikey','Life','Everything is going to be alright.','Libby Larsen',new Date(2019,6,3),0,0),
    new Quote (4,'Beatrice','Communication','Be loyal to your future not your past.','Clay Shirky',new Date(2019,7,7),0,0),
    new Quote (5,'Charles','Dear self','Less fear more hope.','Harold Abelson',new Date(2019,7,17),0,0),
    new Quote (6,'Jaycee','Tech and life','One day at a timegit.','Alice Kahn',new Date(2019,7,15),0,0)

   ];
  
   get arrangeQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }
     createQuote(quote:any){
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
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  
   constructor() { }

  ngOnInit() {
  }
}

