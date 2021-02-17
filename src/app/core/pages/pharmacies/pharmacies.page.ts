import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoadingController } from '@ionic/angular';

import { CallNumber } from '@ionic-native/call-number/ngx';

import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { DatafetcherService } from '../../services/datafetcher.service';
import { MiscService } from '../../services/misc.service';


@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.page.html',
  styleUrls: ['./pharmacies.page.scss'],
})
export class PharmaciesPage implements OnInit, OnDestroy {

  constructor(
    public dataFetcher: DatafetcherService,
    public misc: MiscService,
    public loader: LoadingController,
    private caller: CallNumber) { }

  searchTerm = '';

  Pharmacies: any = [];

  subs: Subscription;

  searchToggled = false;

  autoRefresh = true;

  noResults = false;

  ngOnInit() {

    this.allPharmacies();

  }

  async allPharmacies() {

    const load = await this.loader.create({
      spinner: 'bubbles',
      message: 'Chargement des pharmacies',
    });

    load.present().then(() => {

      this.dataFetcher.getPharmacies().subscribe((data: {}) => {

        load.dismiss();

        if (data['CODE'] !== 'NPF') {

          this.doAutoRefresh();

        } else {

          this.misc.error('UNEX');

        }

      },
        error => {

          load.dismiss().then(() => this.misc.error('NET'));
        }
      );

    });

  }

  searchPharmacy() {

    if ((this.searchTerm.trim()).length !== 0) {

      this.autoRefresh = false;

      this.dataFetcher.getPharmacyByName('SEARCH', this.searchTerm).subscribe((data) => {

        this.subs.unsubscribe();

        if (data['CODE'] !== 'NPF') {

          this.Pharmacies = data;

          this.misc.banner('NPF', true);

        } else {

          this.Pharmacies = [];

          this.misc.banner('NPF', false);

        }

      },
        error => { this.misc.error('UNEX'); }
      );

    } else { // todo : add verification to see which segment is clicked and display the corresponding pharmacies

      this.autoRefresh = true;

      this.doAutoRefresh();

    }

  }

  async filterPharmacies(status: string) {

    this.subs.unsubscribe();

    const load = await this.loader.create({
      spinner: 'bubbles',
      message: 'Chargement des pharmacies',
    });

    load.present().then(() => {

      this.dataFetcher.getPharmaciesByStatus(status).subscribe((data: {}) => {

        load.dismiss();

        if (data['CODE'] !== 'EFP') {

          this.Pharmacies = data;

          if (this.Pharmacies.length === 0) {
            this.noResults = true;
          }

        } else {

          this.misc.error('UNEX');

        }

      },
        error => {
          load.dismiss().then(() => this.misc.error('NET'));
        }
      )

    })
  }

  doAutoRefresh() {

    if (this.autoRefresh) {

      this.subs = timer(0, 5000).pipe( // disturbs the search; gotta fix : fixed, now disturbs the Filter // Fixed
        switchMap(() => this.dataFetcher.getPharmacies()) // todo: add condition from a boolean that tests if we are searching or not:  done
      ).subscribe((data: {}) => {

        this.Pharmacies = data;

      });

    }

  }

  doManualrefresh(ev) {

    setTimeout(() => {

      this.allPharmacies();

      ev.target.complete();

    }, 1000);

  }

  call(pNumber: string) {

    this.caller.callNumber(pNumber, true)
      .then(res => console.log('Calling number...', res))
      .catch(err => console.log('Error calling number !', err));
  }

  toggleSearch() {
    this.searchToggled = !this.searchToggled;
  }

  ngOnDestroy() {

    this.subs.unsubscribe();

  }

}
