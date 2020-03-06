import { Component, ViewChild, Injectable } from '@angular/core';
import { Nav, Platform, NavController, App, ViewController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertService } from '../providers/services/alert_service';
import { Storage } from '@ionic/storage';
import { HandleBackbuttonPage } from '../providers/services/HandleBackbutton';
import { ServicesProvider } from '../providers/services/services';
@Component({
  templateUrl: 'app.html'
})
@Injectable()
export class MyApp {
  mobile: any;
  userData: any;
  get navCtrl(): NavController {
    return this.app.getRootNav();
  };
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  pages: Array<{ title: string; component: any; icon: any }>;

  constructor(public platform: Platform, public events: Events, public storage: Storage, public serviceHandler: ServicesProvider,
    public statusBar: StatusBar, public _alert: AlertService, public handleBackbuttonPage: HandleBackbuttonPage,
    public alertCtrl: AlertService, public app: App, public _app: App, public splashScreen: SplashScreen) {

    this.events.subscribe("mobile", mobile => {
      console.log('mobile', mobile)
      this.mobile = mobile;
    });

    this.events.subscribe("userData", userData => {
      this.userData = userData;
    });

    this.storage.get("userData").then(userData => {
      if (!userData) {
        //commenting - Mythreyi - as per Rajesh's mail on registration flow
        // this.navCtrl.push('LoginPage');
        //changing to signup.ts navigation
        this.navCtrl.push('SignupPage');
      } else {
        this.navCtrl.push('TabPage');
      }
    })

    this.initializeApp();
    // this.serviceHandler.Get_All_Categories(this.mobile);

    this.pages = [
      { title: 'Home', component: 'TabPage', icon: 'assets/icon/home.svg' },
      { title: 'Quick Cart', component: 'QuickcartPage', icon: "assets/icon/mycart.svg" },
      { title: 'My Orders', component: 'MyorderPage', icon: "assets/icon/myorder.svg" },
      { title: 'Notifications', component: 'NotificationsPage', icon: "assets/icon/notification.svg" },
      // { title: 'User Settings', component: 'HomePage' , icon: "home.svg" },
    ];

    platform.ready().then(() => {
      //Handling device back button globally
      platform.registerBackButtonAction(() => {
        if (this._alert.getAlert()) {
          this._alert.closeAlert();
        }
        else {
          let nav = this._app.getActiveNav();
          let activeView: ViewController = nav.getActive();
          if (typeof activeView.instance.backButtonAction === 'function')
            activeView.instance.backButtonAction();
          else {
            if (nav.canGoBack()) {
              nav.pop();
            }
            else {
              if (this.navCtrl.canGoBack()) {
                this.navCtrl.pop();
              }
              else {
                if (nav.getType() != 'nav') {
                  activeView.dismiss();
                }
                if (nav.getType() == 'tab' || nav.getType() == 'nav') {
                  this.handleBackbuttonPage.HandleBackBtn();
                }
              }
            }
          }
        }
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  logout() {
    this.alertCtrl.showConfirm("log out", "Are you sure you want to logout?", "cancel", "log out").then(confirm => {
      if (confirm) {
        this.storage.remove('mobile');
        //added these below for correct navigation-Mythreyi
        this.storage.remove('userData');
        this.storage.remove('user_id');
        this.storage.remove('username');
        // end- Mythreyi
        this.navCtrl.setRoot('SignupPage')
      }
    })
  }
}

