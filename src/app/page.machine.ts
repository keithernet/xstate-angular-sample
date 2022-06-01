import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {assign, interpret, StateFrom} from "xstate";
import {machine} from "./page.machine-def";
import {delay, firstValueFrom, from} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class PageMachine{
  service = interpret(machine.withConfig( {
    actions: {
      clearUserData: assign({users: (ctx, evt) => []}),
      assignUserData: assign({users: (ctx, evt) => evt.data})
    }, services: {
      getData: () => this.getData()
    }
  }), {devTools: true}).start();

  state$ = from(this.service);

  context$ = this.state$.pipe(map(s => s.context));

  constructor(private http: HttpClient){
  }

  getData() {
    return firstValueFrom(this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(delay(1000)));
  }
}
