import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'profile1/:name',
    loadChildren: () => import('./profile1/profile1.module').then( m => m.Profile1PageModule)
  },
  {
    path: 'profile2/:name',
    loadChildren: () => import('./profile2/profile2.module').then( m => m.Profile2PageModule)
  },
  {
    path: 'profile3/:name',
    loadChildren: () => import('./profile3/profile3.module').then( m => m.Profile3PageModule)
  },
  {
    path: 'glist',
    loadChildren: () => import('./glist/glist.module').then( m => m.GlistPageModule)
  },
  {
    path: 'hlist',
    loadChildren: () => import('./hlist/hlist.module').then( m => m.HlistPageModule)
  },
  {
    path: 'rlist',
    loadChildren: () => import('./rlist/rlist.module').then( m => m.RlistPageModule)
  },
  {
    path: 'slist',
    loadChildren: () => import('./slist/slist.module').then( m => m.SlistPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
