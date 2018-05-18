import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { CommentService } from './api/comment.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserService } from './api/user.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {   
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule, } from "@angular/material";
import { AnalyticsComponent } from './analytics/analytics.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { WeekPipe } from './pipes-folder/week.pipe';
import { ToolsComponent } from './tools/tools.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { YoutubeService } from './api/youtube.service';
import { InfluencerComponent } from './influencer/influencer.component';
import { TwitchComponent } from './twitch/twitch.component';
import { AdwordsComponent } from './adwords/adwords.component';
import { TwitchService } from './api/twitch.service';
import { YoutubegamingComponent } from './youtubegaming/youtubegaming.component';
import { SortPipe } from './pipes-folder/sort.pipe';





@NgModule({
  declarations: [
    AppComponent,
    UserAccountComponent,
    NotFoundComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent,
    AnalyticsComponent,
    CommentDetailComponent,
    WeekPipe,
    ToolsComponent,
    YoutubeComponent,
    InfluencerComponent,
    TwitchComponent,
    AdwordsComponent,
    YoutubegamingComponent,
    SortPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  providers: [
    CommentService,
    UserService, 
    YoutubeService,
    TwitchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
