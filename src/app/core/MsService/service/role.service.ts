import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../Model/role.model';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  idpass;
  labelpass;

  listRole : Role[];
  role : Role ;
  form = new FormGroup({
  id : new FormControl(""),
  label: new FormControl('', Validators.required)
  });

  initializeFormForEdit(service: Role) {
    console.log(service);
    this.form.setValue({
      id: service.id,
      label: service.label
    });
    
  }
  initializeFormGroup() {
   
    this.form.setValue({
      id: null,
      label: '',
      
    });
  }

  initializeFormForPost() {
    this.form.setValue({
      id: '00000000-0000-0000-0000-000000000000',
      label: '',
    });
  }
  constructor(private http: HttpClient) { }

  getRole(){
    return this.http.get(environment.GestionProjetRoleApi+ "/Role") ;
  }
  DeleteRole(idrole) {
    return this.http
      .delete(environment.GestionProjetRoleApi+ "/Role/RemoveRole?id=" +idrole,
        { responseType: "text" });
  }
  putRole() { 
    console.log(this.form.value);
    return this.http
      .put(
        environment.GestionProjetRoleApi+ "/Role/PutRole?id=",
        this.form.value,
        { responseType: "text" }
      );
  }
  insertRole() {
    return this.http
      .post(
        environment.GestionProjetRoleApi+"/Role/PostRole",
        this.form.value,
        { responseType: "text" }
      );
  }
}