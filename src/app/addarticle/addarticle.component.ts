import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../model/article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {


  constructor(private _articleservice:ArticleService ,
    private route: ActivatedRoute,
    private router: Router ) { }
    actionPage:String = 'Ecrivez un article';

  postForm : FormGroup;
  i:number;
currentarticle : Article=new Article( '','',new Date()  );
  ngOnInit(): void 
  {
    this.i =  this.route.snapshot.params.i;
    if (this.i)
    {
      this.actionPage = 'Modifier un article';
      this.currentarticle = this._articleservice.getonePost(this.i)
    }
    this.postForm = new FormGroup
    ({
      titre: new FormControl(this.currentarticle.titre,Validators.required),
      contenu: new FormControl(this.currentarticle.contenu,Validators.required),
      
      
    })
  }
  public newElement()
  {
    this.currentarticle.titre = this.postForm.controls.titre.value
    this.currentarticle.contenu = this.postForm.controls.contenu.value
    
    this.currentarticle.date = new Date();
    if(this.actionPage == 'Ecrivez un article')
    {
      this._articleservice.storeOnLocalStorage(this.currentarticle);
   }
    else
    {
      this._articleservice.updateItem(this.i,this.currentarticle )
    }
    this.router.navigate(['/home'])
  }

}
