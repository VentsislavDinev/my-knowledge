import { Component } from '@angular/core';
import { User } from 'src/app/interface/user';

import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import {Address} from "../../interface/address";
import {SettingsTerminalService} from "../settings-terminal.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  errors = [];
  validationForm: FormGroup;
  addUserRequest: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''

  };

  constructor(private settingsTerminalService: SettingsTerminalService, private router: Router) {
    this.validationForm = new FormGroup({
      firstName: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      lastName: new FormControl(null, { validators:  Validators.required, updateOn: 'submit' }),
    });
  }

  get firstName(): AbstractControl {
    return this.validationForm.get('firstName')!;
  }

  get lastName(): AbstractControl {
    return this.validationForm.get('lastName')!;
  }
  addEmployee() {
    this.settingsTerminalService.postUser(this.addUserRequest).subscribe({
      next: (employee) => {
        //this.router.navigate("/list");
      },
    });
  }
  onSubmit(): void {
    this.validationForm.markAllAsTouched();
  }
}
