import {Component, OnInit} from '@angular/core';
import {Customer} from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  addCustomer(cid: string, cname: string, caddress: string, csalary: string): void {
    const customer = new Customer(cid, cname, caddress, csalary);
    this.customers.push(customer);
  }

  removeCustomer(customer: Customer): void {
    if (confirm('Are you sure delete this?')) {
      this.customers.splice(this.customers.indexOf(customer), 1);
    }
  }
}
