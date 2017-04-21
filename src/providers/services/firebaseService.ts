import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { AngularFire } from 'angularfire2';

@Injectable()
export class FirebaseService {

    public fireAuth: any;

    constructor(
        af: AngularFire
        ) {
        this.fireAuth = af.auth;
    }

    userLogin(email, pass){ 
        console.log('hello');
        //sdasdasd
        return this.fireAuth.login({email: email, password: pass});
    }

}
