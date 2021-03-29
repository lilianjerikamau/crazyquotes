import { Component ,OnInit} from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from '../quote-service/quote.service';
import { AlertService } from '../alert-service/alert.service';

@Component({
  selector: 'app-the-quote',
  templateUrl: './the-quote.component.html',
  styleUrls: ['./the-quote.component.css']
})
export class TheQuoteComponent implements OnInit {
  title = "Welcome To CrazyQuotes";
  quotes: Quote[];
   alertService:AlertService;

 
  
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
      let toDelete = confirm(`Are you sure you want to delete  ${this.quotes[index].title}??`)
      if(toDelete){
        this.quotes.splice(index, 1);
         this.alertService.alertMe("The goal has been deleted")
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

   constructor(quoteService:QuoteService ,alertService:AlertService) {
     this.quotes = quoteService.getQuotes()
      this.alertService = alertService;
   }
 

  ngOnInit() {
  }
}

