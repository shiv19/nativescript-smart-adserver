import "./bundle-config";
import * as application from "tns-core-modules/application";
import { SmartAdBanner } from "nativescript-smart-adserver";

SmartAdBanner.init(104808, "https://mobile.smartadserver.com");
application.start({ moduleName: "main-page" });
