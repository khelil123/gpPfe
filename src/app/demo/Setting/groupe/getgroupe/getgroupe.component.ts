import { Component, OnInit } from '@angular/core';
import { Groupe } from 'src/app/core/MsNoyau/model/groupe.model';
import { GroupeService } from 'src/app/core/MsNoyau/service/groupe.service';
import { TableModule } from 'primeng/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddeditgroupeComponent } from '../addeditgroupe/addeditgroupe.component';

@Component({
  selector: 'app-getgroupe',
  templateUrl: './getgroupe.component.html',
  styleUrls: ['./getgroupe.component.css']
})
export class GetgroupeComponent implements OnInit {
  public groupe = new Groupe();
  constructor(public groupeservice:GroupeService,
    private tablem:TableModule,
    private dialog:MatDialog,
    private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this.getGroupe()
  }

  getGroupe(){
    this.groupeservice.getGroupe().subscribe(data=>{
      this.groupeservice.listGroupe=data as Groupe[];
       
      console.log(data)
      },error=>{
        console.log(error)
      }
      )
  }
  onDelete(idGroupe){
    if (confirm("Vous êtes sûr de vouloir supprimer cette groupe")) {
      this.groupeservice.deleteGroupe(idGroupe).subscribe(data=>{
        this._snack.open("Suppression réussi",'X',{
          verticalPosition: 'top',
          duration: 2000,
          panelClass:'snack-supp'
        });
        this.getGroupe();
      },error=>{
        console.log(error);
      });
    }
    
 }

 AddorEdit(typedid,typelabel){
  this.groupeservice.idpass=typedid;
  this.groupeservice.labelpass=typelabel;
  
  console.log(typelabel);
   this.dialog.open(AddeditgroupeComponent).afterClosed().subscribe(res => {
    this.getGroupe();
  });
   

 }


}
