import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pharmacies',
    loadChildren: () => import('./core/pages/pharmacies/pharmacies.module').then( m => m.PharmaciesPageModule)
  },
  {
    path: 'pharmacy/:name',
    loadChildren: () => import('./core/pages/pharmacy/pharmacy.module').then( m => m.PharmacyPageModule)
  },
  {
    path: 'search-drug',
    loadChildren: () => import('./core/pages/search-drug/search-drug.module').then( m => m.SearchDrugPageModule)
  },
  {
    path: 'search-pharmacy',
    loadChildren: () => import('./core/pages/search-pharmacy/search-pharmacy.module').then( m => m.SearchPharmacyPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./core/pages/contact/contact.module').then( m => m.ContactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
