import { Component, OnInit } from '@angular/core';
import { YoutubeService, YoutubeStatsFromApi, YoutubeSnippetFromApi, YoutubeIdVideo, YoutubeListVideos } from '../api/youtube.service';


@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.css']
})
export class InfluencerComponent implements OnInit {

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
  }

  getYoutubeStats(){
    this.youtubeStats.getYtStats()
      .then((result:any) => {

        this.youtubeVidStats.push(result.items[0].statistics);
        this.youtubeVidSnippet.push(result.items[0].snippet);
      })
      .catch((err) =>{
        console.log('Youtube Stats Error', err)
      });
  }


}
