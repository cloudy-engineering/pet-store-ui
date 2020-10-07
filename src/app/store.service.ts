import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet, Reward, Transaction } from './_model';
import { environment as env } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http : HttpClient) { }

  getPets(): Observable<Pet[]> {
    const uri = `${env.api_host}/v1/pets`;
    return this.http.get<Pet[]>(uri);
  }

  getSales(): Observable<Transaction[]> {
    const uri = `${env.api_host}/v1/admin`;
    return this.http.get<Transaction[]>(uri);
  }

  getRewards(): Observable<Reward[]> {
    const uri = `${env.api_host}/v1/rewards`;
    return this.http.get<Reward[]>(uri);
  }
}
