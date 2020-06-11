import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { DemoModule } from './demo/demo.module';
//import { TachepostComponent } from './demo/Setting/taches/tachepost/tachepost.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog'; 
import { AddedittypesComponent } from './demo/Setting/typed/addedittypes/addedittypes.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './shared/calendar/calendar.component';
import { AddditobjComponent } from './demo/Setting/objectif/addditobj/addditobj.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core'
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { GettacheComponent } from './demo/tache/gettache/gettache.component';
import { AddedittacheComponent } from './demo/tache/addedittache/addedittache.component';

//import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    AppComponent,
    //TachepostComponent,
    
  ],
  imports: [ 
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatStepperModule,
    MatDialogModule,
    MatSliderModule ,
    TableModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    DemoModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    //PaginationModule.forRoot(),
    
  ],
  entryComponents:[AddedittypesComponent,CalendarComponent,AddditobjComponent,AddedittacheComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
