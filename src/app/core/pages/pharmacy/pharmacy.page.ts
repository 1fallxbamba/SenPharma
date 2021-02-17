import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CallNumber } from '@ionic-native/call-number/ngx';

import { DatafetcherService } from '../../services/datafetcher.service';
import { MiscService } from '../../services/misc.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.page.html',
  styleUrls: ['./pharmacy.page.scss'],
})
export class PharmacyPage implements OnInit {

  Pharmacy: any;

  constructor(
    public dataFetcher: DatafetcherService,
    public misc: MiscService,
    private route: ActivatedRoute,
    private caller: CallNumber) { }

  ngOnInit() {

    this.getPharmacyDetails();

  }

  getPharmacyDetails() {

    this.dataFetcher.getPharmacyByName('DETAILS', this.route.snapshot.params['name']).subscribe((data: {}) => {

      if (data['CODE'] !== 'EFP') {

        this.Pharmacy = data;

      } else {

        this.misc.error('UNEX');

      }

    },
      error => {
        this.misc.error('UNEX');
      }
    );

  }

  call(pNumber: string) {

    this.caller.callNumber(pNumber, true)
      .then(res => console.log('Calling number...', res))
      .catch(err => console.log('Error calling number !', err));
  }



}
