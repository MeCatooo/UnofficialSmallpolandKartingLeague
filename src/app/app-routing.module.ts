import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventResultsComponent } from './event-results/event-results.component';
import { TrackListComponent } from './track/track-list/track-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'events', component: EventResultsComponent},
  {path: 'tracks', component: TrackListComponent}
  // {path: 'tracks', loadChildren: () => import('./track/track.module').then(m => m.TrackModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
