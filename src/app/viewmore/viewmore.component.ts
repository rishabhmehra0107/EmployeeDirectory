import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewmore',
  templateUrl: './viewmore.component.html',
  styleUrls: ['./viewmore.component.css']
})

export class ViewmoreComponent {
  @Input() public filterData;
  isCollapsed = true;
  show(){
    if(this.filterData.departments.length>2){
      return true;
    }
    return false;
  }
}