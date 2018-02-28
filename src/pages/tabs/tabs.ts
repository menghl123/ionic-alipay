import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {IndexPage} from '../index/index';
import {MoneyPage} from '../money/money';
import {KoubeiPage} from '../koubei/koubei';
import {FriendPage} from '../friend/friend';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab5Root = AboutPage;
  tab6Root = ContactPage;
  tab7Root = HomePage;
  tab1Root = IndexPage;
  tab2Root = MoneyPage;
  tab3Root = KoubeiPage;
  tab4Root = FriendPage;

  constructor() {

  }
}
