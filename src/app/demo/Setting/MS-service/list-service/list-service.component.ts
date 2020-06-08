import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService} from 'src/app/core/Msservice/service/service.service';
import { TableModule } from 'primeng/table';
import { Service } from 'src/app/core/Msservice/Model/service.model';
import { ServiceComponent } from '../add-service/service.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {MatSnackBar} from '@angular/material/snack-bar'; 


@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  modelRef:BsModalRef;

  public service = new  Service ();


  constructor(public servService:ServiceService,private tablem:TableModule,private dialog:MatDialog,private _snack:MatSnackBar) { }

  ngOnInit() {
    this.getServices()
  }
  getServices(){
    this.servService.getServices().subscribe(data=>{
      this.servService.listService =data as Service[];
       console.log(data)
       
      },error=>{
        console.log(error)
      }
      )
  }
  
  onDelete(id){
    if (confirm("Vous êtes sûr de vouloir supprimer cette service")) {
      this.servService.DeleteService(id).subscribe(data=>{
        this._snack.open("Suppression réussi",'X',{
          verticalPosition: 'top',
          duration: 2000,
          panelClass:'snack-supp'
        });
        this.getServices();
      },error=>{
        console.log(error);
      });
    }
    
 }
  
  

 AddorEdit(typedid,typelabel){
  this.servService.idpass=typedid;
  this.servService.labelpass=typelabel;
  
  
   this.dialog.open(ServiceComponent).afterClosed().subscribe(res => {
    this.getServices();
  });
   

 }
 
}