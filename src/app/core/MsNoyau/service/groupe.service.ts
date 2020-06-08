import { Injectable } from '@angular/core';
import { Groupe } from '../model/groupe.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  idpass;
  labelpass;

  listGroupe: Groupe[];
  form = new FormGroup({
    idGroupe : new FormControl(""),
    label: new FormControl('', Validators.required)
    });


  constructor(private http: HttpClient) {} 

  getGroupe(){
        
    return this.http.get(environment.GestionGroupeAPi + "/Groupe/GetGroupe") ;
  }


  deleteGroupe(idGroupe) { 
    console.log(this.form.value);
    return this.http
      .delete(
        environment.GestionGroupeAPi + "/Groupe/RemoveGroupe?id=" +idGroupe,
        { responseType: "text" },
       
      );
  }
    

  initializeFormForPost() {
    this.form.setValue({
      idGroupe: '00000000-0000-0000-0000-000000000000',
      label: '',
    });
  }

  postGroupe() {
    return this.http
      .post(
        environment.GestionGroupeAPi+ "/Groupe/PostGroupe",
        this.form.value,
        { responseType: "text" }
      );
  }

  putGroupe() { 
    console.log(this.form.value);
    return this.http
      .put(
        environment.GestionGroupeAPi + "/Groupe/PutGroupe",
        this.form.value,
        { responseType: "text" }
      );
  }

  
}
