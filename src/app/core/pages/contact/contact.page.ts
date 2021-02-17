import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoadingController } from '@ionic/angular';

import { DataposterService } from '../../services/dataposter.service';
import { MiscService } from '../../services/misc.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  message = { content: '', name: '', email: '', };

  constructor(
    public dataPoster: DataposterService,
    public misc: MiscService,
    private router: Router,
    private loader: LoadingController) { }

  ngOnInit() {
  }

  async newMessage() {

    const load = await this.loader.create({
      spinner: 'bubbles',
      message: 'Envoi en cours',
    });

    load.present().then(() => {

      this.dataPoster.postMessage(this.message).subscribe((data: {}) => {

        load.dismiss();

        if (data !== 'ESM') {

          this.misc.notify('Message envoyé', 'Votre message a été envoyé avec succées, merci !');

          this.router.navigateByUrl('/home');

        } else {

          this.misc.notify('Oups...', 'Un problème est survenu lors de l\'envoi du message, veuiller réessayer !');

        }

      },
        error => {
          load.dismiss();
          this.misc.error('NET');
        }
      );

    })

  }

}
