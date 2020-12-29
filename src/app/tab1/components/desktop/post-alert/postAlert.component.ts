import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GetNotifyService } from 'src/app/tab1/services/get-notify.service';
import { TruckNotification } from '../../../../models/truckNotification.modal'

@Component({
  selector: 'post-alert',
  templateUrl: './postAlert.component.html'
})
export class PostAlert {

    
    constructor(private mdlCntrl: ModalController, private sendNotify: GetNotifyService) {}

    notification = new TruckNotification("", "", "", "", "", "", "", "", "ООО АВТОИНВЕСТ");

    async close(){
        await this.mdlCntrl.dismiss();
        console.log(this.notification);
    }

    sendAd(){
      this.sendNotify.sendNotification(this.notification);
    }
}