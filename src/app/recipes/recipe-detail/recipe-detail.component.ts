import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  id: number;
  recipe: Recipe;

  constructor(private recipeService: RecipeService, 
              private currentRoute: ActivatedRoute,
              private router: Router) {
    
  }

  ngOnInit() {
    this.currentRoute.params.subscribe(params => {
      this.id = + params['id']
      this.recipe = this.recipeService.getRecipe(params['id']);
    });
  }

  toShoppingList() {
    this.recipeService.buyIngredient(this.recipe);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.currentRoute});
  }

}
