import { MasterGuard } from './guards/master.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'data-home',
    loadChildren: () => import('./data-home/data-home.module').then(m => m.DataHomeModules),
    canActivate: [MasterGuard]
  },
  {
    path: 'pop-up',
    loadChildren:() => import('./pop-up/pop-up.module').then(m => m.PopUpModules)
  }
  ,
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
