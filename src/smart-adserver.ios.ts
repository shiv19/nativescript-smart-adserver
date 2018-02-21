import {
    Common,
    siteIdProperty,
    pageIdProperty,
    formatIdProperty,
    autoRefreshProperty,
    targetProperty
} from "./smart-adserver.common";

export declare class SASBannerView {
    loadAd(
        param0: number,
        param1: string,
        param2: number,
        param3: boolean,
        param4: string
    );
}

export class SmartAdserver extends Common {
    siteId: string;
    pageId: string;
    formatId: string;
    autoRefresh: string;
    target: string;

    constructor() {
        super();
    }

    [siteIdProperty.setNative](value: string) {
        this.siteId = value;
    }
    [pageIdProperty.setNative](value: string) {
        this.pageId = value;
    }
    [formatIdProperty.setNative](value: string) {
        this.formatId = value;
    }
    [autoRefreshProperty.setNative](value: string) {
        this.autoRefresh = value;
    }
    [targetProperty.setNative](value: string) {
        this.target = value;
    }
}
