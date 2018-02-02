import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../models/customer';
 
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  @Input("instanceCode") instanceCode : string;
  @Input('master') masterName: string;
  
  constructor() { 
    // this.customersList.push(<Customer>{ name:"John", email: "john@abc.com"});
    // this.customersList.push(<Customer>{ name:"Jane", email: "jane@abc.com"});
    this.customersList = [
      { name:"John", email: "john@abc.com"},
      { name:"Jane", email: "jane@abc.com"}
    ]
  }

  ngOnInit() {
  }

  customersList : Customer[]

  getCustomerCount() : number {
    let numberOfCustomers : number = 0;
    if(this.customersList){
      return this.customersList.length;
    }
    return numberOfCustomers;
  }

}
