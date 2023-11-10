// External JavaScript file (e.g., script.js)

// Google Tag Manager
(function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-5FKQC3F');

// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-C955YD8SEF');

// Typekit Integration
(function (d) {
    var config = {
        kitId: 'yqp8xyb',
        scriptTimeout: 3000,
        async: false
    };
    var h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout);
    var tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a;
    h.className += " wf-loading";
    tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
    tk.async = true;
    tk.onload = tk.onreadystatechange = function () {
        a = this.readyState;
        if (f || a && a != "complete" && a != "loaded") return;
        f = true; clearTimeout(t);
        try { Typekit.load(config) } catch (e) { }
    };
    s.parentNode.insertBefore(tk, s);
})(document);

// Other Meta Tags
document.querySelector('meta[charset="UTF-8"]').setAttribute('content', 'text/html; charset=UTF-8');
document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width,initial-scale=1,maximum-scale=1');
document.querySelector('meta[http-equiv="X-UA-Compatible"]').setAttribute('content', 'IE=edge');
document.title = 'Positive News | Good journalism about good things - Positive News';

// Other head elements...
// Polyfills and Vendor Scripts
document.getElementById('wp-polyfill-inert-js').src = 'https://www.positive.news/wp/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2';
document.getElementById('regenerator-runtime-js').src = 'https://www.positive.news/wp/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.11';
document.getElementById('wp-polyfill-js').src = 'https://www.positive.news/wp/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0';
document.getElementById('wp-hooks-js').src = 'https://www.positive.news/wp/wp-includes/js/dist/hooks.min.js?ver=c6aec9a8d4e5a5d543a1';

// WooCommerce Tracking
document.getElementById('woo-tracks-js').src = 'https://stats.wp.com/w.js?ver=202345';

// Say What JS
var sayWhatScript = document.createElement('script');
sayWhatScript.type = 'text/javascript';
sayWhatScript.src = 'https://www.positive.news/wp-content/plugins/say-what/assets/build/frontend.js?ver=fd31684c45e4d85aeb4e';
document.head.appendChild(sayWhatScript);

// jQuery
document.getElementById('jquery-core-js').src = 'https://www.positive.news/wp/wp-includes/js/jquery/jquery.min.js?ver=3.7.0';
document.getElementById('jquery-migrate-js').src = 'https://www.positive.news/wp/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1';

// GTM4WP WooCommerce Enhanced
document.getElementById('gtm4wp-woocommerce-enhanced-js').src = 'https://www.positive.news/wp-content/plugins/duracelltomi-google-tag-manager/js/gtm4wp-woocommerce-enhanced.js?ver=1.18';

// Additional Initialization
var initScriptExtra = document.createElement('script');
initScriptExtra.type = 'text/javascript';
initScriptExtra.innerHTML = 'var bloginfo = { "template_url": "https:\/\/www.positive.news\/wp-content\/themes\/elm", "site_url": "https:\/\/www.positive.news", "shop_page": "https:\/\/www.positive.news\/magazine\/" };';
document.head.appendChild(initScriptExtra);

// Initialization Script
document.getElementById('init-js').src = 'https://www.positive.news/wp-content/themes/elm/assets/js/min/scripts.min.js?ver=20231106-144358';

// Cookie Notice
var cookieNoticeScriptBefore = document.createElement('script');
cookieNoticeScriptBefore.type = 'text/javascript';
cookieNoticeScriptBefore.async = true;
cookieNoticeScriptBefore.innerHTML = 'var cnArgs = { "ajaxUrl": "https:\/\/www.positive.news\/wp\/wp-admin\/admin-ajax.php", "nonce": "684b1b1b5f", "hideEffect": "fade", "position": "bottom", "onScroll": false, "onScrollOffset": 100, "onClick": false, "cookieName": "cookie_notice_accepted", "cookieTime": 2592000, "cookieTimeRejected": 2592000, "globalCookie": false, "redirection": false, "cache": false, "revokeCookies": false, "revokeCookiesOpt": "automatic" };';
document.head.appendChild(cookieNoticeScriptBefore);

var cookieNoticeScript = document.createElement('script');
cookieNoticeScript.type = 'text/javascript';
cookieNoticeScript.async = true;
cookieNoticeScript.src = 'https://www.positive.news/wp-content/plugins/cookie-notice/js/front.min.js?ver=2.4.9';
document.head.appendChild(cookieNoticeScript);
// External JavaScript file (e.g., script2.js)

