import {Pipe, PipeTransform} from '@angular/core';
import {User} from "../interfaces/user.interface";

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {
  transform(users: User[], searchInput: string ): User[] {
    if (!searchInput) return users;

    return users.filter(user => {
        const isSearchedId = user.id === +searchInput
        const isSearchedName = user.name?.toLowerCase().includes(
          searchInput.toLowerCase()
        )
        return isSearchedId || isSearchedName
      }
    )
  }
}

