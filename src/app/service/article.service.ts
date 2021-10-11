import { Inject, Injectable } from '@angular/core';
import { Article } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
 
  constructor( ) { }
  public posts : Article[] = []
  public storeOnLocalStorage(post: Article): void 
  {
    // get array of tasks from local storage
    this.posts = JSON.parse(localStorage.getItem('Articles') || '[]');
    // push new task to array
    this.posts.push(post);
    // insert updated array to local storage
    localStorage.setItem('Articles',JSON.stringify(this.posts));
    //console.log(localStorage.getItem('Posts') || 'LocaL storage is empty');
  }
  getPosts()
  {
    /* const posts = JSON.parse(localStorage.getItem('Posts')) || [];*/
    return JSON.parse(localStorage.getItem('Articles') || '[]');

  }
  getonePost(i : number)
  {
    /* const posts = JSON.parse(localStorage.getItem('Posts')) || [];*/
    this.posts =JSON.parse(localStorage.getItem('Articles') || '[]');
    return this.posts[i]
  }

  public removeItem(i:number) 
  {
    this.posts =JSON.parse(localStorage.getItem('Articles') || '[]')
    this.posts.splice(i,1)
    localStorage.setItem('Articles',JSON.stringify(this.posts));
  }

  public updateItem(i:number,updatePost :Article) 
  {
    this.posts =JSON.parse(localStorage.getItem('Articles') || '[]')
    this.posts.splice(i,1,updatePost);
    localStorage.setItem('Articles',JSON.stringify(this.posts));
  }
}
