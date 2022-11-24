import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'news', loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule) },
  { path: 'maps', loadChildren: () => import('./modules/maps/maps.module').then(m => m.MapsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
