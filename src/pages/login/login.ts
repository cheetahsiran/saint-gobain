import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../home/home';
import { MESSAGES } from '../../serivces/messageService';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: [('../../assets/commonstyles/common.scss')]
})
export class LoginPage {
  showLogin = true;
  showForget = false;
  uName = '';
  pWord = '';
  fEmail = '';
  unameError = '';
  funameError = '';
  pwordError = '';
  emailError = '';
  femailError = '';
  errArr = [];

  constructor(
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.toastr.setRootViewContainerRef(vcr);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  checkLogin() {
    if (this.checkValidation()) {
      if (this.uName === 'test@gmail.com' && this.pWord === '1234') {
        localStorage.setItem('authorization','asdfasfasd');
        this.toastr.success('Login Successfullyy');
        this.navCtrl.push(HomePage);
      }
      else {
        this.toastr.error('Username or password is wrong');
      }
    }
  }
  checkValidation() {
    this.unameError = '';
    this.pwordError = '';
    this.emailError = '';
    this.errArr = [];
    if (this.uName === 'undefined' || this.uName === 'null' || this.uName === '') {
      this.errArr.push('unameErr')
      this.unameError = MESSAGES.msg['unameErr'];
    } else {
      var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!emailRegex.test(this.uName)) {
        this.emailError = MESSAGES.msg['emailVal'];

      }
    }
    if (this.pWord === 'undefined' || this.pWord === 'null' || this.pWord === '') {
      this.pwordError = MESSAGES.msg['pwordErr'];
    }
    if (this.errArr.length > 0) {
      return false;
    } else {
      return true;
    }
  }
  checkForgetValidation() {
    this.funameError = '';
    this.femailError = '';
    this.errArr = [];
    if (this.fEmail === 'undefined' || this.fEmail === 'null' || this.fEmail === '') {
      this.errArr.push('unameErr')
      this.funameError = MESSAGES.msg['unameErr'];
    } else {
      var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!emailRegex.test(this.fEmail)) {
        this.errArr.push('emailVal');
        this.femailError = MESSAGES.msg['emailVal'];
      }
    }
    if (this.errArr.length > 0) {
      return false;
    } else {
      return true;
    }
  }
  forgetPassword() {
    this.errArr = [];
    this.funameError = '';
    this.femailError = '';
    this.unameError = '';
    this.pwordError = '';
    this.emailError = '';
    this.showLogin = false;
    this.showForget = true;
  }
  gotoLogin() {
    this.errArr = [];
    this.funameError = '';
    this.femailError = '';
    this.unameError = '';
    this.pwordError = '';
    this.emailError = '';
    this.showLogin = true;
    this.showForget = false;
  }
  sendForgetPassword() {
    if (this.checkForgetValidation()) {
      this.toastr.success('Send Mail Successfullyy');
    }
  }

}
