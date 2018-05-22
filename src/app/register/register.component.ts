import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from "@angular/forms";
import { Http } from "@angular/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
        id:3,
        distic:"chennai"
      }
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
  constructor(public http:Http) { }

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
    
  }
  formSubmit(){
    // console.log(this.registerForm.getRawValue());
    this.http.post('https://noderegister.herokuapp.com/student',this.registerForm.getRawValue()).subscribe(()=>{
      window.location.href = '/form';
    })
  }


}
