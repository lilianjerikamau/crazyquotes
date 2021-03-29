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
    new Quote (1,'Lilian','Progress','You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.','Madeleine LEngle', new Date(2019,7,12),0,0),
    new Quote (2,'Wendy','Personality','The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela',new Date(2019,7,14),0,0),
    new Quote (3,'Mikey','Life','The way to get started is to quit talking and begin doing..','Walt Disney',new Date(2019,6,3),0,0),
    new Quote (4,'Beatrice','Communication','If life were predictable it would cease to be life, and be without flavor..','Eleanor Roosevelt',new Date(2019,7,7),0,0),
    new Quote (5,'Charles','Dear self','If you set your goals ridiculously high and its a failure, you will fail above everyone elses success..','Harold Abelson',new Date(2019,7,17),0,0),
    new Quote (6,'Jaycee','Tech and life','"Life is what happens when you are busy making other plans.','John Lennon',new Date(2019,7,15),0,0)

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
   preNum?:number
  lastNum?:number
  counter?:number

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }

  
   constructor() { }

  ngOnInit() {
  }
}

