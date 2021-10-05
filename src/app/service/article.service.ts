import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  anotherTodolist = [];
  constructor( ) { }
  public storeOnLocalStorage(taskTitle: string): void {
          
    // get array of tasks from local storage
   // const currentTodoList = this.storage.get() || [];
    // push new task to array
 /*   currentTodoList.push({
        title: taskTitle,
        isChecked: false 
    });
    //insert updated array to local storage
    this.storage.set(STORAGE_KEY, currentTodoList);
    console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty'); */
}
}
