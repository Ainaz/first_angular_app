import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NightModeService } from './night-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  nightModeSwitch: boolean;

  @ViewChild('block')
  nameParagraph: ElementRef;

  constructor(
    private nightModeService: NightModeService
  ) { }

  ngOnInit() {
    this.nightModeService.nightMode.subscribe(val => {
      this.nameParagraph.nativeElement.className = val ? 'nightMode' : 'whiteMode';
    });
  }
}
