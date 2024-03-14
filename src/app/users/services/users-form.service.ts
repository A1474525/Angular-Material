import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UsersFormService {

  constructor(private readonly fb: FormBuilder) {}

  getUserFormGroup() {
    return this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Zа-яА-Я .]*')
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      phone: ['' , [
        Validators.required,
        Validators.pattern('[0-9 -/.()*x]*'),
        Validators.minLength(8)
      ]]
    })
  }
}
