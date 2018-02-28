import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { AcceleratorPage } from '../accelerator/accelerator';
import { GpsPage } from '../gps/gps';
import { SocialmediaPage } from '../socialmedia/socialmedia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  camera(){
  	this.navCtrl.push(CameraPage);
  }

  accelerator(){
  	this.navCtrl.push(AcceleratorPage);
  }

  gps(){
  	this.navCtrl.push(GpsPage);
  }

  socialmedia(){
  	this.navCtrl.push(SocialmediaPage);
  }

}
