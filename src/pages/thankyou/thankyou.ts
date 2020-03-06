import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-thankyou',
  templateUrl: 'thankyou.html',
})
export class ThankyouPage {
  orderid: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.orderid  = this.navParams.get("orderID");
  }

  gotohome(){
    this.navCtrl.setRoot('TabPage');
  }
}
