import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
@Component({
  selector: 'kk-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
