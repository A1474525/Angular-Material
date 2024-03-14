import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  setItem (key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): unknown {
    const item = localStorage.getItem(key);
    try {
      return item
        ? JSON.parse(item)
        : null;
    }
    catch {
      localStorage.removeItem('users');
      return null;
    }
  }
}
