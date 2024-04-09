import {Component, OnInit} from '@angular/core';
import {deleteOutputDir} from "@angular-devkit/build-angular/src/utils";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public products : any;
  public keyword:string="";

  constructor() {
  }
  ngOnInit() {
    this.products=[
      {"id": 1, "name": "computer", "price": 4300},
      {"id": 2, "name": "telephone", "price": 8000},
      {"id": 3, "name": "tv", "price": 3100},
      {"id": 4, "name": "mouse", "price": 400}
    ]
  }

  deleteProduct(p:any) {
    let  index = this.products.indexOf(p);
    this.products.splice(index,1);
  }

  // protected readonly deleteOutputDir = deleteOutputDir;

  search() {
  console.log(this.keyword);
    let result =[];
    for (let p of this.products){
      if (p.name.includes(this.keyword)){
        result.push(p);
      }
    }
    this.products=result;
  }
}

