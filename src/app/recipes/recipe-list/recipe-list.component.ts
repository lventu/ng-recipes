import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('recipe 1', 'A simple fake test recipe 1', 'http://www.foodtolove.com.au/assets/images/badge-collection.png'),
    new Recipe('recipe 2', 'B simple fake test recipe 2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('recipe 3', 'C simple fake test recipe 3', 'http://www.foodtolove.com.au/assets/images/badge-collection.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
