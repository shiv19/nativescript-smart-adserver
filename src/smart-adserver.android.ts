import {
    Common,
    pageIdProperty,
    formatIdProperty,
    autoRefreshProperty,
    targetProperty
} from "./smart-adserver.common";
import * as app from "tns-core-modules/application";

declare var com: any;
export class SmartAdBanner extends Common {
    nativeView: com.smartadserver.android.library.SASBannerView;

    static SITE_ID: number;
    static BASE_URL: string;

    pageId: string;
    formatId: string;
    autoRefresh: string;
    target: string;

    public static init(siteId: number, baseUrl: string) {
        SmartAdBanner.SITE_ID = siteId;
        SmartAdBanner.BASE_URL = baseUrl;
    }

    public createNativeView(): Object {
        const SASBannerView = new com.smartadserver.android.library.SASBannerView(
            app.android.context
        );
        SASBannerView.setRefreshInterval(30);
        SASBannerView.loadAd(
            SmartAdBanner.SITE_ID,
            this.pageId,
            parseInt(this.formatId, 10),
            this.autoRefresh === "true" ? true : false,
            ""
        );
        return SASBannerView;
    }

    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;
        super.disposeNativeView();
        this.nativeView.onDestroy();
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
