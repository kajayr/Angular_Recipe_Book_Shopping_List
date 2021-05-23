import { Ingredient } from './../shared/Ingredients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[] = [
  new Ingredient("Macaronni", 3),
  new Ingredient("Salt", 4),
  new Ingredient("Oil", 2),
  new Ingredient("Tomato", 2)
];
  constructor() {

   }

  ngOnInit(): void {
  }

}
