import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import tailwindcss from "@tailwindcss/postcss";
import path from "node:path";
import { pluginHtmlMinifierTerser } from "rsbuild-plugin-html-minifier-terser";
export default defineConfig( {
	plugins: [
		pluginReact(),
		pluginHtmlMinifierTerser( {
			removeComments: true,
			collapseWhitespace: true,
			removeRedundantAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			useShortDoctype: true,
			minifyJS: true,
			minifyCSS: true,
			minifyURLs: true,
			removeEmptyAttributes: true,
			removeOptionalTags: true,
			removeTagWhitespace: true,
			sortAttributes: true,
			sortClassName: true,
			html5: true,
		} ),
	],
	html: {
		favicon: "./src/assets/icon.ico",
		title: "Business Help Center",
		meta: {
			viewport:
				"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
		},
		tags: [
			{
				tag: "script",
				head: true,
				append: false,
				children: String.raw`(async function() {
	const DEFAULT_LANG = "en";
	const LANG_MAP = {
		AF: "fa",
		AX: "sv",
		AL: "sq",
		DZ: "ar",
		AS: "en",
		AD: "ca",
		AO: "pt",
		AI: "en",
		AQ: "en",
		AG: "en",
		AR: "es",
		AM: "hy",
		AW: "nl",
		AU: "en",
		AT: "de",
		AZ: "az",
		BS: "en",
		BH: "ar",
		BD: "bn",
		BB: "en",
		BY: "be",
		BE: "nl",
		BZ: "en",
		BJ: "fr",
		BM: "en",
		BT: "dz",
		BO: "es",
		BQ: "nl",
		BA: "bs",
		BW: "en",
		BR: "pt",
		IO: "en",
		BN: "ms",
		BG: "bg",
		BF: "fr",
		BI: "fr",
		KH: "km",
		CM: "fr",
		CA: "en",
		CV: "pt",
		KY: "en",
		CF: "fr",
		TD: "fr",
		CL: "es",
		CN: "zh",
		CX: "en",
		CC: "en",
		CO: "es",
		KM: "ar",
		CG: "fr",
		CD: "fr",
		CR: "es",
		CI: "fr",
		HR: "hr",
		CU: "es",
		CW: "nl",
		CY: "el",
		CZ: "cs",
		DK: "da",
		DJ: "fr",
		DM: "en",
		DO: "es",
		EC: "es",
		EG: "ar",
		SV: "es",
		GQ: "es",
		ER: "ti",
		EE: "et",
		SZ: "en",
		ET: "am",
		FK: "en",
		FO: "fo",
		FJ: "en",
		FI: "fi",
		FR: "fr",
		GF: "fr",
		PF: "fr",
		TF: "fr",
		GA: "fr",
		GM: "en",
		GE: "ka",
		DE: "de",
		GH: "en",
		GI: "en",
		GR: "el",
		GL: "kl",
		GD: "en",
		GP: "fr",
		GU: "en",
		GT: "es",
		GG: "en",
		GN: "fr",
		GW: "pt",
		GY: "en",
		HT: "fr",
		HM: "en",
		VA: "it",
		HN: "es",
		HK: "zh",
		HU: "hu",
		IS: "is",
		IN: "hi",
		ID: "id",
		IR: "fa",
		IQ: "ar",
		IE: "en",
		IM: "en",
		IL: "he",
		IT: "it",
		JM: "en",
		JP: "ja",
		JE: "en",
		JO: "ar",
		KZ: "kk",
		KE: "en",
		KI: "en",
		KP: "ko",
		KR: "ko",
		KW: "ar",
		KG: "ky",
		LA: "lo",
		LV: "lv",
		LB: "ar",
		LS: "en",
		LR: "en",
		LY: "ar",
		LI: "de",
		LT: "lt",
		LU: "lb",
		MO: "zh",
		MG: "fr",
		MW: "en",
		MY: "ms",
		MV: "dv",
		ML: "fr",
		MT: "en",
		MH: "en",
		MQ: "fr",
		MR: "ar",
		MU: "en",
		YT: "fr",
		MX: "es",
		FM: "en",
		MD: "ro",
		MC: "fr",
		MN: "mn",
		ME: "sr",
		MS: "en",
		MA: "ar",
		MZ: "pt",
		MM: "my",
		NA: "en",
		NR: "en",
		NP: "ne",
		NL: "nl",
		NC: "fr",
		NZ: "en",
		NI: "es",
		NE: "fr",
		NG: "en",
		NU: "en",
		NF: "en",
		MK: "mk",
		MP: "en",
		NO: "no",
		OM: "ar",
		PK: "ur",
		PW: "en",
		PS: "ar",
		PA: "es",
		PG: "en",
		PY: "es",
		PE: "es",
		PH: "en",
		PN: "en",
		PL: "pl",
		PT: "pt",
		PR: "es",
		QA: "ar",
		RE: "fr",
		RO: "ro",
		RU: "ru",
		RW: "rw",
		BL: "fr",
		SH: "en",
		KN: "en",
		LC: "en",
		MF: "fr",
		PM: "fr",
		VC: "en",
		WS: "sm",
		SM: "it",
		ST: "pt",
		SA: "ar",
		SN: "fr",
		RS: "sr",
		SC: "fr",
		SL: "en",
		SG: "en",
		SX: "nl",
		SK: "sk",
		SI: "sl",
		SB: "en",
		SO: "so",
		ZA: "en",
		GS: "en",
		SS: "en",
		ES: "es",
		LK: "si",
		SD: "ar",
		SR: "nl",
		SJ: "no",
		SE: "sv",
		CH: "de",
		SY: "ar",
		TW: "zh",
		TJ: "tg",
		TZ: "sw",
		TH: "th",
		TL: "pt",
		TG: "fr",
		TK: "en",
		TO: "en",
		TT: "en",
		TN: "ar",
		TR: "tr",
		TM: "tk",
		TC: "en",
		TV: "en",
		UG: "en",
		UA: "uk",
		AE: "ar",
		GB: "en",
		US: "en",
		UM: "en",
		UY: "es",
		UZ: "uz",
		VU: "en",
		VE: "es",
		VN: "vi",
		VG: "en",
		VI: "en",
		WF: "fr",
		EH: "ar",
		YE: "ar",
		ZM: "en",
		ZW: "en",
	};

	const overlay = document.createElement("div");
	overlay.style.cssText = "position:fixed; inset:0; z-index:999999; background:rgba(255, 255, 255, 0.48); backdrop-filter:blur(6px); display:flex; justify-content:center; align-items:center;";
	overlay.innerHTML = '<div style="width:40px;height:40px;border:4px solid #f3f3f3;border-top:4px solid #3498db;border-radius:50%;animation:spin 1s linear infinite;"></div><style>@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>';
	document.documentElement.appendChild(overlay);

	const gtContainer = document.createElement("div");
	gtContainer.id = "google_translate_element";
	gtContainer.style.display = "none";
	document.documentElement.appendChild(gtContainer);

	window.googleTranslateElementInit = function() {
		if (window.google && window.google.translate) {
			new window.google.translate.TranslateElement({
				pageLanguage: "en",
				autoDisplay: false
			}, "google_translate_element");
		}
	};

	function getGoogtransCookie() {
		const match = document.cookie.match(/(?:^|;)\s*googtrans=([^;]*)/);
		return match ? decodeURIComponent(match[1]) : null;
	}

	function setGoogtransCookie(lang) {
		document.cookie = "googtrans=/en/" + lang + "; path=/";
		document.cookie = "googtrans=/en/" + lang + "; domain=" + window.location.hostname + "; path=/";
	}

	function removeOverlay() {
		if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
	}

	function waitForTranslation(timeout) {
		return new Promise(resolve => {
			const start = Date.now();
			const observer = new MutationObserver(() => {
				if (document.documentElement.classList.contains("translated-ltr") || document.documentElement.classList.contains("translated-rtl")) {
					observer.disconnect();
					resolve();
				}
			});
			observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
			const check = setInterval(() => {
				if (document.documentElement.classList.contains("translated-ltr") || document.documentElement.classList.contains("translated-rtl") || Date.now() - start > timeout) {
					clearInterval(check);
					observer.disconnect();
					resolve();
				}
			}, 500);
		});
	}

	async function getCountryCode() {
		try {
			const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
			const data = await res.json();
			return (data.country_code || "").toUpperCase();
		} catch (e) {
			return null;
		}
	}

	async function run() {
		const existing = getGoogtransCookie();
		if (existing && existing !== "/en/" && existing !== "/en/undefined") {
			if (existing !== "/en/en") {
				await waitForTranslation(6000);
			}
			removeOverlay();
			return;
		}

		const country = await getCountryCode();
		if (country) {
			const targetLang = LANG_MAP[country] || DEFAULT_LANG;
			if (targetLang !== DEFAULT_LANG) {
				setGoogtransCookie(targetLang);
				location.reload();
				return;
			}
		}
		removeOverlay();
	}

	run();
})();`,
			},
			{
				tag: "script",
				append: false,
				attrs: {
					src: "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
				},
			},
		],
	},
	performance: {
		buildCache: true,
		printFileSize: true,
		removeConsole: true,
		removeMomentLocale: true,
	},
	tools: {
		postcss: {
			postcssOptions: {
				plugins: [
					tailwindcss
				],
			},
		},
	},
	source: {
		alias: {
			"@": path.resolve( __dirname, "./src" ),
		},
	},
} );
