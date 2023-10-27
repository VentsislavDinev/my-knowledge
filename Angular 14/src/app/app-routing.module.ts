import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./settings-company/list/list.component";
import {CreateComponent} from "./settings-company/create/create.component";
import {ViewComponent} from "./settings-company/view/view.component";
import {UpdateComponent} from "./settings-company/update/update.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  { path: 'list',  component:  ListComponent },
  { path: 'create',  component:  CreateComponent },
  { path: 'update',  component:  UpdateComponent },
  { path: 'view/:id',  component:  ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
