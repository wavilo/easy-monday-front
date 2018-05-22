import { Component, OnInit } from '@angular/core';
import { YoutubeFullList, YoutubeService } from '../api/youtube.service';
import { FormControl } from '@angular/forms';
import { NgLocaleLocalization } from '@angular/common';

@Component({
  selector: 'app-youtubegaming',
  templateUrl: './youtubegaming.component.html',
  styleUrls: ['./youtubegaming.component.css']
})
export class YoutubegamingComponent implements OnInit {

  youtubeFullList: Array<YoutubeFullList>;
  language: string

  constructor(
    public youtubeVideo: YoutubeService,
  ) { }

  ngOnInit() {
    this.getFullYoutubeList()
  }

  getFullYoutubeList(){
    this.youtubeVideo.getTopGamingVideos(this.language)
    .then((resultVideos: any) => {
      this.youtubeFullList = resultVideos.items;
      //console.log(this.youtubeFullList);
    })
    .catch((err) =>{
      console.log('Youtube List Error', err)
    });
    console.log("language c'est " + this.language);
  }

  allLanguages = [
    { value: 'fr', viewValue: 'French' },
    { value: 'de', viewValue: 'German' },
    { value: 'it', viewValue: 'Italian' },
    { value: 'es', viewValue: 'Spanish' },
    { value: 'pl', viewValue: 'Polish' },
    { value: 'cs', viewValue: 'Czech' },
    { value: 'hu', viewValue: 'Hungarian' },
    { value: 'nl', viewValue: 'Dutch' },
    { value: 'ro', viewValue: 'Romanian' },
  ];



}
