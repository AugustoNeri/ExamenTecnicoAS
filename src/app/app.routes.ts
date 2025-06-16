import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { FavoritesComponent } from './pages/favorites/favorites';
import { Datacomponent } from './components/datacomponent/datacomponent';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'data-comparison', component: Datacomponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'pokemon', component: Datacomponent },
  
  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }