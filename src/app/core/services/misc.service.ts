import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MiscService {

  constructor(private router: Router, private alerter: AlertController, private toaster: ToastController) { }

  async banner(forWhat?: string, dismiss?: boolean) {

    let banner: HTMLIonToastElement;

    if (dismiss === false) {

      if (forWhat === 'NPF') {

        banner = await this.toaster.create({

          header: 'Pharmacie introuvable',
          message: 'Le nom peut être incorrect ou la pharmacie non répertoriée  ',
          duration: 2000,
          color: 'light'

        });

      } else if (forWhat === 'DNF') {

        banner = await this.toaster.create({

          header: 'Médicament introuvable',
          message: 'Le nom peut être incorrect ou le médicament non répertorié',
          duration: 2000,
          color: 'light'
        });

      }

      banner.present();

    } else {

      this.toaster.dismiss(); /// cause the Uncaught (in promise): overlay does not exist Error, gotta look into it

    }

  }


  async notify(title: string, msg: string) {
    const alert = await this.alerter.create({
      header: title,
      message: msg,
      buttons: ['Ok']
    });
    await alert.present();
  }

  error(type: string) {

    if (type === 'UNEX') {

      this.notify('Erreur',
        `Une erreur inattendue est survenue lors de la recupération des pharmacies, veuillez réessayer s'il vous plait.`);

    } else if (type === 'NET') {

      this.notify('Erreur de connexion',
        `Une erreur de connexion est survenue lors de la recupération des pharmacies,
      veuillez vérifier votre connexion internet et réessayer.`);

    }

    this.router.navigate(['home']);

  }

}
