import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Record } from '../../models/record/record.model';
import { EmployeeListService } from '../../services/employee-list.service';
import { ToastService } from '../../services/toast.service';

/**
 * Generated class for the EditEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-employee',
  templateUrl: 'edit-employee.html',
})
export class EditEmployeePage {

  record: Record;

  constructor(public navCtrl: NavController, public navParams: NavParams, private employee: EmployeeListService, private toast: ToastService) {
  }

  ionViewWillLoad() {
   this.record = this.navParams.get("record");
   console.log(this.record);
  }

  saveRecord(record: Record){
    this.employee.editRecord(record)
    .then(()=> {
      this.toast.show('Record saved!')
      this.navCtrl.setRoot('HomePage');
    })
  }

  removeRecord(record: Record){
    this.employee.removeRecord(record)
      .then(() => {
        this.toast.show('Record deleted!')
        this.navCtrl.setRoot('HomePage');
      })
  }
}
