import { Injectable } from '@angular/core';
import { Projet } from '../model/projet.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  listprojet:Projet[];

  form = new FormGroup({
    IdTache:new FormControl(""),
    Label : new FormControl('', Validators.required),

    DateDebutReelle : new FormControl('', Validators.required),

    DureeEstimee : new FormControl('', Validators.required),

    Description : new FormControl('', Validators.required),

    DateRappel : new FormControl('', Validators.required),

         //String Attribute1 { get; set; }

    DureeReelle: new FormControl('', Validators.required),


    FKObjectifs : new FormControl('', Validators.required),
      
    FKTaskType_S_Service: new FormControl('', Validators.required),
   
    FKGroupeUserRole_s_s: new FormControl('', Validators.required),
    
    FKDemande : new FormControl('', Validators.required)
    });

  constructor(private http: HttpClient) { }
  getTypeTache(){
        
    return this.http.get(environment.GestionTacheApi + "/Tache/GetTaskType") ;
  }
  deleteTypeTache(idTask) { 
    console.log(this.form.value);
    return this.http
      .delete(
        environment.GestionTacheApi + "/Tache/RemoveTaskType?id=" +idTask,
        { responseType: "text" },
       
      );
  }
  initializeFormForEdit(tache:Projet){
    this.form.setValue({
      IdProjet:tache.IdProjet,
      Label : tache.Label,
  
      DateDebutReelle :tache.DateDebutReelle,
  
      DureeEstimee : tache.DureeEstimee,
  
      Description : tache.Description,
  
      DateCreation : tache.DateCreation,
  
           //String Attribute1 { get; set; }
  
      DateCloture: tache.DateCloture,
  
  
      Active :tache.Active,
        
      DureeReelle:tache.DureeReelle,
     
      FKSousService:tache.FKSousService,
      
    });
  
  }
  initializeFormForPost() {
    this.form.setValue({
  
    IdProjet:'00000000-0000-0000-0000-000000000000',
    
    Label : '',

    DateDebutReelle :'',

    DureeEstimee : '',

    Description : '',

    DateCreation : '',

         //String Attribute1 { get; set; }

    DateCloture: '',


    Active :'',
      
    DureeReelle:'',
   
    FKSousService:'',
    
    
    });
  }
  postTypeTache() {
    return this.http
      .post(
        environment.GestionTacheApi+ "/Tache/PostTaskType",
        this.form.value,
        { responseType: "text" }
      );
  }
  putTypeTache() { 
    console.log(this.form.value);
    return this.http
      .put(
        environment.GestionTacheApi + "/Tache/PutTaskType",
        this.form.value,
        { responseType: "text" }
      );
  }



}
