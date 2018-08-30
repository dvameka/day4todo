import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-day4todo',
  templateUrl: './day4todo.component.html',
  styleUrls: ['./day4todo.component.css']
})
export class Day4todoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  processToDoForm(form: NgForm) {
    const desc = form.value.description;
    console.log(desc);

    const prior = form.value.priority;
    console.log(prior);

    const date = form.value.due;
    console.log(date);
  }
}
