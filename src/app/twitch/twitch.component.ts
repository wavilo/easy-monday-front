import { Component, OnInit } from '@angular/core';
import { TwitchService, TwitchTopList } from '../api/twitch.service';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.css']
})
export class TwitchComponent implements OnInit {

  gameQuery: string;
  twitchVideosList: Array<TwitchTopList>
  twitchFullList: Array<TwitchTopList>
  
  constructor(
    public twitchVideos: TwitchService,
  ) { }

  ngOnInit() {
    this.getFullTwitchList()
  }


  getFullTwitchList() {
    this.twitchVideos.getFullTopList()
    .then((resultVideos: any) => {
      this.twitchFullList = resultVideos.top;
      console.log(this.twitchFullList);
    })
    .catch((err) =>{
      console.log('Twitch List Error', err)
    });
  }



}

