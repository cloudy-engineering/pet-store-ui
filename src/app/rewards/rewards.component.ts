import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { map } from 'rxjs/operators';
import { Reward } from '../_model';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {

  rewards = new BehaviorSubject<Reward[]>([]);

  constructor(private store: StoreService) { }

  ngOnInit(): void {
    const reward$ = this.store.getRewards().pipe( 
      map(results => {
        this.rewards.next(results);
      })
    );

    reward$.subscribe(data => data);
  }

}
