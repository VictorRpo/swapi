import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people/people.service'

@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Array<any>

  constructor(public peopleService: PeopleService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    this.peopleService.getAll().subscribe(data => {
      console.log(data);
      this.people = data
    });
  }

}
