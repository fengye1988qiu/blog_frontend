import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticleComponent } from './article/article.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ArticleComponent],
  imports: [BrowserModule, NgbModule.forRoot(), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
