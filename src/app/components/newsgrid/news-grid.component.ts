import { Component, OnInit } from '@angular/core';
import { NewsArticle } from 'core';
import { SearchService } from 'src/app/services/search.service';

import * as core from 'core';

@Component({
  selector: 'app-newsgrid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.css']
})
export class NewsgridComponent implements OnInit {
  news: NewsArticle[] = [];
  shownNews: NewsArticle[] = [];

  constructor(
    private getAllNewsArticles: core.GetAllNewsArticlesUsecase,
    private searchNewsArticles:core.SearchNewsArticlesUsecase,
    private searchService: SearchService
  ){}

  ngOnInit(): void {
    this.getAllNewsArticles.execute().then(response => {
      this.news = response;
      this.shownNews = response;
    });

    this.searchService.searchEmmiter.subscribe((data: string) => {
      this.initateSearch(data);
    });
  }

  ngOnDestroy(): void {
    this.searchService.searchEmmiter.unsubscribe();
  }

  initateSearch(data: string): void {
    this.searchNewsArticles.execute(data).then(response => {
      this.shownNews = response;
    });
  }
}
