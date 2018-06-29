import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NightModeService {

  private nightModeSub: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }


  toggleNightMode () {
    this.nightModeSub.next(!this.nightModeSub.value);
  }

  get nightMode() {
    return this.nightModeSub.asObservable();
  }
}
