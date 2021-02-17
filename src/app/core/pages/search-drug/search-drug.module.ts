import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchDrugPageRoutingModule } from './search-drug-routing.module';

import { SearchDrugPage } from './search-drug.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchDrugPageRoutingModule
  ],
  declarations: [SearchDrugPage]
})
export class SearchDrugPageModule {}
