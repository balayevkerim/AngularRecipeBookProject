import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{

    constructor(private router: Router){}
     accessToken :string;
    signUp(email:string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    signIn(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            (response) =>{
                
                firebase.auth().currentUser.getIdToken().then(
                    (token: string) => this.accessToken = token
                )

                this.router.navigate(['/'])
            }
        )
        
    }

    getToken(){
         firebase.auth().currentUser.getIdToken().then(
            (token:string)=>{
                this.accessToken = token;
            }
        );
        return this.accessToken;

    }

    isAuthenticated(){
        return this.accessToken !=null
    }

    signOut(){
        firebase.auth().signOut();
        this.router.navigate(['/signin'])
    }
}