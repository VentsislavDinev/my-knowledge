import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../interface/user";
import {SettingsTerminalService} from "../settings-terminal.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent  implements  OnInit{
  errors = [];
  getUser: User= {
    id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  };
  id: {} = 0;
  validationForm: FormGroup;

  constructor(private settingsCompanyService: SettingsTerminalService, private router: Router, private  route: ActivatedRoute) {
    this.validationForm = new FormGroup({
      firstName: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      lastName: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (param) => {
        const id= param.get("id");
        if(id){
          this.settingsCompanyService.getUser(id).subscribe({
            next: (response) => {
              this.getUser = response;
              this.id = id;
              this.getUser.id = response.id;
            }
          });
        }
      }
    })
  }


  get firstName(): AbstractControl {
    return this.validationForm.get('firstName')!;
  }

  get lastName(): AbstractControl {
    return this.validationForm.get('lastName')!;
  }
  updateEmployee() {
    this.settingsCompanyService.updateUser(this.id, this.getUser).subscribe({
      next: (employee) => {
        this.router.navigate(["list"]);
      },
    });
  }

  deleteEmployee(id: number) {
    this.settingsCompanyService.deleteUser(this.id).subscribe({
      next: () => {
        this.router.navigate(["list"]);
      },
    });
  }

  onSubmit(): void {
    this.validationForm.markAllAsTouched();
  }
}
