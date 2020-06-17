import { Injectable } from '@angular/core';
import { Typed} from '../model/typed.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup,Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class TypedService {
  idpass;
  labelpass;

  listTyped: Typed[];
  form = new FormGroup({
    id: new FormControl(""),
    label: new FormControl('', Validators.required)
    });

  constructor(private http: HttpClient) { }

  getTyped(){
        
    return this.http.get(environment.GestionTypedAPi + '/TypeDemande/') ;
  }
  DeleteTyped(id){
    return this.http
      .delete(environment.GestionTypedAPi+ "/TypeDemande/DeleteTypeDemande?id=" + id,
        { responseType: "json" });
    }

    initializeFormForPost() {
      this.form.setValue({
        id: '00000000-0000-0000-0000-000000000000',
        label: '',
      });
    }
    initializeFormForEdit(typed:Typed){
      this.form.setValue({
        id:typed.id,
        label:typed.label
      });
    
    }
    postTyped() {
      return this.http
        .post(
          environment.GestionTypedAPi+ "/TypeDemande/PostTypeD",
          this.form.value,
          { responseType: "text" }
        );
    }
    putTyped() { 
      console.log(this.form.value);
      return this.http
        .put(
          environment.GestionTypedAPi + "/TypeDemande/PutTypeD",
          this.form.value,
          { responseType: "text" }
        );
    }
    deleteTyped(id) { 
      console.log(this.form.value);
      return this.http
        .delete(
          environment.GestionTypedAPi + "/TypeDemande/DeleteTypeD?id="+id,
          { responseType: "text" },
         
        );
    }
   
}
