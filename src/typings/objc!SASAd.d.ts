
declare class SASAd extends NSObject implements NSCoding, NSCopying {

	static alloc(): SASAd; // inherited from NSObject

	static new(): SASAd; // inherited from NSObject

	readonly aspectRatio: number;

	readonly currentMediationAd: SASMediationAd;

	readonly duration: number;

	readonly extraParameters: NSDictionary<any, any>;

	readonly landscapeSize: CGSize;

	readonly mediationAds: NSArray<any>;

	readonly portraitSize: CGSize;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	debugString(): string;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	optimalAdHeightForContainer(container: UIView): number;
}

declare class SASAdChoicesView extends UIButton {

	static alloc(): SASAdChoicesView; // inherited from NSObject

	static appearance(): SASAdChoicesView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SASAdChoicesView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SASAdChoicesView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): SASAdChoicesView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SASAdChoicesView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): SASAdChoicesView; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): SASAdChoicesView; // inherited from UIButton

	static new(): SASAdChoicesView; // inherited from NSObject

	registerNativeAdModalParentViewController(nativeAd: SASNativeAd, modalParentViewController: UIViewController): void;
}

declare class SASAdView extends UIView {

	static alloc(): SASAdView; // inherited from NSObject

	static appearance(): SASAdView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SASAdView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SASAdView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): SASAdView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SASAdView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): SASAdView; // inherited from UIAppearance

	static disableCustomIdentifier(): void;

	static disableIdentifierHashing(): void;

	static enableCustomIdentifierWithID(customID: string): void;

	static enableIdentifierHashing(): void;

	static handleOpenURL(url: NSURL): boolean;

	static new(): SASAdView; // inherited from NSObject

	static setAllowAutomaticLocationDetection(allow: boolean): void;

	static setBaseURL(baseURL: string): void;

	static setHeading(heading: number): void;

	static setLocation(location: CLLocation): void;

	static setLoggingEnabled(loggingEnabled: boolean): void;

	static setSiteIDBaseURL(siteID: number, baseURL: string): void;

	static setTestModeEnabled(testModeEnabled: boolean): void;

	static setTransientSessionIDEnabled(transientIDEnabled: boolean): void;

	delegate: SASAdViewDelegate;

	dismissalAnimations: (p1: SASAdView) => void;

	expandsFromTop: boolean;

	readonly lastCallTimestamp: number;

	modalParentViewController: UIViewController;

	unlimited: boolean;

	readonly webViewRendering: boolean;

	constructor(o: { frame: CGRect; loader: SASLoader; });

	initWithFrameLoader(frame: CGRect, loaderType: SASLoader): this;

	loadFormatIdPageIdMasterTarget(formatId: number, pageId: string, isMaster: boolean, target: string): void;

	loadFormatIdPageIdMasterTargetTimeout(formatId: number, pageId: string, isMaster: boolean, target: string, timeout: number): void;

	refresh(): void;

	sendMessageToWebView(message: string): void;

	shouldAutoRotate(): boolean;
}

declare class SASAdViewContainerCell extends UITableViewCell {

	static alloc(): SASAdViewContainerCell; // inherited from NSObject

	static appearance(): SASAdViewContainerCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SASAdViewContainerCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SASAdViewContainerCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): SASAdViewContainerCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SASAdViewContainerCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): SASAdViewContainerCell; // inherited from UIAppearance

	static cellForAdViewInTableView(adView: SASAdView, tableView: UITableView): SASAdViewContainerCell;

	static new(): SASAdViewContainerCell; // inherited from NSObject
}

interface SASAdViewDelegate extends NSObjectProtocol {

	adViewCanStickToTop?(adView: SASAdView): boolean;

	adViewDidCloseExpandWithFrame?(adView: SASAdView, frame: CGRect): void;

	adViewDidCloseResizeWithFrame?(adView: SASAdView, frame: CGRect): void;

	adViewDidCollapse?(adView: SASAdView): void;

	adViewDidCollectReward?(adView: SASAdView, reward: SASReward): void;

	adViewDidDisappear?(adView: SASAdView): void;

	adViewDidDownloadAd?(adView: SASAdView, ad: SASAd): void;

	adViewDidExpandWithFrame?(adView: SASAdView, frame: CGRect): void;

	adViewDidFailToLoadWithError?(adView: SASAdView, error: NSError): void;

	adViewDidFailToPrefetchWithError?(adView: SASAdView, error: NSError): void;

	adViewDidFailToResizeError?(adView: SASAdView, error: NSError): void;

	adViewDidFinishPlayingAudio?(adView: SASAdView): void;

	adViewDidLoad?(adView: SASAdView): void;

	adViewDidLoadEndCard?(adView: SASAdView): void;

	adViewDidPrefetch?(adView: SASAdView): void;

