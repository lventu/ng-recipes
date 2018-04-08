import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { query } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  
  ingredients: Ingredient[];
  subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getShoppingList();
    this.subscription = this.shoppingListService.itemAdded.subscribe((list: Ingredient[]) => {
      this.ingredients = list;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onItemClick(id: number) {
    this.shoppingListService.startedEditing.next(id);
  }

}
