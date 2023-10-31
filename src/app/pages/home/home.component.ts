import { Component, OnInit } from '@angular/core';
import { projetos } from 'src/app/data/projetos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.component.responsive.css']
})
export class HomeComponent implements OnInit {
   destaque = projetos[0]

   result = projetos

  constructor(
  ) { }

  ngOnInit(): void {


  }


}
