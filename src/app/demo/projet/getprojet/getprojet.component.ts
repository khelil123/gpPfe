import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddeditprojetComponent } from '../addeditprojet/addeditprojet.component';

@Component({
  selector: 'app-getprojet',
  templateUrl: './getprojet.component.html',
  styleUrls: ['./getprojet.component.css']
})
export class GetprojetComponent implements OnInit {
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
    this.dialog.open(AddeditprojetComponent,
    ).afterClosed().subscribe(res => {
      //this.gettypeo();
  
   });

}
}
