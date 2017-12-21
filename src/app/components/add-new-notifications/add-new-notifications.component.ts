import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import {FormGroup,FormArray,FormBuilder,FormControl, Validators} from '@angular/forms';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-add-new-notifications',
  templateUrl: './add-new-notifications.component.html',
  styleUrls: ['./add-new-notifications.component.css']
})

export class AddNewNotificationsComponent extends DialogComponent<ConfirmModel, boolean>  implements OnInit {
form;

  constructor(dialogService: DialogService, private datePipe: DatePipe ) { 
    super(dialogService);
  }
   ngOnInit() {
    this.form = new FormGroup({
      notificationName : new FormControl("", Validators.required),
     emailId : new FormControl("", Validators.email),
     notificationSub : new FormControl(),
     message : new FormControl("", Validators.required),
     scheduleDate : new FormControl(),
    });
  }
   onSubmit = function(user){
    if(user.scheduleDate==null){
      user.scheduleDate=new Date();
     user.scheduleDate= this.datePipe.transform(user.scheduleDate, 'yyyy-MM-dd HH:mm:ss');
      user.scheduleNow=1;
      this.result=user;
   }
   else{
     this.result=user;
   }
     this.close();
     
    };
}
export interface ConfirmModel {
  title:string;
  message:string;
}