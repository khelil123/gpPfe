import { Component, OnInit } from '@angular/core';
import { Typetachesousservice } from 'src/app/core/MsNoyau/model/typetachesousservice.model';
import { TypetachesousserviceService } from 'src/app/core/MsNoyau/service/typetachesousservice.service';
import { TableModule } from 'primeng/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddeditTypetacheSousserviceComponent } from '../addedit-typetache-sousservice/addedit-typetache-sousservice.component';
import { TypeTacheService } from 'src/app/core/MsNoyau/service/type-tache.service';
import { TypeTache } from 'src/app/core/MsNoyau/model/type-tache.model';

@Component({
  selector: 'app-get-typetache-sousservice',
  templateUrl: './get-typetache-sousservice.component.html',
  styleUrls: ['./get-typetache-sousservice.component.css']
})
export class GetTypetacheSousserviceComponent implements OnInit {
  public listTypeTache:TypeTache[];
  public listtypetachesousservice = new Typetachesousservice();
  typeTacheService: any;
  
  
  
  
  constructor(public Typetachesousserviceservice:TypetachesousserviceService,
    private tablem:TableModule,
    private dialog:MatDialog,
    private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this.getTypeTacheSousService();
    this.getTypeTache();
   
  }
 
  getTypeTacheSousService() {
    this.Typetachesousserviceservice.getTypeTacheSousService().subscribe(data=>{
      this.Typetachesousserviceservice.listTypetachesousservice=data as Typetachesousservice[];
       
      console.log(data)
      },error=>{
        console.log(error)
      }
      )
  }

  onDelete(idTaskType_S_Service){
    if (confirm("Vous êtes sûr de vouloir supprimer cette Tache")) {
      this.Typetachesousserviceservice.deleteTypeTacheSousService(idTaskType_S_Service).subscribe(data=>{
        this._snack.open("Suppression réussi",'X',{
          verticalPosition: 'top',
          duration: 2000,
          panelClass:'snack-supp'
        });
        this.getTypeTacheSousService();
      },error=>{
        console.log(error);
      });
    }
    
 }

 AddorEdit(typedid,typelabel,typelab){
  this.Typetachesousserviceservice.idpass=typedid;
  this.Typetachesousserviceservice.labelpass=typelabel;
  this.Typetachesousserviceservice.labpass=typelab;

  console.log(typelabel);
   this.dialog.open(AddeditTypetacheSousserviceComponent).afterClosed().subscribe(res => {
    this.getTypeTacheSousService();
  });
   
 
 }

 getTypeTache() {
  this.Typetachesousserviceservice.getTypeTache().subscribe(data=>{
    this.Typetachesousserviceservice.listTypeTache=data as TypeTache[];
     
    console.log(data)
    },error=>{
      console.log(error)
    }
    )
}

}