// Data Layer Initialization
var dataLayer_content = {
    "pagePostType": "frontpage",
    "pagePostType2": "single-page",
    "cartContent": {
        "totals": {
            "applied_coupons": [],
            "discount_total": 0,
            "subtotal": 0,
            "total": 0
        },
        "items": []
    }
};
dataLayer.push(dataLayer_content);

// GTM4WP Warning
console.warn && console.warn("[GTM4WP] Google Tag Manager container code placement set to OFF !!!");
console.warn && console.warn("[GTM4WP] Data layer codes are active but GTM container must be loaded using custom coding !!!");

// Body Class Modification
(function () {
    var bodyClass = document.body.className;
    bodyClass = bodyClass.replace(/woocommerce-no-js/, 'woocommerce-js');
    document.body.className = bodyClass;
})();

// External JavaScript file (e.g., script3.js)

// jQuery BlockUI
var jqueryBlockUI = document.createElement('script');
jqueryBlockUI.src = 'https://www.positive.news/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.7.0-wc.8.0.2';
jqueryBlockUI.id = 'jquery-blockui-js';
document.head.appendChild(jqueryBlockUI);

// WooCommerce Add to Cart
var wcAddToCart = document.createElement('script');
wcAddToCart.type = 'text/javascript';
wcAddToCart.text = 'var wc_add_to_cart_params = { "ajax_url": "/wp/wp-admin/admin-ajax.php", "wc_ajax_url": "/?wc-ajax=%%endpoint%%", "i18n_view_cart": "View cart", "cart_url": "https://www.positive.news/cart/", "is_cart": "", "cart_redirect_after_add": "yes" };';
wcAddToCart.id = 'wc-add-to-cart-js-extra';
document.head.appendChild(wcAddToCart);

var wcAddToCartScript = document.createElement('script');
wcAddToCartScript.src = 'https://www.positive.news/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=8.0.2';
wcAddToCartScript.id = 'wc-add-to-cart-js';
document.head.appendChild(wcAddToCartScript);

// JS Cookie
var jsCookie = document.createElement('script');
jsCookie.src = 'https://www.positive.news/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4-wc.8.0.2';
jsCookie.id = 'js-cookie-js';
document.head.appendChild(jsCookie);

// WooCommerce
var woocommerceParams = document.createElement('script');
woocommerceParams.type = 'text/javascript';
woocommerceParams.text = 'var woocommerce_params = { "ajax_url": "/wp/wp-admin/admin-ajax.php", "wc_ajax_url": "/?wc-ajax=%%endpoint%%" };';
woocommerceParams.id = 'woocommerce-js-extra';
document.head.appendChild(woocommerceParams);

var woocommerceScript = document.createElement('script');
woocommerceScript.src = 'https://www.positive.news/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=8.0.2';
woocommerceScript.id = 'woocommerce-js';
document.head.appendChild(woocommerceScript);

// Metorik
var metorikParams = document.createElement('script');
metorikParams.type = 'text/javascript';
metorikParams.text = 'var metorik_params = { "lifetime": "6", "session": "30", "ajaxurl": "https://www.positive.news/wp/wp-admin/admin-ajax.php", "cart_tracking": "1", "cart_items": "0", "cart_checkout_button": "1", "add_cart_popup_placement": "bottom", "send_cart_events": "added_to_cart removed_from_cart updated_cart_totals updated_shipping_method applied_coupon removed_coupon updated_checkout", "sbjs_domain": "", "send_cart_fragments": "1" };';
metorikParams.id = 'metorik-js-js-extra';
document.head.appendChild(metorikParams);

var metorikScript = document.createElement('script');
metorikScript.src = 'https://www.positive.news/wp-content/plugins/metorik-helper/assets/js/metorik.min.js?ver=1.7.0';
metorikScript.id = 'metorik-js-js';
document.head.appendChild(metorikScript);

// Google Recaptcha
var recaptcha = document.createElement('script');
recaptcha.src = 'https://www.google.com/recaptcha/api.js?render=explicit&hl=en_US&ver=6.3';
recaptcha.id = 'recaptcha-js';
document.head.appendChild(recaptcha);

// jQuery UI
var jqueryUiCore = document.createElement('script');
jqueryUiCore.src = 'https://www.positive.news/wp/wp-includes/js/jquery/ui/core.min.js?ver=1.13.2';
jqueryUiCore.id = 'jquery-ui-core-js';
document.head.appendChild(jqueryUiCore);

