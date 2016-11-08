import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
@Component({
  selector: 'kk-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'https://img1.etsystatic.com/138/0/12108350/il_340x270.1014973995_7a5f.jpg',[]),
    new Recipe('Chole Bhaturey', 'Dummy_2', 'http://media2.intoday.in/aajtak/images/stories/072015/chole_bhature_pakwan_520_070815033739.jpg',[]),
    new Recipe('Maggi', 'Dummy_3', 'http://images.indianexpress.com/2015/06/maggi.jpg',[])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
