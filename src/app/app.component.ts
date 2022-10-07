import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Cocktail } from '../models/cocktails';
@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {
  searchString: string = '';
  drinks: Cocktail[] = [];

  constructor( private readonly http: HttpClient ) { }

  searchData() {
    this.drinks = [];
    if ( this.searchString ) {
      const url = `${ environment.cocktailUrl }?i=${ this.searchString }`;
      this.http.get( url ).subscribe( ( data: any ) => {
        this.drinks = data.drinks;
      }, ( error: HttpErrorResponse ) => {

      }, () => { } );
    } else {
      this.drinks = [];
    }
  }
}
