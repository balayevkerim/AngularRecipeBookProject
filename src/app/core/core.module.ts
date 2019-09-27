import { NgModule } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../shared/shared-module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ShoppingService } from '../services/shopping.service';
import { RecipeService } from '../services/recipe.service';
import { ServerService } from '../services/server.service';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../services/authguard.service';


@NgModule({
    declarations:[
        HeaderComponent,
        HomeComponent
    ],
    imports:[
        CommonModule,
        AppRoutingModule,
        SharedModule,
    ],
    exports:[
        SharedModule,
        HeaderComponent
    ],
    providers:[ShoppingService, RecipeService, ServerService, AuthService, AuthGuard]
})
export class CoreModule{}