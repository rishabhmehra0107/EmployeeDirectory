import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() public filterData;
  @Output() filterEmployees:EventEmitter<any>= new EventEmitter()
  constructor() {}
sendFilterValue(selectedFilter){
  this.filterEmployees.emit(selectedFilter);
}

  ngOnInit(): void {
  }
}
