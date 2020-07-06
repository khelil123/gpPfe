import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import { Observable } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { TacheService } from 'src/app/core/MsNoyau/service/tache.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ObjectifService } from 'src/app/core/MsObjectifs/services/objectif.service';
import { Objectif } from 'src/app/core/MsObjectifs/model/objectif.model';

interface porjet{
  label:string;
  value:string;
}
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-addedittache',
  templateUrl: './addedittache.component.html',
  styleUrls: ['./addedittache.component.css']
})
export class AddedittacheComponent implements OnInit {
  selectedobj:Objectif;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ]
  porjets: porjet[] = [
    {label:"Objectif",value:"49112c77-cdb8-4e99-3b32-08d81f35d95f"},
    {label:"TypeTache",value:"96bc3d79-41fa-497e-8224-5c373c28aff5"},
    {label:"grpUser",value:"ec7c6af9-8c52-4923-9f3b-64b4db687a9d"},
    {label:"Demande",value:"3fa85f64-5717-4562-b3fc-2c963f66afa6"},
  ]
  
  
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  pipe = new DatePipe('en-US');
  date=new Date();
  demande=false;
  constructor(private _formBuilder: FormBuilder,
    step:MatStepperModule,
    Modulemat:MatInputModule,
    public tacheService:TacheService,
    public objectifService:ObjectifService,
    public dialogRef: MatDialogRef<AddedittacheComponent>,
    private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this.getObjectif();
    this.tacheService.initializeFormForPost();
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
  getObjectif(){
    this.objectifService.getObjectif().subscribe(data=>{
      this.objectifService.listObjectif=data as Objectif[];
      
     
      },error=>{
        console.log(error)
      }
      )
  }
  Submit(){
   // this.tacheService.form.controls.DateDebutReelle.setValue(this.pipe.transform(this.date,'yyyy-MM-dd'));
  
   // this.tacheService.form.controls.DateRappel.setValue(this.pipe.transform(this.date,'yyyy-MM-dd'));
   // this.tacheService.form.controls.TypeDuree.setValue(parseInt(this.tacheService.form.controls.TypeDuree.value));
    console.log(this.tacheService.form.value);
    this.tacheService.postTache().subscribe(data=>{
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

}

