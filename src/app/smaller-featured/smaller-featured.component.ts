import { Component, OnInit } from '@angular/core';
import { Article } from "./../models/article.model";
import { ContentService } from "../content.service";
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-smaller-featured',
  templateUrl: './smaller-featured.component.html',
  styleUrls: ['./smaller-featured.component.scss'],
  providers: [ContentService]
})
export class SmallerFeaturedComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.articles = this.contentService.getArticles();
  }

}
