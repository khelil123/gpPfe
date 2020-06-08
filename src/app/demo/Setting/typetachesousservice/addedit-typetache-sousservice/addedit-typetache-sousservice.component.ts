import { Component, OnInit } from '@angular/core';
import { TypeTacheService } from 'src/app/core/MsNoyau/service/type-tache.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GetTypetacheSousserviceComponent } from '../get-typetache-sousservice/get-typetache-sousservice.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TypetachesousserviceService } from 'src/app/core/MsNoyau/service/typetachesousservice.service';
import { environment } from 'src/environments/environment';
import { TypeTache } from 'src/app/core/MsNoyau/model/type-tache.model';

@Component({
  selector: 'app-addedit-typetache-sousservice',
  templateUrl: './addedit-typetache-sousservice.component.html',
  styleUrls: ['./addedit-typetache-sousservice.component.css']
})
export class AddeditTypetacheSousserviceComponent implements OnInit {
  typeTacheservice: any;
  listTypeTache:TypeTache[];
 
  
  constructor(public Typetachesousserviceservice:TypetachesousserviceService,public typeTacheService:TypeTacheService,
    
    private fb : FormBuilder,
    public dialogRef: MatDialogRef<GetTypetacheSousserviceComponent>,
    private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this.getTypeTache();
    
    if (this.Typetachesousserviceservice.idpass==null){
   
    
      this.Typetachesousserviceservice.form = this.fb.group({
        idTaskType_S_Service :  [null],
        fkTaskType:  [null, Validators.required],
        fkS_Service:  [null, Validators.required]
  })
  }
  else{
    // this.Typetachesousserviceservice.initializeFormForPost();
    this.Typetachesousserviceservice.form = this.fb.group({
      idTaskType_S_Service :  [null],
      fkTaskType:  [null, Validators.required],
      fkS_Service:  [null, Validators.required]
  })
  
    this.Typetachesousserviceservice.form.controls.idTaskType_S_Service.setValue(this.Typetachesousserviceservice.idpass);
    this.Typetachesousserviceservice.form.controls.fkTaskType.setValue(this.Typetachesousserviceservice.labelpass)
    this.Typetachesousserviceservice.form.controls.fkS_Service.setValue(this.Typetachesousserviceservice.labpass)
  }
  }

  

  onSubmit(){
    if (this.Typetachesousserviceservice.idpass==null){
    this.Typetachesousserviceservice.form.controls.idTaskType_S_Service.setValue("00000000-0000-0000-0000-000000000000") ;
    this.Typetachesousserviceservice.postTypeTacheSousService().subscribe(data=>{
      this._snack.open("Ajout réussi",'X',{
        verticalPosition: 'top',
        duration: 2000,
        panelClass:'snack-succ'
      });
        
    },error=>{
      console.log(error);
    });
    this.dialogRef.close();
    this.Typetachesousserviceservice.idpass=null;
  }
  else {
  
    this.Typetachesousserviceservice.putTypeTacheSousService().subscribe(data=>{
      this._snack.open("Modification réussi",'X',{
        verticalPosition: 'top',
        duration: 2000,
        panelClass:'snack-succ'
      });
     
  },error=>{
    console.log(error);
  });
  this.dialogRef.close();
  }
  this.Typetachesousserviceservice.idpass=null;
  }
  
  getTypeTache() {
    this.Typetachesousserviceservice.getTypeTache().subscribe(data=>{
      this.Typetachesousserviceservice.listTypeTache=data as TypeTache[];
       
      console.log(data)
      },error=>{
        console.log(error)
      }
      )
  }
  }