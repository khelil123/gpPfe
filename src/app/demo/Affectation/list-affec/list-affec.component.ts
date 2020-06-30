import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

import {  RoleSsService } from 'src/app/core/Msservice/service/role-ss.service';
import {  RoleSs } from 'src/app/core/Msservice/model/role-ss.model';


@Component({
  selector: 'app-list-affec',
  templateUrl: './list-affec.component.html',
  styleUrls: ['./list-affec.component.css']
})
export class ListAffecComponent implements OnInit {

  constructor(  public RolessService: RoleSsService) { }

  ngOnInit(): void {
    this.getRolessDTO();
  }
  getRolessDTO(){
    this.RolessService.getRoless().subscribe(data=>{
      this.RolessService.listSsrole=data as RoleSs[];
      
     
      },error=>{
        console.log(error)
      }
      )
  }


}
