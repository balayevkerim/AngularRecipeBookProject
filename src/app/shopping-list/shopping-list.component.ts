import { Component, OnInit } from '@angular/core';
import { ShoppingModel } from '../models/shoppingList.model';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[]
})
export class ShoppingListComponent implements OnInit {

  shoppingList: ShoppingModel[];
  constructor(private slService: ShoppingService) { }

  ngOnInit() {
    this.shoppingList =  this.slService.getList();
    this.slService.slChanged.subscribe(
      (ingredient: ShoppingModel[])=>{
        this.shoppingList =  ingredient

      }
    )
  }

  onEdit(index:number){
      this.slService.getIngredientIndex(index);
  }
}
