import { Injectable } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomIconService {
  getRandomIcon(): Observable<IconDefinition> {
    const iconsArray = Object.values(solidIcons).filter(
      (item) => typeof item !== 'string' && (item as IconDefinition).icon
    ) as IconDefinition[];

    const randomIndex = Math.floor(Math.random() * iconsArray.length);

    const randomIcon: IconDefinition = iconsArray[randomIndex];
    return of(randomIcon);
  }
}
