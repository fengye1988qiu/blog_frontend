import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: any[];
  constructor(private appServer: AppService) {}
  ngOnInit(): void {
    // this.getInitData();
  }
  getInitData() {
    console.log('getInitData', this.appServer);
    this.appServer
      .sendRequest('articles')
      .toPromise()
      .then((response: HttpResponse<any[]>) => {
        console.log(response.body);
        this.articles = response.body;
      })
      .catch(error => console.log('error:', error));
  }
}
