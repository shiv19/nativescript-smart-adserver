/// <reference path="./_helpers.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module displaylibrary {
				export class BuildConfig {
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

import androidcontentContext = android.content.Context;
import androidutilAttributeSet = android.util.AttributeSet;
import androidviewView = android.view.View;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export class SASBannerView extends com.smartadserver.android.library.ui.SASAdView {
					public setRefreshInterval(param0: number): void;
					public updateVisibilityPercentage(): void;
					public installLoaderView(param0: androidviewView): void;
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
					public constructor(param0: androidcontentContext);
					public removeLoaderView(param0: androidviewView): void;
				}
			}
		}
	}
}

import javalangException = java.lang.Exception;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.smartadserver.android.library.SASInterstitialView.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASAdElement.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export class SASInterstitialView extends com.smartadserver.android.library.ui.SASAdView {
					public delayedDisplay: boolean;
					public currentProxyHandler: com.smartadserver.android.library.SASInterstitialView.ProxyHandler;
					public loadAd(param0: number, param1: string, param2: number, param3: boolean, param4: string, param5: com.smartadserver.android.library.ui.SASAdView.AdResponseHandler, param6: number): void;
					public updateVisibilityPercentage(): void;
					public reset(): void;
					public loadAd(param0: number, param1: string, param2: number, param3: boolean, param4: string, param5: com.smartadserver.android.library.ui.SASAdView.AdResponseHandler): void;
					public installLoaderView(param0: androidviewView): void;
					public onDestroy(): void;
					public closeImpl(): void;
					public expand(param0: string, param1: number, param2: number): void;
					public loadAd(param0: number, param1: string, param2: number, param3: boolean): void;
					public removeLoaderView(param0: androidviewView): void;
					public collapseImpl(): void;
					public expand(param0: string, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: boolean, param7: boolean, param8: string, param9: boolean): void;
					public computeVisibilityPercentage(): number;
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
					public expand(param0: string, param1: number, param2: number, param3: boolean): void;
					public loadAd(param0: number, param1: string, param2: number, param3: boolean, param4: string, param5: com.smartadserver.android.library.ui.SASAdView.AdResponseHandler, param6: number, param7: boolean, param8: boolean): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public expand(param0: number, param1: number, param2: boolean): void;
					public constructor(param0: androidcontentContext);
					public expand(param0: string, param1: number, param2: number, param3: boolean, param4: string): void;
					public loadAd(param0: number, param1: string, param2: number, param3: boolean, param4: string): void;
				}
				export module SASInterstitialView {
					export class ProxyHandler {
						public adPrefetchingFailed(param0: javalangException): void;
						public adPrefetchingCompleted(param0: com.smartadserver.android.library.model.SASAdElement): void;
						public adLoadingCompleted(param0: com.smartadserver.android.library.model.SASAdElement): void;
						public showInterstitial(param0: boolean): void;
						public constructor(param0: com.smartadserver.android.library.SASInterstitialView, param1: com.smartadserver.android.library.ui.SASAdView.AdResponseHandler);
						public adLoadingFailed(param0: javalangException): void;
					}
				}
			}
		}
	}
}

import orgjsonJSONObject = org.json.JSONObject;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.smartadserver.android.library.controller.SASAdViewController.d.ts" />
/// <reference path="./com.smartadserver.android.library.controller.mraid.SASMRAIDController.d.ts" />
/// <reference path="./com.smartadserver.android.library.controller.mraid.SASMRAIDSensorController.d.ts" />
/// <reference path="./com.smartadserver.android.library.controller.mraid.SASMRAIDVideoController.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASAdElement.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module controller {
					export class SASAdViewController {
						public mMRAIDController: com.smartadserver.android.library.controller.mraid.SASMRAIDController;
						public mMRAIDSensorController: com.smartadserver.android.library.controller.mraid.SASMRAIDSensorController;
						public mMRAIDVideoController: com.smartadserver.android.library.controller.mraid.SASMRAIDVideoController;
						public vibrate(param0: androidcontentContext): void;
						public loadAd(param0: number, param1: string, param2: number, param3: string, param4: boolean, param5: com.smartadserver.android.library.ui.SASAdView.AdResponseHandler, param6: number, param7: orgjsonJSONObject, param8: boolean): void;
						public setPendingLoadAdCount(param0: number): void;
						public isPendingLoadAd(): boolean;
						public playSound(param0: androidcontentContext): void;
						public displayAd(param0: com.smartadserver.android.library.model.SASAdElement): boolean;
						public destroy(): void;
						public disableListeners(): void;
						public constructor(param0: com.smartadserver.android.library.ui.SASAdView);
						public enableListeners(): void;
						public releasePendingLoadAd(): void;
					}
					export module SASAdViewController {
						export class ProxyHandler {
							public adPrefetchingFailed(param0: javalangException): void;
							public constructor(param0: com.smartadserver.android.library.controller.SASAdViewController, param1: com.smartadserver.android.library.ui.SASAdView.AdResponseHandler, param2: boolean, param3: number);
							public adLoadingCompleted(param0: com.smartadserver.android.library.model.SASAdElement): void;
							public adLoadingFailed(param0: javalangException): void;
							public adPrefetchingCompleted(param0: com.smartadserver.android.library.model.SASAdElement): void;
						}
					}
				}
			}
		}
	}
}

import androidwebkitWebChromeClient = android.webkit.WebChromeClient;
import androidwebkitWebView = android.webkit.WebView;
import androidgraphicsBitmap = android.graphics.Bitmap;
import androidwebkitWebChromeClientCustomViewCallback = android.webkit.WebChromeClient.CustomViewCallback;
import androidosMessage = android.os.Message;
import androidwebkitJsResult = android.webkit.JsResult;
import androidwebkitJsPromptResult = android.webkit.JsPromptResult;
import androidwebkitGeolocationPermissionsCallback = android.webkit.GeolocationPermissions.Callback;
import androidwebkitValueCallback = android.webkit.ValueCallback;
import androidwebkitWebStorageQuotaUpdater = android.webkit.WebStorage.QuotaUpdater;
import androidwebkitConsoleMessage = android.webkit.ConsoleMessage;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.webkit.ConsoleMessage.d.ts" />
/// <reference path="./android.webkit.JsPromptResult.d.ts" />
/// <reference path="./android.webkit.JsResult.d.ts" />
/// <reference path="./android.webkit.ValueCallback.d.ts" />
/// <reference path="./android.webkit.WebChromeClient.d.ts" />
/// <reference path="./android.webkit.WebView.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module controller {
					export class SASWebChromeClient {
						public mAdView: com.smartadserver.android.library.ui.SASAdView;
						public delegateWebChromeClient: androidwebkitWebChromeClient;
						public onCreateWindow(param0: androidwebkitWebView, param1: boolean, param2: boolean, param3: androidosMessage): boolean;
						public onReceivedTouchIconUrl(param0: androidwebkitWebView, param1: string, param2: boolean): void;
						public onHideCustomView(): void;
						public onReceivedTitle(param0: androidwebkitWebView, param1: string): void;
						public onRequestFocus(param0: androidwebkitWebView): void;
						public onJsPrompt(param0: androidwebkitWebView, param1: string, param2: string, param3: string, param4: androidwebkitJsPromptResult): boolean;
						public onProgressChanged(param0: androidwebkitWebView, param1: number): void;
						public onJsConfirm(param0: androidwebkitWebView, param1: string, param2: string, param3: androidwebkitJsResult): boolean;
						public onGeolocationPermissionsHidePrompt(): void;
						public clearAllErrors(): void;
						public onJsTimeout(): boolean;
						public hasUnrecoverableErrors(): boolean;
						public onGeolocationPermissionsShowPrompt(param0: string, param1: androidwebkitGeolocationPermissionsCallback): void;
						public onJsAlert(param0: androidwebkitWebView, param1: string, param2: string, param3: androidwebkitJsResult): boolean;
						public onReceivedIcon(param0: androidwebkitWebView, param1: androidgraphicsBitmap): void;
						public onJsBeforeUnload(param0: androidwebkitWebView, param1: string, param2: string, param3: androidwebkitJsResult): boolean;
						public onConsoleMessage(param0: string, param1: number, param2: string): void;
						public onConsoleMessage(param0: androidwebkitConsoleMessage): boolean;
						public onCloseWindow(param0: androidwebkitWebView): void;
						public setDelegateWebChromeClient(param0: androidwebkitWebChromeClient): void;
						public onReachedMaxAppCacheSize(param0: number, param1: number, param2: androidwebkitWebStorageQuotaUpdater): void;
						public getDefaultVideoPoster(): androidgraphicsBitmap;
						public onShowCustomView(param0: androidviewView, param1: androidwebkitWebChromeClientCustomViewCallback): void;
						public getVisitedHistory(param0: androidwebkitValueCallback): void;
						public constructor(param0: androidcontentContext);
						public getVideoLoadingProgressView(): androidviewView;
						public onExceededDatabaseQuota(param0: string, param1: string, param2: number, param3: number, param4: number, param5: androidwebkitWebStorageQuotaUpdater): void;
					}
				}
			}
		}
	}
}

import androidwebkitWebViewClient = android.webkit.WebViewClient;
import androidwebkitHttpAuthHandler = android.webkit.HttpAuthHandler;
import androidviewKeyEvent = android.view.KeyEvent;
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.webkit.HttpAuthHandler.d.ts" />
/// <reference path="./android.webkit.WebView.d.ts" />
/// <reference path="./android.webkit.WebViewClient.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module controller {
					export class SASWebViewClient {
						public mAdView: com.smartadserver.android.library.ui.SASAdView;
						public delegateWebViewClient: androidwebkitWebViewClient;
						public constructor();
						public onReceivedHttpAuthRequest(param0: androidwebkitWebView, param1: androidwebkitHttpAuthHandler, param2: string, param3: string): void;
						public clearAllErrors(): void;
						public hasUnrecoverableErrors(): boolean;
						public onScaleChanged(param0: androidwebkitWebView, param1: number, param2: number): void;
						public onTooManyRedirects(param0: androidwebkitWebView, param1: androidosMessage, param2: androidosMessage): void;
						public shouldOverrideUrlLoading(param0: androidwebkitWebView, param1: string): boolean;
						public onUnhandledKeyEvent(param0: androidwebkitWebView, param1: androidviewKeyEvent): void;
						public onPageStarted(param0: androidwebkitWebView, param1: string, param2: androidgraphicsBitmap): void;
						public onPageFinished(param0: androidwebkitWebView, param1: string): void;
						public doUpdateVisitedHistory(param0: androidwebkitWebView, param1: string, param2: boolean): void;
						public onLoadResource(param0: androidwebkitWebView, param1: string): void;
						public shouldOverrideKeyEvent(param0: androidwebkitWebView, param1: androidviewKeyEvent): boolean;
						public onFormResubmission(param0: androidwebkitWebView, param1: androidosMessage, param2: androidosMessage): void;
						public onReceivedError(param0: androidwebkitWebView, param1: number, param2: string, param3: string): void;
						public setDelegateWebViewClient(param0: androidwebkitWebViewClient): void;
					}
				}
			}
		}
	}
}

