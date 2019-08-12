import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api/api.service';

import { News } from './../../models/news.model';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  apiURL: string = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=39e34cd18470431397e53dcee99b0166';
  newsObj = new News();

  constructor(private apiService: ApiService) { }
 
  ngOnInit() {
    this.getNewsList();
  }

  getNewsList() {
    this.apiService.getNews(this.apiURL).subscribe(data => {
      console.log(data);
      this.newsObj = data;
    });
  }

}
