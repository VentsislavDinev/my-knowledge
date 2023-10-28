import { Component } from '@angular/core';
import { User } from 'src/app/interface/user';

import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import {Address} from "../../interface/address";
import {SettingsTerminalService} from "../settings-terminal.service";
import {Router} from "@angular/router";
import {HttpEventType} from "@angular/common/http";

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

  fileStatus = {status: '', percent: 0};
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

  fileUpload(files: File[]) {
    const formData = new FormData();
    for (const file of files) {
      formData.append('files', file, file.name)
    }

    this.settingsTerminalService.uploadFile(formData).subscribe(

      (event) => {
          switch (event.type) {
            case HttpEventType.DownloadProgress || HttpEventType.UploadProgress:
              this.fileStatus.percent = Math.round(100* event.loaded / event.type);
              this.fileStatus.status = 'progress';
              break;
            case HttpEventType.Response:
              if (event.status === 200){
                this.fileStatus.percent = 0;
                this.fileStatus.status = 'done';
                break;
              }
                break;
          }
      },
    );
  }
  onSubmit(): void {
    this.validationForm.markAllAsTouched();
  }
}
