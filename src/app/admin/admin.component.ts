import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authservice:AuthService, private router:Router) { }

  ngOnInit() {
  }
  public logout(){
    this.authservice.logout();
    this.router.navigateByUrl('/login');
  }

}
