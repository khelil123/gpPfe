import { Component, OnInit } from '@angular/core';
import {  RoleSsService } from 'src/app/core/Msservice/service/role-ss.service';
import {  RoleSs } from 'src/app/core/Msservice/model/role-ss.model';

import { FormBuilder, Validators } from '@angular/forms';

import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';

import { MatSnackBar } from '@angular/material/snack-bar';
import { RoleService} from 'src/app/core/Msservice/service/role.service';
import { Role } from 'src/app/core/Msservice/Model/role.model';
import { SserviceService } from 'src/app/core/Msservice/service/sservice.service';
import { Sservice } from 'src/app/core/Msservice/Model/sservice.model';
interface ss {
  id: string;
  label: string;
}
@Component({
  selector: 'app-add-affec',
  templateUrl: './add-affec.component.html',
  styleUrls: ['./add-affec.component.css']
})
export class AddAffecComponent implements OnInit {

  selectedss:ss;
  selectedrole:Role;
  choisis:  Role[];
  sousservices:ss[];

  Roless:RoleSs ;
  



  constructor(
    
    public servService:SserviceService,
    private dropdown:DropdownModule,
    public Roleservice:RoleService,
    public RoleSsService:RoleSsService,
    private fb : FormBuilder,
    private _snack:MatSnackBar) {
      this.choisis=[];
      
     


     }
    
  ngOnInit() {
    this.getSservices();
    this.RoleSsService.form = this.fb.group({
      id :  [null],
      fkRole:  [null, Validators.required],
      fKSservice :  [null, Validators.required]
    })
    this.Roleservice.getRole().subscribe(data=>{
      this.Roleservice.listRole=data as Role[];
    console.log(data);
     
      },error=>{
        console.log(error)
      }
      )



  }
  affecter() {
    
  for (let i = 0; i < this.choisis.length; i++){

 
 this.RoleSsService.initializeFormForPost();
this.RoleSsService.form.controls.fkRole.setValue(this.choisis[i].id);
this.RoleSsService.form.controls.fKSservice.setValue(this.selectedss.id);

this.RoleSsService.insertSsrole().subscribe(data=>{
  
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

  getSservices(){
    this.servService.getSservices().subscribe(data=>{
      this.servService.listSservice =data as Sservice[];
       console.log(data)
       
      },error=>{
        console.log(error)
      }
      )
  }

}