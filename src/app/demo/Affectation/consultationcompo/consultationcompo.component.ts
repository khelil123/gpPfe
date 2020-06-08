import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

import { Typeoss } from 'src/app/core/TypeObjSousService/model/typeoss.model';
import { TypossService } from 'src/app/core/TypeObjSousService/service/typoss.service';

@Component({
  selector: 'app-consultationcompo',
  templateUrl: './consultationcompo.component.html',
  styleUrls: ['./consultationcompo.component.css']
})
export class ConsultationcompoComponent implements OnInit {

  constructor(  public TypeossService:TypossService) { }

  ngOnInit(): void {
    this.gettypeoDTO();
  }
  gettypeoDTO(){
    this.TypeossService.getTypeossDTO().subscribe(data=>{
      this.TypeossService.listTypeoss=data as Typeoss[];
      
     
      },error=>{
        console.log(error)
      }
      )
  }

}
