import { Injectable } from "@angular/core";
import { Accomodation } from "../accomodation/accomodation.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = { 
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

@Injectable()
export class AccomodationService {

    private apiUrl = 'http://localhost:5000/accomodations';
    constructor(private http:HttpClient) { }
    
    getAccomodations(): Observable<Accomodation[]> {
        console.log("da li ih vraca?")
        return this.http.get<Accomodation[]>(this.apiUrl);
    }

    deleteAccomodation(accomodation: Accomodation): Observable<Accomodation> {
       const k = 'http://localhost:5000/accomodations/';
       const z = accomodation.id;
       const k2 = k+z;
       console.log(k2);
       return this.http.delete<Accomodation>(k2);
     }
    
    updateAccomodation(accomodation: Accomodation): Observable<Accomodation> {
        const k = 'http://localhost:5000/accomodations/';
        const z = accomodation.id;
        const k2 = k+z;
        return this.http.put<Accomodation>(k2,accomodation,httpOptions);
    }
    
    addAccomodation(accomodation: Accomodation): Observable<Accomodation> {
      //const url = '${this.apiUrl}/${accomodation.id}'
      debugger
      console.log(("56666 " + accomodation.id + ' '+ accomodation.beds));
      return this.http.post<Accomodation>(this.apiUrl, accomodation, httpOptions);
    }
}