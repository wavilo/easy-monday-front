import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { toPromise } from './to-promise';


@Injectable()
export class YoutubeService {

  constructor(
    private ajaxTruc: HttpClient
  ) { }



  getYtStats(id){
    return this.ajaxTruc
      .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyA1FJ3KpKtRkAEVL-twLgfUpCi_tWaApLw`)
      .toPromise();
  }

  getLastYtVideos(publishedAfter: Date, publishedBefore: Date, query){
    const afterStr = publishedAfter.toISOString();
    const beforStr =  publishedBefore.toISOString();
    return this.ajaxTruc
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&publishedAfter=${afterStr}&publishedBefore=${beforStr}&q=${query}&regionCode=fr&key=AIzaSyA1FJ3KpKtRkAEVL-twLgfUpCi_tWaApLw`)
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



export class YoutubeListVideos {
  videoId: string;
  publishedAt: Date;
  channelTitle: string;
  title: string;
  description: string;
  url: string;
}