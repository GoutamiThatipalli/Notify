import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AddNewNotificationsComponent } from '../components/add-new-notifications/add-new-notifications.component'
@Injectable()
export class DataService {
  constructor(private http:Http) { }
  fetchData(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
    let options =  new RequestOptions({ headers: headers });
    console.log(options)
    return this.http.get('http://localhost:8088/notifications/getAllNotifications' , options)
      .map(res => res.json())
  }
  postData(user){
    return this.http.post('http://localhost:8088/notifications/addNotification',user)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }
  deleteData(id){
    return this.http.delete('http://localhost:8088/notifications/deleteNotification/'+id)
    .subscribe(
      res =>{
      console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }

}

