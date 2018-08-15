import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  articles: any[];
  constructor(private appServer: AppService) {}
  ngOnInit(): void {
    this.getInitData();
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
