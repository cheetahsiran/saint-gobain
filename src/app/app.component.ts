import { Component, ViewContainerRef ,ViewChild} from '@angular/core';
import { Platform , NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { MESSAGES } from '../serivces/messageService';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LoginPage } from '../pages/login/login';
@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  styleUrls: [('../assets/commonstyles/common.scss')]
})
export class MyApp {
  @ViewChild('rootNavController') nav: NavController;
  rootPage = LoginPage;
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }
  ngOnInit(): void {
   this.nav.push(LoginPage);
  }
}

