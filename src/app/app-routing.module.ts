import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventResultsComponent } from './event-results/event-results.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'events', component: EventResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
