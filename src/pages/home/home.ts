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
    this.productList = [{
      "name":"Building Type 1",
      "img-src":"https://www.pixelstalk.net/wp-content/uploads/2016/10/Building-Wallpapers-HD.jpg",
    },
    {
      "name":"Building Type 1",
      "img-src":"https://www.pixelstalk.net/wp-content/uploads/2016/10/Building-Wallpapers-HD.jpg",
    },
    {
      "name":"Building Type 1",
      "img-src":"https://www.pixelstalk.net/wp-content/uploads/2016/10/Building-Wallpapers-HD.jpg",
    },
    {
      "name":"Building Type 1",
      "img-src":"https://www.pixelstalk.net/wp-content/uploads/2016/10/Building-Wallpapers-HD.jpg",
    },
    {
      "name":"Building Type 1",
      "img-src":"https://www.pixelstalk.net/wp-content/uploads/2016/10/Building-Wallpapers-HD.jpg",
    },
    {
      "name":"Building Type 1",
      "img-src":"https://www.pixelstalk.net/wp-content/uploads/2016/10/Building-Wallpapers-HD.jpg",
    },
    {
      "name":"Building Type 1",
      "img-src":"https://www.pixelstalk.net/wp-content/uploads/2016/10/Building-Wallpapers-HD.jpg",
    },
    {
      "name":"Building Type 1",
      "img-src":"https://www.pixelstalk.net/wp-content/uploads/2016/10/Building-Wallpapers-HD.jpg",
    },
    {
      "name":"Building Type 1",
      "img-src":"https://www.pixelstalk.net/wp-content/uploads/2016/10/Building-Wallpapers-HD.jpg",
    }];
    }
  productToggle() {
    this.openMenu = !this.openMenu;
  }
}
