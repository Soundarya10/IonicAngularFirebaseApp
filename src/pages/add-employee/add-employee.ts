import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Record } from '../../models/record/record.model';
import { EmployeeListService } from '../../services/employee-list.service';
import { ToastService } from '../../services/toast.service';

/**
 * Generated class for the AddEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-employee',
  templateUrl: 'add-employee.html',
})
export class AddEmployeePage {

	record: Record = {
		name: '',
		company: '',
		designation: '',
	};

  constructor(public navCtrl: NavController, public navParams: NavParams, private employee: EmployeeListService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEmployeePage');
  }

  addRecord(record: Record){
    this.employee.addRecord(record).then(ref => {
      this.toast.show('record added!')
      this.navCtrl.setRoot('HomePage',{key : ref.key})
    });
  // console.log("hello");
  }
}
