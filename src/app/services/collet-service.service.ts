import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColletServiceService {

  constructor(private _http: HttpClient, private _router: Router) { }

  getAllCollets() {
    return this._http.get('../../assets/info.json');
  }

  getCollet(id: string) {
    return this._http.get('../../assets/info.json').pipe(
      map<any,any>(collets => {
        return collets.collets.find((collet: { id: string; }) => collet.id === id);
      })
    );
  }

  goto(ruta: any[]): void {
    this._router.navigate(ruta);
  }
}
