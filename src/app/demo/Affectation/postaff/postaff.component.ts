import { Component, OnInit } from '@angular/core';
import { TypossService } from 'src/app/core/TypeObjSousService/service/typoss.service';
import { FormBuilder, Validators } from '@angular/forms';


import {DropdownModule} from 'primeng/dropdown';


import { MatSnackBar } from '@angular/material/snack-bar';
import { Typeo } from 'src/app/core/MsObjectifs/model/typeo.model';
import {TypeoService} from 'src/app/core/MsObjectifs/services/typeo.service';
import { Typeoss } from 'src/app/core/TypeObjSousService/model/typeoss.model';
import { Sservice } from 'src/app/core/Msservice/Model/sservice.model';

@Component({
  selector: 'app-postaff',
  templateUrl: './postaff.component.html',
  styleUrls: ['./postaff.component.css']
})

export class PostaffComponent implements OnInit {
  
  selectedss:Sservice ;
  selectedobjectif: Typeo;
  choisis: Typeo[];
  sousservices:Sservice [];

  typeoss:Typeoss;
  



  constructor(
    
    
    private dropdown:DropdownModule,
    public typeoservice:TypeoService,
    public TypeossService:TypossService,
    private fb : FormBuilder,
    private _snack:MatSnackBar) {
      this.choisis=[];
      
  


     }

  ngOnInit() {  arguments
    this.TypeossService.getSousServices().subscribe(data=>{
      this.TypeossService.listss=data as Sservice[];
    
     
      },error=>{
        console.log(error)
      }
      )
     
 

    
    this.TypeossService.form = this.fb.group({
      IDTypeObjectif_S_Service :  [null],
      FKTypeObjectif:  [null, Validators.required],
      FKS_Service:  [null, Validators.required]
    })
    this.typeoservice.getTypeo().subscribe(data=>{
      this.typeoservice.listTypeo=data as Typeo[];
    
     
      },error=>{
        console.log(error);
      }
      )



  }
  affecter() {
    
  for (let i = 0; i < this.choisis.length; i++){

 
 this.TypeossService.initializeFormForPost();
this.TypeossService.form.controls.FKTypeObjectif.setValue(this.choisis[i].idTypeObjectif);
this.TypeossService.form.controls.FKS_Service.setValue(this.selectedss.id_SousService);

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
