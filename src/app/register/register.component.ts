import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private _storageService : StorageService, 
    private router: Router) { }
userForm:FormGroup;
  currentUser : User = new User('','','');
  ngOnInit(): void {
    this.userForm = new FormGroup
    ({
      fname : new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      pwd: new FormControl('',Validators.required),
    })
  }
  public saveUser()
  { 
    this.currentUser.name = this.userForm.controls.fname.value
    this.currentUser.email = this.userForm.controls.email.value
    this.currentUser.password = this.userForm.controls.pwd.value
   console.log(this.currentUser);
   this._storageService.register(this.currentUser)
    this.router.navigate(['/'])
  }
}
