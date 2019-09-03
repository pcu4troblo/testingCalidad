import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form:FormGroup;
  mensaje:Boolean = false;
  email:string = '';
  pass:string = '';

  constructor(private fb:FormBuilder, private router : Router) { }

  ngOnInit() {

    this.form=this.fb.group({
      email:[null,[Validators.required]],
      pass:[null,Validators.required]
    })

  }

  login(){

    if(this.form.invalid)
      this.mensaje = true; 

    else if(this.form.valid){
      this.mensaje = false;   
      this.email = this.form.controls['email'].value;
      this.pass = this.form.controls['pass'].value;
      this.router.navigate(['/logueado/'+this.email]);
    }
  }

}
