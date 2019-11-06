import { Component, OnInit } from '@angular/core';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { CustomerService } from "../shared/customer.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchText: any = '';

  constructor() { }

  ngOnInit() {
    console.log(CustomerListComponent);
  }

   filterCondition(customer) {
    return customer.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

  
  
  

}
