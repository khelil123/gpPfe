import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import {RoleSs} from '../Model/role-ss.model';
@Injectable({
  providedIn: 'root'
})

export class RoleSsService {
  idpass;
  fkrolepass;
  fksservicepass  ;

  listSsrole : RoleSs[];
  service : RoleSs;                       
  form = new FormGroup({
  id : new FormControl(""),
  fkRole : new FormControl(""),
  fKSservice: new FormControl(""),
  });
 

  initializeFormForEdit(service: RoleSs) {
    console.log(service);
    this.form.setValue({
      id: service.id,
      fkRole: service.fkRole,
      fKSservice: service.fKSservice
    });
    
  }
  initializeFormGroup() {
   
    this.form.setValue({
      id: null,
      fkRole: null,
      fKSservice:null,
      
    });
  }

  initializeFormForPost() {
    this.form.setValue({
      id: '00000000-0000-0000-0000-000000000000',
      fkRole: '00000000-0000-0000-0000-000000000000',
      fKSservice:'00000000-0000-0000-0000-000000000000',
      
    });
  }
  constructor(private http: HttpClient) { }
  getSservices(){
    return this.http.get(environment.GestionProjetRoleSSApi+ "/Sservice") ;
  }
  getRole(){
    return this.http.get(environment.GestionProjetRoleSSApi+ "/Role") ;
  }
  getRoless(){
    return this.http.get(environment.GestionProjetRoleSSApi+ "/Role_Sservice") ;
  }
  DeleteSserole(Id) {
    return this.http
      .delete(environment.GestionProjetRoleSSApi+ "/Role_Sservice/RemoveSserviceeRole?id=" + Id,
        { responseType: "text" });
  }
  putSsrole() { 
    console.log(this.form.value);
    return this.http
      .put(
        environment.GestionProjetRoleSSApi+ "/Role_Sservice/PutSserviceRole?id=",
        this.form.value,
        { responseType: "text" }
      );
  }
  insertSsrole() {
    return this.http
      .post(
         "http://localhost:12455/api/Role_Sservice/PostSserviceRole",
        this.form.value,
        { responseType: "text" }
      );
  }
}
