import { Recipe } from '../shared/recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  
  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe('recipe 1',
    'A simple fake test recipe 1',
    'http://www.foodtolove.com.au/assets/images/badge-collection.png',
  [new Ingredient('patate', 20), new Ingredient('carote', 4)]),
    new Recipe('recipe 2',
    'B simple fake test recipe 2',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [new Ingredient('sale', 20), new Ingredient('spezie', 4)])
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();  // unmodifiable
  }

  getRecipe(idx: number): Recipe {
    return this.recipes.slice()[idx];  // unmodifiable
  }

  buyIngredient(recipe: Recipe) {
    this.shoppingListService.addIngredients(recipe.ingredients);
  }

}
