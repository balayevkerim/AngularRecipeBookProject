import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  active: boolean = false;
   recipe: RecipeModel;
   id: number
  constructor(private recipeService: RecipeService, 
    private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id)
      }
    )
  }

  addToShoppingList(){
    this.recipeService.addToShoppingList(this.recipe.ingredient);
  }

  onEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }

  onDeleteRecipe(id: number){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'])
  }

}
