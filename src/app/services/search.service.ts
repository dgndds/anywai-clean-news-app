import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchEmmiter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  initiateSearch(data:string):void {
    this.searchEmmiter.emit(data);
  }
}
