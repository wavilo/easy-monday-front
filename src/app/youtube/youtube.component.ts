import { Component, OnInit } from '@angular/core';
import { YoutubeService, YoutubeStatsFromApi, YoutubeSnippetFromApi, YoutubeIdVideo, YoutubeListVideos } from '../api/youtube.service';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  formCreds: YoutubeIdVideo = new YoutubeIdVideo();
  youtubeVideosList: Array<YoutubeListVideos> = [];

  constructor(
    public youtubeVideos: YoutubeService,
  ) { }

  ngOnInit() {
    this.getYoutubeList();
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
