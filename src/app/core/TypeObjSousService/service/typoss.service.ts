import { Injectable } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Typeoss } from '../model/typeoss.model';
import { Sservice } from '../../Msservice/Model/sservice.model';

@Injectable({
  providedIn: 'root'
})
export class TypossService {
  idpass;
  labelpass;

  listss: Sservice[];
  listTypeoss: Typeoss[];
  form = new FormGroup({
    IDTypeObjectif_S_Service : new FormControl(""),
    FKTypeObjectif: new FormControl('', Validators.required),
    FKS_Service: new FormControl('', Validators.required)
    });

  constructor(private http: HttpClient) { }
  

  getTypeoss(){
        
    return this.http.get(environment.GestionTypeossAPi + '/GetTypeossbjectif') ;
  }
  getTypeossDTO(){
        
    return this.http.get(environment.GestionTypeossAPi + '/GetTypeObjectifDTO') ;
  }
  getSousServices(){
    return this.http.get(environment.NoyauApi + 'Sousservice/GetSousService') ;
  }
  
  DeleteTypeoss(idTypeoss){
    return this.http
      .delete(environment.GestionTypeossAPi+ "/RemoveTyped?id=" + idTypeoss,
        { responseType: "json" });
    }

    initializeFormForPost() {
      this.form.setValue({
        IDTypeObjectif_S_Service: '00000000-0000-0000-0000-000000000000',
        FKTypeObjectif: '',
        FKS_Service:''
      });
    }
    postTypeoss() {
      debugger;
console.log("ttttttt");

      return this.http
      .post(
        environment.GestionTypeossAPi+ "/PostTypeO_S_S",
        this.form.value,
        { responseType: "text" }
      );
      
    }
    putTypeoss() { 
      console.log(this.form.value);
      return this.http
        .put(
          environment.GestionTypeossAPi + "/PutTypeossbjectif",
          this.form.value,
          { responseType: "text" }
        );
    }
    deleteTypeoss(id) { 
      console.log(this.form.value);
      return this.http
        .delete(
          environment.GestionTypeossAPi + "/RemoveTypeossbjectif?id="+id,
          { responseType: "text" },
         
        );
    }
   
}

