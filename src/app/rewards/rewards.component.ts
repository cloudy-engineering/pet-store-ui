import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { map } from 'rxjs/operators';
import { Reward } from '../_model';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {

  rewards: Reward[];

  constructor(private store: StoreService) { }

  ngOnInit(): void {
    const reward$ = this.store.getRewards().pipe( 
      map(results => {
        this.rewards = results;
      })
    );

    reward$.subscribe(data => data);
  }

}
