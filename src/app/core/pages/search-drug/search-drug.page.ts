import { Component, OnInit } from '@angular/core';

import { DatafetcherService } from '../../services/datafetcher.service';
import { MiscService } from '../../services/misc.service';

@Component({
  selector: 'app-search-drug',
  templateUrl: './search-drug.page.html',
  styleUrls: ['./search-drug.page.scss'],
})
export class SearchDrugPage implements OnInit {

  searchTerm: string;

  drugData = { name: '', whereAvailable: [] };

  found = false;

  constructor(public dataFetcher: DatafetcherService, public misc: MiscService,) { }

  ngOnInit() {
  }

  search() {

    if ((this.searchTerm.trim()).length !== 0) {

      this.dataFetcher.getDrugByName(this.searchTerm).subscribe((data) => {

        if (data['CODE'] !== 'DNF') {

          this.found = true;

          this.drugData.name = data['d_Name'];
          this.drugData.whereAvailable = JSON.parse(data['d_AvailAT']);

          this.misc.banner('DNF', true);

        } else {

          this.found = false;

          this.initialize(this.drugData);

          this.misc.banner('DNF', false);

        }

      },
        error => { this.misc.error('UNEX'); }
      );

    } else {

      this.initialize(this.drugData);
    }

  }


  initialize(obj: any) {
    obj.name = '';
    obj.whereAvailable = [];
  }

}
