import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchInput: string = "";

  constructor(
    private searchService:SearchService
  ){}

  ngOnInit(): void {
  }

  onSearch(): void {
    this.searchService.initiateSearch(this.searchInput);
  }

  onReset(): void {
    this.searchInput = "";
    this.searchService.initiateSearch(this.searchInput);
  }

}
