import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from "../shared/ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'https://img1.etsystatic.com/138/0/12108350/il_340x270.1014973995_7a5f.jpg',[
      new Ingredient('French Fries', 2),
      new Ingredient('Potato Chips', 3)
      ]),
    new Recipe('Chole Bhaturey', 'Dummy_2', 'http://media2.intoday.in/aajtak/images/stories/072015/chole_bhature_pakwan_520_070815033739.jpg',[
        new Ingredient('lots of Oil', 2),
        new Ingredient('bhaturey', 3)
      ]),
    new Recipe('Maggi', 'Dummy_3', 'http://images.indianexpress.com/2015/06/maggi.jpg',[
      new Ingredient('Noodles', 2),
      new Ingredient('Magic Maggi Masala', 3)
      ])
  ];
 
  constructor() { }

  getRecipes(){
    return this.recipes;
  }


}
