import { Component, OnInit } from '@angular/core';
import { GroupeService } from 'src/app/core/MsNoyau/service/groupe.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addeditgroupe',
  templateUrl: './addeditgroupe.component.html',
  styleUrls: ['./addeditgroupe.component.css']
})
export class AddeditgroupeComponent implements OnInit {
  public idpass;
 
  constructor(public groupeservice:GroupeService,
    private fb : FormBuilder,
    public dialogRef: MatDialogRef<AddeditgroupeComponent>,
    private _snack:MatSnackBar) { }

  ngOnInit(): void {
  

    if (this.groupeservice.idpass==null){
     
      
      this.groupeservice.form = this.fb.group({
        idGroupe :  [null],
        label:  [null, Validators.required]
  })
  }
  else{
    // this.groupeservice.initializeFormForPost();
    this.groupeservice.form = this.fb.group({
      idGroupe :  [null],
      label:  [null, Validators.required]
  })
  
    this.groupeservice.form.controls.idGroupe.setValue(this.groupeservice.idpass);
    this.groupeservice.form.controls.label.setValue(this.groupeservice.labelpass)
   
  }
  }
  
  onSubmit(){
    if (this.groupeservice.idpass==null){
    this.groupeservice.form.controls.idGroupe.setValue("00000000-0000-0000-0000-000000000000") ;
    this.groupeservice.postGroupe().subscribe(data=>{
      this._snack.open("Ajout réussi",'X',{
        verticalPosition: 'top',
        duration: 2000,
        panelClass:'snack-succ'
      });
        
    },error=>{
      console.log(error);
    });
    this.dialogRef.close();
    this.groupeservice.idpass=null;
  }
  else {
  
    this.groupeservice.putGroupe().subscribe(data=>{
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
  this.groupeservice.idpass=null;
  }
  
  }