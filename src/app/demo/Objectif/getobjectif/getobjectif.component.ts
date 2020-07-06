import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddeditobjectifComponent } from '../addeditobjectif/addeditobjectif.component';
import { ObjectifService } from 'src/app/core/MsObjectifs/services/objectif.service';
import { Objectif } from 'src/app/core/MsObjectifs/model/objectif.model';

@Component({
  selector: 'app-getobjectif',
  templateUrl: './getobjectif.component.html',
  styleUrls: ['./getobjectif.component.css']
})
export class GetobjectifComponent implements OnInit {
  public radarChartLabels = ['Janvier', 'Fevrier', 'Mars', 'Avril'];
  public radarChartData = [
    {data: [0, 5, 10, 6], label: 'Tache en cours'},
    {data: [0, 2, 8, 15], label: 'Tache effectuées'},
    {data: [0, 0, 3, 2], label: 'Tache Dépassées'}
  ];
  public radarChartType = 'line';
  constructor(private dialog:MatDialog,
    public objectifService:ObjectifService) { }

  ngOnInit(): void {
    this.getObjectif();
  }

  getObjectif(){
    this.objectifService.getObjectif().subscribe(data=>{
      this.objectifService.listObjectif=data as Objectif[];
       
     
      },error=>{
        console.log(error)
      }
      )
  }
  openComponentForPost() {
    //this.typeoservice.initializeFormForPost();
    this.dialog.open(AddeditobjectifComponent,
    ).afterClosed().subscribe(res => {
      //this.gettypeo();
      this.getObjectif();
   });

}
}
