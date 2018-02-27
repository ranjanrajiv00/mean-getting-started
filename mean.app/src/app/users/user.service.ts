import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserModel } from './user.model';
import { Subject } from 'rxjs/Subject';

// const user1: UserModel = {
//     name: 'rajiv',
//     email: 'rajiv00@gmail.com',
//     address: {
//         addressLine1: 'abc',
//         addressLine2: 'xyz'
//     }
// };

// const user2: UserModel = {
//     name: 'ranjan',
//     email: 'ranjan@gmail.com',
//     address: {
//         addressLine1: 'abc1',
//         addressLine2: 'xyz1'
//     }
// };

// const user3: UserModel = {
//     name: 'rajiv ranjan',
//     email: 'ranjan.rajiv00@gmail.com',
//     address: {
//         addressLine1: 'abc2',
//         addressLine2: 'xyz2'
//     }
// };

@Injectable()
export class UserService {
    constructor(private http:HttpClient) {

    }

    // getUsers = (): Observable<UserModel> => {
    //     let subject = new Subject<UserModel>();
        
    //     setTimeout(()=>{
    //         subject.next(user1);
    //     }, 1000);

    //     setTimeout(()=>{
    //         subject.next(user2);
    //     }, 2000);

    //     setTimeout(()=>{
    //         subject.next(user3);
    //         subject.complete();
    //     }, 3000);

    //     return subject;
    // }

    getUsers = (): Observable<UserModel[]> => {
     return this.http.get<UserModel[]>('http://localhost:3030/users')
    }
}