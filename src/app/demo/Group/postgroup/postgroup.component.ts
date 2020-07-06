import { Component, OnInit } from '@angular/core';
import { GroupeService } from 'src/app/core/MsNoyau/service/groupe.service';
import { UserService } from 'src/app/core/User/user.service';
import { User } from 'src/app/core/User/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RoleService } from 'src/app/core/Msservice/service/role.service';
import { Role } from 'src/app/core/Msservice/Model/role.model';

@Component({
  selector: 'app-postgroup',
  templateUrl: './postgroup.component.html',
  styleUrls: ['./postgroup.component.css']
})
export class PostgroupComponent implements OnInit {
 roles:string[];
selecteduser:any[]=[];
  constructor(public rolesService:RoleService,
     public groupeservice:GroupeService,
    public userservice:UserService,
    private _snack:MatSnackBar) { }

  ngOnInit(): void {
    
   this.getUsers(); 
     this.getRoles();
  }
selectUser(user){
  this.selecteduser.push(user);
  console.log(this.selecteduser+"   "+this.userservice.listuser.indexOf(user));
  this.userservice.listuser.splice(this.userservice.listuser.indexOf(user),1);
  
}
removeUser(user){
  this.userservice.listuser.push(user);
  console.log(this.selecteduser+"   "+this.userservice.listuser.indexOf(user));
  this.selecteduser.splice(this.selecteduser.indexOf(user),1);
  
}
  getUsers(){
    this.userservice.getUsers().subscribe(data=>{
      this.userservice.listuser=data as User[];
       
     
      },error=>{
        console.log(error)
      }
      )
  
  }
  onSubmit(){
   this.postGroup();

  }

  postGroup(){
 this.groupeservice.form.controls.idGroupe.setValue('00000000-0000-0000-0000-000000000000');
  this.groupeservice.postGroupe().subscribe(data=>{
    this._snack.open("Ajout réussi",'X',{
      verticalPosition: 'top',
      duration: 2000,
      panelClass:'snack-succ'
    });
      
  },error=>{
    console.log(error)
    this._snack.open("Erreur", "X", {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: "right",
      panelClass: 'snack-supp'
  });
  
})

  }

  getRoles(){
    this.rolesService.getRole().subscribe(data=>{
      this.rolesService.listRole=data as Role[];
       
     
      },error=>{
        console.log(error)
      }
      )
  
  
  }
}
