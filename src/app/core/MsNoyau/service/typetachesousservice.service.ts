import { Injectable } from '@angular/core';
import { Typetachesousservice } from '../model/typetachesousservice.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TypeTache } from '../model/type-tache.model';

@Injectable({
  providedIn: 'root'
})
export class TypetachesousserviceService {
  idpass;
  labelpass;
  labpass;

  listTypetachesousservice: Typetachesousservice[];
  
  listTypeTache: TypeTache[];
  form = new FormGroup({
    idTaskType_S_Service : new FormControl(""),
    fkTaskType: new FormControl('', Validators.required),
    fkS_Service: new FormControl('', Validators.required),
    });
  constructor(private http: HttpClient) { }

  getTypeTacheSousService(){
        
    return this.http.get(environment.GestionTypeTacheSousServiceAPi + "/TaskType_S_Service/GetTaskT_S_S") ;
  }
  
  deleteTypeTacheSousService(idTaskType_S_Service) { 
    console.log(this.form.value);
    return this.http
      .delete(
        environment.GestionTypeTacheSousServiceAPi + "/TaskType_S_Service/RemoveTaskT_S_S?id=" +idTaskType_S_Service,
        { responseType: "text" },
        
      );
      
     
  }


    initializeFormForPost() {
      this.form.setValue({
        idTaskType_S_Service: '00000000-0000-0000-0000-000000000000',
        fkTaskType: '',
        fkS_Service:'',
      });
    }

    postTypeTacheSousService() {
      return this.http
        .post(
          environment.GestionTypeTacheSousServiceAPi+ "/TaskType_S_Service/PostTaskT_S_S",
          this.form.value,
          { responseType: "text" }
        );
    }

    putTypeTacheSousService() { 
      console.log(this.form.value);
      return this.http
        .put(
          environment.GestionTypeTacheSousServiceAPi + "/TaskType_S_Service/PutTaskT_S_S",
          this.form.value,
          { responseType: "text" }
        );
    }

    getTypeTache(){
        
      return this.http.get(environment.GestionTypeTacheAPi + "/TaskType/GetTaskType") ;
    }
   
}






