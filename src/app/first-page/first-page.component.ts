import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {PageMachine} from "../page.machine";

@Component({
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {
  public machine: PageMachine;
  displayedColumns: string[] = ['name', 'email', 'phone', 'company'];

  constructor(private route: ActivatedRoute){
    this.machine = route.snapshot.data['machine'];
  }
}
