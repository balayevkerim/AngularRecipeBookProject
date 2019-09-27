import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { ShoppingModel } from 'src/app/models/shoppingList.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
  providers:[]
})
export class ShoppingListEditComponent implements OnInit {


  @ViewChild('f') myForm: NgForm;
  editedIndex: number;
  editMode: boolean = false;
  editedIngredient: ShoppingModel
  constructor(private slService: ShoppingService) { }

  ngOnInit() {
    this.slService.editedIngredient.subscribe(
      (index: number) =>{
        this.editedIndex = index;
        this.editedIngredient = this.slService.getIngredient(this.editedIndex);
        this.myForm.setValue({
          ingredientName: this.editedIngredient.ingredientName,
          amount: this.editedIngredient.amount
        })
        this.editMode = true;
      }
    )
  }


  onSubmitForm(form: NgForm){
    let ingredient = form.value;
    if(this.editMode){
      this.slService.updateIngredient(this.editedIndex,ingredient)
      console.log(ingredient)
    }
    else{
      this.slService.addIngredient(ingredient);   
    }
    this.myForm.reset();
    this.editMode = false;  
    
  }

  deleteIngredient(editedIndex: number){
    this.slService.deleteIngredient(editedIndex);
    this.editMode =  false;
    this.myForm.reset();
  }

  reset(){
    this.myForm.reset();
    this.editMode =  false;
  }
}
