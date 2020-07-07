import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Userrole } from '../model/userrole.model';
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserroleService {

  listuserrole: Userrole[];

  form = new FormGroup({
    IDUserRole_s_s : new FormControl(""),
    FKuserID: new FormControl('', Validators.required),
    FKId_RoleSousService: new FormControl('', Validators.required)
    });

  constructor(private http: HttpClient) { }
  initializeFormForPost() {
    this.form.setValue({
      IDUserRole_s_s: '00000000-0000-0000-0000-000000000000',
      FKuserID: '00000000-0000-0000-0000-000000000000',
      FKId_RoleSousService: '00000000-0000-0000-0000-000000000000'
    });
  }

  getUserrole(){
    return this.http.get(environment.NoyauApi + "UserRole/GetUserRole_s_s") ;

  }
  postReturnUserrole() {
    return this.http
      .post<Userrole>(
        environment.NoyauApi+ "UserRole/PostReturnUserRole_s_s",
        this.form.value,
     
      ).pipe(
        map((data: Userrole) => {
          return data;
        }));
  }






}
