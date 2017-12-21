import { Component, OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';
import { DialogService } from "ng2-bootstrap-modal";
import { AddNewNotificationsComponent } from '../add-new-notifications/add-new-notifications.component';
import { FilterPipe } from '../../filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';
import { Notification } from '../../model/notificationmodel'
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  notifications:Notification[];
  constructor(private dataservice:DataService,private dialogService:DialogService,private router: Router) { }
  public data: any;
  notificationFilter: any = { notificationName: '' };
  ngOnInit() {
    this.dataservice.fetchData().subscribe((notifications) =>{
      this.notifications= notifications
      this.data=notifications;
  });
}
deleteId(id1){
  
  if(confirm("Are you sure Want to delete ")) {
    for (let i = 0; i < this.data.length; i++){
      if (this.data[i].id == id1) {
        this.data.splice(i,1); 
      }
    }
    this.dataservice.deleteData(id1);
  }
  
}
openDialogBox() {
  let disposable = this.dialogService.addDialog(AddNewNotificationsComponent, {
    title:"Add New Notification", 
    message:'Confirm message'})
    .subscribe((user)=>{
        if(user) {
            this.dataservice.postData(user);
            this.data.push(user);
        }
        else {
        }
    });
setTimeout(()=>{
    disposable.unsubscribe();
},1000000);
  
 }
 
 
}