var jqueryUiDatepicker = document.createElement('script');
jqueryUiDatepicker.src = 'https://www.positive.news/wp/wp-includes/js/jquery/ui/datepicker.min.js?ver=1.13.2';
jqueryUiDatepicker.id = 'jquery-ui-datepicker-js';
document.head.appendChild(jqueryUiDatepicker);

var jqueryUiDatepickerAfter = document.createElement('script');
jqueryUiDatepickerAfter.text = 'jQuery(function (jQuery) { jQuery.datepicker.setDefaults({ "closeText": "Close", "currentText": "Today", "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], "monthNamesShort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], "nextText": "Next", "prevText": "Previous", "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], "dayNamesMin": ["S", "M", "T", "W", "T", "F", "S"], "dateFormat": "MM d, yy", "firstDay": 1, "isRTL": false }); });';
jqueryUiDatepickerAfter.id = 'jquery-ui-datepicker-js-after';
document.head.appendChild(jqueryUiDatepickerAfter);

// WordPress Popup
var hustleUIScripts = document.createElement('script');
hustleUIScripts.src = 'https://www.positive.news/wp-content/plugins/wordpress-popup/assets/hustle-ui/js/hustle-ui.min.js?ver=4.3.0';
hustleUIScripts.id = 'hui_scripts-js';
document.head.appendChild(hustleUIScripts);

var underscoreJs = document.createElement('script');
underscoreJs.src = 'https://www.positive.news/wp/wp-includes/js/underscore.min.js?ver=1.13.4';
underscoreJs.id = 'underscore-js';
document.head.appendChild(underscoreJs);

var hustleFrontExtra = document.createElement('script');
hustleFrontExtra.type = 'text/javascript';
hustleFrontExtra.text = 'var Modules = [ /* ... Your Modules data ... */ ]; var incOpt = { /* ... Your incOpt data ... */ };';
hustleFrontExtra.id = 'hustle_front-js-extra';
document.head.appendChild(hustleFrontExtra);

var hustleFront = document.createElement('script');
hustleFront.src = 'https://www.positive.news/wp-content/plugins/wordpress-popup/assets/js/front.min.js?ver=4.3.0';
hustleFront.id = 'hustle_front-js';
document.head.appendChild(hustleFront);

// WooCommerce Subscriptions Gifting
var woocommerceSubscriptionsGifting = document.createElement('script');
woocommerceSubscriptionsGifting.src = 'https://www.positive.news/wp-content/plugins/woocommerce-subscriptions-gifting/js/wcs-gifting.js?ver=2.0.0';
woocommerceSubscriptionsGifting.id = 'woocommerce_subscriptions_gifting-js';
document.head.appendChild(woocommerceSubscriptionsGifting);

// Gravity Forms Recaptcha
var gformsRecaptchaRecaptchaStrings = document.createElement('script');
gformsRecaptchaRecaptchaStrings.type = 'text/javascript';
gformsRecaptchaRecaptchaStrings.text = 'var gforms_recaptcha_recaptcha_strings = { "site_key": "6LewlDslAAAAACrUAjW5K7t9CdeYLW9K30FC4WtC", "ajaxurl": "https://www.positive.news/wp/wp-admin/admin-ajax.php", "nonce": "df776c4967" };';
gformsRecaptchaRecaptchaStrings.id = 'gforms_recaptcha_recaptcha-js-extra';
document.head.appendChild(gformsRecaptchaRecaptchaStrings);

var gformsRecaptchaRecaptcha = document.createElement('script');
gformsRecaptchaRecaptcha.src = 'https://www.google.com/recaptcha/api.js?render=6LewlDslAAAAACrUAjW5K7t9CdeYLW9K30FC4WtC&ver=1.2.0';
gformsRecaptchaRecaptcha.id = 'gforms_recaptcha_recaptcha-js';
document.head.appendChild(gformsRecaptchaRecaptcha);

var gformsRecaptchaRecaptchaAfter = document.createElement('script');
gformsRecaptchaRecaptchaAfter.text = '(function ($) { grecaptcha.ready(function () { $(\'.grecaptcha-badge\').css(\'visibility\', \'hidden\'); }); })(jQuery);';
gformsRecaptchaRecaptchaAfter.id = 'gforms_recaptcha_recaptcha-js-after';
document.head.appendChild(gformsRecaptchaRecaptchaAfter);
