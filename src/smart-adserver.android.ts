import {
    Common,
    siteIdProperty,
    pageIdProperty,
    formatIdProperty,
    autoRefreshProperty,
    targetProperty
} from "./smart-adserver.common";
import * as app from "tns-core-modules/application";

declare var com: any;
export class SmartAdserver extends Common {
    nativeView: com.smartadserver.android.library.SASBannerView;
    siteId: number;
    pageId: string;
    formatId: number;
    autoRefresh: boolean;
    target: string;

    public createNativeView(): Object {
        console.log("createNativeView");
        const SASBannerView = new com.smartadserver.android.library.SASBannerView(
            app.android.foregroundActivity
        );
        SASBannerView.setRefreshInterval(30);
        SASBannerView.loadAd(104808, "663262", 15140, true, "");
        return SASBannerView;
    }

    initNativeView(): void {
        console.log("Start of initNativeView");
        (<any>this.nativeView).owner = this;
        super.initNativeView();
        console.log("End of initNativeView");
    }

    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;
        super.disposeNativeView();
        this.nativeView.onDestroy();
    }

    [siteIdProperty.setNative](value: number) {
        this.siteId = value;
    }
    [pageIdProperty.setNative](value: string) {
        this.pageId = value;
    }
    [formatIdProperty.setNative](value: number) {
        this.formatId = value;
    }
    [autoRefreshProperty.setNative](value: boolean) {
        this.autoRefresh = value;
    }
    [targetProperty.setNative](value: string) {
        this.target = value;
    }
}
