import{j as c}from"./jsx-runtime-Du8NFWEI.js";import{G as b,t as g}from"./theme-Bl1WGoU4.js";import{_ as i}from"./extends-Ct8UrgYO.js";import{h as v,i as y,_ as S,T as d,u as T}from"./useThemeProps-DpsEogVa.js";import{r as a}from"./index-Dl6G-zuu.js";import{R as j}from"./index-BEqf_cnl.js";const _=a.createContext(null),h=_;function x(){return a.useContext(h)}const C=typeof Symbol=="function"&&Symbol.for,E=C?Symbol.for("mui.nested"):"__THEME_NESTED__";function k(e,o){return typeof o=="function"?o(e):i({},e,o)}function M(e){const{children:o,theme:t}=e,r=x(),n=a.useMemo(()=>{const s=r===null?t:k(r,t);return s!=null&&(s[E]=r!==null),s},[t,r]);return c.jsx(h.Provider,{value:n,children:o})}const f={};function p(e,o,t,r=!1){return a.useMemo(()=>{const n=e&&o[e]||o;if(typeof t=="function"){const s=t(n),l=e?i({},o,{[e]:s}):s;return r?()=>l:l}return e?i({},o,{[e]:t}):i({},o,t)},[e,o,t,r])}function P(e){const{children:o,theme:t,themeId:r}=e,n=v(f),s=x()||f,l=p(r,n,t),m=p(r,s,t,!0),u=l.direction==="rtl";return c.jsx(M,{theme:m,children:c.jsx(y.Provider,{value:l,children:c.jsx(j,{value:u,children:o})})})}const $=["theme"];function O(e){let{theme:o}=e,t=S(e,$);const r=o[d];return c.jsx(P,i({},t,{themeId:r?d:void 0,theme:r||o}))}const W=(e,o)=>i({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},o&&!e.vars&&{colorScheme:e.palette.mode}),z=e=>i({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),B=(e,o=!1)=>{var t;const r={};o&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([l,m])=>{var u;r[e.getColorSchemeSelector(l).replace(/\s*&/,"")]={colorScheme:(u=m.palette)==null?void 0:u.mode}});let n=i({html:W(e,o),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:i({margin:0},z(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},r);const s=(t=e.components)==null||(t=t.MuiCssBaseline)==null?void 0:t.styleOverrides;return s&&(n=[n,s]),n};function D(e){const o=T({props:e,name:"MuiCssBaseline"}),{children:t,enableColorScheme:r=!1}=o;return c.jsxs(a.Fragment,{children:[c.jsx(b,{styles:n=>B(n,r)}),t]})}const A={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[e=>c.jsxs(O,{theme:g,children:[c.jsx(D,{}),c.jsx(e,{})]})]};export{A as default};