	adViewDidReceiveMessage?(adView: SASAdView, message: string): void;

	adViewDidResizeWithFrame?(adView: SASAdView, frame: CGRect): void;

	adViewDidSendVideoEvent?(adView: SASAdView, videoEvent: SASVideoEvent): void;

	adViewShouldHandleAudioSession?(adView: SASAdView): boolean;

	adViewShouldHandleURL?(adView: SASAdView, URL: NSURL): boolean;

	adViewWillCloseExpand?(adView: SASAdView): void;

	adViewWillDismissModalView?(adView: SASAdView): void;

	adViewWillExpand?(adView: SASAdView): void;

	adViewWillPerformActionWithExit?(adView: SASAdView, willExit: boolean): void;

	adViewWillPlayAudio?(adView: SASAdView): void;

	adViewWillPlayVideoWithAVPlayerWithPlayerLayerWithContainingView?(adView: SASAdView, player: AVPlayer, playerLayer: CALayer, containingView: UIView): void;

	adViewWillPresentModalView?(adView: SASAdView): void;

	adViewWillResizeWithFrame?(adView: SASAdView, frame: CGRect): void;

	adViewWithAVPlayerDidSwitchToPlayerLayerWithContainingView?(adView: SASAdView, player: AVPlayer, playerLayer: CALayer, containingView: UIView): void;

	adViewWithStickyViewDidStickWithFrame?(adView: SASAdView, stickyView: UIView, stuck: boolean, stickyFrame: CGRect): void;

	animationDurationForDismissingAdView?(adView: SASAdView): number;

	animationOptionsForDismissingAdView?(adView: SASAdView): UIViewAnimationOptions;

	visibilityPercentageForAdView?(adView: SASAdView): number;
}
declare var SASAdViewDelegate: {

	prototype: SASAdViewDelegate;
};

declare class SASBannerView extends SASAdView {

	static alloc(): SASBannerView; // inherited from NSObject

	static appearance(): SASBannerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SASBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SASBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): SASBannerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SASBannerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): SASBannerView; // inherited from UIAppearance

	static new(): SASBannerView; // inherited from NSObject

	refreshInterval: number;

	bannerDisplayIsPermanent(isPermanent: boolean): void;

	optimalAdViewHeightForContainer(container: UIView): number;
}

declare const enum SASCreativeType {

	Image = 0,

	Audio = 1,

	Video = 2,

	Html = 3,

	MRAIDAdSecondPart = 4,

	NoPremiumAd = 5,

	NativeVideo = 6,

	NativeParallax = 7
}

declare class SASInterstitialView extends SASAdView {

	static alloc(): SASInterstitialView; // inherited from NSObject

	static appearance(): SASInterstitialView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SASInterstitialView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SASInterstitialView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): SASInterstitialView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SASInterstitialView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): SASInterstitialView; // inherited from UIAppearance

	static clearPrefetchCache(): void;

	static new(): SASInterstitialView; // inherited from NSObject

	prefetchFormatIdPageIdMasterTarget(formatId: number, pageId: string, isMaster: boolean, target: string): void;
}

declare const enum SASLoader {

	None = 0,

	ActivityIndicatorStyleBlack = 1,

	ActivityIndicatorStyleWhite = 2,

	ActivityIndicatorStyleTransparent = 3
}

declare class SASMediationAd extends NSObject implements NSCoding, NSCopying {

	static alloc(): SASMediationAd; // inherited from NSObject

	static new(): SASMediationAd; // inherited from NSObject

	SDKID: number;

	countClickURL: NSURL;

	impressionURL: NSURL;

	placementConfig: NSDictionary<any, any>;

	viewability: NSArray<any>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class SASNativeAd extends NSObject implements NSCoding, NSCopying {

	static alloc(): SASNativeAd; // inherited from NSObject

	static new(): SASNativeAd; // inherited from NSObject

	readonly body: string;

	readonly callToAction: string;

	readonly coverImage: SASNativeAdImage;

	delegate: SASNativeAdDelegate;

	downloads: number;

	readonly extraParameters: NSDictionary<any, any>;

	readonly icon: SASNativeAdImage;

	likes: number;

	rating: number;

	readonly sponsored: string;

	readonly subtitle: string;

	readonly title: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	debugString(): string;

	encodeWithCoder(aCoder: NSCoder): void;

	hasMedia(): boolean;

	initWithCoder(aDecoder: NSCoder): this;

	mediaAspectRatio(): number;

	optimalCoverViewHeightForContainer(container: UIView): number;

	optimalCoverViewHeightForWidth(width: number): number;

	optimalMediaViewHeightForContainer(container: UIView): number;

	optimalMediaViewHeightForWidth(width: number): number;

	registerViewModalParentViewController(view: UIView, modalParentViewController: UIViewController): void;

	registerViewTappableViewsModalParentViewController(view: UIView, views: NSArray<any>, modalParentViewController: UIViewController): void;

	unregisterViews(): void;
}

interface SASNativeAdDelegate extends NSObjectProtocol {

