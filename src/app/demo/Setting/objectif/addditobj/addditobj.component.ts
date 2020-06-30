import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { TypeoService } from 'src/app/core/MsObjectifs/services/typeo.service';

@Component({
  selector: 'app-addditobj',
  templateUrl: './addditobj.component.html',
  styleUrls: ['./addditobj.component.css']
})
export class AddditobjComponent implements OnInit {

  public idpass;

  constructor(public TypeoService:TypeoService,
    private fb : FormBuilder,
    public dialogRef: MatDialogRef<AddditobjComponent>,
    private _snack:MatSnackBar) { }

  ngOnInit() {
    this.TypeoService.form.markAsUntouched();
  }
  onSubmit(){
    if (
      this.TypeoService.form.controls.idTypeObjectif.value ==
      "00000000-0000-0000-0000-000000000000"
    ) {
      this.PostTypeo();
    } else {
      this.UpdateTypeo();
    }
  }
  PostTypeo(){
    this.TypeoService.postTypeo().subscribe(data=>{
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
    this.TypeoService.putTypeo().subscribe(data=>{
      this._snack.open("Modification réussi",'X',{
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
