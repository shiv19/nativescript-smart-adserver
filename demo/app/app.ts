import "./bundle-config";
import * as application from "tns-core-modules/application";
import { SmartAdserver } from "nativescript-smart-adserver";

SmartAdserver.init(104808, "http://www.test.com");
application.start({ moduleName: "main-page" });
