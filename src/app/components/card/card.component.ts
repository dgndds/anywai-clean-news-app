import { Component, OnInit, Input } from '@angular/core';
import { NewsArticle } from 'core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() newsArticle: NewsArticle = {id:"", title:"", imageUrl:"", body:""};

  constructor() { }

  ngOnInit(): void {
  }

}
