import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarComponent } from "src/app/shared/calendar/calendar.component";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
 
  CalDisp(){
    this.dialog.open(CalendarComponent);
    
 
  }
}
