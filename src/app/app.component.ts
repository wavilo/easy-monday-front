import { UserService} from './api/user.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { CommentService, CommentCredentials } from './api/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'app';
  showFiller = false;
  panelOpenState: boolean = false;
  formCreds: CommentCredentials = new CommentCredentials();


  //for Material Angular
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void; 

  constructor(
    public userTruc: UserService,
    public apiTruc: CommentService,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer,
  ){
    this.mobileQuery = media.matchMedia('(max-width: 2200px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    iconRegistry.addSvgIcon(
      'power-off',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/baseline-power_settings_new-24px.svg'));
      iconRegistry.addSvgIcon(
        'user',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/baseline-account_circle-24px.svg'));
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
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

  
  saveComment(){
    this.apiTruc.postComment(this.formCreds)
      .then((result) => {
        console.log(result);
        this.formCreds.comment = null;
      })
      .catch((err) => {
        console.log('Login error');
        console.log(err);
      });
  }

  }











