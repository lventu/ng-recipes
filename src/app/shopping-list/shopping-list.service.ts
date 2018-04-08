import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  itemAdded: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  startedEditing: Subject<number> = new Subject<number>();

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

  updateIngredient(id: number, ingredient: Ingredient){
    this.ingredients[id] = ingredient;
    this.itemAdded.next(this.getShoppingList());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.itemAdded.next(this.getShoppingList());
  }

  getIngredient(id: number){
    return this.ingredients[id];
  }

  deleteIngredient(id: number){
    this.ingredients.splice(id, 1);
    this.itemAdded.next(this.getShoppingList());
  }

}
