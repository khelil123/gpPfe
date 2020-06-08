import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { ServiceService} from 'src/app/core/Msservice/service/service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  public idpass;
  

  constructor(public servService : ServiceService , private router : Router , private fb : FormBuilder, public dialogRef: MatDialogRef<ServiceComponent>,
    private _snack:MatSnackBar ) { }
  
  ngOnInit() {
    if (this.servService.idpass==null){
   
    
        this.servService.form = this.fb.group({
          Id :  [null],
          Label:  [null, Validators.required]
    })
    }
    else{
      // this.typedservice.initializeFormForPost();
      this.servService.form = this.fb.group({
        Id :  [null],
        Label:  [null, Validators.required]
  })
  
      this.servService.form.controls.Id.setValue(this.servService.idpass);
      this.servService.form.controls.Label.setValue(this.servService.labelpass)
     
    }
  }
  onSubmit(){
    if (this.servService.idpass==null){
    this.servService.form.controls.Id.setValue("00000000-0000-0000-0000-000000000000") ;
    this.servService.insertService().subscribe(data=>{
      this._snack.open("Ajout réussi",'X',{
        verticalPosition: 'top',
        duration: 2000,
        panelClass:'snack-succ'
      });
        
    },error=>{
      console.log(error);
    });
    this.dialogRef.close();
    this.servService.idpass=null;
  }
  else {
  
    this.servService.putService().subscribe(data=>{
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
  this.servService.idpass=null;
  }

}