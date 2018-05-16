import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toPromise } from './to-promise';
import { environment } from '../../environments/environment'


@Injectable()
export class TwitchService {

  constructor(
    private ajaxTruc: HttpClient
  ) { }


  getFullTopList(){
    return this.ajaxTruc
      .get(`https://api.twitch.tv/kraken/games/top?limit=100&period=week&client_id=p1jklfx2tgezw6r2kosv3i9uwu4nlw`)
      .toPromise()
  }

}


export class TwitchTopList {
  name: string;
  description: string;
  language: string;
  views: number;
  published_at: Date;
  url: string;
  game: any;
  preview: string;
  displayName: string;
}


