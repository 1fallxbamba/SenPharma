import { Component, OnInit } from '@angular/core';

import { CallNumber } from '@ionic-native/call-number/ngx';

import { DatafetcherService } from '../../services/datafetcher.service';
import { MiscService } from '../../services/misc.service';

@Component({
  selector: 'app-search-pharmacy',
  templateUrl: './search-pharmacy.page.html',
  styleUrls: ['./search-pharmacy.page.scss'],
})
export class SearchPharmacyPage implements OnInit {

  searchTerm = '';

  count: number;

  Results: any = [];

  constructor(
    public dataFetcher: DatafetcherService,
    public misc: MiscService,
    private caller: CallNumber
  ) { }

  ngOnInit() {
  }

  search() {

    if ((this.searchTerm.trim()).length !== 0) {

      this.dataFetcher.getPharmacyByName('SEARCH', this.searchTerm).subscribe((data) => {

        if (data['CODE'] !== 'NPF') {

          this.Results = data;

          this.count = this.Results.length;

          this.misc.banner('NPF', true);

        } else {

          this.Results = [];

          this.count = this.Results.length;

          this.misc.banner('NPF', false);

        }

      },
        error => { this.misc.error('UNEX'); }
      );

    } else {

      this.Results = [];

      this.count = this.Results.length;

    }

  }

  call(pNumber: string) {

    this.caller.callNumber(pNumber, true)
      .then(res => console.log('Calling number...', res))
      .catch(err => console.log('Error calling number !', err));
  }

}
