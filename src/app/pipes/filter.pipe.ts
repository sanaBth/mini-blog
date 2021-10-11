import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filtredInput:String) {
    if (value.length === 0 || filtredInput ==='')
    {
      return value;
    }
    const articles = []
    for( const article of value)
    {
      if (article['titre']=== filtredInput)
    {
      articles.push(article);
    }
    return articles;
    }
    
  }
  

}
