import { Injectable } from '@angular/core';
import { Typerss } from '../model/typerss';
import { Typereunion } from '../model/typereunion';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sservice } from '../../Msservice/Model/sservice.model';

@Injectable({
  providedIn: 'root'
})
export class TyperssService {

  idpass;
  labelpass;
  labpass;

  listTyperss: Typerss[];
  listss:Sservice[];
  listTypereunion: Typereunion[];
 
  form = new FormGroup({
    id_TypeReunionSousService : new FormControl(""),
    fKTypeReunion: new FormControl('', Validators.required),
    fKS_Service: new FormControl('', Validators.required),
    });
  constructor(private http: HttpClient) { }

  getTypeReunionSousService(){
        
    return this.http.get(environment.GestionTypeReunionSousServiceAPi + "/TypeReunionSousService/getAllTypeRSService") ;
  }
  
  getTypeReunionSousServiceDTO(){
        
    return this.http.get(environment.GestionTypeReunionSousServiceAPi + "/TypeReunionSousService/GetTypeReunionDTO") ;
  }
  
  deleteTypeReunionSousService(Id_TypeReunionSousService) { 
    console.log(this.form.value);
    return this.http
      .delete(
        environment.GestionTypeReunionSousServiceAPi + "/TypeReunionSousService/removeTypeRSService?id=" +Id_TypeReunionSousService,
        { responseType: "text" },
        
      );
      
     
  }


    initializeFormForPost() {
      this.form.setValue({
        id_TypeReunionSousService: '00000000-0000-0000-0000-000000000000',
        fKTypeReunion: '',
        fKS_Service:'',
      });
    }

    postTypeReunionSousService() {
      return this.http
        .post(
          environment.GestionTypeReunionSousServiceAPi+ "/TypeReunionSousService/postTypeRSService",
          this.form.value,
          { responseType: "text" }
        );
    }

    putTypeReunionSousService() { 
      console.log(this.form.value);
      return this.http
        .put(
          environment.GestionTypeReunionSousServiceAPi + "/TypeReunionSousService/putTypeRSService",
          this.form.value,
          { responseType: "text" }
        );
    }

    getSousService(){
        
      return this.http.get( "https://localhost:44372/getAllSousService") ;
    }
   
}

