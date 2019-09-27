import { NgModule } from '@angular/core';
import { RecipeComponent } from './recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { SharedModule } from '../shared/shared-module';


@NgModule({
    declarations: [
        RecipeComponent,
        RecipeListComponent,
        RecipeDetailsComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        RecipeStartComponent

    ],
    imports:[
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        RecipeRoutingModule 
    ]
})
export class RecipeModule {

}