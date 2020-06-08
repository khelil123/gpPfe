import { Component, OnInit } from '@angular/core';
import {Typeo} from 'src/app/core/MsObjectifs/model/typeo.model';

import { TableModule } from 'primeng/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddditobjComponent } from '../addditobj/addditobj.component';
import { TypeoService } from 'src/app/core/MsObjectifs/services/typeo.service';

@Component({
  selector: 'app-getobj',
  templateUrl: './getobj.component.html',
  styleUrls: ['./getobj.component.css']
})
export class GetobjComponent implements OnInit {

  public typeo = new Typeo();
  


  constructor(public typeoservice:TypeoService,
              private tablem:TableModule,
              private dialog:MatDialog,
              private _snack:MatSnackBar) { }

  ngOnInit() {
    this.gettypeo()
  }
  gettypeo(){
    this.typeoservice.getTypeo().subscribe(data=>{
      this.typeoservice.listTypeo=data as Typeo[];
      
     
      },error=>{
        console.log(error)
      }
      )
  }
  
  onDelete(id){
    if (confirm("Vous êtes sûr de vouloir supprimer cette Tache")) {
      this.typeoservice.deleteTypeo(id).subscribe(data=>{
        this._snack.open("Suppression réussi",'X',{
          verticalPosition: 'top',
          duration: 2000,
          panelClass:'snack-supp'
        });
        this.gettypeo();
      },error=>{
        console.log(error);
      });
    }
    
 }
 AddorEdit(typeoid,typeolabel){
  this.typeoservice.idpass=typeoid;
  this.typeoservice.labelpass=typeolabel;
  console.log(typeoid);
  
   this.dialog.open(AddditobjComponent).afterClosed().subscribe(res => {
    this.gettypeo();
  });
   

 }
 openComponentForPost() {
  this.typeoservice.initializeFormForPost();
  this.dialog.open(AddditobjComponent).afterClosed().subscribe(res => {
    this.gettypeo();

 });

}
openComponentForUpdate(typeo: Typeo) {
  this.typeoservice.initializeFormForEdit(typeo);
  this.dialog.open(AddditobjComponent).afterClosed().subscribe(res => {
    this.gettypeo();

 });

 }
}
