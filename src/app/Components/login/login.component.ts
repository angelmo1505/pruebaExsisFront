import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;

  constructor(
    public authService: AuthServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['home']);
    console.log(this.email);
    console.log(this.password);
    
    this.authService.login(this.email, this.password).subscribe( 
      data => {
        console.log(data);
        // localStorage.setItem('auth_token', data['token']);
      }
    );
  }


}
