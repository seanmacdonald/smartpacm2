import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  fullImagePath: string;

  constructor(private router:Router) {
    this.fullImagePath = '/assets/images/backpack.png';
   }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault(); 
    var username = e.target.elements[0].value; 
    var password = e.target.elements[1].value; 

    if(username == "sean" && password == "macdonald"){
      this.router.navigate(['map']);
    }
    else{
      window.alert("Incorrect User Name or Password. Please Try Again.");
      var passButton = <HTMLInputElement>document.getElementById('pass-button');
      passButton.value = ""; 
    }
  }

}
