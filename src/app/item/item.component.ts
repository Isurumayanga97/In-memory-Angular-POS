import { Component, OnInit } from '@angular/core';
import {Item} from './item';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: Item[] = [];
  constructor() { }

  ngOnInit() {
  }

  addItem(code: string, itemname: string, itembrand: string, itemqty: string, itemprice: string): void {
    const item = new Item(code, itemname, itembrand, itemqty, itemprice);
    this.items.push(item);
  }

  removeItem(item: Item): void {
    if (confirm('Are you sure delete this?')) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  }

}
