import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import {  } from "module";

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
registeredData;
  constructor(public http:Http) { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.http.get('https://noderegister.herokuapp.com/student').subscribe((data)=>{
      this.registeredData=data.json();
    })
  }

  deleteRecord(id){
    if(confirm("Are You Sure Want TO delete")){
      this.http.delete('https://noderegister.herokuapp.com/student/'+id).toPromise().then((data)=>{
        this.loadData();
      })
    }
  }
}
