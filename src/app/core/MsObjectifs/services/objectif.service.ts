import { Injectable } from '@angular/core';
import { Objectif } from '../model/objectif.model';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObjectifService {
  listObjectif : Objectif[];
  objectif:Objectif;
  idpass;
  labelpass;

  form = new FormGroup({
    idObjectifs : new FormControl(''),
    //dateDebutReelle : new FormControl(''),
    dureeEstimee : new FormControl(''),
    description : new FormControl(''),
    dateCreation : new FormControl(''),
    attribute1 :new FormControl(''),
    label : new FormControl(''),
    dureeReelle : new FormControl(''),
    fKProjet :new FormControl(''),
    fKTypeObjectif_S_Service :new FormControl(''),
     
  });
  initializeFormForEdit(objectif:Objectif) {
    this.form.setValue({
      idObjectifs: objectif.idObjectifs,
      dateDebutReelle: objectif.dateDebutReelle,
      dureeEstimee: objectif.dureeEstimee,
      description: objectif.description,
      dateCreation: objectif.dateCreation,
      attribute1: objectif.attribute1,
      label: objectif.label,
      dureeReelle: objectif.dureeReelle,
      fKProjet :objectif.fKProjet,
      fKTypeObjectif_S_Service :objectif.fKTypeObjectif_S_Service,  
      
    });
  }
  initializeFormForPost() {
    this.form.setValue({
      idObjectifs: '00000000-0000-0000-0000-000000000000',
     // dateDebutReelle: '',
      dureeEstimee: '',
      description: '',
     dateCreation: '',
      attribute1: '',
      label: '',
      dureeReelle: '', 
      fKProjet : '',
      fKTypeObjectif_S_Service : '',  
     
       });
    } 
  
  
  constructor(private http: HttpClient) { }

  getObjectif(){
        
    return this.http.get(environment.GestionObjectifApi +'/GetObjectif') ;
  } 
  

  postObjectif() {
   return this.http
  .post(
   "https://localhost:44382/api/Objectif/PostObjectif",
  this.form.value,
  { responseType: "text" }
  );}


  DeleteObjectif(idObjectifs){
  return this.http
    .delete(environment.GestionObjectifApi + "/DeleteObjectif?id=" + idObjectifs,
      { responseType: "text" });
  }
 


  putObjectif() {
  console.log(this.form.value);
    return this.http
    .put(
      environment.GestionObjectifApi + "/PutObjectif" + this.form.controls.idObjectifs.value,
      this.form.value,
      { responseType: "text" }
    );
    }

}
