import * as core from 'core';
import * as di from "di";
import { Provider } from '@angular/core';


const newsArticleFactory = new di.NewsArticleFactory();

export const CORE_IOC: Provider[] = [
    {   
        provide: core.GetAllNewsArticlesUsecase,
        useFactory: () => newsArticleFactory.getGetAllNewsArticlesUsecase(),
    },
    {
        provide: core.SearchNewsArticlesUsecase,
        useFactory: () => newsArticleFactory.getSearchNewsArticlesUsecase(),
    }
];