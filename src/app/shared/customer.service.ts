
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private firebase: AngularFireDatabase) { }
  customerList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    zip: new FormControl('',[Validators.required, Validators.minLength(4)]), 
    city: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  getCustomers() {
    this.customerList = this.firebase.list('customers');
    return this.customerList.snapshotChanges();
  }

  insertCustomer(customer) {
    this.customerList.push({
      fullName: customer.fullName,
      address: customer.address,
      zip: customer.zip,
      city: customer.city,
      email: customer.email,
      mobile: customer.mobile
    });
  }
  populateForm(customer) {
    this.form.setValue(customer);
  }
  updateCustomer(customer) {
    this.customerList.update(customer.$key, {
      fullName: customer.fullName,
      address: customer.address,
      zip: customer.zip,
      city: customer.city,
      email: customer.email,
      mobile: customer.mobile
    });
  }

  deleteCustomer($key: string) {
    this.customerList.remove($key);
  }
}