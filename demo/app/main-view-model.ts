import { Observable } from 'tns-core-modules/data/observable';
import { SmartAdserver } from 'nativescript-smart-adserver';

export class HelloWorldModel extends Observable {
  public message: string;
  private smartAdserver: SmartAdserver;

  constructor() {
    super();

    this.smartAdserver = new SmartAdserver();
    this.message = this.smartAdserver.message;
  }
}
