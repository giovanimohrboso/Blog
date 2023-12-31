import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projetos } from 'src/app/data/projetos';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string=""
  contentTitle:string=""
  contentDescription:string=""
  link:string=""
  linguagemProjeto:string=""
  private id:string | null="0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = (value.get("id"))
    )
    this.setValuesComponent(this.id)
  }

  setValuesComponent(id:string| null):void{
    const result = projetos.filter(article => article.id.toString() == id)[0]

      this.contentTitle = result.title
      this.photoCover = result.photoCover
      this.contentDescription = result.description
      this.link = result.link
      this.linguagemProjeto = result.linguagemProjeto
  }


}
