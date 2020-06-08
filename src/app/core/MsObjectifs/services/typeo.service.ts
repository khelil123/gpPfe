import { Injectable } from '@angular/core';
import { Typeo } from '../model/typeo.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeoService {
  idpass;
  labelpass;

  listTypeo: Typeo[];

  form = new FormGroup({
    idTypeObjectif : new FormControl(""),
    label: new FormControl('', Validators.required)
    });

  constructor(private http: HttpClient) { }

  getTypeo(){
        
    return this.http.get(environment.GestionTypeoApi + '/GetTypeObjectif') ;
  }
  DeleteTypeo(idTypeo){
    return this.http
      .delete(environment.GestionTypeoApi+ "/RemoveTyped?id=" + idTypeo,
        { responseType: "json" });
    }
 initializeFormForEdit(typeo:Typeo){
  this.form.setValue({
    idTypeObjectif:typeo.idTypeObjectif,
    label:typeo.label
  });

}
    initializeFormForPost() {
      this.form.setValue({
        idTypeObjectif: '00000000-0000-0000-0000-000000000000',
        label: '',
      });
    }
    postTypeo() {
      return this.http
        .post(
          environment.GestionTypeoApi+ "/PostTypeObjectif",
          this.form.value,
          { responseType: "text" }
        );
    }
    putTypeo() { 
      console.log(this.form.value);
      return this.http
        .put(
          environment.GestionTypeoApi + "/PutTypeObjectif",
          this.form.value,
          { responseType: "text" }
        );
    }
    deleteTypeo(id) { 
      console.log(this.form.value);
      return this.http
        .delete(
          environment.GestionTypeoApi + "/RemoveTypeObjectif?id="+id,
          { responseType: "text" },
         
        );
    }
   
}
