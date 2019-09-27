import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit , OnDestroy{
  
  recipes: RecipeModel[];
  recipeSubsription: Subscription;
  constructor(private recipeService:RecipeService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes =  this.recipeService.getRecipes();
    this.recipeSubsription = this.recipeService.recipesChanged.subscribe(
      (recipes:RecipeModel[]) =>{
        this.recipes = recipes;
      }
    )
  }
  addNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
  

  ngOnDestroy(){
    this.recipeSubsription.unsubscribe();
  }

}
