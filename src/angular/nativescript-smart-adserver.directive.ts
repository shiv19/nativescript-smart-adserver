import { Directive } from "@angular/core";

@Directive({
    selector: "<YourPluginAngularSelector>"
})
export class SmartAdserverDirective {}

export const DIRECTIVES = SmartAdserverDirective;
