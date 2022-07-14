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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
