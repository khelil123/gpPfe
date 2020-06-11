import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SserviceService} from 'src/app/core/Msservice/service/sservice.service';
import { TableModule } from 'primeng/table';
import { Sservice } from 'src/app/core/Msservice/Model/sservice.model';
import { AddSserviceComponent } from '../add-sservice/add-sservice.component';
import {MatSnackBar} from '@angular/material/snack-bar'; 
import { Service } from 'src/app/core/Msservice/Model/service.model';
import { ServiceService} from 'src/app/core/Msservice/service/service.service';


@Component({
  selector: 'app-list-sservice',
  templateUrl: './list-sservice.component.html',
  styleUrls: ['./list-sservice.component.css']
})
export class ListSserviceComponent implements OnInit {
  
  listeService:Service[];

  public listSservice  = new  Sservice ();
  ServiceService: any;

  constructor(public servService:SserviceService,private tablem:TableModule,private dialog:MatDialog,private _snack:MatSnackBar) { }

  ngOnInit() {
    this.getSservices()
    this.getServices()
  }
  getSservices(){
    this.servService.getSservices().subscribe(data=>{
      this.servService.listSservice =data as Sservice[];
       console.log(data)
       
      },error=>{
        console.log(error)
      }
      )
  }
  
  onDelete(id){
    if (confirm("Vous êtes sûr de vouloir supprimer cette sous service ")) {
      this.servService.DeleteSservice(id).subscribe(data=>{
        this._snack.open("Suppression réussi",'X',{
          verticalPosition: 'top',
          duration: 2000,
          panelClass:'snack-supp'
        });
        this.getSservices();
      },error=>{
        console.log(error);
      });
    }
    
 }
  
 AddorEdit(typedid,typelabel,typefk){ 
  
   
  this.servService.idpass=typedid;
  this.servService.labelpass=typelabel;
  this.servService.fkServicepass=typefk;

  this.dialog.open(AddSserviceComponent).afterClosed().subscribe(res => {
    this.getSservices();
  });
   

 }
 getServices() {
  this.servService.getServices().subscribe(data=>{
    this.servService.listeService=data as Service[];
     
    console.log(data)
    },error=>{
      console.log(error)
    }
    )
}
}
