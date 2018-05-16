import { Component, OnInit } from '@angular/core';
import { YoutubeService, YoutubeStatsFromApi, YoutubeSnippetFromApi, YoutubeListVideos } from '../api/youtube.service';




@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {



  publishedAfter: Date;
  publishedBefore: Date;
  query: string = "";
  //after: 2018-05-05T00%3A00%3A00Z
  //before: 2018-05-12T00%3A00%3A00Z

  //The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.

  youtubeVideosList: Array<YoutubeListVideos> ;
  youtubeVideoNumber: Array<YoutubeListVideos>;

  classState: any = {
    hidden: true,
    show: false,
  }

  constructor(
    public youtubeVideos: YoutubeService,
  ) { }

  ngOnInit() {
    this.getYoutubeList()
  }


  getYoutubeList(){
    this.youtubeVideos.getLastYtVideos(this.publishedAfter, this.publishedBefore, this.query)
      .then((resultVideos: any) => {
        this.youtubeVideosList = resultVideos.items;
        this.youtubeVideoNumber = resultVideos;
        console.log(this.youtubeVideosList);
        this.changeClass();
      })
      .catch((err) =>{
        console.log('Youtube Stats Error', err)
      });


  }

  changeClass(){
    this.classState.hidden = false;
    this.classState.show = true;
  }


}
