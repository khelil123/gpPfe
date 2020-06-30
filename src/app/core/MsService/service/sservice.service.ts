import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Sservice } from '../Model/sservice.model';
import { Service } from 'src/app/core/Msservice/Model/service.model';


@Injectable({
  providedIn: 'root'
})
export class SserviceService {
  listeService:Service[];
  listSservice : Sservice[];
  idpass;
  labelpass;
   fkServicepass;
  
  form = new FormGroup({
  id : new FormControl(""),
  label: new FormControl('', Validators.required),
  fKService:new FormControl('', Validators.required),
  });

 

  initializeFormForPost() {
    this.form.setValue({
      id: '00000000-0000-0000-0000-000000000000',
      label: '',
      fKService:'',
      
    });
  }
  constructor(private http: HttpClient) { }
  getServices(){
    return this.http.get(environment.GestionProjetServiceApi + "/Servicees") ;
  }
  getSservices(){
    return this.http.get(environment.GestionProjetSserviceApi+ "/Sservice") ;
  }
  DeleteSservice(Id) {
    return this.http
      .delete(environment.GestionProjetSserviceApi+ "/Sservice/RemoveSservicee?id=" + Id,
        { responseType: "text" });
  }
  putSservice() { 
    console.log(this.form.value);
    return this.http
      .put(
        environment. GestionProjetSserviceApi+ "/Sservice/PutSservice?id=",
        this.form.value,
        { responseType: "text" }
      );
  }
  insertSservice() {
    return this.http
      .post(
         "http://localhost:12455/api/Sservice/PostSservice",
        this.form.value,
        { responseType: "text" }
      );
  }
}