	nativeAdShouldHandleClickURL?(nativeAd: SASNativeAd, URL: NSURL): boolean;

	nativeAdWillDismissModalView?(nativeAd: SASNativeAd): void;

	nativeAdWillPresentModalView?(nativeAd: SASNativeAd): void;
}
declare var SASNativeAdDelegate: {

	prototype: SASNativeAdDelegate;
};

declare class SASNativeAdImage extends NSObject implements NSCoding, NSCopying {

	static alloc(): SASNativeAdImage; // inherited from NSObject

	static new(): SASNativeAdImage; // inherited from NSObject

	readonly URL: NSURL;

	readonly height: number;

	readonly width: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class SASNativeAdManager extends NSObject {

	static alloc(): SASNativeAdManager; // inherited from NSObject

	static nativeAdManagerWithPlacement(placement: SASNativeAdPlacement): SASNativeAdManager;

	static new(): SASNativeAdManager; // inherited from NSObject

	static setLocation(location: CLLocation): void;

	constructor(o: { placement: SASNativeAdPlacement; });

	initWithPlacement(placement: SASNativeAdPlacement): this;

	requestAd(completionBlock: (p1: SASNativeAd, p2: NSError) => void): void;
}

declare class SASNativeAdMediaView extends UIView {

	static alloc(): SASNativeAdMediaView; // inherited from NSObject

	static appearance(): SASNativeAdMediaView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SASNativeAdMediaView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SASNativeAdMediaView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): SASNativeAdMediaView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SASNativeAdMediaView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): SASNativeAdMediaView; // inherited from UIAppearance

	static new(): SASNativeAdMediaView; // inherited from NSObject

	delegate: SASNativeAdMediaViewDelegate;

	readonly nativeAd: SASNativeAd;

	isPlayingMedia(): boolean;

	registerNativeAd(nativeAd: SASNativeAd): void;
}

interface SASNativeAdMediaViewDelegate extends NSObjectProtocol {

	nativeAdMediaViewDidCloseFullscreenModalMedia?(mediaView: SASNativeAdMediaView): void;

	nativeAdMediaViewDidFailToLoadMediaWithError?(mediaView: SASNativeAdMediaView, error: NSError): void;

	nativeAdMediaViewDidFinishPlayingAudio?(mediaView: SASNativeAdMediaView): void;

	nativeAdMediaViewDidLoadMedia?(mediaView: SASNativeAdMediaView): void;

	nativeAdMediaViewDidPresentFullscreenModalMedia?(mediaView: SASNativeAdMediaView): void;

	nativeAdMediaViewDidSendVideoEvent?(mediaView: SASNativeAdMediaView, videoEvent: SASVideoEvent): void;

	nativeAdMediaViewShouldHandleAudioSession?(mediaView: SASNativeAdMediaView): boolean;

	nativeAdMediaViewWillCloseFullscreenModalMedia?(mediaView: SASNativeAdMediaView): void;

	nativeAdMediaViewWillPlayAudio?(mediaView: SASNativeAdMediaView): void;

	nativeAdMediaViewWillPresentFullscreenModalMedia?(mediaView: SASNativeAdMediaView): void;
}
declare var SASNativeAdMediaViewDelegate: {

	prototype: SASNativeAdMediaViewDelegate;
};

declare class SASNativeAdPlacement extends NSObject {

	static alloc(): SASNativeAdPlacement; // inherited from NSObject

	static nativeAdPlacementForTestAd(type: SASNativeAdPlacementTestAdType): SASNativeAdPlacement;

	static nativeAdPlacementWithBaseURLSiteIDPageIDFormatIDTarget(baseURL: NSURL, siteID: number, pageID: string, formatID: number, target: string): SASNativeAdPlacement;

	static nativeAdPlacementWithBaseURLSiteIDPageIDFormatIDTargetTimeout(baseURL: NSURL, siteID: number, pageID: string, formatID: number, target: string, timeout: number): SASNativeAdPlacement;

	static new(): SASNativeAdPlacement; // inherited from NSObject

	readonly baseURL: NSURL;

	readonly formatID: number;

	readonly pageID: string;

	readonly siteID: number;

	readonly target: string;

	readonly timeout: number;

	constructor(o: { baseURL: NSURL; siteID: number; pageID: string; formatID: number; target: string; timeout: number; });

	initWithBaseURLSiteIDPageIDFormatIDTargetTimeout(baseURL: NSURL, siteID: number, pageID: string, formatID: number, target: string, timeout: number): this;
}

