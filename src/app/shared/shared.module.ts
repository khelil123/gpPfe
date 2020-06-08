import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { SidebarComponent } from './Layouts/sidebar/sidebar.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent, SidebarComponent, FooterComponent, CalendarComponent],
  imports: [
    RouterModule,
    CommonModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ],
  exports: [
  NavbarComponent,
  SidebarComponent,
  FooterComponent  
  ]
})
export class SharedModule { }
