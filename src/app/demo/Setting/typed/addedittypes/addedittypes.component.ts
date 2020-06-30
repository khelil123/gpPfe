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
    this.typedservice.form.markAsUntouched();
  }
  onSubmit(){
    if (
      this.typedservice.form.controls.id.value ==
      "00000000-0000-0000-0000-000000000000"
    ) {
      this.PostTypeo();
    } else {
      this.UpdateTypeo();
    }
  }
  PostTypeo(){
    this.typedservice.postTyped().subscribe(data=>{
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
  UpdateTypeo(){
    this.typedservice.putTyped().subscribe(data=>{
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
