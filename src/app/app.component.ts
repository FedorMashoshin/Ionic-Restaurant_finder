import { environment } from './../environments/environment';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.injectMapsKey();
    });
  }

  injectMapsKey() {
    const key = environment.mapKey;
    let node = document.createElement('script');
    node.src = `https://maps.googleapis.com/maps/api/js?key=${key}`;
    node.type = 'text/javascript'; // set the script type
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
