import { ShoppingModel } from '../models/shoppingList.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingService{
    editedIngredient= new Subject<number>();
    slChanged =  new EventEmitter<ShoppingModel[]>();
    private shoppingList: ShoppingModel[] = [
        {ingredientName:"Apple", amount: 2},
        {ingredientName:"Banana", amount: 4}
      ]

      getList(){
          return this.shoppingList.slice();
      }

      addIngredient(ingredient){
        this.shoppingList.push(ingredient);
        this.slChanged.emit(this.shoppingList)
      }

      addIngredients(ingredients: ShoppingModel[]){
            for (let index = 0; index < ingredients.length; index++) {
                this.addIngredient(ingredients[index]) ;
            }
      }

      getIngredientIndex(index: number){
        this.editedIngredient.next(index);
      }

      getIngredient(index:number){
        return this.shoppingList[index]
      }

      deleteIngredient(index:number){
        this.shoppingList.splice(index,1);
        this.slChanged.next(this.shoppingList)
      }

      updateIngredient(index: number, ingredient:{ingredientName: string, amount: number}){
        this.shoppingList[index] = {
          ingredientName: ingredient.ingredientName,
          amount: ingredient.amount
        }
        this.slChanged.next(this.shoppingList);
      }
}