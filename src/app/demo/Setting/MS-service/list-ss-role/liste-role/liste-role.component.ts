import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoleService} from 'src/app/core/Msservice/service/role.service';
import { TableModule } from 'primeng/table';
import { Role } from 'src/app/core/Msservice/Model/role.model';
import { RoleComponent } from '../../add-ss-role/role/role.component';
import {MatSnackBar} from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-liste-role',
  templateUrl: './liste-role.component.html',
  styleUrls: ['./liste-role.component.css']
})
export class ListeRoleComponent implements OnInit {

  public role = new  Role ();


  constructor(public servService:RoleService,private tablem:TableModule,private dialog:MatDialog,private _snack:MatSnackBar) { }

  ngOnInit() {
    this.getRole()
  }
  getRole(){
    this.servService.getRole().subscribe(data=>{
      this.servService.listRole =data as Role[];
       console.log(data)
       
      },error=>{
        console.log(error)
      }
      )
  }
  
  onDelete(Id){
    if (confirm("Vous êtes sûr de vouloir supprimer cette role")) {
      this.servService.DeleteRole(Id).subscribe(data=>{
        this._snack.open("Suppression réussi",'X',{
          verticalPosition: 'top',
          duration: 2000,
          panelClass:'snack-supp'
        });
        this.getRole();
      },error=>{
        console.log(error);
      });
    }
    
 }
  
  

 AddorEdit(typedid,typelabel){
  this.servService.idpass=typedid;
  this.servService.labelpass=typelabel;
  
  
   this.dialog.open(RoleComponent).afterClosed().subscribe(res => {
    this.getRole();
  });
   

 }
 
}