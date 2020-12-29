import { Component, OnInit } from '@angular/core';
import { GetNotifyService } from 'src/app/tab1/services/get-notify.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  orderList;

  constructor(private getOrderService: GetNotifyService) { }

  ngOnInit() {
    this.getOrderService.getTruckOrders().subscribe(response => {
      console.log(response);
      this.orderList = response;
    })
  }

}
