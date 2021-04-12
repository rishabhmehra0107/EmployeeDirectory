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
  filter=true;
  constructor() {}

sendFilterValue(selectedFilter){
  this.filterEmployees.emit(selectedFilter);
}

noFilter(){
  if(this.filterData.departments){
    if(this.filterData.departments.length>0){
      this.filter=false;
      return false;
    }
    return true;
  }
}

  ngOnInit(): void {
  }
}
