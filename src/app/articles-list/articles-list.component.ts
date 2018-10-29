import { Component, OnInit } from '@angular/core';
import { Article } from "./../models/article.model";
import { ContentService } from "../content.service"
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
  providers: [ContentService]
})
export class ArticlesListComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.articles = this.contentService.getArticles();
  }

}
