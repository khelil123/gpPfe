import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { RoleService} from 'src/app/core/Msservice/service/role.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
 public idpass;
  

  constructor(public servService : RoleService, private router : Router , private fb : FormBuilder, public dialogRef: MatDialogRef<RoleComponent>,
    private _snack:MatSnackBar ) { }
  
  ngOnInit() {
    if (this.servService.idpass==null){
   
    
        this.servService.form = this.fb.group({
          id :  [null],
          label:  [null, Validators.required]
    })
    }
    else{
      // this.typedservice.initializeFormForPost();
      this.servService.form = this.fb.group({
        id :  [null],
        label:  [null, Validators.required]
  })
  
      this.servService.form.controls.id.setValue(this.servService.idpass);
      this.servService.form.controls.label.setValue(this.servService.labelpass)
     
    }
  }
  onSubmit(){
    
    this.servService.form.controls.id.setValue("00000000-0000-0000-0000-000000000000") ;
    this.servService.insertRole().subscribe(data=>{
      console.log()
      this._snack.open("Ajout réussi",'X',{
        verticalPosition: 'top',
        duration: 2000,
        panelClass:'snack-succ'
      });
        
    },error=>{
      console.log(error);
    });
    this.dialogRef.close();
  }
  


onupdate(){
  this.servService.idpass=null;
 
  
    this.servService.putRole().subscribe(data=>{
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
}