import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { SserviceService} from 'src/app/core/Msservice/service/sservice.service';
import { ServiceService} from 'src/app/core/Msservice/service/service.service';
import { Service } from 'src/app/core/Msservice/Model/service.model';

@Component({
  selector: 'app-add-sservice',
  templateUrl: './add-sservice.component.html',
  styleUrls: ['./add-sservice.component.css']
})
export class AddSserviceComponent implements OnInit {
  public idpass;
  public fkServicepass;
  public service = new  Service ();

  constructor(public servService : SserviceService , private router : Router , private fb : FormBuilder, public dialogRef: MatDialogRef<AddSserviceComponent>,
    private _snack:MatSnackBar , public servicefk :ServiceService) { }
  
  ngOnInit() {
    this.getServices()
    if (this.servService.idpass==null){
   
    
        this.servService.form = this.fb.group({
          id :  [null],
          label:  [null, Validators.required],
          fkService : [null, Validators.required],
    })
    }
    else{
      // this.typedservice.initializeFormForPost();
      this.servService.form = this.fb.group({
        id :  [null],
        label:  [null, Validators.required],
        fkService: [null, Validators.required],
  })
  
      this.servService.form.controls.id.setValue(this.servService.idpass);
      this.servService.form.controls.label.setValue(this.servService.labelpass)
      this.servService.form.controls.fkService.setValue(this.servService.fkServicepass)

    }
  }
  getServices(){
    this.servicefk.getServices().subscribe(data=>{
    this.servicefk.listService =data as Service[];
       console.log(data)
       
      },error=>{
        console.log(error)
      }
      )
  }
  onSubmit(){

    if (this.servService.idpass==null) 

  {
    console.log("*****"+this.servService.form.controls.fkService)
    this.servService.form.controls.id.setValue("00000000-0000-0000-0000-000000000000") ;
this.servService.insertSservice().subscribe(data=>{
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
  
    this.servService.putSservice().subscribe(data=>{
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














