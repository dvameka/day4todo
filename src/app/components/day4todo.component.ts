import { Component, OnInit } from '@angular/core';
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
  }
}
