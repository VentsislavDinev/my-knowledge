import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbValidationModule} from "mdb-angular-ui-kit/validation";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    ListComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    MdbFormsModule,
    MdbValidationModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ]
})
export class SettingsCompanyModule { }
