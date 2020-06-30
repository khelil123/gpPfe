import { Injectable } from '@angular/core';
import { Typereunion } from '../model/typereunion';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypereunionService {

  idpass;
  labelpass;
  listtypereunion : Typereunion[];
  typereunion:Typereunion;
  

  
  form = new FormGroup({
    id_TypeReunion : new FormControl(""),
    label : new FormControl(""),
  });

  initializeFormForEdit(typereunion:Typereunion) {
    this.form.setValue({
      id_TypeReunion: typereunion.id_TypeReunion,
      label: typereunion.label
    });
  } 


  constructor(private http: HttpClient) { }
  
  getTypeReunion(){
        
    return this.http.get(environment.GestionTypeReunionApi +"/TypeReunion/getAllTypeReunion") ;
  } 
  

  postTypeReunion() {
   return this.http
  .post(environment.GestionTypeReunionApi +"/TypeReunion/postTypeReunion",
   
  this.form.value,
  { responseType: "json" }
  );}
 

  DeleteTypeReunion(id_TypeReunion){
  return this.http
    .delete(environment.GestionTypeReunionApi + "/TypeReunion/removeTypeReunion?id=" + id_TypeReunion,
      { responseType: "json" });
  }
 


  putTypeReunion() {
  console.log(this.form.value);
    return this.http
    .put(
      environment.GestionTypeReunionApi + "/TypeReunion/putTypeReunion" ,
      this.form.value,
      { responseType: "json" }
    );
    }
}
