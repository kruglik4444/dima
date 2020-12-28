import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TruckNotification } from '../../../../models/truckNotification.modal'

@Component({
  selector: 'post-alert',
  templateUrl: './postAlert.component.html'
})
export class PostAlert {

    
    constructor(private mdlCntrl: ModalController) {}

    notification = new TruckNotification("", "", "", "", "", "", "", "", "");

    async close(){
        await this.mdlCntrl.dismiss();
        console.log(this.notification);
    }
}