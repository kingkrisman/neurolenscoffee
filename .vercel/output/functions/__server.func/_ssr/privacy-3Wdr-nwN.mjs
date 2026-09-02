import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as PublicLayout } from "./router-C8C4AVyK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-3Wdr-nwN.js
var import_jsx_runtime = require_jsx_runtime();
function Privacy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PublicLayout, {
		eyebrow: "Privacy",
		title: "Your reading stays with you.",
		image: "/images/nook.jpg",
		imageAlt: "A reader in a sunlit armchair",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "NeuroLens keeps reading preferences, recent sessions, and notes in your browser’s local storage. Nothing is sent to a server unless you choose to fetch a Bible passage, a British National Bibliography record, or a poem. Those requests go to bible-api.com, bible.helloao.org, the British Library or Open Library, and poetrydb.org." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Uploaded documents are processed on your device. Clearing data from Settings removes saved sessions, notes, and profile choices from this browser." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We do not sell personal information, and we do not use your text to train models." })
		]
	});
}
//#endregion
export { Privacy as component };
