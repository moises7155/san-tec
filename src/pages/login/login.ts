import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegistrarPage} from "../registrar/registrar";
import {HomePage} from "../home/home";
import {HttpClient} from "@angular/common/http";
import { AlertController } from 'ionic-angular';

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
})
export class LoginPage {
  data: any;
  usuario = {email: '', password: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goregisitar(){
    this.navCtrl.setRoot(RegistrarPage);
  }

  gohome(){
    this.navCtrl.setRoot(HomePage);
  }
  login () {
    const dato = JSON.stringify(this.usuario);
    console.log( this.usuario);
    this.httpClient.post('http://localhost/santec/login.php', dato ).subscribe(data => {
      this.data = data;
      if (this.data === 1) {
        localStorage.setItem('funlogin', 'true');
        localStorage.setItem('email', this.usuario.email);
        this.navCtrl.setRoot(HomePage);
        console.log('Estado' + this.data);
        this.presentAlert();
      } else {
        this.errorAlert();
        console.log('Estado' + this.data);
      }
    }, error => {
      console.log(error);
    });
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Bienvenido',
      subTitle: 'Ahora puedes preparar cocteles',
      buttons: ['Ok']
    });
    alert.present();
  }
  errorAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'El correo y contraseña no coiciden',
      buttons: ['Ok']
    });
    alert.present();
  }
}


