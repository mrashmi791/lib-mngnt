import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api/api.service';
import { Search } from './../../models/search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  url: string = 'https://developers.zomato.com/api/v2.1/search'
  searchObj = new Search();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    //this.getSearchList();
  }

  getSearchList() {
    this.apiService.getResturantList(this.url).subscribe(data => {
      console.log(data);
      this.searchObj = data;
    });
  }
}
