import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServerService } from '../services/server.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected  = new EventEmitter<string>();
  constructor(private serverService: ServerService, private authService:AuthService) { }

  ngOnInit() {
  }

  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }
  onFetch(){
    this.serverService.fetchRecipes().subscribe()
  }

  onSave(){
    this.serverService.saveRecipes().subscribe(
      (response)=>console.log(response)
    );
  }

  onSignOut(){
    this.authService.signOut();
    
  }
}

