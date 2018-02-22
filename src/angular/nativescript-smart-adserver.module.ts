import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

import { DIRECTIVES } from "./nativescript-smart-adserver.directive";

@NgModule({
    declarations: [DIRECTIVES],
    exports: [DIRECTIVES]
})
export class NativescriptSmartAdserverModule {}

registerElement("SmartAdserver", () => require("../").SmartAdserver);
