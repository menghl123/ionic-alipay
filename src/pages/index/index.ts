import { Component } from '@angular/core';
import {NavController, PopoverController} from 'ionic-angular';
import {MoreactionComponent} from '../../components/moreaction/moreaction';

@Component({
  selector: 'ali-index',
  templateUrl: 'index.html'
})
export class IndexPage {

  constructor(public navCtrl: NavController,
              public popoverCtrl: PopoverController) {

  }

  search($event){
    console.log($event);
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(MoreactionComponent);
    popover.present();
  }

}
