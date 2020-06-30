import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-addeditobjectif',
  templateUrl: './addeditobjectif.component.html',
  styleUrls: ['./addeditobjectif.component.css']
})
export class AddeditobjectifComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
demande=false;
  constructor(private _formBuilder: FormBuilder,
    step:MatStepperModule,
    Modulemat:MatInputModule,
    public dialogRef: MatDialogRef<AddeditobjectifComponent>,) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      tache:'',
      demande: new FormControl(false),
    });
    this.thirdFormGroup = this._formBuilder.group({
    
      thirdCtrl: ['', Validators.required],
      duretype:''
    });

    let o:Observable<boolean> = this.secondFormGroup.controls.demande.valueChanges;
    o.subscribe( v=> {
        this.demande = v;
       
    });
  }
  Submit(){
    console.log(this.thirdFormGroup.controls.duretype.value);
    console.log(this.secondFormGroup.controls.tache.value)
  }


}
