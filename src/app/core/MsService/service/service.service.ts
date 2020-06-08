import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../Model/service.model';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  idpass;
  labelpass;

  listService : Service[];
  service : Service ;
  form = new FormGroup({
  id : new FormControl(""),
  label: new FormControl('', Validators.required)
  });

  initializeFormForEdit(service: Service) {
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

  getServices(){
    return this.http.get(environment.GestionProjetServiceApi + "/Servicees") ;
  }
  DeleteService(Id) {
    return this.http
      .delete(environment.GestionProjetServiceApi + "/Servicees/RemoveServicee?id=" +Id,
        { responseType: "text" });
  }
  putService() { 
    console.log(this.form.value);
    return this.http
      .put(
        environment.GestionProjetServiceApi + "/Servicees/Putservice?id=",
        this.form.value,
        { responseType: "text" }
      );
  }
  insertService() {
    return this.http
      .post(
         "http://localhost:12455/api/Servicees/Postservice",
        this.form.value,
        { responseType: "text" }
      );
  }
}