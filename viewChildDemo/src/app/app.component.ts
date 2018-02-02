import { Component, ViewChild } from '@angular/core';
import { CustomersComponent } from './customers/customers.component';
import { Customer } from './models/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the parent component';

  @ViewChild(CustomersComponent) customerComponentReference: CustomersComponent;
  @ViewChild("appCustomers") customerComponentReferenceAsVar : CustomersComponent;

  customersWithModifiedNames: Customer[] = [];


  getItemsInChildComponent(): number {
    let numOfItems: number = 0;
    if (this.customerComponentReference) {
      numOfItems = this.customerComponentReference.getCustomerCount();
    }
    return numOfItems;
  }
  
    getModifiedCustomerNamesList() : Customer[] {

      let newCustomerList =
        this.customerComponentReferenceAsVar.customersList.map(c => {
          let originalCustomerName = c.name;
          let customerWithModifiedName = <Customer>{
            name: c.name.concat(" modified"),
            email: c.email
          };
          return customerWithModifiedName;
        });

        return newCustomerList;

  }
}

