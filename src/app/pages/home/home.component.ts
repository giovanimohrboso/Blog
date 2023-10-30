import { Component, OnInit } from '@angular/core';
import { datafake } from 'src/app/data/datafake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.component.responsive.css']
})
export class HomeComponent implements OnInit {
   destaque = datafake[0]

   result = datafake

  constructor(
  ) { }

  ngOnInit(): void {


  }


}
