import {Injectable} from "@angular/core";
import {PageMachine} from "../page.machine";
import {Resolve} from "@angular/router";
import {waitFor} from "xstate/lib/waitFor";

@Injectable({providedIn: 'root'})
export class FirstPageResolver implements Resolve<PageMachine>{
  constructor(private machine: PageMachine){
  }

  async resolve(): Promise<PageMachine> {
    this.machine.service.send({type: 'load'});
    await waitFor(this.machine.service, state => state.matches('idle'))
    return this.machine;
  }

}
