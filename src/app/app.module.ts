import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes  } from '@angular/router'
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ReactiveFormsModule, FormsModule,Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Ng2PaginationModule } from 'ng2-pagination';

import { Pipe, PipeTransform } from '@angular/core';
import {DataTableModule} from "angular2-datatable";
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { AddNewNotificationsComponent } from './components/add-new-notifications/add-new-notifications.component';
import { DataService } from './services/data.service';
import { FilterPipe } from './filter.pipe'
import { Ng2FilterPipeModule, Ng2FilterPipe } from 'ng2-filter-pipe';
const appRoutes: Routes = [
  { path: 'display', component: DisplayComponent },
  { path: 'add', component: AddNewNotificationsComponent },
  {
    path: 'display',
    component: DisplayComponent,
    data: { title: 'display User' }
  },
  { path: '',
    redirectTo: '/display',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    AddNewNotificationsComponent,
    FilterPipe
   
  ],
  
  imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } 
      ),
    BrowserModule, 
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2PaginationModule,
    DataTableModule,
    Ng2FilterPipeModule,
   BootstrapModalModule.forRoot({container:document.body})
  ],
  entryComponents: [
    AddNewNotificationsComponent
  ],
  providers: [DataService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
