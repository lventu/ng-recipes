import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number = null;
  editedItem: Ingredient = null;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((id: number) => {
      this.editMode = true;
      this.editedItemIndex = id;
      this.editedItem = this.shoppingListService.getIngredient(id);
      this.slForm.setValue({
        'name': this.editedItem.name,
        'amount': this.editedItem.amount
      });
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
  onAddItem() {
    const value = this.slForm.value
    const ingredient = new Ingredient(value.name, value.amount);
    if(!this.editMode){
      this.shoppingListService.addIngredient(ingredient);
    }else{
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingredient);
    }
    this.onResetForm();
  }

  onDeleteItem(id: number){
    this.shoppingListService.deleteIngredient(id);
    this.onResetForm();
  }

  onResetForm(){
    this.editMode = false;
    this.slForm.reset();
  }

}
