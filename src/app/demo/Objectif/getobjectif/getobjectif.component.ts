import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddeditobjectifComponent } from '../addeditobjectif/addeditobjectif.component';

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
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openComponentForPost() {
    //this.typeoservice.initializeFormForPost();
    this.dialog.open(AddeditobjectifComponent,
    ).afterClosed().subscribe(res => {
      //this.gettypeo();
  
   });

}
}
