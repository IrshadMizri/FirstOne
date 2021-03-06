import { Component, OnInit } from '@angular/core';

import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import{Router} from '@angular/router';

import{Loginuser} from '../loginuser';
import{AuthService} from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authservice:AuthService, private router:Router, private formbuilder:FormBuilder ) {
    
  }
  loginForm:FormGroup;
  isSubmitted=false;
  loginuser:Loginuser

  ngOnInit() {
    this.loginForm=this.formbuilder.group({
      // email:['',Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],

      password:['',Validators.required]
      // password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]]
             
        });
  }

  // ngOnInit() {
  //   this.registerForm = this.formBuilder.group({
  //     firstName: ['',Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    
  //     lastName: ['', [Validators.required]],
    
  //      email: ['', Validators.compose([Validators.required, Validators.email])],
    
  //     password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
    
  //     confirmPassword: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]]
  //   });
    

  get formControls(){return this.loginForm.controls;}

//   login(){
//     console.log(this.loginForm.value);
//     this.isSubmitted=true;
    

//     
// //     if(this.loginForm.invalid){
// //       return;
// //     }
    
// //     if(this.loginForm.invalid){
// //       return;
// //     }
   

//       if(this.loginForm.invalid){
//           alert('User form is not valid!!')
//           
//           
//     //               this.isSubmitted  =true;
//                        return;
//     //               this.authservice.login(this.loginForm.value);
//     //               this.router.navigateByUrl('/admin');

//          
//         } else {
//     //       alert('User form is valid!!')
//                   this.authservice.login(this.loginForm.value);
//                   this.router.navigateByUrl('/admin');

//           return;
//         }
      
//   }

// }


login(){
  //console.log(this.loginForm.value);
  //console.log(this.loginForm.controls.email.value);
  //console.log(this.loginForm.controls.password.value);
  console.log(this.loginForm.value);
  this.isSubmitted = true;
  if(this.loginForm.invalid){
    //alert('User form is not valid!!')
    return;
  }
  else
  {
    if(this.loginForm.valid){
      //alert('User form is valid!!')
      
      this.authservice.login(this.loginForm.value)
      .subscribe(data => {
            this.loginuser = data;
            console.log(data);
            console.log(data.email);
            
            //Role based authentication
            if(data.email !=null){
              this.isSubmitted  =true;
              this.router.navigateByUrl('/admin');
            }
            else
            {
              window.alert("Please enter valid User credentials!");
            }
        }, (error) => {
            console.log(error);
            window.alert("Wrong username or password");
        }
      );
    } 
  }
 
  
}}
