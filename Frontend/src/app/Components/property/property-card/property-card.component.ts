import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  Property: any = {
    "Id":  1, 
    "Type": "House", 
    "Price": 12000, 
    "Name": "Emmanuel's House"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
