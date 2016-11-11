import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';
@Component({
  selector: 'kk-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private recipeService: RecipeService) { }
  onStore(){
    this.recipeService.storeData().subscribe(
      data => console.log(data), 
      error => console.log(error)
    );
  }

  onFetch(){
  this.recipeService.fetchData();
  }
}
