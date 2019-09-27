import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RecipeModel } from '../models/recipe.model';
import { RecipeService } from './recipe.service';
import { map } from 'rxjs/operators'
import { AuthService } from './auth.service';

@Injectable()
export class ServerService {

    fetchedRecipes = new Subject<RecipeModel[]>();
    /**
     *
     */
    constructor(private http: HttpClient, private recipeService: RecipeService,private authService: AuthService) {

    }

    fetchRecipes() {
        const token = this.authService.getToken();
        return this.http.get('https://testhttp-d92e6.firebaseio.com/recipes.json?auth='+token).pipe(map(
            (recipes) => {
                this.recipeService.setRecipes(recipes);
            }
        )
        )

    }

    saveRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://testhttp-d92e6.firebaseio.com/recipes.json?auth='+token, this.recipeService.getRecipes());
    }


}