import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user?: User;
  @Output() readonly removeUser = new EventEmitter<number>()
  @Output() readonly editUser = new EventEmitter<User>()


  deleteUser(id: number): void {
    this.removeUser.emit(id);
  }

  openEditDialog(user: User): void {
    this.editUser.emit(user);
  }

  ngOnInit(): void {
    if (!this.user)
      console.warn('Чел, используй UserCardComponent' +
        ' компонент правильно и передай user')
  }
}
