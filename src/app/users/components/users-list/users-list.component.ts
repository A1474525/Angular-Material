import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {UserApiService} from "../../services/user-api.service";
import {tap} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {CreateEditUserComponent} from "../create-edit-user/create-edit-user.component";
import {User} from "../../interfaces/user.interface";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {
  // searchInput = "";

//  searchInput = new FormControl('', { nonNullable: true });
//  filteredUsers$?: Observable <User[]>; // поток обновленных данных
//   changeValue(e: Event): void {
//     this.searchInput = (e.target as HTMLInputElement).value
//     console.log(e)
//   }
   constructor(
    readonly userService: UsersService,
    private readonly userApiService: UserApiService,
    private readonly dialog: MatDialog,
    private storageService: StorageService,

  ) {
//     this.searchUserList()
   }

  getUsers(): void {
    this.userApiService.get()
      .pipe(
        tap((users) => {
          this.storageService.setItem('users', users)
          this.userService.users = users
        })
      )
      .subscribe();
  }

  deleteUserInList(id: number): void {
    this.userService.deleteUser(id)
  }

  editUserInList(user: User): void {
    const dialogRef = this.dialog.open(CreateEditUserComponent,{
      data: user // данные объекта на которого нажал
    });
    dialogRef.afterClosed().subscribe((editedUser) => {
      if (!editedUser) return;
      this.userService.editUser(editedUser);
    });
}

  createUserInList(): void {
    const dialogRef = this.dialog.open(CreateEditUserComponent);
    dialogRef.afterClosed().subscribe((newUser) => {
      if (!newUser) return;
      this.userService.createUser(newUser);
    });
  }

  // searchUserList(): void {
  //   this.filteredUsers$ = this.searchInput.valueChanges.pipe(
  //     debounceTime(300),
  //     switchMap(vol =>
  //       this.userService.searchUser(vol))
  //   );
  // }


  ngOnInit(): void {
    const users = this.storageService.getItem('users')
    !users
      ? this.getUsers()
      : this.userService.initUsers(users as User[])
  }
}


