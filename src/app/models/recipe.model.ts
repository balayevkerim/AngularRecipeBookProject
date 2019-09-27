import { ShoppingModel } from './shoppingList.model';

export class RecipeModel{
    /**
     *
     */
    constructor(public name: string, public description: string, public imagePath:string, public ingredient?: ShoppingModel[]) {
        
        
    }
}