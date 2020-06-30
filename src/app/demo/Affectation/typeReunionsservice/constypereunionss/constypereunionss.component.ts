import { Component, OnInit } from '@angular/core';
import { Typerss } from 'src/app/core/MsReunion/model/typerss';
import { TyperssService } from 'src/app/core/MsReunion/service/typerss.service';
@Component({
  selector: 'app-constypereunionss',
  templateUrl: './constypereunionss.component.html',
  styleUrls: ['./constypereunionss.component.css']
})
export class ConstypereunionssComponent implements OnInit {

  constructor(public TyperssService:TyperssService) { }

  ngOnInit(): void {
    this.gettypeReunion();
  }
  gettypeReunion(){
    this.TyperssService.getTypeReunionSousServiceDTO().subscribe(data=>{
      this.TyperssService.listTyperss=data as Typerss[];
      console.log(data)
     
      },error=>{
        console.log(error)
      }
      )
  }
  
}
