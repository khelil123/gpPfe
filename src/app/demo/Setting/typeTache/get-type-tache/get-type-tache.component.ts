import { Component, OnInit } from '@angular/core';
import { TypeTache } from 'src/app/core/MsNoyau/model/type-tache.model';
import { TypeTacheService } from 'src/app/core/MsNoyau/service/type-tache.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TableModule } from 'primeng/table';
import { AddeditTypeTacheComponent } from '../addedit-type-tache/addedit-type-tache.component';


@Component({
  selector: 'app-get-type-tache',
  templateUrl: './get-type-tache.component.html',
  styleUrls: ['./get-type-tache.component.css']
})
export class GetTypeTacheComponent implements OnInit {

  public typeTache = new TypeTache();
  
  constructor(public typeTacheservice:TypeTacheService,
    
    private tablem:TableModule,
    private dialog:MatDialog,
    private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this.getTypeTache()
  }
  getTypeTache() {
    this.typeTacheservice.getTypeTache().subscribe(data=>{
      this.typeTacheservice.listTypeTache=data as TypeTache[];
       
      console.log(data)
      },error=>{
        console.log(error)
      }
      )
  }

  onDelete(iDTaskType){
    if (confirm("Vous êtes sûr de vouloir supprimer cette Tache")) {
      this.typeTacheservice.deleteTypeTache(iDTaskType).subscribe(data=>{
        this._snack.open("Suppression réussi",'X',{
          verticalPosition: 'top',
          duration: 2000,
          panelClass:'snack-supp'
        });
        this.getTypeTache();
      },error=>{
        console.log(error);
      });
    }
    
 }

 AddorEdit(typedid,typelabel){
  this.typeTacheservice.idpass=typedid;
  this.typeTacheservice.labelpass=typelabel;
  
  console.log(typelabel);
   this.dialog.open(AddeditTypeTacheComponent).afterClosed().subscribe(res => {
    this.getTypeTache();
  });
   

 }
 

}
