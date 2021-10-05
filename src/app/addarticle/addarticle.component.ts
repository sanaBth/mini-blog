import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {

  constructor(private _articleservice:ArticleService ) { }

  ngOnInit(): void {
    const newarticle = 'new todo'; 
         this._articleservice.storeOnLocalStorage(newarticle);
  }

}
