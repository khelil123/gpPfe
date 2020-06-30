import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
 import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { TypereunionService } from 'src/app/core/MsReunion/service/typereunion.service';

@Component({
  selector: 'app-addeddit-type-reunion',
  templateUrl: './addeddit-type-reunion.component.html',
  styleUrls: ['./addeddit-type-reunion.component.css']
})
export class AddedditTypeReunionComponent implements OnInit {
  public idpass;

  constructor(public typereunionservice:TypereunionService,
    private fb : FormBuilder,
    public dialogRef: MatDialogRef<AddedditTypeReunionComponent>,
    private _snack:MatSnackBar) { }

  ngOnInit(): void {
  

  if (this.typereunionservice.idpass==null){
   
    
    this.typereunionservice.form = this.fb.group({
      id_TypeReunion :  [null],
      Label:  [null, Validators.required]
})
}
else{
  // this.typereunionservice.initializeFormForPost();
  this.typereunionservice.form = this.fb.group({
    id_TypeReunion :  [null],
    Label:  [null, Validators.required]
})

  this.typereunionservice.form.controls.id_TypeReunion.setValue(this.typereunionservice.idpass);
  this.typereunionservice.form.controls.Label.setValue(this.typereunionservice.labelpass)
 
}
}

onSubmit(){
  if (this.typereunionservice.idpass==null){
  this.typereunionservice.form.controls.id_TypeReunion.setValue("00000000-0000-0000-0000-000000000000") ;
  this.typereunionservice.postTypeReunion().subscribe(data=>{
    this._snack.open("Ajout réussi",'X',{
      verticalPosition: 'top',
      duration: 2000,
      panelClass:'snack-succ'
    });
      
  },error=>{
    console.log(error);
  });
  this.dialogRef.close();
  this.typereunionservice.idpass=null;
}
else {

  this.typereunionservice.putTypeReunion().subscribe(data=>{
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
this.typereunionservice.idpass=null;
}

}