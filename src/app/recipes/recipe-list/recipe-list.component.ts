import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Recipe One','Description about this recipe one','https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_1280.jpg'),
    new Recipe ('Recipe Two','Description about this recipe two','https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_1280.jpg'),
    new Recipe ('Recipe Three','Description about this recipe three','https://cdn.pixabay.com/photo/2016/03/23/15/20/vegetables-1274953_1280.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
