import {Component} from "@angular/core";
import {PageMachine} from "../page.machine";
import {map} from "rxjs/operators";

@Component({
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent {
  users$ = this.machine.context$.pipe(map(ctx => ctx.users));
  loading$ = this.machine.state$.pipe(map(s => s.matches('loading')));

  constructor(private machine: PageMachine){
    this.machine.service.send({type: 'load'});
  }
}
