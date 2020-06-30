import { Injectable } from '@angular/core';
import { Demande} from '../model/demande.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  listDemande: Demande[];
  form = new FormGroup({ 
    id :new FormControl(""),
    objet:new FormControl('', Validators.required),
    dateCreation:new FormControl('', Validators.required),
    id_TypeDemande:new FormControl('', Validators.required),
    fK_GroupeUser:new FormControl('', Validators.required),
    etat:new FormControl('')
    });

  constructor(private http: HttpClient) { }
  getDemande(){
        
    return this.http.get(environment. GestionDemandeAPi + '/Demande') ;
  }
  getDemandeDTO(){
        
    return this.http.get(environment. GestionDemandeAPi + '/Demande/GetDemandeDTO') ;
  }
  DeleteDemande(id){
    return this.http
      .delete(environment.GestionDemandeAPi+ "/Demande/DeleteDemande?id=" + id,
        { responseType: "json" });
    }

    initializeFormForPost() {
      this.form.setValue({
        id: '00000000-0000-0000-0000-000000000000',
        objet:'',
    dateCreation:'',
    id_TypeDemande:'',
    fK_GroupeUser:'',
    etat:'En attente'
      });
    }
    initializeFormForEdit(demande:Demande){
      this.form.setValue({
        Id: demande.id,
        Objet:demande.objet,
    DateCreation:demande.dateCreation,
    Id_TypeDemande:demande.id_TypeDemande,
    FK_GroupeUser:demande.fK_GroupeUser,
    Etat:demande.etat
      });
    
    }
    insert() {
      return this.http
        .post(
          environment. GestionDemandeAPi+ "/Demande/PostDemande",
          this.form.value,
          { responseType: "text" }
        );
    }
    putDemande() { 
      console.log(this.form.value);
      return this.http
        .put(
          environment.GestionDemandeAPi + "/TypeDemande/PutDemande",
          this.form.value,
          { responseType: "text" }
        );
    }

}
