import { Component, OnInit } from '@angular/core';
import { Typereunion } from 'src/app/core/MsReunion/model/typereunion';
import { TypereunionService } from 'src/app/core/MsReunion/service/typereunion.service';
import { TableModule } from 'primeng/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddedditTypeReunionComponent } from '../addeddit-type-reunion/addeddit-type-reunion.component';

@Component({
  selector: 'app-get-type-reunion',
  templateUrl: './get-type-reunion.component.html',
  styleUrls: ['./get-type-reunion.component.css']
})
export class GetTypeReunionComponent implements OnInit {
  
  public typeReunion = new Typereunion();

  constructor(public typeReunionservice:TypereunionService, 
    private tablem:TableModule,
    private dialog:MatDialog,
    private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this.getTypeReunion()
  }
  getTypeReunion(){
    this.typeReunionservice.getTypeReunion().subscribe(data=>{
      this.typeReunionservice.listtypereunion=data as Typereunion[];
       
      console.log(data )
      },error=>{
        console.log(error)
      }
      )
  }
  onDelete(id_TypeReunion){
    if (confirm("Vous êtes sûr de vouloir supprimer ce type de Reunion")) {
      this.typeReunionservice.DeleteTypeReunion(id_TypeReunion).subscribe(data=>{
        this._snack.open("Suppression réussi",'X',{
          verticalPosition: 'top',
          duration: 2000,
          panelClass:'snack-supp'
        });
        this.getTypeReunion();
      },error=>{
        console.log(error);
      });
    }
    
 }

 AddorEdit(typedid,typelabel){
  this.typeReunionservice.idpass=typedid;
  this.typeReunionservice.labelpass=typelabel;
  
  console.log(typelabel);
   this.dialog.open(AddedditTypeReunionComponent).afterClosed().subscribe(res => {
    this.getTypeReunion();
  });
   

 }
 

}

