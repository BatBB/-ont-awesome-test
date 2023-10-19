import { Component, OnDestroy } from '@angular/core';
import { RandomIconService } from '../random-icon.service';
import {
  Observable,
  Subject,
  delay,
  interval,
  switchMap,
  takeUntil,
  timer,
} from 'rxjs';
import { IconDefinition, IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-random-awesome-font',
  templateUrl: './random-awesome-font.component.html',
  styleUrls: ['./random-awesome-font.component.scss'],
})
export class RandomAwesomeFontComponent implements OnDestroy {
  public icon: IconDefinition | null = null;

  private delayTime = 0;

  private destroy$ = new Subject<void>();

  constructor(private randomIconService: RandomIconService) {}

  public click() {
    this.randomIconService
      .getRandomIcon()
      .pipe(delay(this.delayTime), takeUntil(this.destroy$))
      .subscribe((icon: IconDefinition) => {
        this.icon = icon;
      });
    if (!this.delayTime) this.delayTime = 3000;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
