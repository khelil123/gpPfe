import { Component, OnInit } from '@angular/core';
import { TypossService } from 'src/app/core/TypeObjSousService/service/typoss.service';
import { FormBuilder, Validators } from '@angular/forms';
//import { UUID } from 'angular2-uuid';

import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Typeo } from 'src/app/core/MsObjectifs/model/typeo.model';
import {TypeoService} from 'src/app/core/MsObjectifs/services/typeo.service';
import { Typeoss } from 'src/app/core/TypeObjSousService/model/typeoss.model';
interface ss {
  id: string;
  label: string;
}
@Component({
  selector: 'app-postaff',
  templateUrl: './postaff.component.html',
  styleUrls: ['./postaff.component.css']
})

export class PostaffComponent implements OnInit {
  
  selectedss:ss;
  selectedobjectif: Typeo;
  choisis: Typeo[];
  sousservices:ss[];

  typeoss:Typeoss;
  



  constructor(
    
    
    private dropdown:DropdownModule,
    public typeoservice:TypeoService,
    public TypeossService:TypossService,
    private fb : FormBuilder,
    private _snack:MatSnackBar) {
      this.choisis=[];
      
      this.sousservices = [
     
        { label: "Developpement", id: "d77852d5-da2e-4514-8da8-59ad6bf6aef1" },
        { label: "Commercial", id: "d77852d5-da2e-4514-8da8-59ad6bf6aef2" },
       
      ];


     }

  ngOnInit() {
    this.TypeossService.form = this.fb.group({
      IDTypeObjectif_S_Service :  [null],
      FKTypeObjectif:  [null, Validators.required],
      FKS_Service:  [null, Validators.required]
    })
    this.typeoservice.getTypeo().subscribe(data=>{
      this.typeoservice.listTypeo=data as Typeo[];
    
     
      },error=>{
        console.log(error)
      }
      )



  }
  affecter() {
    
  for (let i = 0; i < this.choisis.length; i++){

 
 this.TypeossService.initializeFormForPost();
this.TypeossService.form.controls.FKTypeObjectif.setValue(this.choisis[i].idTypeObjectif);
this.TypeossService.form.controls.FKS_Service.setValue(this.selectedss.id);

this.TypeossService.postTypeoss().subscribe(data=>{
  
  this._snack.open("Ajout réussi",'X',{
    verticalPosition: 'top',
    duration: 2000,
    panelClass:'snack-succ'
  });
    
},error=>{
  
  console.log(error);
});

}
}
}
