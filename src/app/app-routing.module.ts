import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiphyComponent } from './giphy/giphy.component';
import { RandomComponent } from './random/random.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  {path: '', component: TrendingComponent},
  {path: 'random', component: RandomComponent},
  {path: 'search', component: GiphyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
