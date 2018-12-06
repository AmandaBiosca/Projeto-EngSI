import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  @Output() triggerLogin: EventEmitter<boolean> = new EventEmitter();
  @Output() triggerLogout: EventEmitter<boolean> = new EventEmitter();
  @Output() triggerAccess: EventEmitter<boolean> = new EventEmitter();
  @Output() triggerSearch: EventEmitter<string> = new EventEmitter();

  trigger() {
    this.triggerLogin.emit(true);
  }

  search(search: string) {
    this.triggerSearch.emit(search);
  }

  login() {
    this.triggerAccess.emit(true);
  }
  
  logout() {
    this.triggerAccess.emit(true);
  }
}
