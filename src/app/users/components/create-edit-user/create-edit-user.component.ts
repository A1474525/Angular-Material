import {Component, Inject} from '@angular/core';
import {ValidationErrors} from "@angular/forms";
import {UsersFormService} from "../../services/users-form.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UsersService} from "../../services/users.service";
import {getMockedUser} from "../../mocks/user.mock";
import {User} from "../../interfaces/user.interface";

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss']
})
export class CreateEditUserComponent {
  readonly userForm = this.userFormService.getUserFormGroup();

  readonly placeholdersDialog = this.editingUser
    ? {
      dialogName: 'Редактирование',
      dialogBtn: 'редактировать',
      userId: this.editingUser.id
    }
    : {
      dialogName: 'Создание новой',
      dialogBtn: 'создать',
      userId: this.userService.newUserId
    }

  constructor(private readonly userFormService: UsersFormService,
              private readonly userService: UsersService,
              private readonly dialogRef: MatDialogRef<CreateEditUserComponent>,
              @Inject(MAT_DIALOG_DATA)
              private readonly editingUser?: User,
  ) {
    this.editUser()
  }

  getFieldErrors(fieldName: string): ValidationErrors | null {
    const field = this.userForm.get(fieldName)
    return field ? field.errors : null;
  }

  private editUser(): void {
    if (!this.editingUser) return;
    this.userForm.patchValue(this.editingUser)
  }

  closeDialog() {
    const user = !this.editingUser
      ? getMockedUser(this.userForm.value)
      : {
        ...this.editingUser,
        ...this.userForm.value
      }
    this.dialogRef.close(user)
  }
}

   // if (!this.editingUser) {
   //   const newUser = getMockedUser(this.userForm.value)
   //    return this.dialogRef.close(newUser)
   //  } else {
   //   console.log('через метод spread:', {
   //     ...this.editingUser,
   //     ...this.userForm.value
   //   })
   //   return this.dialogRef.close({
   //     ...this.editingUser,
   //     ...this.userForm.value
   //   })

////////////////////////////////// Experiment ///////////////////////////////
// const newObj = {}
// Object.assign(newObj, this.editingUser)
// Object.assign(newObj, this.userForm.value)
//      console.log('через метод Obj.assign:', newObj)

     // const newUser = this.editingUser;
     // newUser === this.editingUser // true
     //
     // const newUser = structuredClone(this.editingUser);
     // newUser === this.editingUser // false
     //
     // const newUser = JSON.parse(JSON.stringify(this.editingUser));
     // newUser === this.editingUser // false

