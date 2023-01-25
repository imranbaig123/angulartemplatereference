import { Component, OnInit } from '@angular/core';
import { Customer } from './customer'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedCustomer: any;

  customers: Customer[] = [
    {customerNo: 1, name: 'mark william', address: '', city: 'London', country:'UK'},
    {customerNo: 2, name: 'williamson', address: '', city: 'New York', country:'USA'},
    {customerNo: 3, name: 'linda roy', address: '', city: 'Berlin', country:'Germany'},
    {customerNo: 4, name: 'jolly guptha', address: '', city: 'Mumbai', country:'India'},
    {customerNo: 5, name: 'jacob maracco', address: '', city: 'New York', country:'USA'}
  ]

}
