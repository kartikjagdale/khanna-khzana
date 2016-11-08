import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
@Component({
  selector: 'kk-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeId: number;
  constructor() { }

  ngOnInit() {
  }

}
