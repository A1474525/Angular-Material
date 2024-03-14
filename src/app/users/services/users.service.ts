import {Injectable} from "@angular/core";
import {User} from "../interfaces/user.interface";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _users: User[] = [];

  constructor(
    private readonly storageService: StorageService,
  ) { }

  get users(): User[] {
    this.storageService.getItem('users')
    return this._users;
  }

  set users(users: User[]) {
    this._users = users;
    this.storageService.setItem('users', users)
  }

  initUsers(users: User[]): void {
    this._users = users;
  }

  deleteUser(id: number): void {
    this.users = this._users.filter(user => user.id !== id)
  }

  createUser(createdUser: User): void {
    this.users = [...this._users, {
      ...createdUser,
      id: this.newUserId
    }];
  }

  editUser(editedUser: User): void {
    this.users = this._users.map(user =>
      user.id === editedUser.id
        ? editedUser
        : user
    )
  }

  get newUserId(): number {
    const idArr = this._users.map(user => user.id)
    let newId = 1;
    while (idArr.includes(newId)) {
      newId++;
    }
    return newId
  }

  // searchUser(searchUser: string): Observable <User[]> {
  //   return of(this._users.filter(user => {
  //     return user.name?.toLowerCase().includes(searchUser.toLowerCase()) ||
  //       user.id === +searchUser
  //   }))
  // }
}


