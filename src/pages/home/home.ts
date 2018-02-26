import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { EmployeeListService } from '../../services/employee-list.service';
import { Observable } from 'rxjs/Observable';
import { Record } from '../../models/record/record.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  employeeList$: Observable<Record[]>;
  constructor(public navCtrl: NavController, private e: EmployeeListService) {
    this.employeeList$ = this.e
    .getEmployeeList() //DB List
    .snapshotChanges() //Key and Value
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }));
      }
    );
  }
}
