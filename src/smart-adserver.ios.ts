import {
    autoRefreshProperty,
    Common,
    formatIdProperty,
    pageIdProperty,
    siteIdProperty,
    targetProperty,
    baseUrlProperty
} from "./smart-adserver.common";
import { layout } from "tns-core-modules/utils/utils";

export class SmartAdserver extends Common {
    nativeView: SASBannerView;
    siteId: string;
    pageId: string;
    formatId: string;
    autoRefresh: string;
    baseUrl: string;
    constructor() {
        super();
        this.nativeView = SASBannerView.new();
    }

    public onLoaded() {
        super.onLoaded();
        this.nativeView.delegate = SASAdViewDelegateImpl.initWithOwner(
            new WeakRef<SmartAdserver>(this)
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

    [baseUrlProperty.setNative](value: string) {
        this.baseUrl = value;
    }
}

class SASAdViewDelegateImpl extends NSObject implements SASAdViewDelegate {
    public static ObjCProtocols = [SASAdViewDelegate];
    private _owner: WeakRef<SmartAdserver>;

    public static initWithOwner(
        owner: WeakRef<SmartAdserver>
    ): SASAdViewDelegateImpl {
        const delegate = new SASAdViewDelegateImpl();
        delegate._owner = owner;
        return delegate;
    }

    adViewDidFailToLoadWithError(adView: SASAdView, error: NSError) {
        adView.removeFromSuperview();
    }
}
