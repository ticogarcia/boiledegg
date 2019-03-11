import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input('group') group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
