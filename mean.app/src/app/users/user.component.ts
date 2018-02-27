import { Component } from '@angular/core';
import { UserService } from './user.service';
import { UserModel } from './user.model';

@Component({
    selector: 'user-list',
    templateUrl: './user.component.html'
})
export class UserComponent {
    title: string = "user List Page";
    users: UserModel[] = [];
    constructor(private userSerive: UserService) {
        this.userSerive.getUsers().subscribe(data => this.users = data);
    }
}