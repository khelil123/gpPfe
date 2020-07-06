import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddeditprojetComponent } from '../addeditprojet/addeditprojet.component';
import { ProjetService } from 'src/app/core/MsNoyau/service/projet.service';
import { Projet } from 'src/app/core/MsNoyau/model/projet.model';

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
  constructor(public projetservice:ProjetService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getListProjet();
  }
  openComponentForPost() {
    //this.typeoservice.initializeFormForPost();
    this.dialog.open(AddeditprojetComponent,
    ).afterClosed().subscribe(res => {
      //this.gettypeo();
      this.getListProjet();
   });

}
getListProjet(){
  this.projetservice.getProjets().subscribe(data=>{
    this.projetservice.listprojet=data as Projet[];
     console.log(data);
   
    },error=>{
      console.log(error)
    }
    )
}

}
