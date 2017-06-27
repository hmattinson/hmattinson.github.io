/*
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function(a) {
	a.cookie = function(g, f, k) {
		if (arguments.length > 1
				&& (!/Object/.test(Object.prototype.toString.call(f))
						|| f === null || f === undefined)) {
			k = a.extend({}, k);
			if (f === null || f === undefined) {
				k.expires = -1
			}
			if (typeof k.expires === "number") {
				var h = k.expires, j = k.expires = new Date();
				j.setDate(j.getDate() + h)
			}
			f = String(f);
			return (document.cookie = [ encodeURIComponent(g), "=",
					k.raw ? f : encodeURIComponent(f),
					k.expires ? "; expires=" + k.expires.toUTCString() : "",
					k.path ? "; path=" + k.path : "",
					k.domain ? "; domain=" + k.domain : "",
					k.secure ? "; secure" : "" ].join(""))
		}
		k = f || {};
		var b = k.raw ? function(i) {
			return i
		} : decodeURIComponent;
		var c = document.cookie.split("; ");
		for (var e = 0, d; d = c[e] && c[e].split("="); e++) {
			if (b(d[0]) === g) {
				return b(d[1] || "")
			}
		}
		return null
	}
})(jQuery);
function showCookiesMessage() {

	setTimeout(function() {
		$("#cookieMessage").fadeOut(1000)
	}, 60000);
	if ($.cookie("cookiesOk") != 1) {
		$("body")
				.append(
						'<div id="cookieMessage" style="z-index:100;position:fixed; bottom:0; width:100%; margin-left:auto; margin-right:auto; height:'
								+ '40px;"><div style="width:100%; margin-right:auto; margin-left:auto;position:relative;"><div id="cookieMessageInner" style="padding-left:10px; padding-top:7px;'
								+ "bottom:0; margin-left:auto; margin-right:auto; height:40px;"
								+ "background-color:#000"
								+ '; opacity:0.8"></div><div id="cookieText" style="padding-right: 60px; padding-left:10px;color:#fff; font-size: 1.4rem; font-family:\'PT Sans\',sans-serif; position:absolute; top:7px; left:10px;">By continuing to use the site, you agree to the use of cookies. You can change this and find out more by following <a href="/privacy-policy" target="_blank" style="color:'
								+ '#fff; text-decoration:underline;">this link</a></div><div id="acceptCookies" style="float: right; background-color:#000;font-size:1.4rem ;color:#fff; font-family:\'PT Sans\',sans-serif; opacity:1; position:absolute; right:0; top:0; padding:5px; margin-right:10px; margin-top:3px; cursor: pointer;">Accept</div></div></div>')
	}
}
$(document).on("click", "#acceptCookies", function() {
	createCookie()
});
function createCookie() {
	$("#cookieMessage").fadeOut(1000);
	$.cookie("cookiesOk", 1, {
		path : "/",
		expires : 365
	})
};
