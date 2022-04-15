import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-button',
  templateUrl: './signup-button.component.html',
  styleUrls: ['./signup-button.component.scss']
})
export class SignupButtonComponent implements OnInit {

  constructor() { }

  @Input() matIcon?: string;
  @Input() text?: string;

  ngOnInit(): void {
  }

}
