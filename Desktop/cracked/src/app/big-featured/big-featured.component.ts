import { Component, OnInit } from '@angular/core';
import { Article } from "./../models/article.model"

@Component({
  selector: 'app-big-featured',
  templateUrl: './big-featured.component.html',
  styleUrls: ['./big-featured.component.scss']
})
export class BigFeaturedComponent implements OnInit {
featuredArticle: Article = new Article("horror movie character logic that falls apart in three steps", "CRACKED readers", "October 19, 2018", 5, "http://s3.crackedcdn.com/phpimages/photoshop/0/4/5/676045_v2.jpg")

  constructor() { }

  ngOnInit() {
    console.log(document.getElementsByClassName("bigFeatured"))
    var mainDiv = document.getElementsByClassName("bigFeatured")
    console.log(this)
    mainDiv[0].style.backgroundImage = "url(" +'"' + this.featuredArticle.imageUrl + '"' + ")"
    console.log("url(" +'"' + this.featuredArticle.imageUrl + '"' + ")")
  }

}
