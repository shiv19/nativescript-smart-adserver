import { Common } from "./smart-adserver.common";
import { ViewBase } from "tns-core-modules/ui/frame/frame";
import { Property } from "tns-core-modules/ui/core/view";
export declare const siteIdProperty: Property<Common, number>;
export declare const pageIdProperty: Property<Common, string>;
export declare const formatIdProperty: Property<Common, number>;
export declare const autoRefreshProperty: Property<Common, boolean>;
export declare const targetProperty: Property<Common, string>;
export declare class SmartAdserver extends Common {
    nativeView: com.smartadserver.android.library.SASBannerView;
    siteId: number;
    pageId: string;
    formatId: number;
    autoRefresh: boolean;
    target: string;
    createNativeView(): Object;
    initNativeView(): void;
    disposeNativeView(): void;
}
