import { Component, OnInit } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ProjetService } from 'src/app/core/MsNoyau/service/projet.service';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
interface statut{
  label:string;
  value:number;
}
@Component({
  selector: 'app-addeditprojet',
  templateUrl: './addeditprojet.component.html',
  styleUrls: ['./addeditprojet.component.css']
})
export class AddeditprojetComponent implements OnInit {
  statuts: statut[] = [
  {label:"Idee",value:0},
  {label:"Encours",value:1},
  ]
  ;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  pipe = new DatePipe('en-US');
  date=new Date();
  demande=false;
  constructor(private _snack:MatSnackBar,
    public projetservice:ProjetService,
     private _formBuilder: FormBuilder,
    step:MatStepperModule,
    Modulemat:MatInputModule,
    public dialogRef: MatDialogRef<AddeditprojetComponent>,) { }

  ngOnInit(): void {
    this.projetservice.initializeFormForPost();
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
    var s:string;
    if(this.projetservice.form.controls.Active.value==true){
 this.projetservice.form.controls.DateDebutReelle.setValue(this.pipe.transform(this.date,'yyyy-MM-dd'));
 

    }
    this.projetservice.form.controls.DateCreation.setValue(this.pipe.transform(this.date,'yyyy-MM-dd'));
    this.projetservice.form.controls.TypeDuree.setValue(parseInt(this.projetservice.form.controls.TypeDuree.value));
    console.log(this.projetservice.form.value);
    this.projetservice.postprojet().subscribe(data=>{
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

