import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstPageComponent} from "./first-page/first-page.component";
import {SecondPageComponent} from "./second-page/second-page.component";
import {waitFor} from "xstate/lib/waitFor";
import {PageMachine} from "./page.machine";
import {FirstPageResolver} from "./first-page/first-page.resolver";

const routes: Routes = [{
  path: 'first',
  component: FirstPageComponent,
  resolve: {machine: FirstPageResolver},
}, {
  path: 'second',
  component: SecondPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
