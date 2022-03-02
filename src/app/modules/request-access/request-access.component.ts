import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.scss']
})
export class RequestAccessComponent implements OnInit {

  userType: string;
  constructor() { }

  ngOnInit(): void {
  }

}
