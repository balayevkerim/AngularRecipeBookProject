import { RecipeModel } from '../models/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingModel } from '../models/shoppingList.model';
import { ShoppingService } from './shopping.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService{


    /**
     *
     */
    constructor(private slService: ShoppingService) {
        
        
    }
    recipeSelected = new Subject<RecipeModel>();
    recipesChanged = new Subject<RecipeModel[]>();
    private recipes: RecipeModel[] = [
        {
          name:"Burger", 
          description: "Nice doubled  cheesed burger", 
          imagePath:"https://images.ctfassets.net/qu53tdnhexvd/41SB9j1fIWvJnc3OOGRodA/e55a8b1f9714ad5c4515940fc8327f70/Recipe-780x520-Dinner.jpg?fm=jpg&fl=progressive&q=60",
          ingredient: [
              new ShoppingModel('apple',2),
              new ShoppingModel('banana',5),
          ]
        },
        {
          name:"Piza", 
          description: "Nice doubled  cheesed burger", 
          imagePath:"https://images.ctfassets.net/qu53tdnhexvd/41SB9j1fIWvJnc3OOGRodA/e55a8b1f9714ad5c4515940fc8327f70/Recipe-780x520-Dinner.jpg?fm=jpg&fl=progressive&q=60",
          ingredient: [
            new ShoppingModel('apple',2),
            new ShoppingModel('banana',5),
        ]
        
        }
      ];


      setRecipes(recipes){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes);
      }
      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(index: number){
        return this.recipes[index];
      }

      addToShoppingList(ingredients: ShoppingModel[]){
          this.slService.addIngredients(ingredients);
      }

      addRecipe(newRecipe: RecipeModel){
        this.recipes.push(newRecipe);
        this.recipesChanged.next(this.recipes)
      }

      updateRecipe(index: number, newRecipe){
        this.recipes[index] =  newRecipe;
        this.recipesChanged.next(this.recipes)
      }

      deleteRecipe(id: number){
        this.recipes.splice(id, 1);
        this.recipesChanged.next(this.recipes)
      }

}