import { Injectable } from '@angular/core';

@Injectable()
export class Api {

    private readonly API_URI: string = 'http://localhost/pharma/api/core/mobile/'; // LOCAL
    // private readonly API_URI: string = 'http://daavsecurite.com/pharmacy/pharmacyapi/'; // Live

    buildEndpoint(endpoint: string, params?: { name: string, value }): string {

        const endpointAndParams = [];

        let finalURI: string;

        if (params) {

            endpointAndParams.push(endpoint, [params.name, params.value].join('='));

            finalURI = this.API_URI.concat(endpointAndParams.join('?'));


        } else {

            finalURI = this.API_URI.concat(endpoint);

        }

        return encodeURI(finalURI);


    }

}
