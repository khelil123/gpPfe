import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { FirstViewComponent } from './first-view/first-view.component';
//import { TachepostComponent } from './Setting/taches/tachepost/tachepost.component';


const routes: Routes = [{ path:'demoModuleLayout',component:FirstViewComponent},
];
//{ path:'posttache',component:TachepostComponent}];
@NgModule({
  imports: [RouterModule.forChild(routes),
    RouterModule],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
