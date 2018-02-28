import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CameraPage } from '../pages/camera/camera';
import { AcceleratorPage } from '../pages/accelerator/accelerator';
import { GpsPage } from '../pages/gps/gps';
import { SocialmediaPage } from '../pages/socialmedia/socialmedia';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CameraPage,
    AcceleratorPage,
    GpsPage,
    SocialmediaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CameraPage,
    AcceleratorPage,
    GpsPage,
    SocialmediaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
