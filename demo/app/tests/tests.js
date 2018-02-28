var SmartAdserver = require("@nstudio/nativescript-smart-adserver").SmartAdserver;
var smartAdserver = new SmartAdserver();

describe("greet function", function() {
    it("exists", function() {
        expect(smartAdserver.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(smartAdserver.greet()).toEqual("Hello, NS");
    });
});