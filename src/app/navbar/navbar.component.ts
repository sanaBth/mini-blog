import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:User = new User('','','');
  userconnected : User;
  username : String;
  public users : User[] = []
  constructor(private _storageService :StorageService , 
    private router: Router ) { }

  ngOnInit(): void 
  {
    this.userconnected = JSON.parse(localStorage.getItem('userconnected') || '')
    if (this.userconnected)
    {
      this.username = this.userconnected.name
     // console.log(this.username);
    }
    
    }
  logout()
  {
    this._storageService.logout();
    this.router.navigate(['/']);
  }
}
