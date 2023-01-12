import { Component, OnInit } from '@angular/core';
// import { NewsService } from 'src/app/services/news.service';
// import { News } from 'src/app/interfaces/News';
import { NewsArticle } from 'core';
// import { SearchService } from 'src/app/services/search.service';
import { SearchService } from 'src/app/services/search.service';

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
    private getAllNewsArticles: core.GetAllNewsArticlesUsecase,
    private searchNewsArticles:core.SearchNewsArticlesUsecase,
    private searchService: SearchService
  ){}

  ngOnInit(): void {
    this.getAllNewsArticles.execute().then(response => {
      this.newsArr = response;
      this.shownNews = response;
    });

    this.searchService.searchEmmiter.subscribe((data: string) => {
      this.initateSearch(data);
    });
  }

  initateSearch(data: string): void {
    this.searchNewsArticles.execute(data).then(response => {
      this.shownNews = response;
    });
  }
}
