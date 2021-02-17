import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPharmacyPage } from './search-pharmacy.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPharmacyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPharmacyPageRoutingModule {}
