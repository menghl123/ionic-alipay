import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'ali-index',
  templateUrl: 'index.html'
})
export class IndexPage {

  constructor(public navCtrl: NavController) {

  }

  search($event){
    console.log($event);
  }

}
