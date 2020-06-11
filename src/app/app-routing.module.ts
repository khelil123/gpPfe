import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstViewComponent } from './demo/first-view/first-view.component';
import { GetobjComponent } from './demo/Setting/objectif/getobj/getobj.component';

import { GettypedComponent } from './demo/Setting/typed/gettyped/gettyped.component';
import { ListServiceComponent} from './demo/Setting/MS-service/list-service/list-service.component';
import { ListSserviceComponent} from './demo/Setting/MS-service/list-sservice/list-sservice.component';
import { ListeRoleComponent } from './demo/Setting/MS-service/list-ss-role/liste-role/liste-role.component'; 

import { PostaffComponent } from './demo/Affectation/postaff/postaff.component';
import { ConsultationcompoComponent } from './demo/Affectation/consultationcompo/consultationcompo.component';
import { ListAffecComponent} from './demo/Affectation/list-affec/list-affec.component';
import {  AddAffecComponent} from './demo/Affectation/add-affec/add-affec.component';

import { GetTypeTacheComponent } from './demo/Setting/typeTache/get-type-tache/get-type-tache.component';
import { GetgroupeComponent } from './demo/Setting/groupe/getgroupe/getgroupe.component';
import { GetTypetacheSousserviceComponent } from './demo/Setting/typetachesousservice/get-typetache-sousservice/get-typetache-sousservice.component';

import { AddedittacheComponent } from './demo/tache/addedittache/addedittache.component';
import {GettacheComponent} from './demo/tache/gettache/gettache.component';

import { PostComponent } from './demo/Affectation/typeTachesousservice/post/post.component';
import { ConsultationComponent } from './demo/Affectation/typeTachesousservice/consultation/consultation.component';


const routes: Routes = [
  {path: 'Acceuil', component: FirstViewComponent},
//{ path: 'login', component: LoginComponent},  // make it redirect to your login component
 { path: '',redirectTo:'Acceuil', pathMatch:'full'}, //change this to your own home page
//{path: '**', component:PageNotFoundComponent} // make it redirect to your 404 not found component


{ path:'Tyopeobjectif',component:GetobjComponent},

{  path:'TypeD',component:GettypedComponent },
{path:'typoss',component:PostaffComponent},
{path:'typossconsultation',component:ConsultationcompoComponent},

{  path:'gettypetache',component:GetTypeTacheComponent },
{  path:'groupe',component:GetgroupeComponent },
{  path:'TypeTacheSousService',component:GetTypetacheSousserviceComponent },


{  path:'gettyped',component:GettypedComponent },
{  path:'getservice',component:ListServiceComponent },
{  path:'getsservice',component:ListSserviceComponent },
{  path:'getRole',component:ListeRoleComponent},


{path:'tache',component:GettacheComponent}


{  path:'postaffttss',component:PostComponent},

{  path:'consult',component:ConsultationComponent},
=
{  path:'getlist',component:ListAffecComponent},
{  path:'addaffec',component: AddAffecComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
