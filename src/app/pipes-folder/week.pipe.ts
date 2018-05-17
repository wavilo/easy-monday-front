import { Pipe, PipeTransform } from '@angular/core';
import { TwitchTopList } from '../api/twitch.service';

@Pipe({
  name: 'filteredBySearch',
})
export class WeekPipe implements PipeTransform {

  transform(value: Array<TwitchTopList>, searchTerm: string): Array<TwitchTopList> {
    if (!value) {
      return []; 
  }
    if (!searchTerm){
    return value; 
  }
  searchTerm = searchTerm.toLowerCase();
  const filteredArray = [];
  console.log({value});

  value.forEach((oneTwitchVid) => {
    const lowerResearch = oneTwitchVid.game.name.toLowerCase()
    if (lowerResearch.includes(searchTerm)) {
      filteredArray.push(oneTwitchVid);
    }
  });
  return filteredArray;
  }

}



