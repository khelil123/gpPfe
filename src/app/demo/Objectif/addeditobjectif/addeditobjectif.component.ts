import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ObjectifService } from 'src/app/core/MsObjectifs/services/objectif.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { ProjetService } from 'src/app/core/MsNoyau/service/projet.service';
import { Projet } from 'src/app/core/MsNoyau/model/projet.model';
import { TypeoService } from 'src/app/core/MsObjectifs/services/typeo.service';
import { Typeo } from 'src/app/core/MsObjectifs/model/typeo.model';
import { TypossService } from 'src/app/core/TypeObjSousService/service/typoss.service';
import { Typeoss } from 'src/app/core/TypeObjSousService/model/typeoss.model';
interface statut{
  label:string;
  value:number;
}
interface porjet{
  label:string;
  value:string;
}

@Component({
  selector: 'app-addeditobjectif',
  templateUrl: './addeditobjectif.component.html',
  styleUrls: ['./addeditobjectif.component.css']
})
export class AddeditobjectifComponent implements OnInit {

  statuts: statut[] = [
    {label:"Idee",value:0},
    {label:"Encours",value:1},
    ]
    porjets: porjet[] = [
      {label:"projet",value:"e65d35fb-7702-49b9-b7f6-69e2e1f80ebb"},
      {label:"tobjss",value:"966e2bd6-92f2-4ba1-f7ff-08d81ee2de71"},
    ]
    
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  pipe = new DatePipe('en-US');
  date=new Date();
demande=false;
  constructor(
    public typeossService:TypossService,
    public projetservice:ProjetService,
    private _formBuilder: FormBuilder,
    step:MatStepperModule,
    Modulemat:MatInputModule,
    public dialogRef: MatDialogRef<AddeditobjectifComponent>,
    public objectifService:ObjectifService,
    private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this.getTypeObjectif();
    
    this.getProjets();
    this.objectifService.initializeFormForPost();
   
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      tache:'',
      demande: new FormControl(false),
    });
    this.thirdFormGroup = this._formBuilder.group({
    
      thirdCtrl: ['', Validators.required],
      duretype:''
    });

    let o:Observable<boolean> = this.secondFormGroup.controls.demande.valueChanges;
    o.subscribe( v=> {
        this.demande = v;
       
    });
    
  }
  Submit(){
    //this.objectifService.form.controls.dateDebutReelle.setValue(this.pipe.transform(this.date,'yyyy-MM-dd'));
  
     this.objectifService.form.controls.dateCreation.setValue(this.pipe.transform(this.date,'yyyy-MM-dd'));
    // this.objectifService.form.controls.TypeDuree.setValue(parseInt(this.objectifService.form.controls.TypeDuree.value));
     
    // this.objectifService.form.controls.idObjectifs.setValue('00000000-0000-0000-0000-000000000000');
     console.log(this.objectifService.form.value);
     this.objectifService.postObjectif().subscribe(data=>{
       this._snack.open("Ajout réussi",'X',{
         verticalPosition: 'top',
         duration: 2000,
         panelClass:'snack-succ'
       });
         
     },error=>{
       console.log(error)
       this._snack.open("Erreur", "X", {
         duration: 3000,
         verticalPosition: 'top',
         horizontalPosition: "right",
         panelClass: 'snack-supp'
     });
     
   })
 
  }
  getProjets(){
    this.projetservice.getProjets().subscribe(data=>{
      this.projetservice.listprojet=data as Projet[];
    
     
      },error=>{
        console.log(error)
      }
      )

  }
  getTypeObjectif(){
    this.typeossService.getTypeoss().subscribe(data=>{
      this.typeossService.listTypeoss=data as Typeoss[];
console.log(data)
     
      },error=>{
        console.log(error)
      }
      )
   
  }
}

 