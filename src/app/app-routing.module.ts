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

import { GetobjectifComponent } from './demo/Objectif/getobjectif/getobjectif.component';
import { PostdemandeComponent } from './demo/Demande/postdemande/postdemande.component';
import { PostgroupComponent } from './demo/Group/postgroup/postgroup.component';


import { PostComponent } from './demo/Affectation/typeTachesousservice/post/post.component';
import { ConsultationComponent } from './demo/Affectation/typeTachesousservice/consultation/consultation.component';
import { GetprojetComponent } from './demo/projet/getprojet/getprojet.component';
import { GetTypeReunionComponent } from './demo/Setting/typeReunion/get-type-reunion/get-type-reunion.component';
import { ConstypereunionssComponent } from './demo/Affectation/typeReunionsservice/constypereunionss/constypereunionss.component';
import { PosttyperssComponent } from './demo/Affectation/typeReunionsservice/posttyperss/posttyperss.component';



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

{path:'tache',component:GettacheComponent},

{path:'objectif',component:GetobjectifComponent},
{path:'demande',component:PostdemandeComponent},
{path:'groupall',component:PostgroupComponent}





{  path:'postaffttss',component:PostComponent},

{  path:'consult',component:ConsultationComponent},
=
{  path:'getlist',component:ListAffecComponent},
{  path:'addaffec',component: AddAffecComponent},





{path:'projet',component:GetprojetComponent},

{path:'gettyper',component:GetTypeReunionComponent},

{path:'consttrss',component:ConstypereunionssComponent},
{path:'posttrss',component:PosttyperssComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
