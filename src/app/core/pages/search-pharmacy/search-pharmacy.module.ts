import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPharmacyPageRoutingModule } from './search-pharmacy-routing.module';

import { SearchPharmacyPage } from './search-pharmacy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPharmacyPageRoutingModule
  ],
  declarations: [SearchPharmacyPage]
})
export class SearchPharmacyPageModule {}
