import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/core/MsDemandes/model/demande.model';
import { DemandeService } from 'src/app/core/MsDemandes/services/demande.service';
import { Typed } from 'src/app/core/MsDemandes/model/typed.model';
import { TypedService } from 'src/app/core/MsDemandes/services/typed.service';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/format-datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-postdemande',
  templateUrl: './postdemande.component.html',
  styleUrls: ['./postdemande.component.css'],
  providers:[
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class PostdemandeComponent implements OnInit {

  date = new Date();
  selectedTyped: Typed;
  pipe = new DatePipe('en-US');
  constructor(
 
    public typedservice:TypedService,
    private _formBuilder: FormBuilder,
    public demandeservice:DemandeService,
    private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this.getTyped();
    this.getDemande();
  }
  getDemande(){
    this.demandeservice.getDemandeDTO().subscribe(data=>{
      this.demandeservice.listDemande=data as Demande[];
       
     
      },error=>{
        console.log(error)
      }
      )
  }
  getTyped(){
    this.typedservice.getTyped().subscribe(data=>{
      this.typedservice.listTyped=data as Typed[];
       
     
      },error=>{
        console.log(error)
      }
      )
  
    }
    onSubmit(){
   
    this.PostDemande();
    this.getDemande();
  
    }
    PostDemande(){
      
     
      this.demandeservice.form.controls.id.setValue('00000000-0000-0000-0000-000000000000');
      this.demandeservice.form.controls.fK_GroupeUser.setValue('8679B295-9536-4C45-AAFB-7B86BB129512');
      this.demandeservice.form.controls.etat.setValue("En attante");
      this.demandeservice.form.controls.dateCreation.setValue(this.pipe.transform(this.demandeservice.form.controls.dateCreation.value,'yyyy-MM-dd'));
    console.log(this.demandeservice.form.value);
      
      
      this.demandeservice.insert().subscribe(data=>{
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
    valider(demande:Demande,type:string){
           console.log("localhost:2400/"+type);

    }

      
  onDelete(id){
    if (confirm("Vous êtes sûr de vouloir supprimer cette Demande?")) {
      this.demandeservice.DeleteDemande(id).subscribe(data=>{
        this._snack.open("Suppression réussi",'X',{
          verticalPosition: 'top',
          duration: 2000,
          panelClass:'snack-supp'
        });
        this.getTyped();
      },error=>{
        console.log(error);
      });
    }
    this.getDemande();
 }
}

