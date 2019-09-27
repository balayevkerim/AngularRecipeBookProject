import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../services/authguard.service';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const recipeRoutes: Routes =[
    {path: '', component: RecipeComponent, children:[
        {path: '', component: RecipeStartComponent},
        {path:'new', component: RecipeEditComponent, canActivate:[AuthGuard]},
        {path: ':id', component: RecipeDetailsComponent},
        {path: ':id/edit', component: RecipeEditComponent}
      ]},
]
@NgModule({
    imports:[RouterModule.forChild(recipeRoutes)],
    exports:[RouterModule]

})
export class RecipeRoutingModule{}