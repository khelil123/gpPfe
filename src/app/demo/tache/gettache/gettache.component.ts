import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddedittacheComponent } from '../addedittache/addedittache.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-gettache',
  templateUrl: './gettache.component.html',
  styleUrls: ['./gettache.component.css']
})
export class GettacheComponent implements OnInit {
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
    this.dialog.open(AddedittacheComponent,
    ).afterClosed().subscribe(res => {
      //this.gettypeo();
  
   });

}
}