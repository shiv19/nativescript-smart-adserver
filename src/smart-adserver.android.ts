import {
    Common,
    pageIdProperty,
    formatIdProperty,
    autoRefreshProperty,
    targetProperty
} from "./smart-adserver.common";
import * as app from "tns-core-modules/application";

declare var com: any;
export class SmartAdserver extends Common {
    nativeView: com.smartadserver.android.library.SASBannerView;
    
    static SITE_ID: number;
    static BASE_URL: string;

    pageId: string;
    formatId: string;
    autoRefresh: string;
    target: string;

    public static init(siteId:number, baseUrl:string){
        SmartAdserver.SITE_ID = siteId;
        SmartAdserver.BASE_URL = baseUrl;
        app.on('launch',()=>{
            SASAdView.setSiteIDBaseURL(siteId, baseUrl)
        })
    }

    public createNativeView(): Object {
        console.log("createNativeView");
        const SASBannerView = new com.smartadserver.android.library.SASBannerView(
            app.android.context
        );
        SASBannerView.setRefreshInterval(30);
        SASBannerView.loadAd(
            SmartAdserver.SITE_ID,
            this.pageId,
            parseInt(this.formatId, 10),
            this.autoRefresh === "true" ? true : false,
            ""
        );
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
