import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAccountComponent } from './user-account/user-account.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { ToolsComponent } from './tools/tools.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { TwitchComponent } from './twitch/twitch.component';
import { AdwordsComponent } from './adwords/adwords.component';
import { YoutubegamingComponent } from './youtubegaming/youtubegaming.component';
import { TableauComponent } from './tableau/tableau.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'comments', component: UserAccountComponent },
  { path: 'comment/:blahId', component: CommentDetailComponent},
  { path: "signup", component: SignupComponent},
  { path: "login", component: LoginComponent },
  { path: "analytics", component: AnalyticsComponent },
  { path: "youtube", component: YoutubeComponent },
  { path: "tools", component: ToolsComponent },
  { path: "influencer", component: InfluencerComponent },
  { path: "twitch", component: TwitchComponent },
  { path: "adwords", component: AdwordsComponent },
  { path: "youtubegaming", component:YoutubegamingComponent },
  { path: "tableau", component: TableauComponent},

  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
