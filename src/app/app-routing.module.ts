import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'choose-mode',
    loadChildren: () => import('./pages/choose-mode/choose-mode.module').then( m => m.ChooseModePageModule)
  },
  {
    path: 'learn-mode',
    loadChildren: () => import('./pages/learn-mode/learn-mode.module').then( m => m.LearnModePageModule)
  },
  {
    path: 'practice-mode',
    loadChildren: () => import('./pages/practice-mode/practice-mode.module').then( m => m.PracticeModePageModule)
  },
  {
    path: 'wordlist',
    loadChildren: () => import('./pages/wordlist/wordlist.module').then( m => m.WordlistPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'language-selection',
    loadChildren: () => import('./pages/language-selection/language-selection.module').then( m => m.LanguageSelectionPageModule)
  },
  {
    path: 'learn-mode-m',
    loadChildren: () => import('./pages/learn-mode-m/learn-mode-m.module').then( m => m.LearnModeMPageModule)
  },
  {
    path: 'choose-mode-m',
    loadChildren: () => import('./pages/choose-mode-m/choose-mode-m.module').then( m => m.ChooseModeMPageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./pages/summary/summary.module').then( m => m.SummaryPageModule)
  },
  {
    path: 'picture-with-labels',
    loadChildren: () => import('./pages/picture-with-labels/picture-with-labels.module').then( m => m.PictureWithLabelsPageModule)
  },
  {
    path: 'choose-abc',
    loadChildren: () => import('./pages/choose-abc/choose-abc.module').then( m => m.ChooseAbcPageModule)
  },
  {
    path: 'language-selection2',
    loadChildren: () => import('./pages/language-selection2/language-selection2.module').then( m => m.LanguageSelection2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
