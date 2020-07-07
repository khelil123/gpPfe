import { Component, OnInit } from '@angular/core';
import { GroupeService } from 'src/app/core/MsNoyau/service/groupe.service';
import { UserService } from 'src/app/core/User/user.service';
import { User } from 'src/app/core/User/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RoleService } from 'src/app/core/Msservice/service/role.service';
import { Role } from 'src/app/core/Msservice/Model/role.model';
import { UserroleService } from 'src/app/core/MsNoyau/service/userrole.service';
import { Groupe } from 'src/app/core/MsNoyau/model/groupe.model';
import { GroupuserService } from 'src/app/core/MsNoyau/service/groupuser.service';
import { ObjectifService } from 'src/app/core/MsObjectifs/services/objectif.service';
import { Objectif } from 'src/app/core/MsObjectifs/model/objectif.model';

@Component({
  selector: 'app-postgroup',
  templateUrl: './postgroup.component.html',
  styleUrls: ['./postgroup.component.css']
})
export class PostgroupComponent implements OnInit {
 roles:string[];
selecteduser:User[]=[];
objectifchoi:string;
  constructor(
    public objectifservice:ObjectifService,
    public groupuserService:GroupuserService,
    public userroleService:UserroleService,
    public rolesService:RoleService,
     public groupeservice:GroupeService,
    public userservice:UserService,
    private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this.groupeservice.initializeFormForPost();
   this.getUsers(); 
     this.getRoles();
     this.getObjectifs();
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
    //Création du groupe
 
   this.postGroup();
   //console.log(this.selecteduser[0].role);


   //affectaion user a  role_ss 
  
 

   //affectation groupe userrole objectif





  }

  postGroup(){
 //this.groupeservice.form.controls.idGroupe.setValue('00000000-0000-0000-0000-000000000000');
  this.groupeservice.postReturnGroupe().subscribe(data =>{
    this._snack.open("Ajout réussi",'X',{
      verticalPosition: 'top',
      duration: 2000,
      panelClass:'snack-succ',
    
    });  
    for (var _i=0;_i<this.selecteduser.length;_i++){
      this.userroleService.initializeFormForPost();
    this.userroleService.form.controls.FKuserID.setValue(this.selecteduser[_i].userID);   
     this.userroleService.form.controls.FKId_RoleSousService.setValue(this.selecteduser[_i].role);
    this.postUserRole(data.idGroupe);  
   }



      
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

  postUserRole(Idgroup:string){
    this.userroleService.postReturnUserrole().subscribe(data=>{
      this._snack.open("Ajout réussi",'X',{
        verticalPosition: 'top',
        duration: 2000,
        panelClass:'snack-succ'
      });
      //console.log(data.idUserRole_s_s);
  this.postGroupUser(Idgroup,data.idUserRole_s_s);


        
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
  postGroupUser(Idgroupe:string,iduserrole:string){
    this.groupuserService.initializeFormForPost();
    this.groupuserService.form.controls.FkGroupe.setValue(Idgroupe);
    this.groupuserService.form.controls.FkUserRole_s_s.setValue(iduserrole);
    this.groupuserService.form.controls.FkObjectif.setValue(this.objectifchoi);
    console.log(this.groupuserService.form.value)
    this.groupuserService.postGroupUser().subscribe(data=>{
   
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
  getObjectifs(){
    this.objectifservice.getObjectif().subscribe(data=>{
      this.objectifservice.listObjectif=data as Objectif[];
    console.log(data);
     
      },error=>{
        console.log(error)
      }
      )
  }



}
