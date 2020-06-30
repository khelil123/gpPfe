import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { FirstViewComponent } from './first-view/first-view.component';
import { SharedModule } from '../shared/shared.module';
import { RouterLinkActive, RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ServiceComponent } from './Setting/MS-service/add-service/service.component';
import { ListServiceComponent } from './Setting/MS-service/list-service/list-service.component';
import { AddSserviceComponent} from './Setting/MS-service/add-sservice/add-sservice.component';
import { ListSserviceComponent } from './Setting/MS-service/list-sservice/list-sservice.component';
import { RoleComponent } from './Setting/MS-service/add-ss-role/role/role.component';
import { ListeRoleComponent } from './Setting/MS-service/list-ss-role/liste-role/liste-role.component';


//import { ProjetComponent } from './Setting/projet/projet/projet.component';

import { GettypedComponent } from './Setting/typed/gettyped/gettyped.component';
import {TableModule} from 'primeng/table';
import { AddedittypesComponent } from './Setting/typed/addedittypes/addedittypes.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import { GetobjComponent } from './Setting/objectif/getobj/getobj.component';
import { AddditobjComponent } from './Setting/objectif/addditobj/addditobj.component';
import { PostaffComponent } from './Affectation/postaff/postaff.component'; 
import {DropdownModule} from 'primeng/dropdown';
import {PickListModule} from 'primeng/picklist';
import { ConsultationcompoComponent } from './Affectation/consultationcompo/consultationcompo.component';

import { AddeditTypeTacheComponent } from './Setting/typeTache/addedit-type-tache/addedit-type-tache.component';
import { GetTypeTacheComponent } from './Setting/typeTache/get-type-tache/get-type-tache.component';
import { GetgroupeComponent } from './Setting/groupe/getgroupe/getgroupe.component';
import { AddeditgroupeComponent } from './Setting/groupe/addeditgroupe/addeditgroupe.component';
import { AddeditTypetacheSousserviceComponent } from './Setting/typetachesousservice/addedit-typetache-sousservice/addedit-typetache-sousservice.component';
import { GetTypetacheSousserviceComponent } from './Setting/typetachesousservice/get-typetache-sousservice/get-typetache-sousservice.component';
import { ListAffecComponent } from './Affectation/list-affec/list-affec.component';
import { AddAffecComponent } from './Affectation/add-affec/add-affec.component';

import { AddedittacheComponent } from './tache/addedittache/addedittache.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core'
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { GettacheComponent } from './tache/gettache/gettache.component';
import { ChartsModule } from 'ng2-charts';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';

import { GetobjectifComponent } from './Objectif/getobjectif/getobjectif.component';
import { AddeditobjectifComponent } from './Objectif/addeditobjectif/addeditobjectif.component';
import { PostdemandeComponent } from './Demande/postdemande/postdemande.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { PostgroupComponent } from './Group/postgroup/postgroup.component';


import { ConsultationComponent } from './Affectation/typeTachesousservice/consultation/consultation.component';
import { PostComponent } from './Affectation/typeTachesousservice/post/post.component';



@NgModule({

//   declarations: [FirstViewComponent, AddedittypesComponent, GetobjComponent, AddditobjComponent, PostaffComponent, ConsultationcompoComponent, ProjetComponent, GettypedComponent, AddedittypesComponent, AddeditTypeTacheComponent, GetTypeTacheComponent, GetgroupeComponent, AddeditgroupeComponent, AddeditTypetacheSousserviceComponent, GetTypetacheSousserviceComponent],



  declarations: [AddedittypesComponent, ServiceComponent, ListServiceComponent, AddSserviceComponent, ListSserviceComponent, RoleComponent, ListeRoleComponent,FirstViewComponent, AddedittypesComponent, GetobjComponent, AddditobjComponent, PostaffComponent, ConsultationcompoComponent, GettypedComponent, AddedittypesComponent, AddeditTypeTacheComponent, GetTypeTacheComponent, GetgroupeComponent, AddeditgroupeComponent, AddeditTypetacheSousserviceComponent, GetTypetacheSousserviceComponent, ListAffecComponent, AddAffecComponent, ConsultationComponent, PostComponent,AddedittacheComponent, GettacheComponent,GetobjectifComponent,AddeditobjectifComponent, PostdemandeComponent, PostgroupComponent],

  imports: [
    
    MatExpansionModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    ChartsModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatStepperModule,
    PickListModule,
    DropdownModule,
    MatSnackBarModule,
    TableModule,
    CommonModule,
    SharedModule,
    DemoRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ],
  exports: [
    FirstViewComponent,
    
  ]
})
export class DemoModule { }

