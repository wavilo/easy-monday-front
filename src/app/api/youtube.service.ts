import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { toPromise } from './to-promise';


@Injectable()
export class YoutubeService {

  constructor(
    private ajaxTruc: HttpClient
  ) { }



  getYtStats(){
    const idVideo: string = "KVacgZ7mPHE";
    return this.ajaxTruc
      .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${idVideo}&key=${environment.youtubeKeyId}`)
      .toPromise();
  }

  getLastYtVideos(){
    return this.ajaxTruc
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&publishedAfter=2018-05-05T00%3A00%3A00Z&publishedBefore=2018-05-12T00%3A00%3A00Z&q=overwatch&regionCode=fr&key=${environment.youtubeKeyId}`)
      .toPromise();
  }
  

}


export class YoutubeStatsFromApi {
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  commentCount: number;
}

export class YoutubeSnippetFromApi {
  channelTitle: string;
  publishedAt: Date;
  title: string;
}

export class YoutubeIdVideo {
  idVideo: string;
}

export class YoutubeListVideos {
  videoId: string;
  publishedAt: Date;
  channelTitle: string;
  title: string;
  description: string;
  url: string;
}