import { Injectable } from '@angular/core';
import { Tache } from '../model/tache.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TacheService {
  listtache:Tache[];


  form = new FormGroup({
    IdTache:new FormControl(''),
    Label : new FormControl('', Validators.required),

   // DateDebutReelle : new FormControl('', Validators.required),

    DureeEstimee : new FormControl('', Validators.required),

    Description : new FormControl('', Validators.required),

    //DateRappel : new FormControl('', Validators.required),

         //String Attribute1 { get; set; }
    Attribute1: new FormControl('', Validators.required),
    
    DureeReelle: new FormControl('', Validators.required),


    FKObjectifs : new FormControl('', Validators.required),
      
    FKTaskType_S_Service: new FormControl('', Validators.required),
   
    FKGroupeUserRole_s_s: new FormControl('', Validators.required),
    
    FKDemande : new FormControl('', Validators.required)
    });

  constructor(private http: HttpClient) { }
  getTache(){
        
    return this.http.get(environment.GestionTacheApi + "Tache/GetTache") ;
  }
  deleteTache(IdTache) { 
    console.log(this.form.value);
    return this.http
      .delete(
        environment.GestionTacheApi + "Tache/DeleteTache?id=" +IdTache,
        { responseType: "text" },
       
      );
  }
  initializeFormForEdit(tache:Tache){
    this.form.setValue({
      IdTache:tache.IdTache,
      Label : tache.Label,
  
      DateDebutReelle :tache.DateDebutReelle,
  
      DureeEstimee : tache.DureeEstimee,
  
      Description : tache.Description,
  
      DateRappel : tache.DateRappel,
  
           //String Attribute1 { get; set; }
  
      DureeReelle: tache.DureeReelle,
  
  
      FKObjectifs :tache.FKObjectifs,
        
      FKTaskType_S_Service:tache.FKTaskType_S_Service,
     
      FKGroupeUserRole_s_s:tache.FKGroupeUserRole_s_s,
      
      FKDemande : tache.FKDemande
    });
  
  }
  initializeFormForPost() {
    this.form.setValue({
  
    IdTache:'00000000-0000-0000-0000-000000000000',
    Label : '',

   // DateDebutReelle :'',

    DureeEstimee : '',

    Description : '',

    //DateRappel : '',

         Attribute1 : '',

    DureeReelle: '',


    FKObjectifs :'',
      
    FKTaskType_S_Service:'',
   
    FKGroupeUserRole_s_s:'',
    
    FKDemande : '',
    });
  }
  postTache() {
    return this.http
      .post(
        environment.GestionTacheApi+ "Tache/PostTache",
        this.form.value,
        { responseType: "text" }
      );
  }
  putTache() { 
    console.log(this.form.value);
    return this.http
      .put(
        environment.GestionTacheApi + "Tache/PutTache",
        this.form.value,
        { responseType: "text" }
      );
  }



}
