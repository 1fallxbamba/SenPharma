import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchDrugPage } from './search-drug.page';

const routes: Routes = [
  {
    path: '',
    component: SearchDrugPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchDrugPageRoutingModule {}
