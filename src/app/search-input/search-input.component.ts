import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})

export class SearchInputComponent implements OnInit {

  @Input() inputValue: string;
  @Output() inputValueChange = new EventEmitter<string>();

  onValueChange(value: string) {
    this.inputValue = value;
    this.inputValueChange.emit(value);
  }

  clearInput(): void {
    this.inputValue = '';
    this.inputValueChange.emit('');
  }

  constructor() { }

  ngOnInit() {
  }

}
