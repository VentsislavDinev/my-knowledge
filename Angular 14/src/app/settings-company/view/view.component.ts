import { Component, OnInit } from '@angular/core';
import {SettingsTerminalService} from "../settings-terminal.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../interface/user";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements  OnInit{
  getUser: User= {
    id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  };
  constructor(private settingsCompanyService: SettingsTerminalService, private  route: ActivatedRoute) {
  }
    ngOnInit(): void {
        this.route.paramMap.subscribe({
          next: (param) => {
            const id= param.get("id");
            if(id){
              this.settingsCompanyService.getUser(id).subscribe({
                next: (response) => {
                  this.getUser = response;
                }
              });
            }
          }
        })
    }
}
