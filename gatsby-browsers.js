'use strict';

exports.onRouteUpdate = function (_ref, _ref2) {
  var prevLocation = _ref.prevLocation;
  var _ref2$trackPage = _ref2.trackPage,
      trackPage = _ref2$trackPage === undefined ? true : _ref2$trackPage,
      _ref2$trackPageOnRout = _ref2.trackPageOnRouteUpdate,
      trackPageOnRouteUpdate = _ref2$trackPageOnRout === undefined ? true : _ref2$trackPageOnRout,
      _ref2$trackPageOnRout2 = _ref2.trackPageOnRouteUpdateDelay,
      trackPageOnRouteUpdateDelay = _ref2$trackPageOnRout2 === undefined ? 50 : _ref2$trackPageOnRout2,
      _ref2$delayLoadUntilA = _ref2.delayLoadUntilActivity,
      delayLoadUntilActivity = _ref2$delayLoadUntilA === undefined ? false : _ref2$delayLoadUntilA,
      _ref2$delayLoadUntilA2 = _ref2.delayLoadUntilActivityAdditionalDelay,
      delayLoadUntilActivityAdditionalDelay = _ref2$delayLoadUntilA2 === undefined ? 0 : _ref2$delayLoadUntilA2,
      includeTitleInTrackPage = _ref2.includeTitleInTrackPage,
      _ref2$trackPageWithTi = _ref2.trackPageWithTitle,
      trackPageWithTitle = _ref2$trackPageWithTi === undefined ? false : _ref2$trackPageWithTi;


  if (typeof includeTitleInTrackPage === 'boolean') {
    console.warn('WARNING: option for gatsby-plugin-segment "includeTitleInTrackPage" is deprecated. Please use "trackPageWithTitle" instead.');
    trackPageWithTitle = includeTitleInTrackPage;
  }

  if (prevLocation && delayLoadUntilActivity) {
    var additionalLoadDelay = Math.max(0, delayLoadUntilActivityAdditionalDelay || 0);
    if (additionalLoadDelay) {
      var trackPageCb = function trackPageCb() {
        return trackPageFn(additionalLoadDelay);
      };

      setTimeout(function () {
        var callbackWasQueued = loaderCallback(trackPageCb);
        if (!callbackWasQueued) {
          trackPageCb();
        }
      }, additionalLoadDelay);
    } else {
      var callbackWasQueued = loaderCallback(trackPageFn);
      if (!callbackWasQueued) {
        trackPageFn();
      }
    }

    return;
  }

  trackPageFn();
  return;

  function pageviewCallback() {
    if (window.gatsbyPluginSegmentPageviewCaller) {
      window.gatsbyPluginSegmentPageviewCaller();
    } else if (window.analytics) {
      window.analytics.page(trackPageWithTitle ? document.title : undefined);
    }
  }

  function trackPageFn() {
    var alreadyDelayedBy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (!(trackPage && trackPageOnRouteUpdate)) {
      return;
    }

    var delay = Math.max(0, trackPageOnRouteUpdateDelay || 0) - alreadyDelayedBy;
    if (delay > 0) {
      setTimeout(pageviewCallback, delay);
    } else {
      pageviewCallback();
    }
  }

  function loaderCallback(cb) {
    if (window.gatsbyPluginSegmentLoader) {
      window.gatsbyPluginSegmentLoader(cb);
      return true;
    }
  }
};