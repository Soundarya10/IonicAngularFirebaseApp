import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Record } from "./../models/record/record.model";


@Injectable()
export class EmployeeListService{

    private employeeListRef = this.db.list<Record>('employee-list');

    constructor(private db: AngularFireDatabase){
    }

    getEmployeeList(){
        return this.employeeListRef; 
    }

    addRecord(record: Record){
        return this.employeeListRef.push(record);
    }

    editRecord(record: Record){
        return this.employeeListRef.update(record.key,record);
    }
    removeRecord(record: Record){
        return this.employeeListRef.remove(record.key);
    }
}