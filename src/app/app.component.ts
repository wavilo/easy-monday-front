import { Component } from '@angular/core';
import { UserService } from './api/user.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showFiller = false;

  //for Material Angular
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void; 

  constructor(
    public userTruc: UserService,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher
  ){
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }



  ngOnInit(){
    this.userTruc.check()
      .catch((err) => {
        console.log("App login check error");
        console.log(err);
      })
  }

  logoutClick(){
    this.userTruc.logout()
      .catch((err) => {
        console.log("App lOGOUT error");
        console.log(err);
      });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  
  }











