import { Component, OnInit } from '@angular/core';
import { YoutubeService, YoutubeStatsFromApi, YoutubeSnippetFromApi, YoutubeIdVideo, YoutubeListVideos } from '../api/youtube.service';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  youtubeVidStats: Array<YoutubeStatsFromApi> = [];
  youtubeVidSnippet: Array<YoutubeSnippetFromApi> = [];
  formCreds: YoutubeIdVideo = new YoutubeIdVideo();
  youtubeVideosList: Array<YoutubeListVideos> = [];

  constructor(
    public youtubeStats: YoutubeService,
    public youtubeSnippet: YoutubeService,
    public youtubeVideos: YoutubeService,
  ) { }

  ngOnInit() {
    this.getYoutubeStats();
    this.getYoutubeList();
  }

  getYoutubeStats(){
    this.youtubeStats.getYtStats()
      .then((result:any) => {

        this.youtubeVidStats.push(result.items[0].statistics);
        this.youtubeVidSnippet.push(result.items[0].snippet);
        //console.log(this.youtubeVidStats);
        //console.log(this.youtubeVidSnippet);
      })
      .catch((err) =>{
        console.log('Youtube Stats Error', err)
      });
  }

  getYoutubeList(){
    this.youtubeVideos.getLastYtVideos()
      .then((resultVideos: any) => {
        console.log(resultVideos);
        this.youtubeVideosList.push(resultVideos.items[0].snippet);
      })
      .catch((err) =>{
        console.log('Youtube Stats Error', err)
      });
  }

}
