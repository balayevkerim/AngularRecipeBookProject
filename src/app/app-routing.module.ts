import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path: '', component:HomeComponent},
  {path: 'recipes', loadChildren: ()=> import ( './recipe/recipe.module').then(m=>m.RecipeModule) },
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path:'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
