import { Component, OnInit } from '@angular/core';
import { TypetachesousserviceService } from 'src/app/core/MsNoyau/service/typetachesousservice.service';
import { Typetachesousservice } from 'src/app/core/MsNoyau/model/typetachesousservice.model';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

  constructor( public TypetssService:TypetachesousserviceService) { }

  ngOnInit(): void {
    this.getTypeTacheSousServiceDTO();
  }
  getTypeTacheSousServiceDTO(){
    this.TypetssService.getTypeTacheSousServiceDTO().subscribe(data=>{
      this.TypetssService.listTypetachesousservice=data as Typetachesousservice[];
      
     
      },error=>{
        console.log(error)
      }
      )
  }
}
