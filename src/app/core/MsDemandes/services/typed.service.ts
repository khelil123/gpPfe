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
    idTypeDemande : new FormControl(""),
    label: new FormControl('', Validators.required)
    });

  constructor(private http: HttpClient) { }

  getTyped(){
        
    return this.http.get(environment.GestionTypedAPi + '/TypeDemande/GetTypeDemande') ;
  }
  DeleteTyped(idTypeDemande){
    return this.http
      .delete(environment.GestionTypedAPi+ "/TypeDemande/DeleteTypeDemande?id=" + idTypeDemande,
        { responseType: "json" });
    }

    initializeFormForPost() {
      this.form.setValue({
        idTypeDemande: '00000000-0000-0000-0000-000000000000',
        label: '',
      });
    }
    postTyped() {
      return this.http
        .post(
          environment.GestionTypedAPi+ "/TypeDemande/PostTypeDemande",
          this.form.value,
          { responseType: "text" }
        );
    }
    putTyped() { 
      console.log(this.form.value);
      return this.http
        .put(
          environment.GestionTypedAPi + "/TypeDemande/PutTypeDemande",
          this.form.value,
          { responseType: "text" }
        );
    }
    deleteTyped(idTypeDemande) { 
      console.log(this.form.value);
      return this.http
        .delete(
          environment.GestionTypedAPi + "/TypeDemande/DeleteTypeDemande?id="+idTypeDemande,
          { responseType: "text" },
         
        );
    }
   
}
