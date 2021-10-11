import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _localStorageService : ArticleService) { }
  public articles : Article[] =[];
  i:number;
  ngOnInit(): void {
    this.refresh();
  }
  refresh ()
  {
    this.articles=this._localStorageService.getPosts();
  }
  delete(i:number)
  {
    this._localStorageService.removeItem(i);
    this.refresh()
  }

}
