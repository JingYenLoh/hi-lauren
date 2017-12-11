import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Residents } from "app/models/residents";

@Injectable()
export class ResidentsService {

  constructor(private http: Http) { }
    getResidents(): Observable<Residents[]> {
      return this.http.get("https://localhost:3000/residents")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}
