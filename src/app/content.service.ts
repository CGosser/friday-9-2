import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  articles: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.articles = database.list('articles')
  }

  getArticles() {
    return this.articles
  }

  getArticleById(articleId: string){
    return this.database.object('articles/' + articleId)
  }
}
