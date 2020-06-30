import { Component, OnInit } from '@angular/core';
import { Typereunion } from 'src/app/core/MsReunion/model/typereunion';
import { Typerss } from 'src/app/core/MsReunion/model/typerss';
import { DropdownModule } from 'primeng/dropdown';
import { TypereunionService } from 'src/app/core/MsReunion/service/typereunion.service';
import { TyperssService } from 'src/app/core/MsReunion/service/typerss.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sservice } from 'src/app/core/Msservice/Model/sservice.model';
import { SserviceService } from 'src/app/core/Msservice/service/sservice.service';
interface ss {
  id: string;
  label: string;
}
@Component({
  selector: 'app-posttyperss',
  templateUrl: './posttyperss.component.html',
  styleUrls: ['./posttyperss.component.css']
})
export class PosttyperssComponent implements OnInit {
  selectedss:Sservice;
  selectedreunion: Typereunion;

  choisis: Typereunion[];
  sousservices:ss[];

  typetss:Typerss;
  constructor(private dropdown:DropdownModule,
    public typerservice:TypereunionService,
    public TyperssService:TyperssService,
    public ssService:SserviceService,
    private fb : FormBuilder,
    private _snack:MatSnackBar) {
      this.choisis=[];
      
      this.sousservices = [
     
        { label: "Developpement", id: "d77852d5-da2e-4514-8da8-59ad6bf6aef1" },
        { label: "Commercial", id: "d77852d5-da2e-4514-8da8-59ad6bf6aef2" },
       
      ];
     }

  ngOnInit(): void {
    this.getsservice();
    this.TyperssService.form = this.fb.group({
      id_TypeReunionSousService :  [null],
      fKTypeReunion:  [null, Validators.required],
      fKS_Service:  [null, Validators.required]
    })
    this.typerservice.getTypeReunion().subscribe(data=>{
      this.typerservice.listtypereunion=data as Typereunion[];
    
     
      },error=>{
        console.log(error)
      }
      )

  }
  getsservice(){
    this.TyperssService.getSousService().subscribe(data=>{
      this.TyperssService.listss=data as Sservice[];
      
     
      },error=>{
        console.log(error)
      }
      )
  }
  affecter() {
    
  for (let i = 0; i < this.choisis.length; i++){

 
this.TyperssService.initializeFormForPost();
this.TyperssService.form.controls.fKTypeReunion.setValue(this.choisis[i].id_TypeReunion);
this.TyperssService.form.controls.fKS_Service.setValue(this.selectedss.id_SousService);

this.TyperssService.postTypeReunionSousService().subscribe(data=>{
  
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

