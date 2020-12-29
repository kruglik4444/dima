import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { LoginComponent } from './components/login/login.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { PostAlert } from './components/desktop/post-alert/postAlert.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
   
  ],
  declarations: [Tab1Page, LoginComponent, DesktopComponent, PostAlert]
})
export class Tab1PageModule {}