import androidgraphicsRect = android.graphics.Rect;
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module controller {
					export module mraid {
						export class SASMRAIDController {
							public static MRAID_TAG: string;
							public static MRAID_BRIDGE_URL: string;
							public static MRAID_BRIDGE_JS_NAME: string;
							public createCalendarEvent(param0: string): void;
							public isViewable(): boolean;
							public close(): void;
							public expand(): void;
							public setExpandUseCustomCloseProperty(param0: boolean): void;
							public getScreenWidth(): number;
							public setViewable(param0: boolean): void;
							public reset(): void;
							public setState(param0: string): void;
							public initMRAIDProperties(): void;
							public executeJSFromNative(param0: string): void;
							public getCurrentPosition(): string;
							public getMaxSizeString(): string;
							public getPlacementType(): string;
							public getMaxHeight(): number;
							public getScreenHeight(): number;
							public getExpandProperties(): string;
							public getLocation(): string;
							public onLocationChange(): void;
							public isLandscapeDevice(): boolean;
							public setExpandProperties(param0: string): void;
							public getScreenSizeString(): string;
							public getExpandPolicy(): number;
							public firePendingStateChangeEvent(): void;
							public setClickableAreas(param0: string): void;
							public callJS(param0: string): void;
							public setEnableStateChangeEvent(param0: boolean): void;
							public onOrientationChange(param0: number): void;
							public static addHTMLWrapperAndMRAIDTagInContent(param0: string): string;
							public setOrientationProperties(param0: string): void;
							public getMaxWidth(): number;
							public request(param0: string, param1: string): void;
							public getDefaultPosition(): string;
							public sendMessage(param0: string): void;
							public getResizeProperties(): string;
							public getState(): string;
							public getPositionAsJSON(param0: androidgraphicsRect): string;
							public constructor(param0: com.smartadserver.android.library.ui.SASAdView);
							public static addTransferTouchEventsPollingScript(param0: string): string;
							public expand(param0: string): void;
							public resize(): void;
							public getOrientationProperties(): string;
							public getBase64Screenshot(param0: number): string;
							public applyCloseButtonVisibility(param0: boolean): void;
							public isUseCustomClose(): boolean;
							public setResizeProperties(param0: string): void;
							public createEvent(param0: number, param1: string, param2: string, param3: number): void;
							public open(param0: string): void;
							public setCloseOnClick(param0: boolean): void;
							public setExpandPolicy(param0: number): void;
							public getOrientation(): number;
							public fireErrorEvent(param0: string, param1: string): void;
							public fireSizeChangeEvent(param0: number, param1: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module controller {
					export module mraid {
						export class SASMRAIDExpandProperties {
							public static WIDTH_PROPERTY: string;
							public static HEIGHT_PROPERTY: string;
							public static IS_MODAL_PROPERTY: string;
							public static USE_CUSTOM_CLOSE_PROPERTY: string;
							public width: number;
							public height: number;
							public useCustomClose: boolean;
							public isModal: boolean;
							public constructor();
							public toJSONString(): string;
							public updateFromJSON(param0: string): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module controller {
					export module mraid {
						export class SASMRAIDOrientationProperties {
							public static NONE: string;
							public static PORTRAIT: string;
							public static LANDSCAPE: string;
							public static ALLOW_ORIENTATION_CHANGE_PROPERTY: string;
							public static FORCE_ORIENTATION_PROPERTY: string;
							public allowOrientationChange: boolean;
							public forceOrientation: string;
							public constructor();
							public toJSONString(): string;
							public updateFromJSON(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module controller {
					export module mraid {
						export class SASMRAIDPlacementType {
							public static INLINE: string;
							public static INTERSTITIAL: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module controller {
					export module mraid {
						export class SASMRAIDResizeProperties {
							public static TOP_RIGHT: string;
							public static TOP_LEFT: string;
							public static BOTTOM_RIGHT: string;
							public static BOTTOM_LEFT: string;
							public static TOP_CENTER: string;
							public static CENTER: string;
							public static BOTTOM_CENTER: string;
							public static NONE: string;
							public static WIDTH_PROPERTY: string;
							public static HEIGHT_PROPERTY: string;
							public static CUSTOM_CLOSE_POSITION_PROPERTY: string;
							public static OFFSET_X_PROPERTY: string;
							public static OFFSET_Y_PROPERTY: string;
							public static ALLOW_OFFSCREEN_PROPERTY: string;
							public width: number;
							public height: number;
							public customClosePosition: string;
							public offsetX: number;
							public offsetY: number;
							public allowOffscreen: boolean;
							public constructor();
							public toJSONString(): string;
							public getCustomClosePositionAsInt(): number;
							public updateFromJSON(param0: string): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module controller {
					export module mraid {
						export class SASMRAIDSensorController {
							public static MRAID_SENSOR_JS_NAME: string;
							public startHeadingListener(): void;
							public getTilt(): string;
							public stopShakeListener(): void;
							public getHeading(): number;
							public init(): void;
							public onTilt(param0: number, param1: number, param2: number): void;
							public startTiltListener(): void;
							public disableListeners(): void;
							public isTrackingHeading(): boolean;
							public onShake(): void;
							public startShakeListener(): void;
							public constructor(param0: com.smartadserver.android.library.ui.SASAdView);
							public stopHeadingListener(): void;
							public onHeadingChange(param0: number): void;
							public stopTiltListener(): void;
							public isTrackingShake(): boolean;
							public isTrackingTilt(): boolean;
							public enableListeners(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module controller {
					export module mraid {
						export class SASMRAIDState {
							public static LOADING: string;
							public static DEFAULT: string;
							public static EXPANDED: string;
							public static HIDDEN: string;
							public static RESIZED: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

import androidosParcel = android.os.Parcel;
import androidosParcelableCreator = android.os.Parcelable.Creator;
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module controller {
					export module mraid {
						export class SASMRAIDVideoConfig {
							public static START_STYLE_FULLSCREEN: string;
							public static STOP_STYLE_EXIT: string;
							public static CREATOR: androidosParcelableCreator;
							public getWidth(): number;
							public constructor(param0: string, param1: number, param2: number, param3: boolean, param4: boolean, param5: boolean, param6: boolean, param7: string, param8: string);
							public isLoop(): boolean;
							public writeToParcel(param0: androidosParcel, param1: number): void;
							public isExitStopStyle(): boolean;
							public isAudioMuted(): boolean;
							public getStartStyle(): string;
							public hasControls(): boolean;
							public isAutoPlay(): boolean;
							public getURL(): string;
							public getHeight(): number;
							public getVideoRatio(): number;
							public describeContents(): number;
							public getStopStyle(): string;
							public isFullscreenStartStyle(): boolean;
						}
					}
				}
			}
		}
	}
}

import androidmediaMediaPlayerOnCompletionListener = android.media.MediaPlayer.OnCompletionListener;
import androidmediaMediaPlayerOnErrorListener = android.media.MediaPlayer.OnErrorListener;
import androidmediaMediaPlayerOnPreparedListener = android.media.MediaPlayer.OnPreparedListener;
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module controller {
					export module mraid {
						export class SASMRAIDVideoController {
							public static MRAID_VIDEO_JS_NAME: string;
							public onVideoViewCompletionListener: androidmediaMediaPlayerOnCompletionListener;
							public onVideoViewErrorListener: androidmediaMediaPlayerOnErrorListener;
							public onVideoViewPreparedListener: androidmediaMediaPlayerOnPreparedListener;
							public onOrientationChanged(): void;
							public constructor(param0: com.smartadserver.android.library.ui.SASAdView);
							public onVideoViewVisibilityChanged(param0: number): void;
							public volumeChanged(): void;
							public playVideo(param0: string, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: native.Array<number>, param6: string, param7: string): void;
							public releasePlayer(): void;
							public playVideoInNativePlayer(param0: string): void;
							public setCloseButtonPosition(param0: number): void;
						}
					}
				}
			}
		}
	}
}

import androidhardwareSensor = android.hardware.Sensor;
import androidhardwareSensorEvent = android.hardware.SensorEvent;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.hardware.Sensor.d.ts" />
/// <reference path="./android.hardware.SensorEvent.d.ts" />
/// <reference path="./com.smartadserver.android.library.controller.mraid.SASMRAIDSensorController.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module controller {
					export module mraid {
						export module listener {
							export class SASAccelerationListener {
								public stopTrackingShake(): void;
								public stopTrackingHeading(): void;
								public stopTrackingTilt(): void;
								public startTrackingShake(): void;
								public getHeading(): number;
								public startTrackingHeading(): void;
								public stopAllListeners(): void;
								public startTrackingTilt(): void;
								public setSensorDelay(param0: number): void;
								public constructor(param0: androidcontentContext, param1: com.smartadserver.android.library.controller.mraid.SASMRAIDSensorController);
								public onSensorChanged(param0: androidhardwareSensorEvent): void;
								public stop(): void;
								public onAccuracyChanged(param0: androidhardwareSensor, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

import javalangThrowable = java.lang.Throwable;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module exception {
					export class SASAdCachingException extends com.smartadserver.android.library.exception.SASException {
						public constructor();
						public constructor(param0: javalangThrowable);
						public constructor(param0: string, param1: javalangThrowable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module exception {
					export class SASAdDisplayException extends com.smartadserver.android.library.exception.SASException {
						public constructor();
						public constructor(param0: javalangThrowable);
						public constructor(param0: string, param1: javalangThrowable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module exception {
					export class SASAdTimeoutException extends com.smartadserver.android.library.exception.SASException {
						public constructor();
						public constructor(param0: javalangThrowable);
						public constructor(param0: string, param1: javalangThrowable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module exception {
					export class SASException {
						public constructor();
						public constructor(param0: javalangThrowable);
						public constructor(param0: string, param1: javalangThrowable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module exception {
					export class SASInvalidJSONException extends com.smartadserver.android.library.exception.SASException {
						public constructor();
						public constructor(param0: javalangThrowable);
						public constructor(param0: string, param1: javalangThrowable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module exception {
					export class SASNoAdToDeliverException extends com.smartadserver.android.library.exception.SASException {
						public constructor();
						public constructor(param0: javalangThrowable);
						public constructor(param0: string, param1: javalangThrowable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module exception {
					export class SASNoAdToDeliverFromCacheException extends com.smartadserver.android.library.exception.SASException {
						public constructor();
						public constructor(param0: javalangThrowable);
						public constructor(param0: string, param1: javalangThrowable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module exception {
					export class SASPendingRequestException extends com.smartadserver.android.library.exception.SASException {
						public constructor();
						public constructor(param0: javalangThrowable);
						public constructor(param0: string, param1: javalangThrowable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module exception {
					export class SASRemoteErrorHelper {
						public static ERROR_HANDLER_PATH: string;
						public constructor();
						public static logRemoteError(param0: androidcontentContext, param1: string, param2: javalangException, param3: string, param4: string, param5: string, param6: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module exception {
					export class SASVASTParsingException extends com.smartadserver.android.library.exception.SASException {
						public constructor();
						public constructor(param0: javalangThrowable);
						public constructor(param0: string, param1: javalangThrowable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

import orgapachehttpclientHttpClient = org.apache.http.client.HttpClient;
import orgapachehttpclientmethodsHttpGet = org.apache.http.client.methods.HttpGet;
import orgapachehttpclientmethodsHttpPost = org.apache.http.client.methods.HttpPost;
import orgapachehttpimplclientDefaultHttpClient = org.apache.http.impl.client.DefaultHttpClient;
import orgapachehttpclientmethodsHttpUriRequest = org.apache.http.client.methods.HttpUriRequest;
import orgapachehttpHttpEntity = org.apache.http.HttpEntity;
import javaioInputStream = java.io.InputStream;
/// <reference path="./com.smartadserver.android.library.exception.SASException.d.ts" />
/// <reference path="./com.smartadserver.android.library.http.SASAsyncHttpClient.d.ts" />
/// <reference path="./com.smartadserver.android.library.http.SASAsyncHttpResponseHandler.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.apache.http.HttpEntity.d.ts" />
/// <reference path="./org.apache.http.client.HttpClient.d.ts" />
/// <reference path="./org.apache.http.client.methods.HttpGet.d.ts" />
/// <reference path="./org.apache.http.client.methods.HttpPost.d.ts" />
/// <reference path="./org.apache.http.client.methods.HttpUriRequest.d.ts" />
/// <reference path="./org.apache.http.impl.client.DefaultHttpClient.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module http {
					export class SASAsyncHttpClient {
						public static syncCookiesFromAppCookieManager(param0: string, param1: orgapachehttpimplclientDefaultHttpClient): void;
						public isNoShow(): boolean;
						public constructor(param0: string, param1: number);
						public static syncCookiesToAppCookieManager(param0: string, param1: orgapachehttpimplclientDefaultHttpClient): void;
						public getInsertionID(): string;
						public get(param0: orgapachehttpclientmethodsHttpGet, param1: com.smartadserver.android.library.http.SASAsyncHttpResponseHandler): void;
						public post(param0: orgapachehttpclientmethodsHttpPost, param1: com.smartadserver.android.library.http.SASAsyncHttpResponseHandler): void;
						public setHttpClient(param0: orgapachehttpclientHttpClient): void;
						public abort(): void;
						public constructor(param0: string);
					}
					export module SASAsyncHttpClient {
						export class HttpRequestThread {
							public constructor(param0: com.smartadserver.android.library.http.SASAsyncHttpClient, param1: orgapachehttpclientmethodsHttpUriRequest, param2: com.smartadserver.android.library.http.SASAsyncHttpResponseHandler, param3: orgapachehttpclientHttpClient);
							public abort(param0: com.smartadserver.android.library.exception.SASException): void;
							public run(): void;
						}
						export class InflatingEntity {
							public constructor(param0: orgapachehttpHttpEntity);
							public close(): void;
							public getContent(): javaioInputStream;
							public getContentLength(): number;
							public consumeContent(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module http {
					export class SASAsyncHttpResponseHandler {
						/**
						 * Constructs a new instance of the com.smartadserver.android.library.http.SASAsyncHttpResponseHandler interface with the provided implementation.
						 */
						public constructor(implementation: {
							onSuccess(param0: string): void;
							onFail(param0: javalangException): void;
						});
						public onFail(param0: javalangException): void;
						public onSuccess(param0: string): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.apache.http.client.HttpClient.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module http {
					export class SASHttpRequestManager {
						public static PENDING_URL_CALLS_FILENAME: string;
						public getUrlCallAttemptCount(): number;
						public static getInstance(param0: androidcontentContext): com.smartadserver.android.library.http.SASHttpRequestManager;
						public setUrlCallAttemptCount(param0: number): void;
						public constructor(param0: androidcontentContext);
						public setHttpClient(param0: orgapachehttpclientHttpClient): void;
						public attachToContext(param0: androidcontentContext): void;
						public callUrl(param0: string, param1: boolean): void;
					}
				}
			}
		}
	}
}

import javalangObject = java.lang.Object;
/// <reference path="./com.smartadserver.android.library.model.SASAdElement.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASNativeAdElement.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module json {
					export class SASAdElementJSONParser {
						public constructor();
						public static nativeAdFromJsonString(param0: string, param1: number): com.smartadserver.android.library.model.SASNativeAdElement;
						public equals(param0: javalangObject): boolean;
						public static nativeAdFromJsonString(param0: string): com.smartadserver.android.library.model.SASNativeAdElement;
						public static createNativeAdElement(param0: orgjsonJSONObject, param1: number): com.smartadserver.android.library.model.SASAdElement;
						public static adFromJsonString(param0: string): com.smartadserver.android.library.model.SASAdElement;
						public static adFromJsonString(param0: string, param1: number): com.smartadserver.android.library.model.SASAdElement;
					}
				}
			}
		}
	}
}

import javautilHashMap = java.util.HashMap;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.smartadserver.android.library.mediation.SASMediationAdContent.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module mediation {
					export class SASAdColonyAdapter {
						public requestAd(param0: androidcontentContext, param1: com.smartadserver.android.library.ui.SASAdView, param2: javautilHashMap, param3: com.smartadserver.android.library.mediation.SASMediationSDKAdapter.AdRequestHandler): void;
						public constructor();
						public isSDKAvailable(): boolean;
						public getMediationAdContent(): com.smartadserver.android.library.mediation.SASMediationAdContent;
						public destroy(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.google.android.gms.ads.formats.NativeAppInstallAd.d.ts" />
/// <reference path="./com.google.android.gms.ads.formats.NativeContentAd.d.ts" />
/// <reference path="./com.google.android.gms.ads.reward.RewardItem.d.ts" />
/// <reference path="./com.smartadserver.android.library.mediation.SASAdMobAdapter.d.ts" />
/// <reference path="./com.smartadserver.android.library.mediation.SASMediationAdContent.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASNativeVideoAdElement.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module mediation {
					export class SASAdMobAdapter {
						public requestAd(param0: androidcontentContext, param1: com.smartadserver.android.library.ui.SASAdView, param2: javautilHashMap, param3: com.smartadserver.android.library.mediation.SASMediationSDKAdapter.AdRequestHandler): void;
						public constructor();
						public isSDKAvailable(): boolean;
						public getMediationAdContent(): com.smartadserver.android.library.mediation.SASMediationAdContent;
						public destroy(): void;
					}
					export module SASAdMobAdapter {
						export class AdListenerImpl {
							public onAdFailedToLoad(param0: number): void;
							public onAdOpened(): void;
							public onAdLoaded(): void;
							public constructor(param0: com.smartadserver.android.library.mediation.SASAdMobAdapter, param1: string);
							public onAdClosed(): void;
							public onAdLeftApplication(): void;
						}
						export class AdMobNativeAdContent {
							public getMediaView(param0: androidcontentContext): androidviewView;
							public getMediaElement(): com.smartadserver.android.library.model.SASNativeVideoAdElement;
							public getCoverImageHeight(): number;
							public unregisterView(param0: androidviewView): void;
							public registerView(param0: androidviewView, param1: native.Array<androidviewView>): void;
							public getAdChoicesUrl(): string;
							public constructor(param0: com.smartadserver.android.library.mediation.SASAdMobAdapter, param1: com.google.android.gms.ads.formats.NativeAppInstallAd);
							public getIconHeight(): number;
							public getTitle(): string;
							public getCoverImageWidth(): number;
							public getSponsoredMessage(): string;
							public constructor(param0: com.smartadserver.android.library.mediation.SASAdMobAdapter, param1: com.google.android.gms.ads.formats.NativeContentAd);
							public getIconUrl(): string;
							public getSubTitle(): string;
							public getCoverImageUrl(): string;
							public getIconWidth(): number;
							public getCallToAction(): string;
							public getRating(): number;
							public getBody(): string;
						}
						export class RewardedVideoListenerImpl {
							public onRewarded(param0: com.google.android.gms.ads.reward.RewardItem): void;
							public onRewardedVideoStarted(): void;
							public onRewardedVideoAdClosed(): void;
							public onRewardedVideoAdLoaded(): void;
							public onRewardedVideoAdOpened(): void;
							public onRewardedVideoAdFailedToLoad(param0: number): void;
							public onRewardedVideoAdLeftApplication(): void;
						}
					}
				}
			}
		}
	}
}

import javautilMap = java.util.Map;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.applovin.nativeAds.AppLovinNativeAd.d.ts" />
/// <reference path="./com.applovin.sdk.AppLovinAd.d.ts" />
/// <reference path="./com.smartadserver.android.library.mediation.SASAppLovinAdapter.d.ts" />
/// <reference path="./com.smartadserver.android.library.mediation.SASMediationAdContent.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASNativeVideoAdElement.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module mediation {
					export class SASAppLovinAdapter {
						public requestAd(param0: androidcontentContext, param1: com.smartadserver.android.library.ui.SASAdView, param2: javautilHashMap, param3: com.smartadserver.android.library.mediation.SASMediationSDKAdapter.AdRequestHandler): void;
						public constructor();
						public isSDKAvailable(): boolean;
						public getMediationAdContent(): com.smartadserver.android.library.mediation.SASMediationAdContent;
						public destroy(): void;
						public init(param0: androidcontentContext): void;
					}
					export module SASAppLovinAdapter {
						export class ApplovinNativeAdContent {
							public getMediaElement(): com.smartadserver.android.library.model.SASNativeVideoAdElement;
							public getMediaView(param0: androidcontentContext): androidviewView;
							public getCoverImageHeight(): number;
							public unregisterView(param0: androidviewView): void;
							public registerView(param0: androidviewView, param1: native.Array<androidviewView>): void;
							public getAdChoicesUrl(): string;
							public getIconHeight(): number;
							public getTitle(): string;
							public constructor(param0: com.smartadserver.android.library.mediation.SASAppLovinAdapter, param1: com.applovin.nativeAds.AppLovinNativeAd);
							public getCoverImageWidth(): number;
							public getSponsoredMessage(): string;
							public getIconUrl(): string;
							public getSubTitle(): string;
							public getCoverImageUrl(): string;
							public getIconWidth(): number;
							public getCallToAction(): string;
							public getRating(): number;
							public getBody(): string;
						}
						export class InterstitialListener {
							public adHidden(param0: com.applovin.sdk.AppLovinAd): void;
							public videoPlaybackBegan(param0: com.applovin.sdk.AppLovinAd): void;
							public videoPlaybackEnded(param0: com.applovin.sdk.AppLovinAd, param1: number, param2: boolean): void;
							public constructor(param0: com.smartadserver.android.library.mediation.SASAppLovinAdapter, param1: string);
							public adClicked(param0: com.applovin.sdk.AppLovinAd): void;
							public adDisplayed(param0: com.applovin.sdk.AppLovinAd): void;
						}
						export class RewardListener {
							public validationRequestFailed(param0: com.applovin.sdk.AppLovinAd, param1: number): void;
							public userDeclinedToViewAd(param0: com.applovin.sdk.AppLovinAd): void;
							public userRewardVerified(param0: com.applovin.sdk.AppLovinAd, param1: javautilMap): void;
							public getAmount(): number;
							public userRewardRejected(param0: com.applovin.sdk.AppLovinAd, param1: javautilMap): void;
							public userOverQuota(param0: com.applovin.sdk.AppLovinAd, param1: javautilMap): void;
							public getCurrencyName(): string;
							public reset(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.mngads.sdk.nativead.MNGHimonoAd.d.ts" />
/// <reference path="./com.mngads.sdk.nativead.MNGNativeAd.d.ts" />
/// <reference path="./com.mngads.sdk.nativead.MNGSushiAd.d.ts" />
/// <reference path="./com.smartadserver.android.library.mediation.SASMediationAdContent.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module mediation {
					export class SASAppsfireAdapter {
						public requestAd(param0: androidcontentContext, param1: com.smartadserver.android.library.ui.SASAdView, param2: javautilHashMap, param3: com.smartadserver.android.library.mediation.SASMediationSDKAdapter.AdRequestHandler): void;
						public constructor();
						public isSDKAvailable(): boolean;
						public init(): void;
						public getMediationAdContent(): com.smartadserver.android.library.mediation.SASMediationAdContent;
						public destroy(): void;
					}
					export module SASAppsfireAdapter {
						export class MNGHimonoAdListenerImpl {
							public himonoBannerViewDidFailToLoadAd(param0: com.mngads.sdk.nativead.MNGHimonoAd, param1: javalangException): void;
							public himonoBannerViewDidLoadAd(param0: com.mngads.sdk.nativead.MNGHimonoAd): void;
							public himonoBannerViewDidRecordClick(param0: com.mngads.sdk.nativead.MNGHimonoAd): void;
						}
						export class MNGNativeAdListenerImpl {
							public onInterstitialDismissed(param0: com.mngads.sdk.nativead.MNGSushiAd): void;
							public onError(param0: com.mngads.sdk.nativead.MNGNativeAd, param1: javalangException): void;
							public onAdClicked(param0: com.mngads.sdk.nativead.MNGNativeAd): void;
							public onAdLoaded(param0: com.mngads.sdk.nativead.MNGNativeAd): void;
							public onAdClicked(param0: com.mngads.sdk.nativead.MNGSushiAd): void;
							public onInterstitialDisplayed(param0: com.mngads.sdk.nativead.MNGSushiAd): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.facebook.ads.Ad.d.ts" />
/// <reference path="./com.facebook.ads.AdError.d.ts" />
/// <reference path="./com.facebook.ads.NativeAd.d.ts" />
/// <reference path="./com.smartadserver.android.library.mediation.SASFacebookAdapter.d.ts" />
/// <reference path="./com.smartadserver.android.library.mediation.SASMediationAdContent.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASNativeVideoAdElement.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module mediation {
					export class SASFacebookAdapter {
						public requestAd(param0: androidcontentContext, param1: com.smartadserver.android.library.ui.SASAdView, param2: javautilHashMap, param3: com.smartadserver.android.library.mediation.SASMediationSDKAdapter.AdRequestHandler): void;
						public constructor();
						public isSDKAvailable(): boolean;
						public getMediationAdContent(): com.smartadserver.android.library.mediation.SASMediationAdContent;
						public destroy(): void;
					}
					export module SASFacebookAdapter {
						export class AdListenerImpl {
							public onLoggingImpression(param0: com.facebook.ads.Ad): void;
							public onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
							public onAdLoaded(param0: com.facebook.ads.Ad): void;
							public onInterstitialDismissed(param0: com.facebook.ads.Ad): void;
							public onAdClicked(param0: com.facebook.ads.Ad): void;
							public onInterstitialDisplayed(param0: com.facebook.ads.Ad): void;
						}
						export class FacebookNativeAdContent {
							public getMediaView(param0: androidcontentContext): androidviewView;
							public getMediaElement(): com.smartadserver.android.library.model.SASNativeVideoAdElement;
							public getCoverImageHeight(): number;
							public unregisterView(param0: androidviewView): void;
							public registerView(param0: androidviewView, param1: native.Array<androidviewView>): void;
							public getAdChoicesUrl(): string;
							public getIconHeight(): number;
							public getTitle(): string;
							public getCoverImageWidth(): number;
							public getSponsoredMessage(): string;
							public getIconUrl(): string;
							public getSubTitle(): string;
							public getCoverImageUrl(): string;
							public getIconWidth(): number;
							public getCallToAction(): string;
							public getRating(): number;
							public getBody(): string;
							public constructor(param0: com.smartadserver.android.library.mediation.SASFacebookAdapter, param1: com.facebook.ads.NativeAd);
						}
						export class NativeAdListenerImpl {
							public onLoggingImpression(param0: com.facebook.ads.Ad): void;
							public onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
							public onAdLoaded(param0: com.facebook.ads.Ad): void;
							public onAdClicked(param0: com.facebook.ads.Ad): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.inmobi.ads.InMobiAdRequestStatus.d.ts" />
/// <reference path="./com.inmobi.ads.InMobiBanner.d.ts" />
/// <reference path="./com.inmobi.ads.InMobiInterstitial.d.ts" />
/// <reference path="./com.smartadserver.android.library.mediation.SASMediationAdContent.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module mediation {
					export class SASInMobiAdapter {
						public requestAd(param0: androidcontentContext, param1: com.smartadserver.android.library.ui.SASAdView, param2: javautilHashMap, param3: com.smartadserver.android.library.mediation.SASMediationSDKAdapter.AdRequestHandler): void;
						public constructor();
						public isSDKAvailable(): boolean;
						public getMediationAdContent(): com.smartadserver.android.library.mediation.SASMediationAdContent;
						public destroy(): void;
						public init(param0: androidcontentContext): void;
					}
					export module SASInMobiAdapter {
						export class IMBannerListenerImpl {
							public onAdDismissed(param0: com.inmobi.ads.InMobiBanner): void;
							public onAdLoadFailed(param0: com.inmobi.ads.InMobiBanner, param1: com.inmobi.ads.InMobiAdRequestStatus): void;
							public onAdDisplayed(param0: com.inmobi.ads.InMobiBanner): void;
							public onUserLeftApplication(param0: com.inmobi.ads.InMobiBanner): void;
							public onAdLoadSucceeded(param0: com.inmobi.ads.InMobiBanner): void;
							public onAdInteraction(param0: com.inmobi.ads.InMobiBanner, param1: javautilMap): void;
							public onAdRewardActionCompleted(param0: com.inmobi.ads.InMobiBanner, param1: javautilMap): void;
						}
						export class IMInterstitialListenerImpl {
							public onAdDisplayed(param0: com.inmobi.ads.InMobiInterstitial): void;
							public onAdInteraction(param0: com.inmobi.ads.InMobiInterstitial, param1: javautilMap): void;
							public onAdLoadFailed(param0: com.inmobi.ads.InMobiInterstitial, param1: com.inmobi.ads.InMobiAdRequestStatus): void;
							public onAdLoadSucceeded(param0: com.inmobi.ads.InMobiInterstitial): void;
							public onUserLeftApplication(param0: com.inmobi.ads.InMobiInterstitial): void;
							public onAdWillDisplay(param0: com.inmobi.ads.InMobiInterstitial): void;
							public onAdDismissed(param0: com.inmobi.ads.InMobiInterstitial): void;
							public onAdReceived(param0: com.inmobi.ads.InMobiInterstitial): void;
							public onAdDisplayFailed(param0: com.inmobi.ads.InMobiInterstitial): void;
							public onAdRewardActionCompleted(param0: com.inmobi.ads.InMobiInterstitial, param1: javautilMap): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASNativeVideoAdElement.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module mediation {
					export class SASMediationAdContent {
						/**
						 * Constructs a new instance of the com.smartadserver.android.library.mediation.SASMediationAdContent interface with the provided implementation.
						 */
						public constructor(implementation: {
							getAdView(): androidviewView;
							getNativeAdContent(): com.smartadserver.android.library.mediation.SASMediationAdContent.NativeAdContent;
						});
						public getAdView(): androidviewView;
						public getNativeAdContent(): com.smartadserver.android.library.mediation.SASMediationAdContent.NativeAdContent;
					}
					export module SASMediationAdContent {
						export class NativeAdContent {
							/**
							 * Constructs a new instance of the com.smartadserver.android.library.mediation.SASMediationAdContent$NativeAdContent interface with the provided implementation.
							 */
							public constructor(implementation: {
								getTitle(): string;
								getSubTitle(): string;
								getBody(): string;
								getIconUrl(): string;
								getIconWidth(): number;
								getIconHeight(): number;
								getCoverImageUrl(): string;
								getCoverImageWidth(): number;
								getCoverImageHeight(): number;
								getRating(): number;
								getCallToAction(): string;
								getSponsoredMessage(): string;
								getMediaElement(): com.smartadserver.android.library.model.SASNativeVideoAdElement;
								getMediaView(param0: androidcontentContext): androidviewView;
								unregisterView(param0: androidviewView): void;
								registerView(param0: androidviewView, param1: native.Array<androidviewView>): void;
								getAdChoicesUrl(): string;
							});
							public getMediaElement(): com.smartadserver.android.library.model.SASNativeVideoAdElement;
							public getMediaView(param0: androidcontentContext): androidviewView;
							public getCoverImageHeight(): number;
							public unregisterView(param0: androidviewView): void;
							public registerView(param0: androidviewView, param1: native.Array<androidviewView>): void;
							public getAdChoicesUrl(): string;
							public getIconHeight(): number;
							public getTitle(): string;
							public getCoverImageWidth(): number;
							public getSponsoredMessage(): string;
							public getIconUrl(): string;
							public getSubTitle(): string;
							public getCoverImageUrl(): string;
							public getIconWidth(): number;
							public getCallToAction(): string;
							public getRating(): number;
							public getBody(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASMediationAdElement.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module mediation {
					export class SASMediationAdManager {
						public constructor(param0: androidcontentContext, param1: com.smartadserver.android.library.ui.SASAdView);
						public destroy(): void;
						public fetchAd(param0: native.Array<com.smartadserver.android.library.model.SASMediationAdElement>, param1: number): com.smartadserver.android.library.model.SASMediationAdElement;
						public onAdClick(): void;
						public getMediationErrors(): javautilHashMap;
					}
					export module SASMediationAdManager {
						export class AdRequestHandlerImpl {
							public cancel(): void;
							public adRequestFailed(param0: string): void;
							public getResponse(): number;
							public getError(): string;
							public adRequestSucceeded(): boolean;
							public adWasClicked(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.smartadserver.android.library.mediation.SASMediationAdContent.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module mediation {
					export class SASMediationSDKAdapter {
						/**
						 * Constructs a new instance of the com.smartadserver.android.library.mediation.SASMediationSDKAdapter interface with the provided implementation.
						 */
						public constructor(implementation: {
							isSDKAvailable(): boolean;
							requestAd(param0: androidcontentContext, param1: com.smartadserver.android.library.ui.SASAdView, param2: javautilHashMap, param3: com.smartadserver.android.library.mediation.SASMediationSDKAdapter.AdRequestHandler): void;
							getMediationAdContent(): com.smartadserver.android.library.mediation.SASMediationAdContent;
							destroy(): void;
						});
						public requestAd(param0: androidcontentContext, param1: com.smartadserver.android.library.ui.SASAdView, param2: javautilHashMap, param3: com.smartadserver.android.library.mediation.SASMediationSDKAdapter.AdRequestHandler): void;
						public isSDKAvailable(): boolean;
						public getMediationAdContent(): com.smartadserver.android.library.mediation.SASMediationAdContent;
						public destroy(): void;
					}
					export module SASMediationSDKAdapter {
						export class AdRequestHandler {
							/**
							 * Constructs a new instance of the com.smartadserver.android.library.mediation.SASMediationSDKAdapter$AdRequestHandler interface with the provided implementation.
							 */
							public constructor(implementation: {
								adRequestSucceeded(): boolean;
								adRequestFailed(param0: string): void;
								adWasClicked(): void;
							});
							public adRequestFailed(param0: string): void;
							public adRequestSucceeded(): boolean;
							public adWasClicked(): void;
						}
					}
				}
			}
		}
	}
}

import javalangClass = java.lang.Class;
/// <reference path="./java.lang.Class.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module mediation {
					export class SASMediationSDKUtil {
						public constructor();
						public static getMediationSDKName(param0: number): string;
						public static getMediationSDKAdapterClass(param0: number): javalangClass;
						public static isSDKAvailable(param0: number): boolean;
						public static getAvailableSDKIDs(): native.Array<number>;
					}
				}
			}
		}
	}
}

import androidappActivity = android.app.Activity;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.millennialmedia.InlineAd.d.ts" />
/// <reference path="./com.millennialmedia.InterstitialAd.d.ts" />
/// <reference path="./com.smartadserver.android.library.mediation.SASMediationAdContent.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module mediation {
					export class SASMillennialAdapter {
						public init(param0: androidappActivity): void;
						public requestAd(param0: androidcontentContext, param1: com.smartadserver.android.library.ui.SASAdView, param2: javautilHashMap, param3: com.smartadserver.android.library.mediation.SASMediationSDKAdapter.AdRequestHandler): void;
						public constructor();
						public isSDKAvailable(): boolean;
						public getMediationAdContent(): com.smartadserver.android.library.mediation.SASMediationAdContent;
						public destroy(): void;
					}
					export module SASMillennialAdapter {
						export class InlineListenerImpl {
							public onRequestFailed(param0: com.millennialmedia.InlineAd, param1: com.millennialmedia.InlineAd.InlineErrorStatus): void;
							public onResize(param0: com.millennialmedia.InlineAd, param1: number, param2: number): void;
							public onRequestSucceeded(param0: com.millennialmedia.InlineAd): void;
							public onCollapsed(param0: com.millennialmedia.InlineAd): void;
							public onAdLeftApplication(param0: com.millennialmedia.InlineAd): void;
							public onResized(param0: com.millennialmedia.InlineAd, param1: number, param2: number, param3: boolean): void;
							public onClicked(param0: com.millennialmedia.InlineAd): void;
							public onExpanded(param0: com.millennialmedia.InlineAd): void;
						}
						export class InterstitialListenerImpl {
							public onAdLeftApplication(param0: com.millennialmedia.InterstitialAd): void;
							public onShowFailed(param0: com.millennialmedia.InterstitialAd, param1: com.millennialmedia.InterstitialAd.InterstitialErrorStatus): void;
							public onShown(param0: com.millennialmedia.InterstitialAd): void;
							public onLoaded(param0: com.millennialmedia.InterstitialAd): void;
							public onClicked(param0: com.millennialmedia.InterstitialAd): void;
							public onExpired(param0: com.millennialmedia.InterstitialAd): void;
							public onLoadFailed(param0: com.millennialmedia.InterstitialAd, param1: com.millennialmedia.InterstitialAd.InterstitialErrorStatus): void;
							public onClosed(param0: com.millennialmedia.InterstitialAd): void;
						}
					}
				}
			}
		}
	}
}

import javautilSet = java.util.Set;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.mopub.common.MoPubReward.d.ts" />
/// <reference path="./com.mopub.mobileads.MoPubErrorCode.d.ts" />
/// <reference path="./com.mopub.mobileads.MoPubInterstitial.d.ts" />
/// <reference path="./com.mopub.mobileads.MoPubView.d.ts" />
/// <reference path="./com.mopub.nativeads.NativeAd.d.ts" />
/// <reference path="./com.mopub.nativeads.NativeErrorCode.d.ts" />
/// <reference path="./com.smartadserver.android.library.mediation.SASMediationAdContent.d.ts" />
/// <reference path="./com.smartadserver.android.library.mediation.SASMoPubAdapter.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASNativeVideoAdElement.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module mediation {
					export class SASMoPubAdapter {
						public requestAd(param0: androidcontentContext, param1: com.smartadserver.android.library.ui.SASAdView, param2: javautilHashMap, param3: com.smartadserver.android.library.mediation.SASMediationSDKAdapter.AdRequestHandler): void;
						public constructor();
						public isSDKAvailable(): boolean;
						public getMediationAdContent(): com.smartadserver.android.library.mediation.SASMediationAdContent;
						public destroy(): void;
						public init(param0: androidcontentContext): void;
					}
					export module SASMoPubAdapter {
						export class BannerAdListenerImpl {
							public onBannerExpanded(param0: com.mopub.mobileads.MoPubView): void;
							public onBannerFailed(param0: com.mopub.mobileads.MoPubView, param1: com.mopub.mobileads.MoPubErrorCode): void;
							public onBannerClicked(param0: com.mopub.mobileads.MoPubView): void;
							public onBannerLoaded(param0: com.mopub.mobileads.MoPubView): void;
							public onBannerCollapsed(param0: com.mopub.mobileads.MoPubView): void;
						}
						export class InterstitialAdListenerImpl {
							public onInterstitialFailed(param0: com.mopub.mobileads.MoPubInterstitial, param1: com.mopub.mobileads.MoPubErrorCode): void;
							public onInterstitialClicked(param0: com.mopub.mobileads.MoPubInterstitial): void;
							public onInterstitialDismissed(param0: com.mopub.mobileads.MoPubInterstitial): void;
							public onInterstitialShown(param0: com.mopub.mobileads.MoPubInterstitial): void;
							public onInterstitialLoaded(param0: com.mopub.mobileads.MoPubInterstitial): void;
						}
						export class MoPubNativeNetworkListenerImpl {
							public onNativeLoad(param0: com.mopub.nativeads.NativeAd): void;
							public onNativeFail(param0: com.mopub.nativeads.NativeErrorCode): void;
						}
						export class MoPubRewardedVideoListenerImpl {
							public onRewardedVideoLoadFailure(param0: string, param1: com.mopub.mobileads.MoPubErrorCode): void;
							public onRewardedVideoCompleted(param0: javautilSet, param1: com.mopub.common.MoPubReward): void;
							public onRewardedVideoPlaybackError(param0: string, param1: com.mopub.mobileads.MoPubErrorCode): void;
							public onRewardedVideoLoadSuccess(param0: string): void;
							public onRewardedVideoStarted(param0: string): void;
							public onRewardedVideoClosed(param0: string): void;
						}
						export class MoPubStaticNativeAdContent {
							public getMediaView(param0: androidcontentContext): androidviewView;
							public getMediaElement(): com.smartadserver.android.library.model.SASNativeVideoAdElement;
							public getCoverImageHeight(): number;
							public getAdChoicesUrl(): string;
							public unregisterView(param0: androidviewView): void;
							public registerView(param0: androidviewView, param1: native.Array<androidviewView>): void;
							public getIconHeight(): number;
							public getTitle(): string;
							public getSponsoredMessage(): string;
							public getCoverImageWidth(): number;
							public getIconUrl(): string;
							public getSubTitle(): string;
							public getCoverImageUrl(): string;
							public getIconWidth(): number;
							public getCallToAction(): string;
							public constructor(param0: com.smartadserver.android.library.mediation.SASMoPubAdapter, param1: com.mopub.nativeads.NativeAd);
							public getRating(): number;
							public getBody(): string;
						}
						export class MoPubVideoNativeAdContent {
							public getMediaView(param0: androidcontentContext): androidviewView;
							public getMediaElement(): com.smartadserver.android.library.model.SASNativeVideoAdElement;
							public getCoverImageHeight(): number;
							public getAdChoicesUrl(): string;
							public unregisterView(param0: androidviewView): void;
							public registerView(param0: androidviewView, param1: native.Array<androidviewView>): void;
							public getIconHeight(): number;
							public getTitle(): string;
							public getSponsoredMessage(): string;
							public getCoverImageWidth(): number;
							public getIconUrl(): string;
							public getSubTitle(): string;
							public getCoverImageUrl(): string;
							public getIconWidth(): number;
							public getCallToAction(): string;
							public constructor(param0: com.smartadserver.android.library.mediation.SASMoPubAdapter, param1: com.mopub.nativeads.NativeAd);
							public getRating(): number;
							public getBody(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.smartadserver.android.library.mediation.SASMediationAdContent.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module mediation {
					export class SASOguryAdapter {
						public requestAd(param0: androidcontentContext, param1: com.smartadserver.android.library.ui.SASAdView, param2: javautilHashMap, param3: com.smartadserver.android.library.mediation.SASMediationSDKAdapter.AdRequestHandler): void;
						public constructor();
						public isSDKAvailable(): boolean;
						public getMediationAdContent(): com.smartadserver.android.library.mediation.SASMediationAdContent;
						public destroy(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.smartadserver.android.library.mediation.SASMediationAdContent.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module mediation {
					export class SASUnityAdsAdapter {
						public requestAd(param0: androidcontentContext, param1: com.smartadserver.android.library.ui.SASAdView, param2: javautilHashMap, param3: com.smartadserver.android.library.mediation.SASMediationSDKAdapter.AdRequestHandler): void;
						public constructor();
						public isSDKAvailable(): boolean;
						public getMediationAdContent(): com.smartadserver.android.library.mediation.SASMediationAdContent;
						public destroy(): void;
					}
				}
			}
		}
	}
}

import javautilDate = java.util.Date;
/// <reference path="./com.smartadserver.android.library.model.SASMediationAdElement.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASViewabilityPixel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module model {
					export class SASAdElement {
						public static BUTTON_TOP_LEFT: number;
						public static BUTTON_TOP_RIGHT: number;
						public static BUTTON_BOTTOM_LEFT: number;
						public static BUTTON_BOTTOM_RIGHT: number;
						public static BUTTON_TOP_CENTER: number;
						public static BUTTON_BOTTOM_CENTER: number;
						public static BUTTON_CENTER: number;
						public static CREATIVE_SIZE_NOT_DEFINED: number;
						public setExpirationDate(param0: javautilDate): void;
						public getCloseButtonAppearanceDelay(): number;
						public getCandidateMediationAds(): native.Array<com.smartadserver.android.library.model.SASMediationAdElement>;
						public setExtraParameters(param0: javautilHashMap): void;
						public setScriptUrl(param0: string): void;
						public getScriptUrl(): string;
						public clone(): javalangObject;
						public constructor();
						public setCandidateMediationAds(param0: native.Array<com.smartadserver.android.library.model.SASMediationAdElement>): void;
						public setSelectedMediationAd(param0: com.smartadserver.android.library.model.SASMediationAdElement): void;
						public getExpirationDate(): javautilDate;
						public setViewabilityPixels(param0: native.Array<com.smartadserver.android.library.model.SASViewabilityPixel>): void;
						public isSwipeToClose(): boolean;
						public setPortraitHeight(param0: number): void;
						public isTransferTouchEvents(): boolean;
						public setSwipeToClose(param0: boolean): void;
						public getTrackingScript(): string;
						public getCloseButtonPosition(): number;
						public getCreativeType(): string;
						public setInsertionId(param0: number): void;
						public getClickUrl(): string;
						public setCloseButtonAppearanceDelay(param0: number): void;
						public setClickUrl(param0: string): void;
						public setClickPixelUrl(param0: string): void;
						public getImpUrls(): native.Array<string>;
						public setLandscapeHeight(param0: number): void;
						public setPortraitWidth(param0: number): void;
						public getLandscapeHeight(): number;
						public getImpressionUrlString(): string;
						public setLandscapeWidth(param0: number): void;
						public getPortraitHeight(): number;
						public getLandscapeWidth(): number;
						public getExtraParameters(): javautilHashMap;
						public setOpenClickInApplication(param0: boolean): void;
						public isNeedsDataConnection(): boolean;
						public getInsertionId(): number;
						public setDisplayCloseAppearanceCountDown(param0: boolean): void;
						public getDebugInfo(): string;
						public getSelectedMediationAd(): com.smartadserver.android.library.model.SASMediationAdElement;
						public setPrefetchable(param0: boolean): void;
						public isCloseOnClick(): boolean;
						public isOpenClickInApplication(): boolean;
						public getBaseUrl(): string;
						public setCloseButtonPosition(param0: number): void;
						public getClickPixelUrl(): string;
						public setCloseOnClick(param0: boolean): void;
						public getViewabilityPixels(): native.Array<com.smartadserver.android.library.model.SASViewabilityPixel>;
						public setImpressionUrlString(param0: string): void;
						public getPortraitWidth(): number;
						public setBaseUrl(param0: string): void;
						public getAdDuration(): number;
						public setAdDuration(param0: number): void;
						public getHtmlContents(): string;
						public setNeedsDataConnection(param0: boolean): void;
						public isDisplayCloseAppearanceCountDown(): boolean;
						public setTransferTouchEvents(param0: boolean): void;
						public setHtmlContents(param0: string): void;
						public isPrefetchable(): boolean;
						public setTrackingScript(param0: string): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.smartadserver.android.library.mediation.SASMediationAdContent.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASViewabilityPixel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module model {
					export class SASMediationAdElement {
						public constructor();
						public getClickCountUrl(): string;
						public setClickCountUrl(param0: string): void;
						public setMediationAdContent(param0: com.smartadserver.android.library.mediation.SASMediationAdContent): void;
						public getViewabilityPixels(): native.Array<com.smartadserver.android.library.model.SASViewabilityPixel>;
						public getImpressionUrl(): string;
						public setViewabilityPixels(param0: native.Array<com.smartadserver.android.library.model.SASViewabilityPixel>): void;
						public getNetworkSdkID(): number;
						public setImpressionUrl(param0: string): void;
						public getPlacementConfigHashMap(): javautilHashMap;
						public setPlacementConfigHashMap(param0: javautilHashMap): void;
						public getMediationAdContent(): com.smartadserver.android.library.mediation.SASMediationAdContent;
						public setNetworkSdkID(param0: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASMediationAdElement.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASNativeAdElement.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASNativeVideoAdElement.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASViewabilityPixel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module model {
					export class SASNativeAdElement {
						public static SAS_UNDEFINED_VALUE: number;
						public triggerClickCount(): void;
						public getClickHandler(): com.smartadserver.android.library.model.SASNativeAdElement.ClickHandler;
						public getCoverImage(): com.smartadserver.android.library.model.SASNativeAdElement.ImageElement;
						public setLikes(param0: number): void;
						public getClickTrackingUrls(): native.Array<string>;
						public setClickHandler(param0: com.smartadserver.android.library.model.SASNativeAdElement.ClickHandler): void;
						public getCandidateMediationAds(): native.Array<com.smartadserver.android.library.model.SASMediationAdElement>;
						public setExtraParameters(param0: javautilHashMap): void;
						public computeVisibilityPercentage(): number;
						public getDownloads(): number;
						public getSubtitle(): string;
						public constructor();
						public getImpressionUrls(): native.Array<string>;
						public setCandidateMediationAds(param0: native.Array<com.smartadserver.android.library.model.SASMediationAdElement>): void;
						public setSelectedMediationAd(param0: com.smartadserver.android.library.model.SASMediationAdElement): void;
						public setViewabilityPixels(param0: native.Array<com.smartadserver.android.library.model.SASViewabilityPixel>): void;
						public setMediaElement(param0: com.smartadserver.android.library.model.SASNativeVideoAdElement): void;
						public toString(): string;
						public getCalltoAction(): string;
						public getRating(): number;
						public setTitle(param0: string): void;
						public getSponsored(): string;
						public getClickUrl(): string;
						public setInsertionId(param0: number): void;
						public setClickUrl(param0: string): void;
						public getMediaElement(): com.smartadserver.android.library.model.SASNativeVideoAdElement;
						public getExtraParameters(): javautilHashMap;
						public registerView(param0: androidviewView): void;
						public triggerImpressionCount(): void;
						public updateVisibilityPercentage(): void;
						public getBody(): string;
						public getInsertionId(): number;
						public unregisterView(param0: androidviewView): void;
						public getDebugInfo(): string;
						public setSubtitle(param0: string): void;
						public setIcon(param0: string, param1: number, param2: number): void;
						public getSelectedMediationAd(): com.smartadserver.android.library.model.SASMediationAdElement;
						public setClickTrackingUrlString(param0: string): void;
						public registerView(param0: androidviewView, param1: native.Array<androidviewView>): void;
						public setRating(param0: number): void;
						public setCoverImage(param0: string, param1: number, param2: number): void;
						public setBody(param0: string): void;
						public getTitle(): string;
						public setImpressionUrlString(param0: string): void;
						public getIcon(): com.smartadserver.android.library.model.SASNativeAdElement.ImageElement;
						public setCalltoAction(param0: string): void;
						public getLikes(): number;
						public setDownloads(param0: number): void;
						public setSponsored(param0: string): void;
					}
					export module SASNativeAdElement {
						export class ClickHandler {
							/**
							 * Constructs a new instance of the com.smartadserver.android.library.model.SASNativeAdElement$ClickHandler interface with the provided implementation.
							 */
							public constructor(implementation: {
								handleClick(param0: string, param1: com.smartadserver.android.library.model.SASNativeAdElement): boolean;
							});
							public handleClick(param0: string, param1: com.smartadserver.android.library.model.SASNativeAdElement): boolean;
						}
						export class ImageElement {
							public getWidth(): number;
							public getHeight(): number;
							public getUrl(): string;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

import androidlocationLocation = android.location.Location;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.location.Location.d.ts" />
/// <reference path="./com.smartadserver.android.library.http.SASHttpRequestManager.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASNativeAdElement.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASNativeAdPlacement.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module model {
					export class SASNativeAdManager {
						public mHttpRequestManager: com.smartadserver.android.library.http.SASHttpRequestManager;
						public setLocation(param0: androidlocationLocation): void;
						public onDestroy(): void;
						public constructor(param0: androidcontentContext, param1: com.smartadserver.android.library.model.SASNativeAdPlacement);
						public requestNativeAd(param0: com.smartadserver.android.library.model.SASNativeAdManager.NativeAdResponseHandler, param1: number): void;
						public getLocation(): androidlocationLocation;
					}
					export module SASNativeAdManager {
						export class NativeAdResponseHandler {
							/**
							 * Constructs a new instance of the com.smartadserver.android.library.model.SASNativeAdManager$NativeAdResponseHandler interface with the provided implementation.
							 */
							public constructor(implementation: {
								nativeAdLoadingCompleted(param0: com.smartadserver.android.library.model.SASNativeAdElement): void;
								nativeAdLoadingFailed(param0: javalangException): void;
							});
							public nativeAdLoadingCompleted(param0: com.smartadserver.android.library.model.SASNativeAdElement): void;
							public nativeAdLoadingFailed(param0: javalangException): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module model {
					export class SASNativeAdPlacement {
						public static COVER_TEXT_TEST_PLACEMENT: com.smartadserver.android.library.model.SASNativeAdPlacement;
						public static ICON_COVER_TEXT_TEST_PLACEMENT: com.smartadserver.android.library.model.SASNativeAdPlacement;
						public static ICON_TEXT_TEST_PLACEMENT: com.smartadserver.android.library.model.SASNativeAdPlacement;
						public static TEXT_TEST_PLACEMENT: com.smartadserver.android.library.model.SASNativeAdPlacement;
						public baseUrl: string;
						public siteId: number;
						public pageId: string;
						public formatId: number;
						public target: string;
						public constructor(param0: string, param1: number, param2: string, param3: number);
						public constructor(param0: string, param1: number, param2: string, param3: number, param4: string);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module model {
					export class SASNativeParallaxAdElement extends com.smartadserver.android.library.model.SASAdElement {
						public static PARALLAX_MODE_FIXED: number;
						public static PARALLAX_MODE_DYNAMIC_HEIGHT: number;
						public static PARALLAX_MODE_STICKY_TOP: number;
						public static PARALLAX_MODE_STICKY_BOTTOM: number;
						public static IMAGE_RESIZE_MODE_COVER: number;
						public static IMAGE_RESIZE_MODE_CONTAIN: number;
						public static IMAGE_RESIZE_MODE_100_PERCENT: number;
						public getCreativeHeight(): number;
						public getParallaxHTMLUrl(): string;
						public setBorderSize(param0: number): void;
						public getBorderText(): string;
						public getParallaxMode(): number;
						public getParallaxImageUrl(): string;
						public setBorderText(param0: string): void;
						public setBackgroundColor(param0: number): void;
						public getBorderSize(): number;
						public setBorderFontSize(param0: number): void;
						public setCreativeHeight(param0: number): void;
						public setResizeMode(param0: number): void;
						public setParallaxMode(param0: number): void;
						public setParallaxHTMLScript(param0: string): void;
						public isOpenClickInApplication(): boolean;
						public getBackgroundColor(): number;
						public setBorderColor(param0: number): void;
						public constructor();
						public setJavascriptAPIEnabled(param0: boolean): void;
						public setBorderFontColor(param0: number): void;
						public constructor(param0: orgjsonJSONObject);
						public getCreativeWidth(): number;
						public getResizeMode(): number;
						public getParallaxHTMLScript(): string;
						public getBorderColor(): number;
						public isJavascriptAPIEnabled(): boolean;
						public getCreativeType(): string;
						public setBorderEnabled(param0: boolean): void;
						public setParallaxHTMLUrl(param0: string): void;
						public setCreativeWidth(param0: number): void;
						public isBorderEnabled(): boolean;
						public setParallaxImageUrl(param0: string): void;
						public getBorderFontSize(): number;
						public getBorderFontColor(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.smartadserver.android.library.model.SASAdElement.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASReward.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module model {
					export class SASNativeVideoAdElement extends com.smartadserver.android.library.model.SASAdElement {
						public static TRACKING_EVENT_NAME_CLICK: string;
						public static TRACKING_EVENT_NAME_TIME_TO_CLICK: string;
						public static TRACKING_EVENT_NAME_CREATIVE_VIEW: string;
						public static TRACKING_EVENT_NAME_START: string;
						public static TRACKING_EVENT_NAME_FIRST_QUARTILE: string;
						public static TRACKING_EVENT_NAME_MIDPOINT: string;
						public static TRACKING_EVENT_NAME_THIRD_QUARTILE: string;
						public static TRACKING_EVENT_NAME_COMPLETE: string;
						public static TRACKING_EVENT_NAME_MUTE: string;
						public static TRACKING_EVENT_NAME_UNMUTE: string;
						public static TRACKING_EVENT_NAME_PAUSE: string;
						public static TRACKING_EVENT_NAME_REWIND: string;
						public static TRACKING_EVENT_NAME_RESUME: string;
						public static TRACKING_EVENT_NAME_FULLSCREEN: string;
						public static TRACKING_EVENT_NAME_EXIT_FULLSCREEN: string;
						public static TRACKING_EVENT_NAME_PROGRESS: string;
						public static TRACKING_EVENT_NAME_SKIP: string;
						public static VAST_COMPANION_AS_BACKGROUND: string;
						public static CALL_TO_ACTION_TYPE_WEBSITE: number;
						public static CALL_TO_ACTION_TYPE_VIDEO: number;
						public static CALL_TO_ACTION_TYPE_APPLICATION: number;
						public static CALL_TO_ACTION_TYPE_CUSTOM: number;
						public static BACKGROUND_RESIZE_COVER: number;
						public static BACKGROUND_RESIZE_CONTAIN: number;
						public static BACKGROUND_RESIZE_100_PERCENT: number;
						public static VIDEO_POSITION_TOP: number;
						public static VIDEO_POSITION_CENTER: number;
						public static VIDEO_POSITION_BOTTOM: number;
						public static AUDIO_MODE_MUTE: number;
						public static AUDIO_MODE_AUTO: number;
						public static AUDIO_MODE_ON: number;
						public static SKIP_POLICY_ALWAYS: number;
						public static SKIP_POLICY_NEVER: number;
						public static SKIP_POLICY_VAST_CONTROLLED: number;
						public static TRACKING_EVENT_NAMES: native.Array<string>;
						public static VIDEO_REWARD: string;
						public static VIDEO_REWARD_CURRENCY: string;
						public static VIDEO_REWARD_AMOUNT: string;
						public getPosterImageUrl(): string;
						public isAutoplay(): boolean;
						public getVideoDebugInfo(): string;
						public getMediaWidth(): number;
						public setAutoclose(param0: boolean): void;
						public setProgressOffset(param0: string): void;
						public getVideoUrl(): string;
						public constructor(param0: orgjsonJSONObject, param1: number);
						public getBackgroundImageUrl(): string;
						public setAudioMode(param0: number): void;
						public getCallToActionCustomText(): string;
						public setBackgroundImageUrl(param0: string): void;
						public getMediaHeight(): number;
						public getVideoVerticalPosition(): number;
						public setBackgroundResizeMode(param0: number): void;
						public isStickToTopSkippable(): boolean;
						public getPosterImageOffsetPosition(): string;
						public setPosterImageUrl(param0: string): void;
						public getClickUrlFromBackground(param0: boolean): string;
						public setBackgroundColor(param0: number): void;
						public getAdTTL(): number;
						public getProgressOffset(): string;
						public getBackgroundColor(): number;
						public setTintOpacity(param0: number): void;
						public constructor();
						public setMediaWidth(param0: number): void;
						public getBlurDownScaleFactorLowEnd(): number;
						public setVideo360Mode(param0: boolean): void;
						public getCallToActionType(): number;
						public setSkipPolicy(param0: number): void;
						public setBlurRadius(param0: number): void;
						public getBackgroundResizeMode(): number;
						public setVideoVerticalPosition(param0: number): void;
						public getBackgroundImpressionUrl(): string;
						public setHtmlLayerAdElement(param0: com.smartadserver.android.library.model.SASAdElement): void;
						public getCreativeType(): string;
						public setCallToActionType(param0: number): void;
						public getEventTrackingURL(param0: string): native.Array<string>;
						public setClickUrl(param0: string): void;
						public setStickToTopSkippable(param0: boolean): void;
						public setTintColor(param0: number): void;
						public getReward(): com.smartadserver.android.library.model.SASReward;
						public getAudioMode(): number;
						public setAutoplay(param0: boolean): void;
						public getVPAIDUrl(): string;
						public getBackgroundClickUrl(): string;
						public setRestartWhenEnteringFullscreen(param0: boolean): void;
						public getHtmlLayerAdElement(): com.smartadserver.android.library.model.SASAdElement;
						public setEventTrackingURLs(param0: string, param1: native.Array<string>): void;
						public getBackgroundClickTrackingUrl(): string;
						public getMediaDuration(): number;
						public getDebugInfo(): string;
						public getBlurRadius(): number;
						public getTintColor(): number;
						public getBlurDownScaleFactorHighEnd(): number;
						public getAdParameters(): string;
						public setPosterImageOffsetPosition(param0: string): void;
						public isOpenClickInApplication(): boolean;
						public setStickToTopEnabled(param0: boolean): void;
						public isVideo360Mode(): boolean;
						public getAdFailUrl(): string;
						public setAdFailUrl(param0: string): void;
						public getTintOpacity(): number;
						public setCallToActionCustomText(param0: string): void;
						public getSkipOffset(): string;
						public isStickToTopEnabled(): boolean;
						public setMediaHeight(param0: number): void;
						public setVideoUrl(param0: string): void;
						public getSkipPolicy(): number;
						public isAutoclose(): boolean;
						public isRestartWhenEnteringFullscreen(): boolean;
						public setReward(param0: com.smartadserver.android.library.model.SASReward): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module model {
					export class SASReward {
						public getAmount(): number;
						public constructor(param0: string, param1: number);
						public toString(): string;
						public isValid(): boolean;
						public getCurrency(): string;
					}
				}
			}
		}
	}
}

import javautilArrayList = java.util.ArrayList;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module model {
					export class SASVASTElement {
						public static VPAID_API_FRAMEWORK: string;
						public getImpressionPixelUrls(): javautilArrayList;
						public getBackgroundCompanion(): com.smartadserver.android.library.model.SASVASTElement.BackgroundCompanion;
						public getTrackingEventMap(): javautilHashMap;
						public getMediaFile(): com.smartadserver.android.library.model.SASVASTElement.MediaFile;
						public static parseFromVASTContent(param0: string, param1: boolean, param2: number): com.smartadserver.android.library.model.SASVASTElement;
						public getClickPixelUrls(): javautilArrayList;
						public getSkipOffset(): string;
						public getAdParameters(): string;
						public getProgressOffset(): string;
						public getClickThroughUrl(): string;
						public getMediaDuration(): number;
					}
					export module SASVASTElement {
						export class AdUnit {
							public mediaFiles: native.Array<com.smartadserver.android.library.model.SASVASTElement.MediaFile>;
							public trackingEventMap: javautilHashMap;
							public impressionPixelUrls: javautilArrayList;
							public clickPixelUrls: javautilArrayList;
							public clickUrl: string;
							public skipOffset: string;
							public progressOffset: string;
							public adParameters: string;
							public duration: number;
							public backgroundCompanion: com.smartadserver.android.library.model.SASVASTElement.BackgroundCompanion;
							public constructor();
						}
						export class BackgroundCompanion {
							public resourceUrl: string;
							public clickUrl: string;
							public clickTrackingUrl: string;
							public impressionUrl: string;
							public constructor(param0: string, param1: string, param2: string, param3: string);
							public static isValidResourceType(param0: string): boolean;
						}
						export class MediaFile {
							public url: string;
							public type: string;
							public bitRate: number;
							public apiFramework: string;
							public width: number;
							public height: number;
							public constructor();
							public compareTo(param0: com.smartadserver.android.library.model.SASVASTElement.MediaFile): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module model {
					export class SASViewabilityPixel {
						public pixelUrl: string;
						public minimumViewabilityTime: number;
						public minimumViewabilityPercentage: number;
						public mCurrentDuration: number;
						public constructor(param0: string, param1: number, param2: number);
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASAdElement.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module offline {
					export class SASAdCacheManager {
						public static READY_FOLDER_EXTENSION: string;
						public static TEMP_FOLDER_EXTENSION: string;
						public storeOfflineAd(param0: number, param1: string, param2: number, param3: string, param4: com.smartadserver.android.library.model.SASAdElement): void;
						public getOfflineAd(param0: number, param1: string, param2: number, param3: string): com.smartadserver.android.library.model.SASAdElement;
						public cleanUpCache(param0: boolean): void;
						public static getInstance(param0: androidcontentContext): com.smartadserver.android.library.offline.SASAdCacheManager;
						public removeOfflineAd(param0: number, param1: string, param2: number, param3: string): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module offline {
					export class SASCacheManifestUtil {
						public constructor();
						public static getCacheManifestRelativeUrl(param0: string): string;
						public static getResourceRelativeUrlsFromManifest(param0: string): native.Array<string>;
						public static removeCacheManifestReference(param0: string): string;
					}
				}
			}
		}
	}
}

import androidosBundle = android.os.Bundle;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module preview {
					export class SASPreviewHandlerActivity {
						public static START_MAIN_ACTIVITY: string;
						public constructor();
						public onCreate(param0: androidosBundle): void;
						public static getPreviewConfigForPlacement(param0: androidcontentContext, param1: string, param2: string, param3: string): com.smartadserver.android.library.preview.SASPreviewHandlerActivity.PreviewConfig;
						public static updatePlacementPreviewConfig(param0: androidcontentContext, param1: com.smartadserver.android.library.preview.SASPreviewHandlerActivity.PreviewConfig): void;
					}
					export module SASPreviewHandlerActivity {
						export class PreviewConfig {
							public siteId: string;
							public pageId: string;
							public formatId: string;
							public target: string;
							public insertionId: number;
							public previewUrlExpirationDate: number;
							public previewDuration: number;
							public startTime: number;
							public constructor();
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module provider {
					export class SASAdElementProvider {
						/**
						 * Constructs a new instance of the com.smartadserver.android.library.provider.SASAdElementProvider interface with the provided implementation.
						 */
						public constructor(implementation: {
							loadAd(param0: number, param1: string, param2: number, param3: string, param4: boolean, param5: com.smartadserver.android.library.ui.SASAdView.AdResponseHandler, param6: number, param7: orgjsonJSONObject): void;
						});
						public loadAd(param0: number, param1: string, param2: number, param3: string, param4: boolean, param5: com.smartadserver.android.library.ui.SASAdView.AdResponseHandler, param6: number, param7: orgjsonJSONObject): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.apache.http.client.methods.HttpPost.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module provider {
					export module http {
						export abstract class SASAbstractHttpHelper {
							public mAppName: string;
							public mAppPackageName: string;
							public mUID: string;
							public mUserAgent: string;
							public mContext: androidcontentContext;
							public lastCallTimestamp: number;
							public getLastCallTimestamp(): number;
							public buildPost(param0: string, param1: orgjsonJSONObject): orgapachehttpclientmethodsHttpPost;
							public constructor(param0: androidcontentContext);
							public getConnexion(): string;
							public buildURL(param0: string, param1: number, param2: string, param3: number, param4: string, param5: boolean): string;
							public static getTimestamp(param0: boolean): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.apache.http.client.methods.HttpPost.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module provider {
					export module http {
						export class SASAdCallHelper extends com.smartadserver.android.library.provider.http.SASAbstractHttpHelper {
							public buildAcCallURL(param0: string, param1: number, param2: string, param3: number, param4: string, param5: boolean): string;
							public buildPost(param0: string, param1: orgjsonJSONObject): orgapachehttpclientmethodsHttpPost;
							public constructor(param0: androidcontentContext);
							public buildPubmjURL(param0: number, param1: string, param2: number, param3: string, param4: boolean): string;
							public buildURL(param0: string, param1: number, param2: string, param3: number, param4: string, param5: boolean): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.smartadserver.android.library.provider.http.SASHttpAdElementProvider.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.apache.http.client.HttpClient.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module provider {
					export module http {
						export class SASHttpAdElementProvider {
							public getLastCallTimestamp(): number;
							public constructor(param0: androidcontentContext);
							public attachToContext(param0: androidcontentContext): void;
							public isNoShow(): boolean;
							public loadNativeAd(param0: string, param1: number, param2: string, param3: number, param4: string, param5: com.smartadserver.android.library.model.SASNativeAdManager.NativeAdResponseHandler, param6: number, param7: orgjsonJSONObject): void;
							public setHttpClient(param0: orgapachehttpclientHttpClient): void;
							public loadAd(param0: number, param1: string, param2: number, param3: string, param4: boolean, param5: com.smartadserver.android.library.ui.SASAdView.AdResponseHandler, param6: number, param7: orgjsonJSONObject): void;
							public abortRequest(): void;
						}
						export module SASHttpAdElementProvider {
							export class AdElementResponseHandler {
								public onFail(param0: javalangException): void;
								public constructor(param0: com.smartadserver.android.library.provider.http.SASHttpAdElementProvider, param1: com.smartadserver.android.library.ui.SASAdView.AdResponseHandler, param2: string, param3: number);
								public onSuccess(param0: string): void;
							}
							export class NativeAdElementResponseHandler {
								public onFail(param0: javalangException): void;
								public constructor(param0: com.smartadserver.android.library.provider.http.SASHttpAdElementProvider, param1: com.smartadserver.android.library.model.SASNativeAdManager.NativeAdResponseHandler, param2: string, param3: number);
								public onSuccess(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module res {
					export class SASBitmapResources {
						public static CLOSE_BUTTON: androidgraphicsBitmap;
						public static PRESSED_CLOSE_BUTTON: androidgraphicsBitmap;
						public static LOADER_ICON: androidgraphicsBitmap;
						public static PLAY_BUTTON: androidgraphicsBitmap;
						public static PAUSE_BUTTON: androidgraphicsBitmap;
						public static MUTE_BUTTON: androidgraphicsBitmap;
						public static UNMUTE_BUTTON: androidgraphicsBitmap;
						public static EXITFULLSCREEN_BUTTON: androidgraphicsBitmap;
						public static CLOSE_AREA: androidgraphicsBitmap;
						public static IN_APP_BROWSER_BACK: androidgraphicsBitmap;
						public static IN_APP_BROWSER_FORWARD: androidgraphicsBitmap;
						public static IN_APP_BROWSER_REFRESH: androidgraphicsBitmap;
						public static IN_APP_BROWSER_CLOSE: androidgraphicsBitmap;
						public static NATIVE_VIDEO_INFO: androidgraphicsBitmap;
						public static NATIVE_VIDEO_CLOSE: androidgraphicsBitmap;
						public static NATIVE_VIDEO_PLAY: androidgraphicsBitmap;
						public static NATIVE_VIDEO_REPLAY: androidgraphicsBitmap;
						public static NATIVE_VIDEO_PAUSE: androidgraphicsBitmap;
						public static NATIVE_VIDEO_BIG_PLAY: androidgraphicsBitmap;
						public static NATIVE_VIDEO_WATCH_ACTION: androidgraphicsBitmap;
						public static NATIVE_VIDEO_STORE_ACTION: androidgraphicsBitmap;
						public static NATIVE_VIDEO_INFO_ACTION: androidgraphicsBitmap;
						public static NATIVE_VIDEO_360_ICON_BACKGROUND: androidgraphicsBitmap;
						public static NATIVE_VIDEO_360_ICON_ARROW: androidgraphicsBitmap;
						public static NATIVE_VIDEO_EQUALIZER: native.Array<androidgraphicsBitmap>;
						public static LIVEPREVIEW_LOGO: androidgraphicsBitmap;
						public static LIVEPREVIEW_EXPAND: androidgraphicsBitmap;
						public static LIVEPREVIEW_COLLAPSE: androidgraphicsBitmap;
						public static LIVEPREVIEW_STOP: androidgraphicsBitmap;
						public static LIVEPREVIEW_REFRESH: androidgraphicsBitmap;
						public static LIVEPREVIEW_CLOSE: androidgraphicsBitmap;
						public static AD_CHOICES_ICON: androidgraphicsBitmap;
						public constructor();
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module rewarded {
					export class SASRewardedInterstitialView extends com.smartadserver.android.library.SASInterstitialView {
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public onDetachedFromWindow(): void;
						public constructor(param0: androidcontentContext);
						public fireImpressionPixels(): void;
						public updateVisibilityPercentage(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module rewarded {
					export class SASRewardedVideoActivity {
						public constructor();
						public onCreate(param0: androidosBundle): void;
					}
				}
			}
		}
	}
}

import androidmediaMediaPlayer = android.media.MediaPlayer;
import androidviewViewGroup = android.view.ViewGroup;
/// <reference path="./android.media.MediaPlayer.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASAdElement.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASReward.d.ts" />
/// <reference path="./com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module rewarded {
					export class SASRewardedVideoListener {
						/**
						 * Constructs a new instance of the com.smartadserver.android.library.rewarded.SASRewardedVideoListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onRewardedVideoAdLoadingCompleted(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: com.smartadserver.android.library.model.SASAdElement): void;
							onRewardedVideoAdLoadingFailed(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: javalangException): void;
							onRewardedVideoPlaybackError(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: javalangException): void;
							onRewardedVideoClosed(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement): void;
							onRewardReceived(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: com.smartadserver.android.library.model.SASReward): void;
							onRewardedVideoClicked(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: string): void;
							onRewardedVideoEvent(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: number): void;
							onRewardedVideoMediaPlayerPrepared(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: androidmediaMediaPlayer, param2: androidviewView, param3: com.smartadserver.android.library.model.SASAdElement): void;
							onRewardedVideoMediaPlayerCompleted(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: androidmediaMediaPlayer, param2: androidviewView, param3: com.smartadserver.android.library.model.SASAdElement): void;
							onRewardedVideoEndCardDisplayed(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: androidviewViewGroup, param2: com.smartadserver.android.library.model.SASAdElement): void;
						});
						public static VIDEO_REWIND: number;
						public static VIDEO_START: number;
						public static VIDEO_THIRD_QUARTILE: number;
						public static VIDEO_END_CARD_DISPLAYED: number;
						public static VIDEO_SKIP: number;
						public static VIDEO_COMPLETE: number;
						public static VIDEO_EXIT_FULLSCREEN: number;
						public static VIDEO_PAUSE: number;
						public static VIDEO_MIDPOINT: number;
						public static VIDEO_ENTER_FULLSCREEN: number;
						public static VIDEO_RESUME: number;
						public static VIDEO_FIRST_QUARTILE: number;
						public onRewardedVideoAdLoadingCompleted(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: com.smartadserver.android.library.model.SASAdElement): void;
						public onRewardedVideoPlaybackError(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: javalangException): void;
						public onRewardedVideoClicked(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: string): void;
						public onRewardedVideoMediaPlayerPrepared(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: androidmediaMediaPlayer, param2: androidviewView, param3: com.smartadserver.android.library.model.SASAdElement): void;
						public onRewardReceived(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: com.smartadserver.android.library.model.SASReward): void;
						public onRewardedVideoAdLoadingFailed(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: javalangException): void;
						public onRewardedVideoClosed(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement): void;
						public onRewardedVideoMediaPlayerCompleted(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: androidmediaMediaPlayer, param2: androidviewView, param3: com.smartadserver.android.library.model.SASAdElement): void;
						public onRewardedVideoEvent(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: number): void;
						public onRewardedVideoEndCardDisplayed(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: androidviewViewGroup, param2: com.smartadserver.android.library.model.SASAdElement): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASAdElement.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASReward.d.ts" />
/// <reference path="./com.smartadserver.android.library.rewarded.SASRewardedVideoListener.d.ts" />
/// <reference path="./com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module rewarded {
					export class SASRewardedVideoManager {
						public hasRewardedVideo(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement): boolean;
						public loadRewardedVideo(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement): void;
						public static getInstance(param0: androidcontentContext): com.smartadserver.android.library.rewarded.SASRewardedVideoManager;
						public showRewardedVideo(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement, param1: androidappActivity): void;
						public getReward(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoPlacement): com.smartadserver.android.library.model.SASReward;
						public setRewardedVideoListener(param0: com.smartadserver.android.library.rewarded.SASRewardedVideoListener): void;
					}
					export module SASRewardedVideoManager {
						export class AdResponseHandlerProxy {
							public adLoadingCompleted(param0: com.smartadserver.android.library.model.SASAdElement): void;
							public adLoadingFailed(param0: javalangException): void;
						}
						export class InterstitialViewHolder {
							public onDestroy(): void;
							public getReward(): com.smartadserver.android.library.model.SASReward;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module rewarded {
					export class SASRewardedVideoPlacement {
						public static CREATOR: androidosParcelableCreator;
						public describeContents(): number;
						public equals(param0: javalangObject): boolean;
						public constructor(param0: androidosParcel);
						public getPageId(): string;
						public getSiteId(): number;
						public hashCode(): number;
						public getTarget(): string;
						public getFormatId(): number;
						public toString(): string;
						public constructor(param0: number, param1: string, param2: number, param3: string);
						public writeToParcel(param0: androidosParcel, param1: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASNativeAdElement.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export class SASAdChoicesView {
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public setNativeAdElement(param0: com.smartadserver.android.library.model.SASNativeAdElement): void;
						public restoreClickListener(): void;
						public constructor(param0: androidcontentContext);
					}
				}
			}
		}
	}
}

import androidgraphicsdrawableDrawable = android.graphics.drawable.Drawable;
import androidcontentresConfiguration = android.content.res.Configuration;
import androidwidgetFrameLayout = android.widget.FrameLayout;
import javalangRunnable = java.lang.Runnable;
import androidviewViewOnClickListener = android.view.View.OnClickListener;
import androidviewMotionEvent = android.view.MotionEvent;
import androidviewViewGroupLayoutParams = android.view.ViewGroup.LayoutParams;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.location.Location.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.FrameLayout.d.ts" />
/// <reference path="./com.smartadserver.android.library.controller.SASAdViewController.d.ts" />
/// <reference path="./com.smartadserver.android.library.controller.SASWebChromeClient.d.ts" />
/// <reference path="./com.smartadserver.android.library.controller.SASWebViewClient.d.ts" />
/// <reference path="./com.smartadserver.android.library.controller.mraid.SASMRAIDController.d.ts" />
/// <reference path="./com.smartadserver.android.library.http.SASHttpRequestManager.d.ts" />
/// <reference path="./com.smartadserver.android.library.mediation.SASMediationAdManager.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASAdElement.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASNativeVideoAdElement.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASReward.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASViewabilityPixel.d.ts" />
/// <reference path="./com.smartadserver.android.library.provider.http.SASHttpAdElementProvider.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASCloseButton.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASWebView.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export abstract class SASAdView {
						public static DEFAULT_AD_LOADING_TIMEOUT: number;
						public static DEFAULT_AD_PREFETCH_TIMEOUT: number;
						public static DEFAULT_VIDEO_VIEW_Z_ORDER_ON_TOP: boolean;
						public static EXPAND_FROM_TOP: number;
						public static EXPAND_FROM_BOTTOM: number;
						public static EXPAND_ALIGN_LEFT: number;
						public static EXPAND_ALIGN_CENTER: number;
						public static EXPAND_ALIGN_RIGHT: number;
						public static VAST_LINEAR_VIDEO_CLOSED: string;
						public static VAST_LINEAR_VIDEO_SKIPPED: string;
						public static REFRESH_INTERVAL_OFF: number;
						public static REFRESH_INTERVAL_MINIMUM: number;
						public mRefreshInterval: number;
						public static CLOSE_BUTTON_MINIMUM_DELAY: number;
						public mHttpRequestManager: com.smartadserver.android.library.http.SASHttpRequestManager;
						public mAdElementProvider: com.smartadserver.android.library.provider.http.SASHttpAdElementProvider;
						public mAdViewController: com.smartadserver.android.library.controller.SASAdViewController;
						public mWebViewClient: com.smartadserver.android.library.controller.SASWebViewClient;
						public mWebChromeClient: com.smartadserver.android.library.controller.SASWebChromeClient;
						public mWebView: com.smartadserver.android.library.ui.SASWebView;
						public mSecondaryWebView: com.smartadserver.android.library.ui.SASWebView;
						public mMediationAdManager: com.smartadserver.android.library.mediation.SASMediationAdManager;
						public mAdElement: com.smartadserver.android.library.model.SASAdElement;
						public closeButton: com.smartadserver.android.library.ui.SASCloseButton;
						public handleKeyUpEvent(param0: number, param1: androidviewKeyEvent): void;
						public getLastCallTimestamp(): number;
						public static enableCustomIdentifierWithId(param0: string): void;
						public close(): void;
						public initFullScreenWebView(param0: androidcontentContext): void;
						public addVideoEventListener(param0: com.smartadserver.android.library.ui.SASAdView.OnVideoEventListener): void;
						public setMessageHandler(param0: com.smartadserver.android.library.ui.SASAdView.MessageHandler): void;
						public setClickableAreas(param0: string): void;
						public static getDefaultAdLoadingTimeout(): number;
						public static setCloseButtonBitmap(param0: androidgraphicsBitmap): void;
						public removeVideoEventListener(param0: com.smartadserver.android.library.ui.SASAdView.OnVideoEventListener): void;
						public getCloseButtonAppearanceDelay(): number;
						public enableParallaxViews(param0: boolean): void;
						public getExpandParentContainer(): androidwidgetFrameLayout;
						public onDestroy(): void;
						public onInterceptTouchEvent(param0: androidviewMotionEvent): boolean;
						public static getCloseButtonDrawable(): androidgraphicsdrawableDrawable;
						public loadAd(param0: number, param1: string, param2: number, param3: boolean): void;
						public removeRewardListener(param0: com.smartadserver.android.library.ui.SASAdView.OnRewardListener): void;
						public addCloseButton(param0: androidviewViewOnClickListener): void;
						public fireStateChangeEvent(param0: number): void;
						public installLoaderView(param0: androidviewView): void;
						public executeOnUIThread(param0: javalangRunnable, param1: boolean): void;
						public fireReward(param0: com.smartadserver.android.library.model.SASReward): void;
						public static enableLogging(): void;
						public getExpandPlaceholderView(): androidviewView;
						public getExpandParentViewMaxSize(): native.Array<number>;
						public setCloseButtonAppearanceDelay(param0: number): void;
						public scheduleImpressionPixels(param0: native.Array<string>): void;
						public constructor(param0: androidcontentContext);
						public getCurrentLoaderView(): androidviewView;
						public isAdWasOpened(): boolean;
						public isExpanded(): boolean;
						public setScrollListenerEnabled(param0: boolean): void;
						public expand(param0: string, param1: number, param2: number, param3: boolean, param4: string): void;
						public loadAd(param0: number, param1: string, param2: number, param3: boolean, param4: string): void;
						public onAttachedToWindow(): void;
						public static setBaseUrl(param0: string): void;
						public expand(param0: string, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: boolean, param7: boolean, param8: string, param9: boolean): void;
						public setExpandParentContainer(param0: androidwidgetFrameLayout): void;
						public getVideoOnCompletionListener(): androidmediaMediaPlayerOnCompletionListener;
						public setDisplayCloseAppearanceCountDown(param0: boolean): void;
						public getCurrentAdElement(): com.smartadserver.android.library.model.SASAdElement;
						public static setVideoViewZOrderOnTop(param0: boolean): void;
						public isEnableStateChangeEvent(): boolean;
						public fireOnPreparedListener(): void;
						public onKeyPreIme(param0: number, param1: androidviewKeyEvent): boolean;
						public addCloseArea(param0: androidviewViewOnClickListener): void;
						public setCoordinates(param0: number, param1: number): void;
						public setExpandPolicy(param0: number): void;
						public setRefreshIntervalImpl(param0: number): void;
						public post(param0: javalangRunnable): boolean;
						public displayAndPrefetchAd(param0: number, param1: string, param2: number, param3: boolean, param4: string, param5: com.smartadserver.android.library.ui.SASAdView.AdResponseHandler, param6: number): void;
						public setLoaderView(param0: androidviewView): void;
						public fireVideoEvent(param0: number): void;
						public setPreviewConfig(param0: com.smartadserver.android.library.preview.SASPreviewHandlerActivity.PreviewConfig): boolean;
						public raiseError(param0: string, param1: string): void;
						public sendJavascriptEvent(param0: string, param1: javautilArrayList): void;
						public displayAndPrefetchAd(param0: number, param1: string, param2: number, param3: boolean, param4: string, param5: com.smartadserver.android.library.ui.SASAdView.AdResponseHandler): void;
						public fireImpressionPixels(): void;
						public displayAndPrefetchAd(param0: number, param1: string, param2: number, param3: boolean): void;
						public setVideoOnCompletionListener(param0: androidmediaMediaPlayerOnCompletionListener): void;
						public static setCloseButtonDrawable(param0: androidgraphicsdrawableDrawable): void;
						public closeImpl(): void;
						public setCloseOnclick(param0: boolean): void;
						public isDisplayCloseAppearanceCountDown(): boolean;
						public static isVideoViewZOrderOnTop(): boolean;
						public getOptimalHeight(param0: number): number;
						public removeLoaderView(param0: androidviewView): void;
						public static setDefaultAdLoadingTimeout(param0: number): void;
						public static disableCustomIdentifier(): void;
						public expand(param0: string, param1: number, param2: number): void;
						public isCloseButtonVisible(): boolean;
						public loadAd(param0: number, param1: string, param2: number, param3: boolean, param4: string, param5: com.smartadserver.android.library.ui.SASAdView.AdResponseHandler, param6: number, param7: boolean, param8: boolean): void;
						public onConfigurationChanged(param0: androidcontentresConfiguration): void;
						public executeJavascriptOnMainWebView(param0: string): void;
						public addRewardListener(param0: com.smartadserver.android.library.ui.SASAdView.OnRewardListener): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public fireEndCardDisplayed(param0: androidviewViewGroup): void;
						public postDelayed(param0: javalangRunnable, param1: number): boolean;
						public computeVisibilityPercentage(): number;
						public hitsCloseButton(param0: number, param1: number): boolean;
						public static isUseHashedAndroidId(): boolean;
						public forceFireViewabilityPixels(): void;
						public collapse(): void;
						public isResized(): boolean;
						public isCloseOnclick(): boolean;
						public setMediationView(param0: androidviewView): void;
						public getLoaderView(): androidviewView;
						public getMessageHandler(): com.smartadserver.android.library.ui.SASAdView.MessageHandler;
						public displayAndPrefetchAd(param0: number, param1: string, param2: number, param3: boolean, param4: string): void;
						public getLocation(): androidlocationLocation;
						public scheduleViewabilityPixels(param0: native.Array<com.smartadserver.android.library.model.SASViewabilityPixel>): void;
						public removeStateChangeListener(param0: com.smartadserver.android.library.ui.SASAdView.OnStateChangeListener): boolean;
						public getOptimalHeight(): number;
						public onVisibilityChanged(param0: androidviewView, param1: number): void;
						public getCurrentBounds(): androidgraphicsRect;
						public sendMessageToWebView(param0: string): void;
						public static getCustomIdentifier(): string;
						public open(param0: string): void;
						public setStickyModeAnchorView(param0: androidviewViewGroup): void;
						public reset(): void;
						public static getDefaultAdPrefetchTimeout(): number;
						public expand(param0: string, param1: number, param2: number, param3: boolean): void;
						public getVisibilityPercentage(): number;
						public isFullScreenExpand(): boolean;
						public expand(param0: number, param1: number, param2: boolean): void;
						public setLocation(param0: androidlocationLocation): void;
						public getNeededPadding(): native.Array<number>;
						public setLayoutParams(param0: androidviewViewGroupLayoutParams): void;
						public static setUnityModeEnabled(param0: boolean): void;
						public addEndCardDisplayedListener(param0: com.smartadserver.android.library.ui.SASAdView.OnEndCardDisplayedListener): void;
						public executeOnUIThread(param0: javalangRunnable): void;
						public updateVisibilityPercentage(): void;
						public setVideoOnPreparedListener(param0: androidmediaMediaPlayerOnPreparedListener): void;
						public loadAd(param0: number, param1: string, param2: number, param3: boolean, param4: string, param5: com.smartadserver.android.library.ui.SASAdView.AdResponseHandler, param6: number): void;
						public static getCloseButtonBitmap(): androidgraphicsBitmap;
						public dismissStickyMode(param0: boolean): void;
						public initParallaxViewsContainer(param0: androidcontentContext): void;
						public setBackButtonHandlingEnabled(param0: boolean): void;
						public getExpandParentView(): androidwidgetFrameLayout;
						public static getBaseUrl(): string;
						public takeScreenshot(): androidgraphicsBitmap;
						public static setDefaultAdPrefetchTimeout(param0: number): void;
						public static isUnityModeEnabled(): boolean;
						public getExpandPolicy(): number;
						public onDetachedFromWindow(): void;
						public removeEndCardDisplayedListener(param0: com.smartadserver.android.library.ui.SASAdView.OnEndCardDisplayedListener): void;
						public static isUseCustomIdentifier(): boolean;
						public hasWebViewRendering(): boolean;
						public addStateChangeListener(param0: com.smartadserver.android.library.ui.SASAdView.OnStateChangeListener): void;
						public getMRAIDController(): com.smartadserver.android.library.controller.mraid.SASMRAIDController;
						public collapseImpl(): void;
						public showVideoAd(param0: com.smartadserver.android.library.model.SASNativeVideoAdElement, param1: number): void;
						public initMainWebView(param0: androidcontentContext): void;
						public removeCloseButton(): void;
						public getVideoOnPreparedListener(): androidmediaMediaPlayerOnPreparedListener;
						public getDefaultBounds(): androidgraphicsRect;
						public loadAd(param0: number, param1: string, param2: number, param3: boolean, param4: string, param5: com.smartadserver.android.library.ui.SASAdView.AdResponseHandler): void;
						public setEnableStateChangeEvent(param0: boolean): void;
						public static setUseHashedAndroidId(param0: boolean): void;
					}
					export module SASAdView {
						export class AdResponseHandler {
							/**
							 * Constructs a new instance of the com.smartadserver.android.library.ui.SASAdView$AdResponseHandler interface with the provided implementation.
							 */
							public constructor(implementation: {
								adLoadingCompleted(param0: com.smartadserver.android.library.model.SASAdElement): void;
								adLoadingFailed(param0: javalangException): void;
							});
							public adLoadingCompleted(param0: com.smartadserver.android.library.model.SASAdElement): void;
							public adLoadingFailed(param0: javalangException): void;
						}
						export class MessageHandler {
							/**
							 * Constructs a new instance of the com.smartadserver.android.library.ui.SASAdView$MessageHandler interface with the provided implementation.
							 */
							public constructor(implementation: {
								handleMessage(param0: string): void;
							});
							public handleMessage(param0: string): void;
						}
						export class OnEndCardDisplayedListener {
							/**
							 * Constructs a new instance of the com.smartadserver.android.library.ui.SASAdView$OnEndCardDisplayedListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onEndCardDisplayed(param0: androidviewViewGroup): void;
							});
							public onEndCardDisplayed(param0: androidviewViewGroup): void;
						}
						export class OnRewardListener {
							/**
							 * Constructs a new instance of the com.smartadserver.android.library.ui.SASAdView$OnRewardListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onReward(param0: com.smartadserver.android.library.model.SASReward): void;
							});
							public onReward(param0: com.smartadserver.android.library.model.SASReward): void;
						}
						export class OnStateChangeListener {
							/**
							 * Constructs a new instance of the com.smartadserver.android.library.ui.SASAdView$OnStateChangeListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onStateChanged(param0: com.smartadserver.android.library.ui.SASAdView.StateChangeEvent): void;
							});
							public onStateChanged(param0: com.smartadserver.android.library.ui.SASAdView.StateChangeEvent): void;
						}
						export class OnVideoEventListener {
							/**
							 * Constructs a new instance of the com.smartadserver.android.library.ui.SASAdView$OnVideoEventListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onVideoEvent(param0: number): void;
							});
							public static VIDEO_REWIND: number;
							public static VIDEO_START: number;
							public static VIDEO_THIRD_QUARTILE: number;
							public static VIDEO_END_CARD_DISPLAYED: number;
							public static VIDEO_SKIP: number;
							public static VIDEO_COMPLETE: number;
							public static VIDEO_EXIT_FULLSCREEN: number;
							public static VIDEO_PAUSE: number;
							public static VIDEO_MIDPOINT: number;
							public static VIDEO_ENTER_FULLSCREEN: number;
							public static VIDEO_RESUME: number;
							public static VIDEO_FIRST_QUARTILE: number;
							public onVideoEvent(param0: number): void;
						}
						export class ParallaxImageView {
							public constructor(param0: com.smartadserver.android.library.ui.SASAdView, param1: androidcontentContext, param2: androidgraphicsBitmap);
							public onMeasure(param0: number, param1: number): void;
						}
						export class PrefetchableAdResponseHandler {
							/**
							 * Constructs a new instance of the com.smartadserver.android.library.ui.SASAdView$PrefetchableAdResponseHandler interface with the provided implementation.
							 */
							public constructor(implementation: {
								adPrefetchingCompleted(param0: com.smartadserver.android.library.model.SASAdElement): void;
								adPrefetchingFailed(param0: javalangException): void;
								adLoadingCompleted(param0: com.smartadserver.android.library.model.SASAdElement): void;
								adLoadingFailed(param0: javalangException): void;
							});
							public adPrefetchingFailed(param0: javalangException): void;
							public adLoadingCompleted(param0: com.smartadserver.android.library.model.SASAdElement): void;
							public adLoadingFailed(param0: javalangException): void;
							public adPrefetchingCompleted(param0: com.smartadserver.android.library.model.SASAdElement): void;
						}
						export class ScreenshotRunnable {
							public run(): void;
						}
						export class StateChangeEvent {
							public static VIEW_EXPANDED: number;
							public static VIEW_DEFAULT: number;
							public static VIEW_HIDDEN: number;
							public static VIEW_RESIZED: number;
							public getType(): number;
							public getView(): com.smartadserver.android.library.ui.SASAdView;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export class SASCloseButton {
						public static RULE_KEYS: native.Array<number>;
						public setCloseButtonPosition(param0: number): void;
						public setCloseButtonOnClickListener(param0: androidviewViewOnClickListener): void;
						public getCloseButtonVisibility(): number;
						public setCloseButtonVisibility(param0: number): void;
						public setCloseButtonSize(param0: number, param1: number): void;
						public constructor(param0: androidcontentContext);
						public setCloseButtonVisibility(param0: number, param1: number, param2: boolean): void;
						public updateCountDownValue(param0: boolean): void;
					}
					export module SASCloseButton {
						export class CloseButtonImageView {
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
							public constructor(param0: androidcontentContext);
							public reset(): void;
							public setCloseArea(param0: number, param1: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASNativeAdElement.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export class SASNativeAdMediaView {
						public removeRewardListener(param0: com.smartadserver.android.library.ui.SASAdView.OnRewardListener): void;
						public addVideoEventListener(param0: com.smartadserver.android.library.ui.SASAdView.OnVideoEventListener): void;
						public removeVideoEventListener(param0: com.smartadserver.android.library.ui.SASAdView.OnVideoEventListener): void;
						public addRewardListener(param0: com.smartadserver.android.library.ui.SASAdView.OnRewardListener): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public setNativeAdElement(param0: com.smartadserver.android.library.model.SASNativeAdElement): void;
						public onDestroy(): void;
						public constructor(param0: androidcontentContext);
						public onMeasure(param0: number, param1: number): void;
						public getNativeAdElement(): com.smartadserver.android.library.model.SASNativeAdElement;
						public isEnforceAspectRatio(): boolean;
						public setEnforceAspectRatio(param0: boolean): void;
						public reset(): void;
					}
				}
			}
		}
	}
}

import androidwidgetImageView = android.widget.ImageView;
import androidviewViewOnTouchListener = android.view.View.OnTouchListener;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASNativeVideoControlsLayer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export class SASNativeVideoControlsLayer {
						public static CLOSE_BUTTON_ACTION: number;
						public static INFO_BUTTON_ACTION: number;
						public static PLAY_BUTTON_ACTION: number;
						public static PAUSE_BUTTON_ACTION: number;
						public static REPLAY_BUTTON_ACTION: number;
						public static OPEN_BUTTON_ACTION: number;
						public static VIDEO_SEEK_ACTION: number;
						public static MUTE_BUTTON_ACTION: number;
						public setOpenActionType(param0: number, param1: string): void;
						public setInterstitialMode(param0: boolean): void;
						public isPlaying(): boolean;
						public addActionListener(param0: com.smartadserver.android.library.ui.SASNativeVideoControlsLayer.ActionListener): void;
						public setOpenActionEnabled(param0: boolean): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						public setFullscreenMode(param0: boolean): void;
						public setPlaying(param0: boolean): void;
						public setSwipeListenerOnActionLayer(param0: androidviewViewOnTouchListener): void;
						public isFullScreenMode(): boolean;
						public setCurrentPosition(param0: number): void;
						public setReplayEnabled(param0: boolean): void;
						public setActionLayerVisible(param0: boolean): void;
						public isMuted(): boolean;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public showPlaybackControls(param0: boolean): void;
						public setMuted(param0: boolean): void;
						public onDestroy(): void;
						public togglePlaybackControls(): void;
						public removeActionListener(param0: com.smartadserver.android.library.ui.SASNativeVideoControlsLayer.ActionListener): void;
						public setVideoDuration(param0: number): void;
						public getBigPlayButton(): androidwidgetImageView;
						public isActionLayerVisible(): boolean;
						public constructor(param0: androidcontentContext);
					}
					export module SASNativeVideoControlsLayer {
						export class ActionListener {
							/**
							 * Constructs a new instance of the com.smartadserver.android.library.ui.SASNativeVideoControlsLayer$ActionListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onActionEvent(param0: number, param1: number): void;
							});
							public onActionEvent(param0: number, param1: number): void;
						}
						export class PlaybackControlBar {
							public show(param0: boolean): void;
							public constructor(param0: com.smartadserver.android.library.ui.SASNativeVideoControlsLayer, param1: androidcontentContext);
							public setCurrentPosition(param0: number, param1: boolean): void;
							public onDestroy(): void;
							public setIsPlaying(param0: boolean): void;
							public setVideoDuration(param0: number): void;
						}
					}
				}
			}
		}
	}
}

import androidnetUri = android.net.Uri;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.smartadserver.android.library.model.SASNativeVideoAdElement.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASAdView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export class SASNativeVideoLayer {
						public openUrl(param0: string): void;
						public onAttachedToWindow(): void;
						public setMuted(param0: boolean, param1: boolean): void;
						public onConfigurationChanged(param0: androidcontentresConfiguration): void;
						public setViewable(param0: boolean): void;
						public isMuted(): boolean;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public handleClickFromBackground(param0: boolean): void;
						public setupNativeVideoAd(param0: com.smartadserver.android.library.model.SASNativeVideoAdElement, param1: number): void;
						public constructor(param0: androidcontentContext, param1: com.smartadserver.android.library.ui.SASAdView);
						public fireTrackingPixels(param0: string): void;
						public onDestroy(): void;
						public closeWithAnimation(): void;
						public pauseVideo(): void;
						public replayVideo(): void;
						public reset(): void;
						public startVideo(): void;
					}
					export module SASNativeVideoLayer {
						export abstract class OnSwipeTouchListener {
							public onSwipeUpDown(): void;
							public onTouch(param0: androidviewView, param1: androidviewMotionEvent): boolean;
						}
						export module OnSwipeTouchListener {
							export class GestureListener {
								public onFling(param0: androidviewMotionEvent, param1: androidviewMotionEvent, param2: number, param3: number): boolean;
							}
						}
						export class ProgressMonitorTask {
							public run(): void;
						}
						export class ProgressPixel {
							public compareTo(param0: com.smartadserver.android.library.ui.SASNativeVideoLayer.ProgressPixel): number;
						}
						export class SASMediaPlayer {
							public stop(): void;
							public start(): void;
							public setDataSource(param0: androidcontentContext, param1: androidnetUri): void;
							public pause(): void;
							public release(): void;
							public prepare(): void;
							public prepareAsync(): void;
						}
						export class VPAIDJSBridge {
							public dispatchVPAIDEvent(param0: string, param1: string): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export class SASPlayerActivity {
						public static INTENT_EXTRA_VIDEO_CONFIG: string;
						public static INTENT_EXTRA_CLOSE_BUTTON_POSITION: string;
						public static INTENT_EXTRA_IS_CLOSE_BUTTON_VISIBLE: string;
						public onVideoViewCompletionListener: androidmediaMediaPlayerOnCompletionListener;
						public constructor();
						public onCreate(param0: androidosBundle): void;
						public onResume(): void;
						public onKeyUp(param0: number, param1: androidviewKeyEvent): boolean;
						public onPause(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export class SASRotatingImageLoader {
						public constructor(param0: androidcontentContext, param1: androidgraphicsBitmap);
						public onAttachedToWindow(): void;
						public onDetachedFromWindow(): void;
						public constructor(param0: androidcontentContext);
						public setLoaderBitmap(param0: androidgraphicsBitmap): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export class SASVideo360ResetButton {
						public setAngle(param0: number): void;
						public constructor(param0: androidcontentContext);
					}
				}
			}
		}
	}
}

import androidwidgetProgressBar = android.widget.ProgressBar;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./android.widget.ProgressBar.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export class SASVideoView {
						public static DEFAULT_VOLUME: number;
						public setOnVideoViewVisibilityChangedListener(param0: com.smartadserver.android.library.ui.SASVideoView.OnVideoViewVisibilityChanged): void;
						public setMutedVolume(param0: number): void;
						public setBounds(param0: number, param1: number, param2: number, param3: number): void;
						public onWindowVisibilityChanged(param0: number): void;
						public onDetachedFromWindow(): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						public release(): void;
						public addPlayButton(param0: androidcontentContext, param1: androidviewViewGroup, param2: androidviewViewOnClickListener): androidwidgetImageView;
						public static getImageViewButton(param0: androidcontentContext, param1: androidgraphicsBitmap, param2: number, param3: number): androidwidgetImageView;
						public unMuteAudio(): void;
						public addMuteButton(param0: androidcontentContext, param1: androidviewViewGroup, param2: androidviewViewOnClickListener): androidwidgetImageView;
						public isMuted(): boolean;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public removeOnVideoViewVisibilityChangedListener(): void;
						public addBufferingProgressBar(param0: androidcontentContext, param1: androidviewViewGroup): androidwidgetProgressBar;
						public muteAudio(): void;
						public constructor(param0: androidcontentContext);
						public getCurrentVolume(): number;
						public onMeasure(param0: number, param1: number): void;
						public getOnVideoViewVisibilityChangedListener(): com.smartadserver.android.library.ui.SASVideoView.OnVideoViewVisibilityChanged;
					}
					export module SASVideoView {
						export class OnVideoViewVisibilityChanged {
							/**
							 * Constructs a new instance of the com.smartadserver.android.library.ui.SASVideoView$OnVideoViewVisibilityChanged interface with the provided implementation.
							 */
							public constructor(implementation: {
								onVideoViewVisibilityChanged(param0: number): void;
							});
							public onVideoViewVisibilityChanged(param0: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export class SASViewabilityManager {
						public static VISIBILITY_UPDATE_INTERVAL: number;
						public constructor();
						public static registerVisibilityHolder(param0: com.smartadserver.android.library.ui.SASViewabilityManager.VisibilityHolder): void;
						public static processViewabilityPixels(param0: javautilArrayList, param1: number, param2: boolean): void;
						public static unregisterVisibilityHolder(param0: com.smartadserver.android.library.ui.SASViewabilityManager.VisibilityHolder): void;
					}
					export module SASViewabilityManager {
						export class VisibilityHolder {
							/**
							 * Constructs a new instance of the com.smartadserver.android.library.ui.SASViewabilityManager$VisibilityHolder interface with the provided implementation.
							 */
							public constructor(implementation: {
								updateVisibilityPercentage(): void;
							});
							public updateVisibilityPercentage(): void;
						}
					}
				}
			}
		}
	}
}

import androidwebkitWebSettings = android.webkit.WebSettings;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.webkit.ValueCallback.d.ts" />
/// <reference path="./android.webkit.WebChromeClient.d.ts" />
/// <reference path="./android.webkit.WebSettings.d.ts" />
/// <reference path="./android.webkit.WebViewClient.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export class SASWebView {
						public addJavascriptInterface(param0: javalangObject, param1: string): void;
						public loadUrl(param0: string): void;
						public loadDataWithBaseURL(param0: string, param1: string, param2: string, param3: string, param4: string): void;
						public clearCache(param0: boolean): void;
						public clearView(): void;
						public isLoadDataWithBaseURL(): boolean;
						public setCloseButtonOnClickListener(param0: androidviewViewOnClickListener): void;
						public isInAppBrowserMode(): boolean;
						public destroy(): void;
						public setWebChromeClient(param0: androidwebkitWebChromeClient): void;
						public evaluateJavascript(param0: string, param1: androidwebkitValueCallback): void;
						public setInAppBrowserMode(param0: boolean): void;
						public getSettings(): androidwebkitWebSettings;
						public setBackgroundColor(param0: number): void;
						public setOnTouchListener(param0: androidviewViewOnTouchListener): void;
						public constructor(param0: androidcontentContext);
						public setWebViewClient(param0: androidwebkitWebViewClient): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export module SphericalVideoView {
						export module OpenGL {
							export class SASGLProgram {
								public delete(): void;
								public constructor(param0: string, param1: string);
								public getAttribLocation(param0: string): number;
								public getUniformLocation(param0: string): number;
								public use(): void;
							}
						}
					}
				}
			}
		}
	}
}

import javanioFloatBuffer = java.nio.FloatBuffer;
import javanioShortBuffer = java.nio.ShortBuffer;
/// <reference path="./java.nio.FloatBuffer.d.ts" />
/// <reference path="./java.nio.ShortBuffer.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export module SphericalVideoView {
						export module OpenGL {
							export class SASGLSphere {
								public getIndices(): native.Array<javanioShortBuffer>;
								public getVerticesStride(): number;
								public getNumIndices(): native.Array<number>;
								public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
								public getTotalIndices(): number;
								public getVertices(): javanioFloatBuffer;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export module SphericalVideoView {
						export module OpenGL {
							export class SASGLSphereShaders {
								public static fragmentShader(): string;
								public static vertexShader(): string;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export module SphericalVideoView {
						export module OpenGL {
							export class SASGLUtil {
								public static stringFromMatrix3(param0: native.Array<number>): string;
								public static stringFromVector4(param0: native.Array<number>): string;
								public static stringFromMatrix4(param0: native.Array<number>): string;
								public static matrix4Equals(param0: native.Array<number>, param1: native.Array<number>): boolean;
								public static checkGlError(param0: string): void;
								public static matrix4EqualsIdentity(param0: native.Array<number>): boolean;
								public constructor();
								public static isValidSensorMatrix4(param0: native.Array<number>): boolean;
							}
						}
					}
				}
			}
		}
	}
}

import androidhardwareSensorManager = android.hardware.SensorManager;
/// <reference path="./android.hardware.SensorEvent.d.ts" />
/// <reference path="./android.hardware.SensorManager.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export module SphericalVideoView {
						export module OrientationProvider {
							export class SASImprovedOrientationSensorProvider extends com.smartadserver.android.library.ui.SphericalVideoView.OrientationProvider.SASOrientationProvider {
								public onSensorChanged(param0: androidhardwareSensorEvent): void;
								public constructor(param0: androidhardwareSensorManager);
							}
						}
					}
				}
			}
		}
	}
}

import javautilList = java.util.List;
/// <reference path="./android.hardware.Sensor.d.ts" />
/// <reference path="./android.hardware.SensorManager.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SphericalVideoView.OrientationProvider.SASOrientationProviderListener.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASEulerAngles.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASMatrixf4x4.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASQuaternion.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export module SphericalVideoView {
						export module OrientationProvider {
							export abstract class SASOrientationProvider {
								public syncToken: javalangObject;
								public sensorList: javautilList;
								public currentOrientationRotationMatrix: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASMatrixf4x4;
								public currentOrientationQuaternion: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASQuaternion;
								public currentGravityZ: number;
								public sensorManager: androidhardwareSensorManager;
								public orientationProviderListener: com.smartadserver.android.library.ui.SphericalVideoView.OrientationProvider.SASOrientationProviderListener;
								public getRotationMatrix(): com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASMatrixf4x4;
								public getEulerAngles(): com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASEulerAngles;
								public setOrientationProviderListener(param0: com.smartadserver.android.library.ui.SphericalVideoView.OrientationProvider.SASOrientationProviderListener): void;
								public stop(): void;
								public start(): void;
								public onAccuracyChanged(param0: androidhardwareSensor, param1: number): void;
								public constructor(param0: androidhardwareSensorManager);
								public getQuaternion(): com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASQuaternion;
								public getCurrentGravityZ(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export module SphericalVideoView {
						export module OrientationProvider {
							export class SASOrientationProviderListener {
								/**
								 * Constructs a new instance of the com.smartadserver.android.library.ui.SphericalVideoView.OrientationProvider.SASOrientationProviderListener interface with the provided implementation.
								 */
								public constructor(implementation: {
									onOrientationUpdated(): void;
								});
								public onOrientationUpdated(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export module SphericalVideoView {
						export module RepresentationUtils {
							export class SASEulerAngles {
								public getRoll(): number;
								public constructor(param0: number, param1: number, param2: number);
								public getYaw(): number;
								public getPitch(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export module SphericalVideoView {
						export module RepresentationUtils {
							export class SASMatrix {
								public static length(param0: number, param1: number, param2: number): number;
								public static frustumM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
								public static setIdentityM(param0: native.Array<number>, param1: number): void;
								public static scaleM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number): void;
								public static rotateM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number): void;
								public static scaleM(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number, param5: number, param6: number): void;
								public static multiplyMM(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number): void;
								public static rotateM(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number, param5: number, param6: number, param7: number): void;
								public static invertM(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number): boolean;
								public constructor();
								public static setRotateM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number): void;
								public static transposeM(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number): void;
								public static translateM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number): void;
								public static multiplyMM(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>): void;
								public static multiplyMV3(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>, param3: number): void;
								public static orthoM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
								public static setLookAtM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number): void;
								public static multiplyMV(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number): void;
								public static multiplyMV(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>): void;
								public static setRotateEulerM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number): void;
								public static perspectiveM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number): void;
								public static translateM(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number, param5: number, param6: number): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector4f.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export module SphericalVideoView {
						export module RepresentationUtils {
							export class SASMatrixf4x4 {
								public static matIndCol9_3x3: native.Array<number>;
								public static matIndCol16_3x3: native.Array<number>;
								public static matIndRow9_3x3: native.Array<number>;
								public static matIndRow16_3x3: native.Array<number>;
								public static matIndCol16_4x4: native.Array<number>;
								public static matIndRow16_4x4: native.Array<number>;
								public matrix: native.Array<number>;
								public setY0(param0: number): void;
								public size(): number;
								public setZ2(param0: number): void;
								public multiplyMatrix4x4ByMatrix(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASMatrixf4x4): void;
								public setX3(param0: number): void;
								public getMatrix(): native.Array<number>;
								public setX1(param0: number): void;
								public multiplyVector4fByMatrix(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector4f): void;
								public setMatrixValues(param0: native.Array<number>): void;
								public setZ0(param0: number): void;
								public isMatrixValid(): boolean;
								public setY2(param0: number): void;
								public transpose(): void;
								public setW3(param0: number): void;
								public setW1(param0: number): void;
								public multiplyMatrix(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number): void;
								public setX2(param0: number): void;
								public setZ3(param0: number): void;
								public constructor();
								public isColumnMajor(): boolean;
								public setX0(param0: number): void;
								public setColumnMajor(param0: boolean): void;
								public setZ1(param0: number): void;
								public setMatrix(param0: native.Array<number>): void;
								public multiplyVector3fByMatrix(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f): void;
								public setW2(param0: number): void;
								public setY3(param0: number): void;
								public setY1(param0: number): void;
								public setW0(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASMatrixf4x4.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector4f.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export module SphericalVideoView {
						export module RepresentationUtils {
							export class SASQuaternion extends com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector4f {
								public toString(): string;
								public subQuat(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASQuaternion, param1: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASQuaternion): void;
								public toEulerAngles(): native.Array<number>;
								public addQuat(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASQuaternion, param1: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASQuaternion): void;
								public subQuat(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASQuaternion): void;
								public setAxisAngle(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f, param1: number): void;
								public setAxisAngleRad(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f, param1: number): void;
								public set(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASQuaternion): void;
								public setEulerAngle(param0: number, param1: number, param2: number): void;
								public copyFromVec3(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f, param1: number): void;
								public setRowMajor(param0: native.Array<number>): void;
								public multiplyByScalar(param0: number): void;
								public setColumnMajor(param0: native.Array<number>): void;
								public normalise(): void;
								public getMatrix4x4(): com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASMatrixf4x4;
								public constructor(param0: number, param1: number, param2: number, param3: number);
								public clone(): com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASQuaternion;
								public loadIdentityQuat(): void;
								public slerp(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASQuaternion, param1: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASQuaternion, param2: number): void;
								public addQuat(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASQuaternion): void;
								public constructor();
								public constructor(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f, param1: number);
								public normalize(): void;
								public multiplyByQuat(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASQuaternion): void;
								public multiplyByQuat(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASQuaternion, param1: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASQuaternion): void;
								public toAxisAngle(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector4f): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector4f.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export module SphericalVideoView {
						export module RepresentationUtils {
							export class SASVector3f {
								public points: native.Array<number>;
								public setX(param0: number): void;
								public toArray(): native.Array<number>;
								public toString(): string;
								public y(): number;
								public dotProduct(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f): number;
								public getX(): number;
								public setZ(param0: number): void;
								public crossProduct(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f, param1: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f): void;
								public subtract(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f): void;
								public z(): number;
								public constructor(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector4f);
								public y(param0: number): void;
								public multiplyByScalar(param0: number): void;
								public z(param0: number): void;
								public crossProduct(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f): com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f;
								public setY(param0: number): void;
								public clone(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f): void;
								public constructor(param0: number, param1: number, param2: number);
								public add(param0: number): void;
								public constructor();
								public getLength(): number;
								public normalize(): void;
								public add(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f): void;
								public getZ(): number;
								public x(): number;
								public constructor(param0: number);
								public clone(param0: native.Array<number>): void;
								public constructor(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f);
								public getY(): number;
								public x(param0: number): void;
								public setXYZ(param0: number, param1: number, param2: number): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export module SphericalVideoView {
						export module RepresentationUtils {
							export class SASVector4f {
								public points: native.Array<number>;
								public setX(param0: number): void;
								public toString(): string;
								public y(): number;
								public lerp(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector4f, param1: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector4f, param2: number): void;
								public getX(): number;
								public copyVec4(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector4f): void;
								public setZ(param0: number): void;
								public subtract(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector4f, param1: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector4f): void;
								public getW(): number;
								public z(): number;
								public compareTo(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector4f): boolean;
								public setXYZW(param0: number, param1: number, param2: number, param3: number): void;
								public copyFromV3f(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f, param1: number): void;
								public w(param0: number): void;
								public y(param0: number): void;
								public multiplyByScalar(param0: number): void;
								public z(param0: number): void;
								public w(): number;
								public setY(param0: number): void;
								public constructor(param0: number, param1: number, param2: number, param3: number);
								public setW(param0: number): void;
								public constructor();
								public add(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f, param1: number): void;
								public constructor(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector3f, param1: number);
								public normalize(): void;
								public getZ(): number;
								public x(): number;
								public subdivide(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector4f): void;
								public subtract(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector4f): void;
								public ToArray(): native.Array<number>;
								public dotProduct(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector4f): number;
								public add(param0: com.smartadserver.android.library.ui.SphericalVideoView.RepresentationUtils.SASVector4f): void;
								public getY(): number;
								public x(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

import javaxmicroeditionkhronosopenglesGL10 = javax.microedition.khronos.opengles.GL10;
import javaxmicroeditionkhronoseglEGLConfig = javax.microedition.khronos.egl.EGLConfig;
import androidgraphicsSurfaceTexture = android.graphics.SurfaceTexture;
/// <reference path="./android.graphics.SurfaceTexture.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLConfig.d.ts" />
/// <reference path="./javax.microedition.khronos.opengles.GL10.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export module SphericalVideoView {
						export class SASSphericalVideoRenderer {
							public destroy(): void;
							public onDrawFrame(param0: javaxmicroeditionkhronosopenglesGL10): void;
							public onSurfaceCreated(param0: javaxmicroeditionkhronosopenglesGL10, param1: javaxmicroeditionkhronoseglEGLConfig): void;
							public onFrameAvailable(param0: androidgraphicsSurfaceTexture): void;
							public onSurfaceChanged(param0: javaxmicroeditionkhronosopenglesGL10, param1: number, param2: number): void;
						}
					}
				}
			}
		}
	}
}

import androidviewSurface = android.view.Surface;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./com.smartadserver.android.library.ui.SASVideo360ResetButton.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module ui {
					export module SphericalVideoView {
						export class SASSphericalVideoView {
							public setPanEnabled(param0: boolean): void;
							public surface(): androidviewSurface;
							public destroy(): void;
							public constructor(param0: androidcontentContext);
							public static isSupportedByCurrentDevice(param0: androidcontentContext): boolean;
							public handleClick(): boolean;
							public pause(): void;
							public resume(): void;
							public setResetButton(param0: com.smartadserver.android.library.ui.SASVideo360ResetButton): void;
							public onGLSurfaceReady(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module util {
					export class SASConnectivityUtil {
						/**
						 * Constructs a new instance of the com.smartadserver.android.library.util.SASConnectivityUtil interface with the provided implementation.
						 */
						public constructor(implementation: {
							isConnected(param0: androidcontentContext): boolean;
						});
						public isConnected(param0: androidcontentContext): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module util {
					export class SASConstants {
						public static DEFAULT_BASE_URL: string;
						public static PLATFORM_NAME: string;
						public static SDK_NAME: string;
						public static SDK_VERSION: string;
						public static SDK_REV_KEY: string;
						public static CONNECTION_TYPE_WIFI: string;
						public static CONNECTION_TYPE_CELL: string;
						public static LONGITUDE_PARAM_NAME: string;
						public static LATITUDE_PARAM_NAME: string;
						public static USER_INPUT_PROVIDER: string;
						public static SAS_CACHE_BASE_FOLDER: string;
						public static SAS_CLICK_URL: string;
						public constructor();
					}
				}
			}
		}
	}
}

import javaioFileOutputStream = java.io.FileOutputStream;
import javaioSerializable = java.io.Serializable;
import javaioFile = java.io.File;
import javanetURL = java.net.URL;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.FileOutputStream.d.ts" />
/// <reference path="./java.io.Serializable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module util {
					export class SASFileUtil {
						public static CONNECTION_TIMEOUT: number;
						public static READ_TIMEOUT: number;
						public constructor();
						public static getFileOutputStreamFromPath(param0: androidcontentContext, param1: string, param2: string): javaioFileOutputStream;
						public static getFileContentsFromURL(param0: javanetURL, param1: native.Array<string>): string;
						public static getFileContentsFromURL(param0: javanetURL): string;
						public static downloadFileToPath(param0: androidcontentContext, param1: string, param2: string, param3: string): void;
						public static deleteRecursive(param0: javaioFile): void;
						public static writeObjectToCache(param0: androidcontentContext, param1: javaioSerializable, param2: string, param3: string): boolean;
						public static readObjectFromCache(param0: androidcontentContext, param1: string, param2: string): javalangObject;
						public static initHTTPCache(param0: androidcontentContext): void;
						public static getFileContents(param0: string): string;
					}
				}
			}
		}
	}
}

import androidcontentresResources = android.content.res.Resources;
import androidosHandler = android.os.Handler;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.location.Location.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.webkit.WebView.d.ts" />
/// <reference path="./com.smartadserver.android.library.util.SASConnectivityUtil.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module smartadserver {
		export module android {
			export module library {
				export module util {
					export class SASUtil {
						public static NETWORK_CONNECTION_TYPE_WIFI: number;
						public static NETWORK_CONNECTION_TYPE_4G: number;
						public static NETWORK_CONNECTION_TYPE_3G: number;
						public static NETWORK_CONNECTION_TYPE_2G: number;
						public static NETWORK_CONNECTION_TYPE_UNKNOWN: number;
						public static debugModeEnabled: boolean;
						public static UNKNOWN_PACKAGE: string;
						public static UNKNOWN_APP: string;
						public static getBaseURL(param0: string): string;
						public static getBitmapFromURL(param0: string, param1: number): androidgraphicsBitmap;
						public static getStringResource(param0: string, param1: string, param2: androidcontentContext): string;
						public static getSHA256Hash(param0: string): string;
						public static getDimensionInPixels(param0: number, param1: androidcontentresResources): number;
						public static isAllowAutomaticLocationDetection(): boolean;
						public static parseTimeOffset(param0: string, param1: number): number;
						public static getNetworkConnectionType(): number;
						public static splitPixelsUrlString(param0: string): native.Array<string>;
						public static isUIThread(): boolean;
						public static setAllowAutomaticLocationDetection(param0: boolean): void;
						public static getRectRelativeToOtherView(param0: androidviewView, param1: androidviewView): native.Array<number>;
						public static getMD5Hash(param0: string): string;
						public static isLandscapeDevice(param0: androidcontentContext): boolean;
						public static getAutomaticLocation(param0: androidcontentContext): androidlocationLocation;
						public static getCalendarEventRecurrenceString(param0: orgjsonJSONObject): string;
						public constructor();
						public static URLEncode(param0: string): string;
						public static getUID(param0: androidcontentContext): string;
						public static getTimestamp(): string;
						public static getBitmapFromURL(param0: string): androidgraphicsBitmap;
						public static getScreenOrientation(param0: androidcontentContext): number;
						public static getLocalIpAddress(): string;
						public static getRectRelativeToVisibleRect(param0: androidviewView, param1: number): native.Array<number>;
						public static logInfo(param0: string): void;
						public static setConnectivityUtil(param0: com.smartadserver.android.library.util.SASConnectivityUtil): void;
						public static logDebug(param0: string, param1: string): void;
						public static getAppPackageName(param0: androidcontentContext): string;
						public static getRotation(param0: androidcontentContext): number;
						public static enableLogging(): void;
						public static isScreenLockedOrOff(param0: androidcontentContext): boolean;
						public static screenshotToBase64(param0: androidgraphicsBitmap, param1: number): string;
						public static getAppName(param0: androidcontentContext): string;
						public static getUserAgent(param0: androidcontentContext): string;
						public static getMainLooperHandler(): androidosHandler;
						public static isConnected(param0: androidcontentContext): boolean;
						public static getViewIndexInParent(param0: androidviewView): number;
						public static logError(param0: string): void;
						public static executeJavascriptOnWebView(param0: androidwebkitWebView, param1: string, param2: javalangRunnable): void;
						public static getLastKnownApplicationContext(): androidcontentContext;
						public static getAdvertisingIdClientInfo(param0: androidcontentContext, param1: boolean): com.google.android.gms.ads.identifier.AdvertisingIdClient.Info;
						public static logWarning(param0: string): void;
						public static getSDKKey(): string;
					}
				}
			}
		}
	}
}

