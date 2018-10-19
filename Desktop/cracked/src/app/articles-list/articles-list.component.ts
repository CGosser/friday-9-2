import { Component, OnInit } from '@angular/core';
import { Article } from "./../models/article.model";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  articles: Article[] =[
    new Article("5 movies stunts that went horribly wrong", "Mark Hill", "October 19, 2018", 12, "http://s3.crackedcdn.com/phpimages/article/0/3/8/676038_v2.jpg", "In the age of CGI, it's easy to forget how many movie stunts are real ... and re... "),
    new Article("a strangely convincing theory about the 'halloween' series", "Tony Alpsen", "October 19, 2018", 5, "http://s3.crackedcdn.com/phpimages/article/0/3/0/676030_v2.jpg", "Here's why retconning the entire franchise lore makes total sense. "),
    new Article("hack your way through life with these 9 convenient gadgets", "CRACKED Store", "October 19, 2018", 5, "http://s3.crackedcdn.com/phpimages/article/0/5/4/676054_v2.jpg", "These doodads are just that doogood.")
  ]
  constructor() { }

  ngOnInit() {
  }

}
