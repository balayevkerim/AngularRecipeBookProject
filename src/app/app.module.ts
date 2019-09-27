import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeModule } from './recipe/recipe.module';
import { ShoppingModule } from './shopping-list/shopping-module';
import { AuthModule } from './auth/auth-module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RecipeModule,
    ShoppingModule,
    AuthModule,
    CoreModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
