import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'moreaction.html'
})
export class MoreactionComponent {

  constructor(public viewCtrl: ViewController) {

  }
  close() {
    this.viewCtrl.dismiss();
  }
}
