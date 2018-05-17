import { Component, OnInit } from '@angular/core';
import { YoutubeFullList, YoutubeService } from '../api/youtube.service';

@Component({
  selector: 'app-youtubegaming',
  templateUrl: './youtubegaming.component.html',
  styleUrls: ['./youtubegaming.component.css']
})
export class YoutubegamingComponent implements OnInit {

  youtubeFullList: Array<YoutubeFullList>

  constructor(
    public youtubeVideo: YoutubeService,
  ) { }

  ngOnInit() {
    this.getFullYoutubeList()
  }

  getFullYoutubeList(){
    this.youtubeVideo.getTopGamingVideos()
    .then((resultVideos: any) => {
      this.youtubeFullList = resultVideos.items;
      console.log(this.youtubeFullList);
    })
    .catch((err) =>{
      console.log('Twitch List Error', err)
    });
  }

}
