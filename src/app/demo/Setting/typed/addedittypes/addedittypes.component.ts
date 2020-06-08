import { Component, OnInit } from '@angular/core';
import { TypedService } from 'src/app/core/MsDemandes/services/typed.service';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addedittypes',
  templateUrl: './addedittypes.component.html',
  styleUrls: ['./addedittypes.component.css']
})
export class AddedittypesComponent implements OnInit {
  public idpass;

  constructor(public typedservice:TypedService,
    private fb : FormBuilder,
    public dialogRef: MatDialogRef<AddedittypesComponent>,
    private _snack:MatSnackBar) { }

  ngOnInit() {
    if (this.typedservice.idpass==null){
   
    
        this.typedservice.form = this.fb.group({
          IdTypeDemande :  [null],
          Label:  [null, Validators.required]
    })
    }
    else{
      // this.typedservice.initializeFormForPost();
      this.typedservice.form = this.fb.group({
        IdTypeDemande :  [null],
        Label:  [null, Validators.required]
  })
  
      this.typedservice.form.controls.IdTypeDemande.setValue(this.typedservice.idpass);
      this.typedservice.form.controls.Label.setValue(this.typedservice.labelpass)
     
    }
  }
  onSubmit(){
    if (this.typedservice.idpass==null){
    this.typedservice.form.controls.IdTypeDemande .setValue("00000000-0000-0000-0000-000000000000") ;
    this.typedservice.postTyped().subscribe(data=>{
      this._snack.open("Ajout réussi",'X',{
        verticalPosition: 'top',
        duration: 2000,
        panelClass:'snack-succ'
      });
        
    },error=>{
      console.log(error);
    });
    this.dialogRef.close();
    this.typedservice.idpass=null;
  }
  else {
  
    this.typedservice.putTyped().subscribe(data=>{
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
  this.typedservice.idpass=null;
  }

}
