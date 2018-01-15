import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  itemAdded: EventEmitter<Ingredient[]> = new EventEmitter();

  private ingredients: Ingredient[] = [
    new Ingredient('mele', 1),
    new Ingredient('pomodori', 5)
  ];

  getShoppingList() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.addIngredients([ingredient]);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.itemAdded.emit(this.getShoppingList());
  }

}
