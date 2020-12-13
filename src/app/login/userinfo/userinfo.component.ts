import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor(public authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

}
