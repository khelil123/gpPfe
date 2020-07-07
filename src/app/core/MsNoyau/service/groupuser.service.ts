import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GroupuserService {

  constructor(private http: HttpClient) { }

  form = new FormGroup({
    IDGroupeUserRole_s_se : new FormControl(""),
    FkGroupe: new FormControl('', Validators.required),
    FkUserRole_s_s: new FormControl('', Validators.required),
    FkObjectif:new FormControl('', Validators.required)
    });
    initializeFormForPost() {
      this.form.setValue({
        IDGroupeUserRole_s_se: '00000000-0000-0000-0000-000000000000',
        FkGroupe: '00000000-0000-0000-0000-000000000000',
        FkUserRole_s_s: '00000000-0000-0000-0000-000000000000',
        FkObjectif: '00000000-0000-0000-0000-000000000000'
      });
    }
    postGroupUser() {
      return this.http
        .post(
          environment.NoyauApi+ "GroupeUserRole/PostGroupeUserRole",
          this.form.value,
          { responseType: "text" }
        );
    }
}
