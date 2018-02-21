import {
    autoRefreshProperty,
    Common,
    formatIdProperty,
    pageIdProperty,
    siteIdProperty,
    targetProperty
} from "./smart-adserver.common";
import {layout} from "tns-core-modules/utils/utils";

export class SmartAdserver extends Common {
    nativeView: SASBannerView;
    constructor() {
        super();
        this.nativeView = SASBannerView.new();
    }

    public onLoaded() {
        super.onLoaded();
        this.nativeView.delegate = SASAdViewDelegateImpl.initWithOwner(new WeakRef<SmartAdserver>(this));
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

    [siteIdProperty.setNative](value: number) {
        return value;
    }

    [pageIdProperty.setNative](value: string) {
        return value;
    }

    [formatIdProperty.setNative](value: string) {
        return value;
    }

    [autoRefreshProperty.setNative](value: boolean) {
        return value;
    }

    [targetProperty.setNative](value: string) {
        return value;
    }
}

class SASAdViewDelegateImpl extends NSObject implements SASAdViewDelegate {
    public static ObjCProtocols = [SASAdViewDelegate];
    private _owner: WeakRef<SmartAdserver>;

    public static initWithOwner(owner: WeakRef<SmartAdserver>): SASAdViewDelegateImpl {
        const delegate = new SASAdViewDelegateImpl();
        delegate._owner = owner;
        return delegate;
    }

    adViewDidFailToLoadWithError(adView: SASAdView, error: NSError) {
        adView.removeFromSuperview();
    }
}