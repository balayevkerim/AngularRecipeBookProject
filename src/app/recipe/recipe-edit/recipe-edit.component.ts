import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) { }

    
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.editMode = params['id'] != null;
        this.id = +params['id'];
        this.initForm();


      }
    )
    
  }

  private initForm() {
    let recipeName = '';
    let description = '';
    let imagePath = '';
    let ingredients = new FormArray([])

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      description = recipe.description;
      imagePath = recipe.imagePath;
      if(recipe['ingredient']){
        for(let ingredient of recipe.ingredient){
          ingredients.push(new FormGroup({
            'ingredientName': new FormControl(ingredient.ingredientName),
            'amount': new FormControl(ingredient.amount)
          }))
        }
      }

    }
    this.recipeForm = new FormGroup({
      'recipeName': new FormControl(recipeName),
      'description': new FormControl(description),
      'imagePath': new FormControl(imagePath),
      'ingredients': ingredients
      
    })
  }

  onSubmitForm() {
    const recipe = {
      name: this.recipeForm.get('recipeName').value,
      description: this.recipeForm.get('description').value,
      imagePath: this.recipeForm.get('imagePath').value,
      ingredient: this.recipeForm.get('ingredients').value
    }
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, recipe);
      console.log(this.recipeService.getRecipes())
      this.cancelForm()
    } else {
      this.recipeService.addRecipe(recipe)
      this.cancelForm();
    }
  }

  cancelForm() {
    this.router.navigate(['/recipes'])
  }

  onAddIngredient(){
   (<FormArray> this.recipeForm.get('ingredients')).push(new FormGroup({
     'ingredientName': new FormControl(),
     'amount': new FormControl()
   }))
  }

  onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }
}
