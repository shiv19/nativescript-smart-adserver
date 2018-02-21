import {
    autoRefreshProperty,
    Common,
    formatIdProperty,
    pageIdProperty,
    targetProperty
} from "./smart-adserver.common";
import { layout } from "tns-core-modules/utils/utils";
import * as app from "tns-core-modules/application";

export class SmartAdserverBase extends Common {
    nativeView: SASBannerView;

    static SITE_ID: number;
    static BASE_URL: string;

    pageId: string;
    formatId: string;
    autoRefresh: string;

    constructor() {
        super();
        this.nativeView = SASBannerView.new();
    }

    public static init(siteId: number, baseUrl: string) {
        SmartAdserver.SITE_ID = siteId;
        SmartAdserver.BASE_URL = baseUrl;
        app.on("launch", () => {
            SASAdView.setSiteIDBaseURL(siteId, baseUrl);
        });
    }

    public onLoaded() {
        super.onLoaded();
        this.nativeView.delegate = SASAdViewDelegateImpl.initWithOwner(
            new WeakRef<SmartAdserverBase>(this)
        );
    }

    public onUnloaded() {
        this.nativeView.delegate = null;
        super.onUnloaded();
    }

    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
        const width = layout.getMeasureSpecSize(widthMeasureSpec);
        const height = layout.getMeasureSpecSize(heightMeasureSpec);
        this.setMeasuredDimension(width, height);
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

class SASAdViewDelegateImpl extends NSObject implements SASAdViewDelegate {
    public static ObjCProtocols = [SASAdViewDelegate];
    private _owner: WeakRef<SmartAdserverBase>;

    public static initWithOwner(
        owner: WeakRef<SmartAdserverBase>
    ): SASAdViewDelegateImpl {
        const delegate = new SASAdViewDelegateImpl();
        delegate._owner = owner;
        return delegate;
    }

    adViewDidFailToLoadWithError(adView: SASAdView, error: NSError) {
        adView.removeFromSuperview();
    }

    adViewDidLoad(adView: SASAdView) {
        console.log("ad view loaded");
    }
}

export class SmartAdserver extends SmartAdserverBase {
    controller: any;

    constructor() {
        super();
        this.controller = SASBannerView.new();
    }

    public initNativeView() {
        this.controller.loadFormatIdPageIdMasterTarget(
            this.formatId,
            this.pageId,
            true,
            ""
        );
        this.nativeView.addSubview(this.controller.view);
    }
}
