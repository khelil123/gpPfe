import { Component, OnInit } from '@angular/core';
import { TypeTacheService } from 'src/app/core/MsNoyau/service/type-tache.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addedit-type-tache',
  templateUrl: './addedit-type-tache.component.html',
  styleUrls: ['./addedit-type-tache.component.css']
})
export class AddeditTypeTacheComponent implements OnInit {
  public idpass;

  constructor(public typeTacheservice:TypeTacheService,
    private fb : FormBuilder,
    public dialogRef: MatDialogRef<AddeditTypeTacheComponent>,
    private _snack:MatSnackBar) { }

  ngOnInit(): void {
  

  if (this.typeTacheservice.idpass==null){
   
    
    this.typeTacheservice.form = this.fb.group({
      IDTaskType :  [null],
      Label:  [null, Validators.required]
})
}
else{
  // this.typeTacheservice.initializeFormForPost();
  this.typeTacheservice.form = this.fb.group({
    IDTaskType :  [null],
    Label:  [null, Validators.required]
})

  this.typeTacheservice.form.controls.IDTaskType.setValue(this.typeTacheservice.idpass);
  this.typeTacheservice.form.controls.Label.setValue(this.typeTacheservice.labelpass)
 
}
}

onSubmit(){
  if (this.typeTacheservice.idpass==null){
  this.typeTacheservice.form.controls.IDTaskType.setValue("00000000-0000-0000-0000-000000000000") ;
  this.typeTacheservice.postTypeTache().subscribe(data=>{
    this._snack.open("Ajout réussi",'X',{
      verticalPosition: 'top',
      duration: 2000,
      panelClass:'snack-succ'
    });
      
  },error=>{
    console.log(error);
  });
  this.dialogRef.close();
  this.typeTacheservice.idpass=null;
}
else {

  this.typeTacheservice.putTypeTache().subscribe(data=>{
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
this.typeTacheservice.idpass=null;
}

}