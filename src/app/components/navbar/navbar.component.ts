import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  searchInput: string = ""; //this variable is actually used in the html file for the ngModel, to get the input

  constructor(
    private searchService:SearchService
  ){}

  submitSearch(): void {
    this.searchService.initiateSearch(this.searchInput);
  }

  resetSearch(): void {
    this.searchInput = "";
    this.searchService.initiateSearch(this.searchInput);
  }

}
