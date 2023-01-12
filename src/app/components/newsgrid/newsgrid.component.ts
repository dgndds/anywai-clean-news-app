import { Component, OnInit } from '@angular/core';
// import { NewsService } from 'src/app/services/news.service';
// import { News } from 'src/app/interfaces/News';
import { NewsArticle } from 'core';
// import { SearchService } from 'src/app/services/search.service';

import * as core from 'core';

@Component({
  selector: 'app-newsgrid',
  templateUrl: './newsgrid.component.html',
  styleUrls: ['./newsgrid.component.css']
})
export class NewsgridComponent implements OnInit {
  newsArr: NewsArticle[] = [];
  shownNews: NewsArticle[] = [];
  searchValue: String = "";

  constructor(
    private getAllNewsArticles:core.GetAllNewsArticlesUsecase
    // private newsService: NewsService, private searchService:SearchService
    ) { }

  ngOnInit(): void {
    this.getAllNewsArticles.execute().then(response=>{
      this.newsArr = response;
      this.shownNews = response;
    });
    
    // this.newsService.getNews().subscribe((news: News[]) => {
    //   this.newsArr = news;
    //   this.shownNews = news;
    // });

    // this.searchService.searchEmmiter.subscribe((data:string) => { 
    //   this.searchValue = data;
    //   this.shownNews = this.newsArr.filter(news => news.body.substring(0,200).toLowerCase().includes(data.toLowerCase()) || news.title.toLowerCase().includes(data.toLowerCase()));
    // });
  }
}
