import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class GetNotifyService {

  constructor(private http: HttpClient) { }

  sendNotification(notify){
    this.http.post("https://avtoinvest-89139-default-rtdb.firebaseio.com/transport_list.json", notify).subscribe(response =>{
      console.log(response);
    })
  }

  getProfileInfo(){
    return this.http.get("https://avtoinvest-89139-default-rtdb.firebaseio.com/company/0.json");
  }

  getTruckOrders(){
    return this.http.get("https://avtoinvest-89139-default-rtdb.firebaseio.com/transport_list.json")
      .pipe(
        map(responseData => {
          const orderArray = [];
          for (const key in responseData){
            if (responseData.hasOwnProperty(key)){
              orderArray.push({...responseData[key], id: key})
            }
          }
          return orderArray;
        })
      )
  }
}
