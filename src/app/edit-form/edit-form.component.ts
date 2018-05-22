import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http } from "@angular/http";
import { FormGroup,FormControl,Validator, Validators } from "@angular/forms";


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {


  registerForm:FormGroup;
states=[
  {
    id:1,
    name:"Tamilnadu",
    code:"tn",
    distic:[
      {
        id:1,
        distic:"salem"
      },
      {
        id:2,
        distic:"namakkal"
      },
      {
        id:3,
        distic:"erode"
      },
      {
        id:4,
        distic:"chennai"
      },
    ]
  },
  {
    id:2,
    name:"Kerala",
    code:"kl",
    distic:[
      {
        id:1,
        distic:"cochin"
      },
      {
        id:2,
        distic:"Idukki"
      },
      {
        id:3,
        distic:"Munnar"
      }
    ]
  },
  {
    id:3,
    name:"Karnataka",
    code:"ka",
    distic:[
      {
        id:1,
        distic:"Bangalore"
      }
    ]
  }
]
distics=[]


  constructor(public activeroute:ActivatedRoute,public http:Http) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      "name":new FormControl('',[Validators.required]),
      "mobile":new FormControl('',[Validators.required]),
      "adress":new FormControl('',[Validators.required]),
      "total":new FormControl('',[Validators.required]),
      "gender":new FormControl('',[Validators.required]),
      "department":new FormControl('',[Validators.required]),
      "state":new FormControl('',[Validators.required]),
    });
  this.registerForm.get('state').valueChanges.subscribe((value)=>{
    this.states.forEach(state => {
      if(state.code==value){
        // console.log(state.distic);
        this.distics=state.distic;
      }
    });
    // console.log(this.distics);
  })

  // get data value
    this.http.get('https://noderegister.herokuapp.com/student/'+this.activeroute.snapshot.params.id).subscribe((data)=>{
      this.registerForm.setValue({
        "name":data.json().name,
        "mobile":data.json().mobile,
        "adress":data.json().adress,
        "state":data.json().state,
        "gender":data.json().gender,
        "department":data.json().department,
        "total":data.json().total,
      });
    })
  }


  updateForm(){
    // console.log(this.registerForm.getRawValue());
    this.http.put('https://noderegister.herokuapp.com/student/'+this.activeroute.snapshot.params.id,this.registerForm.getRawValue()).subscribe(()=>{
      window.location.href = '/form';
    })
  }

}
