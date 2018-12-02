import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  @Output() triggerLogin: EventEmitter<boolean> = new EventEmitter();

  trigger() {
    this.triggerLogin.emit(true);
  }
}
