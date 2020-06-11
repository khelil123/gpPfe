import { Component, OnInit } from '@angular/core';
import { TypeTache } from 'src/app/core/MsNoyau/model/type-tache.model';
import { Typetachesousservice } from 'src/app/core/MsNoyau/model/typetachesousservice.model';
import { DropdownModule } from 'primeng/dropdown';
import { TypeTacheService } from 'src/app/core/MsNoyau/service/type-tache.service';
import { TypetachesousserviceService } from 'src/app/core/MsNoyau/service/typetachesousservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, Validators } from '@angular/forms';

interface ss {
  id: string;
  label: string;
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  selectedss:ss;
  selectedtache: TypeTache;
  choisis: TypeTache[];
  sousservices:ss[];

  typetss:Typetachesousservice;
  
  constructor(private dropdown:DropdownModule,
    public typetservice:TypeTacheService,
    public TypetssService:TypetachesousserviceService,
    private fb : FormBuilder,
    private _snack:MatSnackBar) {
      this.choisis=[];
      
      this.sousservices = [
     
        { label: "Developpement", id: "d77852d5-da2e-4514-8da8-59ad6bf6aef1" },
        { label: "Commercial", id: "d77852d5-da2e-4514-8da8-59ad6bf6aef2" },
       
      ];


     }

  ngOnInit(): void {
    this.TypetssService.form = this.fb.group({
      IDTypeObjectif_S_Service :  [null],
      FKTypeObjectif:  [null, Validators.required],
      FKS_Service:  [null, Validators.required]
    })
    this.typetservice.getTypeTache().subscribe(data=>{
      this.typetservice.listTypeTache=data as TypeTache[];
    
     
      },error=>{
        console.log(error)
      }
      )



  }
  affecter() {
    
  for (let i = 0; i < this.choisis.length; i++){

 
 this.TypetssService.initializeFormForPost();
this.TypetssService.form.controls.fkTaskType.setValue(this.choisis[i].idTaskType);
this.TypetssService.form.controls.fkS_Service.setValue(this.selectedss.id);

this.TypetssService.postTypeTacheSousService().subscribe(data=>{
  
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