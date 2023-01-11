import * as core from 'core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  news: core.NewsArticle[] = [];
  constructor(private getAllNewsArticles:core.GetAllNewsArticlesUsecase){
    this.news = getAllNewsArticles.execute();
    console.log("news",this.news);
  }

  

  title = 'anywai-clean-news-app';
}
