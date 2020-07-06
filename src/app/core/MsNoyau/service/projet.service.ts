import { Injectable } from '@angular/core';
import { Projet } from '../model/projet.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Validators, FormControl, FormGroup, FormGroupName } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  listprojet:Projet[];

  form = new FormGroup({


   
      Idprojet:new FormControl(""),
    Label : new FormControl('', Validators.required),
    Description : new FormControl('', Validators.required),
   
  
 
    DureeEstimee : new FormControl('', Validators.required),
    
    TypeDuree:new FormControl('', Validators.required),
    

    Statut:new FormControl('', Validators.required),
   
    Active:new FormControl('', Validators.required),


   

  
    DateCreation : new FormControl('', Validators.required),
   



         //String Attribute1 { get; set; }




      


    
   

 

    });

  constructor(private http: HttpClient) { }
  getProjets(){
        
    return this.http.get(environment.NoyauApi + "Projet/GetProject") ;
  }
  deleteTypeprojet(idTask) { 
    console.log(this.form.value);
    return this.http
      .delete(
        environment.NoyauApi  + "/projet/RemoveTaskType?id=" +idTask,
        { responseType: "text" },
       
      );
  }
  initializeFormForEdit(projet:Projet){
    this.form.setValue({
      IdProjet:projet.IdProjet,
      Label : projet.Label,
  
      DateDebutReelle :projet.DateDebutReelle,
  
      DureeEstimee : projet.DureeEstimee,
  
      Description : projet.Description,
  
      DateCreation : projet.DateCreation,
  
           //String Attribute1 { get; set; }
  
      DateCloture: projet.DateCloture,
  
  
      Active :projet.Active,
        
      DureeReelle:projet.DureeReelle,
     
      FKSousService:projet.FKSousService,
       Statut:projet.Statut,
      TypeDuree:projet.TypeDuree,
      
    });
  
  }
  initializeFormForPost() {
    this.form.setValue({
  
    Idprojet:'00000000-0000-0000-0000-000000000000',
    
    Label : '',

    

    DureeEstimee : '',

    Description : '',

    DateCreation : '',

         //String Attribute1 { get; set; }

 


    Active :'',
   
    TypeDuree:'',
    

    Statut:'',

    
    
    });
  }
  postprojet() {
    return this.http
      .post(
        environment.NoyauApi + "Projet/PostProject",
        this.form.value,
        { responseType: "text" }
      );
  }
  putTypeprojet() { 
    console.log(this.form.value);
    return this.http
      .put(
        environment.NoyauApi  + "/projet/PutTaskType",
        this.form.value,
        { responseType: "text" }
      );
  }



}
