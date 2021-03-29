import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheQuoteComponent } from './the-quote/the-quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { DatepipePipe } from './datepipe.pipe';
import { DatePipePipe } from './date-pipe.pipe';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { FormsModule } from '@angular/forms';
import { AppHighlightQuoteDirective } from './app-highlight-quote.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    TheQuoteComponent,
    QuoteDetailComponent,
    DatepipePipe,
    DatePipePipe,
    QuotesFormComponent,
    AppHighlightQuoteDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
