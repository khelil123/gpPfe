import { Injectable } from '@angular/core';
import { TypeTache } from '../model/type-tache.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeTacheService {
  idpass;
  labelpass;

  listTypeTache: TypeTache[];
  
  form = new FormGroup({
    idTaskType : new FormControl(""),
    label: new FormControl('', Validators.required)
    });

  constructor(private http: HttpClient) { }

  getTypeTache(){
        
    return this.http.get(environment.GestionTypeTacheAPi + "/TaskType/GetTaskType") ;
  }


  deleteTypeTache(idTaskType) { 
    console.log(this.form.value);
    return this.http
      .delete(
        environment.GestionTypeTacheAPi + "/TaskType/RemoveTaskType?id=" +idTaskType,
        { responseType: "text" },
       
      );
  }


    initializeFormForPost() {
      this.form.setValue({
        idTaskType: '00000000-0000-0000-0000-000000000000',
        label: '',
      });
    }
    initializeFormForEdit(typta:TypeTache){
      this.form.setValue({
        idTypeObjectif:typta.idTaskType,
        label:typta.label
      });
    
    }

    postTypeTache() {
      return this.http
        .post(
          environment.GestionTypeTacheAPi+ "/TaskType/PostTaskType",
          this.form.value,
          { responseType: "text" }
        );
    }

    putTypeTache() { 
      console.log(this.form.value);
      return this.http
        .put(
          environment.GestionTypeTacheAPi + "/TaskType/PutTaskType",
          this.form.value,
          { responseType: "text" }
        );
    }



}
