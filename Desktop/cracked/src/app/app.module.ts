import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BigFeaturedComponent } from './big-featured/big-featured.component';
import { SmallerFeaturedComponent } from './smaller-featured/smaller-featured.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ViralComponent } from './viral/viral.component';

@NgModule({
  declarations: [
    AppComponent,
    BigFeaturedComponent,
    SmallerFeaturedComponent,
    ArticlesListComponent,
    ViralComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
