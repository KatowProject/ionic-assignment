import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class StorageService {
  db: Storage;
  constructor() {
    this.db = window.localStorage;
  }

  get(key: string): any {
    const item = this.db.getItem(key);

    return item ? JSON.parse(item) : null;
  }

  set(key: string, value: any): void {
    this.db.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    this.db.removeItem(key);
  }
}
