import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { map, catchError } from 'rxjs/operators';
import { Transaction } from '../_model';
import { of } from 'rxjs';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  sales: Transaction[];

  constructor(private store: StoreService) { }

  ngOnInit(): void {
    const sale$ = this.store.getSales().pipe(
      map(results => {
        this.sales = results;
      }),
      catchError(error => {
        console.log(error);
        return of([]);
      })
    );

    sale$.subscribe(data => data);
  }

}
