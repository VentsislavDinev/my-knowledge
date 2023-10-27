import { Component, OnInit } from '@angular/core';
import {User } from '../../interface/user'
import {SettingsTerminalService} from "../settings-terminal.service";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements  OnInit {
     employees: User[] = [];

     constructor(private settingsCompanyService: SettingsTerminalService) {
     }

     ngOnInit(): void {
       console.log("Hllo");
       this.settingsCompanyService.getUsers().subscribe({
         next: (response) => {
           this.employees = response;
         }
       });
     }
}
