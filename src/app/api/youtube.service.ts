import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toPromise } from './to-promise';
import { environment } from '../../environments/environment'


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
    console.log("date" + afterStr);
    const beforStr =  publishedBefore.toISOString();
    console.log("date" + beforStr);
    return this.ajaxTruc
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&publishedAfter=${afterStr}&publishedBefore=${beforStr}&q=${query}&maxResults=50&key=AIzaSyA1FJ3KpKtRkAEVL-twLgfUpCi_tWaApLw`)
      .toPromise();
  }

  getTopGamingVideos(){
    return this.ajaxTruc
      .get('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&hl=fr&regionCode=FR&maxResults=50&videoCategoryId=20&key=AIzaSyA1FJ3KpKtRkAEVL-twLgfUpCi_tWaApLw')
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
  pageInfo: string;
  items?: string;
}

export class YoutubeFullList {
  videoId: string;
  publishedAt: Date;
  channelTitle: string;
  title: string;
  description: string;
  url: string;
  pageInfo: string;
  items?: string;
  statistics: any;
  snippet: any;
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  commentCount: number;
}

