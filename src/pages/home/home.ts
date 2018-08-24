import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  openMenu:boolean = false;
  productList:any = [];
  constructor(public navCtrl: NavController) {
    }
  this.productList = [{

  }];
  productToggle() {
    console.log();
    this.openMenu = !this.openMenu;
  }
}
