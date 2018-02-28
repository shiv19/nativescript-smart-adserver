# nativescript-smart-adserver

Note: Only the Banner module is currently available in this plugin.

Works on Android and iOS

## Screenshots

### Android

<img src="https://github.com/nstudio/nativescript-smart-adserver/blob/master/assets/android-ss.jpeg?raw=true" height="640" >

### iOS

<img src="https://github.com/nstudio/nativescript-smart-adserver/blob/master/assets/ios-ss.png?raw=true" height="640" >

## Installation

```javascript
tns plugin add @nstudio/nativescript-smart-adserver
```

## Usage

To use this plugin, you will need Site ID, Base URL of your site, Page ID and Format ID from SmartAdServer.

### TypeScript

In app.ts you have to initialize the plugin

```js
import { SmartAdBanner } from "nativescript-smart-adserver";

SmartAdBanner.init(104808, "https://mobile.smartadserver.com");
```

Then in the xml file, include this namespace on the parent component of where you
want to place the AdView.

```xml
xmlns:sas="nativescript-smart-adserver"
```

Now you can create smart ad banner like this,

```xml
<sas:SmartAdBanner height="150"
        pageId="663262"
        formatId="15140"
        autoRefresh="true" />
```

### JavaScript

Same as Typescript, but the import statement will be

```js
const SmartAdBanner = require("nativescript-smart-adserver").SmartAdBanner;
```

### Angular

In main.ts you have to initialize the plugin

```js
import { SmartAdBanner } from "nativescript-smart-adserver";

SmartAdBanner.init(104808, "https://mobile.smartadserver.com");
```

In the module where you want to add Ads (eg, app.module.ts), import it like this\

```js
import { NativescriptSmartAdBannerModule } from "nativescript-smart-adserver/angular";
```

Now add `NativescriptSmartAdBannerModule` to the imports array of that module

You can now use the banner using this markup

```xml
<SmartAdBanner height="150"
        pageId="663262"
        formatId="15140"
        autoRefresh="true"></SmartAdBanner>
```

## API

Banner Module API (XML/HTML element Properties)

* pageId - the page id assigned by smart ad server
* formatId - format id given by smart ad server
* autoRefresh - specific if the ad should change over time

## License

Apache License Version 2.0, January 2004
