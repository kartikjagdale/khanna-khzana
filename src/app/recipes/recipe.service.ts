import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Recipe } from './recipe';
import { Ingredient } from "../shared/ingredient";
import 'rxjs/Rx';

@Injectable()
export class RecipeService {

  recipesChanged = new EventEmitter<Recipe[]>()

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
 
  constructor(private http: Http) { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }


  deleteRecipe(recipe: Recipe){
    return this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  addRecipe(recipe: Recipe){
     this.recipes.push(recipe);
   }

   storeData(){
     const body = JSON.stringify(this.recipes);
     const headers = new Headers({
       'Content-Type': 'application/json'
     });

     return this.http.put('https://khannakhzana.firebaseio.com/recipes.json', body, {headers: headers});
   }

   fetchData(){
    return this.http.get('https://khannakhzana.firebaseio.com/recipes.json')
                    .map(
                      (response: Response) => response.json())
                    .subscribe(
                      (data: Recipe[])=> {
                        this.recipes = data;
                        this.recipesChanged.emit(this.recipes);
                      }
                    );
   }


}
