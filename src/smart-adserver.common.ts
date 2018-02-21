import { isIOS, Property, View } from "tns-core-modules/ui/core/view";

export const siteIdProperty = new Property<Common, number>({
    name: "siteId",
    defaultValue: 104808,
    affectsLayout: isIOS
});
export const pageIdProperty = new Property<Common, string>({
    name: "pageId",
    defaultValue: "663262",
    affectsLayout: isIOS
});
export const formatIdProperty = new Property<Common, number>({
    name: "formatId",
    defaultValue: 15140,
    affectsLayout: isIOS
});
export const autoRefreshProperty = new Property<Common, boolean>({
    name: "autoRefresh",
    defaultValue: true,
    affectsLayout: isIOS
});
export const targetProperty = new Property<Common, string>({
    name: "target",
    defaultValue: "",
    affectsLayout: isIOS
});

export class Common extends View {
    siteId: string;
    pageId: string;
    formatId: string;
    autoRefresh: string;
    target: string;

    constructor() {
        super();
        console.log("in plugin");
    }
}

siteIdProperty.register(Common);
pageIdProperty.register(Common);
formatIdProperty.register(Common);
autoRefreshProperty.register(Common);
targetProperty.register(Common);
