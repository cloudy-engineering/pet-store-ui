import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Pet } from '../_model';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  pets: Pet[];
  constructor(private store: StoreService) { }

  ngOnInit(): void {
    const pet$ = this.store.getPets().pipe(
      map(results => {
        this.pets = results;
      }),
      catchError(error => {
        console.log(error);
        return of([]);
      })
    );
    pet$.subscribe(data => data);
  }

}
