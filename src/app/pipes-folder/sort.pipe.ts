import { Pipe, PipeTransform } from '@angular/core';
import { YoutubeFullList } from '../api/youtube.service';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<YoutubeFullList>): Array<YoutubeFullList> {
    
    console.log({value});
    value.sort(function(a: YoutubeFullList, b: YoutubeFullList) {
      const viewA = Number(a.statistics.viewCount)
            const viewB = Number(b.statistics.viewCount)
      if (viewA < viewB) return 1
      if (viewA > viewB) return -1
      else return 0
    })
 
    
    return value;
  }

}
