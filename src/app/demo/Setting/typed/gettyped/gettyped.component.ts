import { Component, OnInit } from '@angular/core';
import { Typed } from 'src/app/core/MsDemandes/model/typed.model';
import { TypedService } from 'src/app/core/MsDemandes/services/typed.service';
import { TableModule } from 'primeng/table';
import { MatDialog } from '@angular/material/dialog';
import { AddedittypesComponent } from '../addedittypes/addedittypes.component';
import {MatSnackBar} from '@angular/material/snack-bar'; 
@Component({
  selector: 'app-gettyped',
  templateUrl: './gettyped.component.html',
  styleUrls: ['./gettyped.component.css']
})
export class GettypedComponent implements OnInit {
  public typed = new Typed();


  constructor(public typedservice:TypedService,
              private tablem:TableModule,
              private dialog:MatDialog,
              private _snack:MatSnackBar) { }

  ngOnInit() {
    this.getTyped()
  }
  getTyped(){
    this.typedservice.getTyped().subscribe(data=>{
      this.typedservice.listTyped=data as Typed[];
       
     
      },error=>{
        console.log(error)
      }
      )
  }
  
  onDelete(idTypeDemande){
    if (confirm("Vous êtes sûr de vouloir supprimer cette Tache")) {
      this.typedservice.deleteTyped(idTypeDemande).subscribe(data=>{
        this._snack.open("Suppression réussi",'X',{
          verticalPosition: 'top',
          duration: 2000,
          panelClass:'snack-supp'
        });
        this.getTyped();
      },error=>{
        console.log(error);
      });
    }
    
 }
 AddorEdit(typedid,typelabel){
  this.typedservice.idpass=typedid;
  this.typedservice.labelpass=typelabel;
  
  console.log(typedid);
   this.dialog.open(AddedittypesComponent).afterClosed().subscribe(res => {
    this.getTyped();
  });
   

 }
 openComponentForPost() {
  this.typedservice.initializeFormForPost();
  this.dialog.open(AddedittypesComponent).afterClosed().subscribe(res => {
    this.getTyped();

 });

}
openComponentForUpdate(typed: Typed) {
  this.typedservice.initializeFormForEdit(typed);
  this.dialog.open(AddedittypesComponent).afterClosed().subscribe(res => {
    this.getTyped();

 });

 }

}
