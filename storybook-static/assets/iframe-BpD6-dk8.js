function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Button.stories-Cz1e8qbR.js","./index-BASH1HpE.js","./Button-B8z4ACzD.js","./jsx-runtime-Du8NFWEI.js","./index-Dl6G-zuu.js","./button-BfyGbg8N.css","./Configure-CKW5sxIT.js","./index-_byTH_QA.js","./index-DAeMZ91o.js","./extends-Ct8UrgYO.js","./index-D1_ZHIBm.js","./index-B_J8iUie.js","./inheritsLoose-SLCf_n8R.js","./index-CXd072mJ.js","./index-DrFu-skq.js","./Header.stories-DthSHYKE.js","./Header-C08sbOIN.js","./Header-BjLH3naM.css","./LYCAButton.stories-CNPd-KVK.js","./Button-CyAD1vvQ.js","./useThemeProps-DpsEogVa.js","./styled-_A8Rz1_I.js","./ButtonBase-DVjyOcHC.js","./LYCAGrid.stories-DPcjEb5l.js","./theme-Bl1WGoU4.js","./index-Beu9b4Vr.js","./KeyboardArrowRight-BNu7_B7K.js","./FormControlLabel-DT40wwoi.js","./Typography-DgwAZZI4.js","./index-BEqf_cnl.js","./TableCell-qnjrwyjc.js","./LYCANavbar.stories-DBI84pxf.js","./LYCASwtich.stories-NIay3uJh.js","./LYCATable.stories-DndsN0_N.js","./LYCATabs.stories-cq_lf60A.js","./LYCAText.stories-C_gYHchJ.js","./Page.stories-rQieEgDu.js","./Page-B9ntr4df.css","./entry-preview-BCYVHKO2.js","./react-18-Bamk9FSf.js","./entry-preview-docs-BGm0ipO3.js","./preview-DzbRFJg_.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-Bi_jGxxs.js","./preview-CMAhXy32.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const p="modulepreload",O=function(i,s){return new URL(i,s).href},E={},t=function(s,n,a){let e=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");e=Promise.all(n.map(o=>{if(o=O(o,a),o in E)return;E[o]=!0;const c=o.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!a)for(let m=r.length-1;m>=0;m--){const u=r[m];if(u.href===o&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${d}`))return;const _=document.createElement("link");if(_.rel=c?"stylesheet":p,c||(_.as="script",_.crossOrigin=""),_.href=o,document.head.appendChild(_),c)return new Promise((m,u)=>{_.addEventListener("load",m),_.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})}))}return e.then(()=>s()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,l=L({page:"preview"});R.setChannel(l);window.__STORYBOOK_ADDONS_CHANNEL__=l;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=l);const f={"./src/stories/Button.stories.ts":async()=>t(()=>import("./Button.stories-Cz1e8qbR.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"./src/stories/Configure.mdx":async()=>t(()=>import("./Configure-CKW5sxIT.js"),__vite__mapDeps([6,3,4,7,8,9,10,11,12,13,14]),import.meta.url),"./src/stories/Header.stories.ts":async()=>t(()=>import("./Header.stories-DthSHYKE.js"),__vite__mapDeps([15,1,16,3,4,2,5,17]),import.meta.url),"./src/stories/LYCAButton/LYCAButton.stories.tsx":async()=>t(()=>import("./LYCAButton.stories-CNPd-KVK.js"),__vite__mapDeps([18,1,3,4,19,20,9,21,22,12,5]),import.meta.url),"./src/stories/LYCAGrid/LYCAGrid.stories.ts":async()=>t(()=>import("./LYCAGrid.stories-DPcjEb5l.js"),__vite__mapDeps([23,3,4,24,9,20,25,26,21,22,12,27,28,10,29,19,30]),import.meta.url),"./src/stories/LYCANavbar/LYCANavbar.stories.tsx":async()=>t(()=>import("./LYCANavbar.stories-DBI84pxf.js"),__vite__mapDeps([31,3,4]),import.meta.url),"./src/stories/LYCASwitch/LYCASwtich.stories.tsx":async()=>t(()=>import("./LYCASwtich.stories-NIay3uJh.js"),__vite__mapDeps([32,3,4,21,20,9,27,22,12,28]),import.meta.url),"./src/stories/LYCATable/LYCATable.stories.ts":async()=>t(()=>import("./LYCATable.stories-DndsN0_N.js"),__vite__mapDeps([33,1,3,4,9,20,21,30]),import.meta.url),"./src/stories/LYCATabs/LYCATabs.stories.tsx":async()=>t(()=>import("./LYCATabs.stories-cq_lf60A.js"),__vite__mapDeps([34,3,4,1,21,20,9,26,22,12,29]),import.meta.url),"./src/stories/LYCAText/LYCAText.stories.tsx":async()=>t(()=>import("./LYCAText.stories-C_gYHchJ.js"),__vite__mapDeps([35,3,4,28,20,9,21]),import.meta.url),"./src/stories/Page.stories.ts":async()=>t(()=>import("./Page.stories-rQieEgDu.js"),__vite__mapDeps([36,1,3,4,16,2,5,17,37]),import.meta.url)};async function A(i){return f[i]()}const{composeConfigs:T,PreviewWeb:P,ClientApi:y}=__STORYBOOK_MODULE_PREVIEW_API__,v=async()=>{const i=await Promise.all([t(()=>import("./entry-preview-BCYVHKO2.js"),__vite__mapDeps([38,4,39,10]),import.meta.url),t(()=>import("./entry-preview-docs-BGm0ipO3.js"),__vite__mapDeps([40,13,4,25,14]),import.meta.url),t(()=>import("./preview-DzbRFJg_.js"),__vite__mapDeps([41,11]),import.meta.url),t(()=>import("./preview-_TsKmXq-.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-DbT1mggi.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([42,14]),import.meta.url),t(()=>import("./preview-B4GcaC1c.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-Db4Idchh.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([43,14]),import.meta.url),t(()=>import("./preview-Cv3rAi2i.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-Bi_jGxxs.js"),__vite__mapDeps([44,1]),import.meta.url),t(()=>import("./preview-CMAhXy32.js"),__vite__mapDeps([45,3,4,24,9,20,29]),import.meta.url)]);return T(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new P(A,v);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};