declare const enum SASNativeAdPlacementTestAdType {

	IconAndTextAssets = 0,

	CoverAndTextAssets = 1,

	IconAndCoverAndTextAssets = 2,

	TextAssets = 3,

	Video = 4
}

declare const enum SASNativeType {

	PremiumAd = 0,

	MediationWithPremiumAd = 1,

	MediationWithNoPremiumAd = 2
}

declare class SASReward extends NSObject {

	static alloc(): SASReward; // inherited from NSObject

	static new(): SASReward; // inherited from NSObject

	readonly amount: number;

	readonly currency: string;
}

declare class SASRewardedVideo extends NSObject {

	static alloc(): SASRewardedVideo; // inherited from NSObject

	static isAdReadyForPlacement(placement: SASRewardedVideoPlacement): boolean;

	static loadAdForPlacement(placement: SASRewardedVideoPlacement): void;

	static new(): SASRewardedVideo; // inherited from NSObject

	static rewardForPlacement(placement: SASRewardedVideoPlacement): SASReward;

	static setDelegate(delegate: SASRewardedVideoDelegate): void;

	static showAdForPlacementFromViewController(placement: SASRewardedVideoPlacement, controller: UIViewController): void;
}

interface SASRewardedVideoDelegate extends NSObjectProtocol {

	rewardedVideoDidAppearForPlacementFromViewController?(placement: SASRewardedVideoPlacement, controller: UIViewController): void;

	rewardedVideoDidDisappearForPlacementFromViewController?(placement: SASRewardedVideoPlacement, controller: UIViewController): void;

	rewardedVideoDidFailToLoadForPlacementError?(placement: SASRewardedVideoPlacement, error: NSError): void;

	rewardedVideoDidFailToShowForPlacementError?(placement: SASRewardedVideoPlacement, error: NSError): void;

	rewardedVideoDidFinishPlayingAudio?(): void;

	rewardedVideoDidLoadAdForPlacement?(ad: SASAd, placement: SASRewardedVideoPlacement): void;

	rewardedVideoForPlacementDidCollectReward?(placement: SASRewardedVideoPlacement, reward: SASReward): void;

	rewardedVideoForPlacementDidLoadEndCardInViewFromViewController?(placement: SASRewardedVideoPlacement, view: UIView, controller: UIViewController): void;

	rewardedVideoForPlacementDidSendVideoEvent?(placement: SASRewardedVideoPlacement, videoEvent: SASVideoEvent): void;

	rewardedVideoForPlacementShouldHandleURL?(placement: SASRewardedVideoPlacement, URL: NSURL): boolean;

	rewardedVideoForPlacementWillDismissModalViewFromViewController?(placement: SASRewardedVideoPlacement, controller: UIViewController): void;

	rewardedVideoForPlacementWillPlayVideoWithAVPlayerWithPlayerLayerWithContainingView?(placement: SASRewardedVideoPlacement, player: AVPlayer, playerLayer: CALayer, containingView: UIView): void;

	rewardedVideoForPlacementWillPresentModalViewFromViewController?(placement: SASRewardedVideoPlacement, controller: UIViewController): void;

	rewardedVideoShouldHandleAudioSession?(): boolean;

	rewardedVideoWillPlayAudio?(): void;
}
declare var SASRewardedVideoDelegate: {

	prototype: SASRewardedVideoDelegate;
};

declare class SASRewardedVideoPlacement extends NSObject {

	static alloc(): SASRewardedVideoPlacement; // inherited from NSObject

	static new(): SASRewardedVideoPlacement; // inherited from NSObject

	static rewardedVideoPlacementWithPageIdFormatIdTarget(pageId: number, formatId: number, target: string): SASRewardedVideoPlacement;

	static rewardedVideoPlacementWithPageNameFormatIdTarget(pageName: string, formatId: number, target: string): SASRewardedVideoPlacement;

	readonly formatId: number;

	readonly pageId: number;

	readonly pageName: string;

	readonly target: string;

	constructor(o: { pageId: number; formatId: number; target: string; });

	constructor(o: { pageName: string; formatId: number; target: string; });

	initWithPageIdFormatIdTarget(pageId: number, formatId: number, target: string): this;

	initWithPageNameFormatIdTarget(pageName: string, formatId: number, target: string): this;
}

declare const enum SASSkipPosition {

	TopLeft = 0,

	TopRight = 1,

	BottomLeft = 2,

	BottomRight = 3
}

declare const enum SASVideoEvent {

	Undefined = 0,

	Start = 1,

	Pause = 2,

	Resume = 3,

	Rewind = 4,

	FirstQuartile = 5,

	Midpoint = 6,

	ThirdQuartile = 7,

	Complete = 8,

	Skip = 9,

	EnterFullscreen = 10,

	ExitFullscreen = 11
}
