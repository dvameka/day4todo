import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-day4tasklist',
  templateUrl: './day4tasklist.component.html',
  styleUrls: ['./day4tasklist.component.css']
})
export class Day4tasklistComponent implements OnInit {
  
    @ViewChild ('TaskForm')
    f:NgForm

  constructor() { }

  ngOnInit() {

  }
processTaskForm(myForm: NgForm) {
  const desc = myForm.value.description;
  console.log(desc);

}
}

