const __vite__mapDeps = (i,m=__vite__mapDeps,d=(m.f || (m.f = ["assets/js/SplitHeartSection-Bt4XtrWA.js", "assets/js/ui-vendor-Cp4tK37g.js", "assets/js/react-vendor-CGn0MLJ7.js", "assets/js/StatisticsSection-0gFrRiot.js", "assets/js/admin-BlwOUnVr.js", "assets/js/utils-DHDGsjNP.js", "assets/js/dashboard-alebIhTu.js", "assets/js/firebase-vendor-Bgin4_ig.js", "assets/js/HowItWorks-F4htI-0M.js", "assets/js/About-B1ffKpqG.js", "assets/js/Contribution-DQWKBfw9.js", "assets/js/Reviews-CrMzY70N.js", "assets/css/Reviews-DE0q59Ew.css", "assets/js/CTA-CTMLv5LJ.js", "assets/js/Privacy-DXucp91O.js", "assets/js/Terms-D-nSctAb.js", "assets/js/Contact-Benb2tHX.js", "assets/js/CreateQR-DTn4NKV7.js", "assets/js/GalaxyViewerPage-368VUYeD.js", "assets/js/constants-CR4AFcx6.js", "assets/css/GalaxyViewerPage-wkwUz4ly.css", "assets/js/CreateGalaxyForm-CpRmT6aS.js", "assets/css/CreateGalaxyForm-BTie_Pw9.css", "assets/js/AffiliateApp-ChUQa4GL.js"])))=>i.map(i=>d[i]);
var e, t, r = Object.defineProperty, n = (e,t,n)=>((e,t,n)=>t in e ? r(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n)(e, "symbol" != typeof t ? t + "" : t, n);
import {k as s, l as i, j as a, m as o, P as l, i as c, a as d, u, f as p, c as h, n as m, o as f, d as x, g, e as w, p as b, I as v, h as y, q as j, r as T, s as N, F as S, D as k, t as E, v as _, b as C, w as M, x as P, y as O, O as A, C as L, T as I, z as D, A as R} from "./ui-vendor-Cp4tK37g.js";
import {a as z, g as F, r as G, b as V, L as $, u as B, h as H, f as q, B as W, d as Y, e as X} from "./react-vendor-CGn0MLJ7.js";
import {L as K} from "./utils-DHDGsjNP.js";
import {l as U, u as Q, f as Z, X as J, g as ee, h as te, i as re, U as ne, j as se, a as ie, k as ae, G as oe, d as le, m as ce, E as de, n as ue, o as pe, p as he, q as me, F as fe, r as xe, s as ge, W as we, R as be, H as ve, t as ye, A as je, v as Te, w as Ne, e as Se, x as ke, T as Ee, y as _e, z as Ce, D as Me} from "./admin-BlwOUnVr.js";
import {u as Pe, A as Oe} from "./dashboard-alebIhTu.js";
import {i as Ae, g as Le, G as Ie, s as De} from "./firebase-vendor-Bgin4_ig.js";
!function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
            t(e);
        new MutationObserver(e=>{
            for (const r of e)
                if ("childList" === r.type)
                    for (const e of r.addedNodes)
                        "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        }
        ).observe(document, {
            childList: !0,
            subtree: !0
        })
    }
    function t(e) {
        if (e.ep)
            return;
        e.ep = !0;
        const t = function(e) {
            const t = {};
            return e.integrity && (t.integrity = e.integrity),
            e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
            "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin",
            t
        }(e);
        fetch(e.href, t)
    }
}();
const Re = {}
  , ze = function(e, t, r) {
    let n = Promise.resolve();
    if (t && t.length > 0) {
        document.getElementsByTagName("link");
        const e = document.querySelector("meta[property=csp-nonce]")
          , r = (null == e ? void 0 : e.nonce) || (null == e ? void 0 : e.getAttribute("nonce"));
        n = Promise.allSettled(t.map(e=>{
            if ((e = function(e) {
                return "/" + e
            }(e))in Re)
                return;
            Re[e] = !0;
            const t = e.endsWith(".css")
              , n = t ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${e}"]${n}`))
                return;
            const s = document.createElement("link");
            return s.rel = t ? "stylesheet" : "modulepreload",
            t || (s.as = "script"),
            s.crossOrigin = "",
            s.href = e,
            r && s.setAttribute("nonce", r),
            document.head.appendChild(s),
            t ? new Promise((t,r)=>{
                s.addEventListener("load", t),
                s.addEventListener("error", ()=>r(new Error(`Unable to preload CSS for ${e}`)))
            }
            ) : void 0
        }
        ))
    }
    function s(e) {
        const t = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (t.payload = e,
        window.dispatchEvent(t),
        !t.defaultPrevented)
            throw e
    }
    return n.then(t=>{
        for (const e of t || [])
            "rejected" === e.status && s(e.reason);
        return e().catch(s)
    }
    )
};
var Fe = {}
  , Ge = z;
Fe.createRoot = Ge.createRoot,
Fe.hydrateRoot = Ge.hydrateRoot;
var Ve = "undefined" != typeof Element
  , $e = "function" == typeof Map
  , Be = "function" == typeof Set
  , He = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
function qe(e, t) {
    if (e === t)
        return !0;
    if (e && t && "object" == typeof e && "object" == typeof t) {
        if (e.constructor !== t.constructor)
            return !1;
        var r, n, s, i;
        if (Array.isArray(e)) {
            if ((r = e.length) != t.length)
                return !1;
            for (n = r; 0 !== n--; )
                if (!qe(e[n], t[n]))
                    return !1;
            return !0
        }
        if ($e && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size)
                return !1;
            for (i = e.entries(); !(n = i.next()).done; )
                if (!t.has(n.value[0]))
                    return !1;
            for (i = e.entries(); !(n = i.next()).done; )
                if (!qe(n.value[1], t.get(n.value[0])))
                    return !1;
            return !0
        }
        if (Be && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size)
                return !1;
            for (i = e.entries(); !(n = i.next()).done; )
                if (!t.has(n.value[0]))
                    return !1;
            return !0
        }
        if (He && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if ((r = e.length) != t.length)
                return !1;
            for (n = r; 0 !== n--; )
                if (e[n] !== t[n])
                    return !1;
            return !0
        }
        if (e.constructor === RegExp)
            return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof t.valueOf)
            return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof t.toString)
            return e.toString() === t.toString();
        if ((r = (s = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
        for (n = r; 0 !== n--; )
            if (!Object.prototype.hasOwnProperty.call(t, s[n]))
                return !1;
        if (Ve && e instanceof Element)
            return !1;
        for (n = r; 0 !== n--; )
            if (("_owner" !== s[n] && "__v" !== s[n] && "__o" !== s[n] || !e.$$typeof) && !qe(e[s[n]], t[s[n]]))
                return !1;
        return !0
    }
    return e != e && t != t
}
const We = F(function(e, t) {
    try {
        return qe(e, t)
    } catch (r) {
        if ((r.message || "").match(/stack|recursion/i))
            return !1;
        throw r
    }
});
const Ye = F(function(e, t, r, n, s, i, a, o) {
    if (!e) {
        var l;
        if (void 0 === t)
            l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
            var c = [r, n, s, i, a, o]
              , d = 0;
            (l = new Error(t.replace(/%s/g, function() {
                return c[d++]
            }))).name = "Invariant Violation"
        }
        throw l.framesToPop = 1,
        l
    }
});
const Xe = F(function(e, t, r, n) {
    var s = r ? r.call(n, e, t) : void 0;
    if (void 0 !== s)
        return !!s;
    if (e === t)
        return !0;
    if ("object" != typeof e || !e || "object" != typeof t || !t)
        return !1;
    var i = Object.keys(e)
      , a = Object.keys(t);
    if (i.length !== a.length)
        return !1;
    for (var o = Object.prototype.hasOwnProperty.bind(t), l = 0; l < i.length; l++) {
        var c = i[l];
        if (!o(c))
            return !1;
        var d = e[c]
          , u = t[c];
        if (!1 === (s = r ? r.call(n, d, u, c) : void 0) || void 0 === s && d !== u)
            return !1
    }
    return !0
});
var Ke = (e=>(e.BASE = "base",
e.BODY = "body",
e.HEAD = "head",
e.HTML = "html",
e.LINK = "link",
e.META = "meta",
e.NOSCRIPT = "noscript",
e.SCRIPT = "script",
e.STYLE = "style",
e.TITLE = "title",
e.FRAGMENT = "Symbol(react.fragment)",
e))(Ke || {})
  , Ue = {
    rel: ["amphtml", "canonical", "alternate"]
}
  , Qe = {
    type: ["application/ld+json"]
}
  , Ze = {
    charset: "",
    name: ["generator", "robots", "description"],
    property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"]
}
  , Je = Object.values(Ke)
  , et = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
}
  , tt = Object.entries(et).reduce((e,[t,r])=>(e[r] = t,
e), {})
  , rt = "data-rh"
  , nt = "defaultTitle"
  , st = "defer"
  , it = "encodeSpecialCharacters"
  , at = "onChangeClientState"
  , ot = "titleTemplate"
  , lt = "prioritizeSeoTags"
  , ct = (e,t)=>{
    for (let r = e.length - 1; r >= 0; r -= 1) {
        const n = e[r];
        if (Object.prototype.hasOwnProperty.call(n, t))
            return n[t]
    }
    return null
}
  , dt = e=>{
    let t = ct(e, "title");
    const r = ct(e, ot);
    if (Array.isArray(t) && (t = t.join("")),
    r && t)
        return r.replace(/%s/g, ()=>t);
    const n = ct(e, nt);
    return t || n || void 0
}
  , ut = e=>ct(e, at) || (()=>{}
)
  , pt = (e,t)=>t.filter(t=>void 0 !== t[e]).map(t=>t[e]).reduce((e,t)=>({
    ...e,
    ...t
}), {})
  , ht = (e,t)=>t.filter(e=>void 0 !== e.base).map(e=>e.base).reverse().reduce((t,r)=>{
    if (!t.length) {
        const n = Object.keys(r);
        for (let s = 0; s < n.length; s += 1) {
            const i = n[s].toLowerCase();
            if (-1 !== e.indexOf(i) && r[i])
                return t.concat(r)
        }
    }
    return t
}
, [])
  , mt = (e,t,r)=>{
    const n = {};
    return r.filter(t=>!!Array.isArray(t[e]) || (void 0 !== t[e] && (t[e],
    console && console.warn),
    !1)).map(t=>t[e]).reverse().reduce((e,r)=>{
        const s = {};
        r.filter(e=>{
            let r;
            const i = Object.keys(e);
            for (let n = 0; n < i.length; n += 1) {
                const s = i[n]
                  , a = s.toLowerCase();
                -1 === t.indexOf(a) || "rel" === r && "canonical" === e[r].toLowerCase() || "rel" === a && "stylesheet" === e[a].toLowerCase() || (r = a),
                -1 === t.indexOf(s) || "innerHTML" !== s && "cssText" !== s && "itemprop" !== s || (r = s)
            }
            if (!r || !e[r])
                return !1;
            const a = e[r].toLowerCase();
            return n[r] || (n[r] = {}),
            s[r] || (s[r] = {}),
            !n[r][a] && (s[r][a] = !0,
            !0)
        }
        ).reverse().forEach(t=>e.push(t));
        const i = Object.keys(s);
        for (let t = 0; t < i.length; t += 1) {
            const e = i[t]
              , r = {
                ...n[e],
                ...s[e]
            };
            n[e] = r
        }
        return e
    }
    , []).reverse()
}
  , ft = (e,t)=>{
    if (Array.isArray(e) && e.length)
        for (let r = 0; r < e.length; r += 1) {
            if (e[r][t])
                return !0
        }
    return !1
}
  , xt = e=>Array.isArray(e) ? e.join("") : e
  , gt = (e,t)=>Array.isArray(e) ? e.reduce((e,r)=>(((e,t)=>{
    const r = Object.keys(e);
    for (let n = 0; n < r.length; n += 1)
        if (t[r[n]] && t[r[n]].includes(e[r[n]]))
            return !0;
    return !1
}
)(r, t) ? e.priority.push(r) : e.default.push(r),
e), {
    priority: [],
    default: []
}) : {
    default: e,
    priority: []
}
  , wt = (e,t)=>({
    ...e,
    [t]: void 0
})
  , bt = ["noscript", "script", "style"]
  , vt = (e,t=!0)=>!1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
  , yt = e=>Object.keys(e).reduce((t,r)=>{
    const n = void 0 !== e[r] ? `${r}="${e[r]}"` : `${r}`;
    return t ? `${t} ${n}` : n
}
, "")
  , jt = (e,t={})=>Object.keys(e).reduce((t,r)=>(t[et[r] || r] = e[r],
t), t)
  , Tt = (e,t)=>t.map((t,r)=>{
    const n = {
        key: r,
        [rt]: !0
    };
    return Object.keys(t).forEach(e=>{
        const r = et[e] || e;
        if ("innerHTML" === r || "cssText" === r) {
            const e = t.innerHTML || t.cssText;
            n.dangerouslySetInnerHTML = {
                __html: e
            }
        } else
            n[r] = t[e]
    }
    ),
    V.createElement(e, n)
}
)
  , Nt = (e,t,r=!0)=>{
    switch (e) {
    case "title":
        return {
            toComponent: ()=>((e,t,r)=>{
                const n = jt(r, {
                    key: t,
                    [rt]: !0
                });
                return [V.createElement("title", n, t)]
            }
            )(0, t.title, t.titleAttributes),
            toString: ()=>((e,t,r,n)=>{
                const s = yt(r)
                  , i = xt(t);
                return s ? `<${e} ${rt}="true" ${s}>${vt(i, n)}</${e}>` : `<${e} ${rt}="true">${vt(i, n)}</${e}>`
            }
            )(e, t.title, t.titleAttributes, r)
        };
    case "bodyAttributes":
    case "htmlAttributes":
        return {
            toComponent: ()=>jt(t),
            toString: ()=>yt(t)
        };
    default:
        return {
            toComponent: ()=>Tt(e, t),
            toString: ()=>((e,t,r=!0)=>t.reduce((t,n)=>{
                const s = n
                  , i = Object.keys(s).filter(e=>!("innerHTML" === e || "cssText" === e)).reduce((e,t)=>{
                    const n = void 0 === s[t] ? t : `${t}="${vt(s[t], r)}"`;
                    return e ? `${e} ${n}` : n
                }
                , "")
                  , a = s.innerHTML || s.cssText || ""
                  , o = -1 === bt.indexOf(e);
                return `${t}<${e} ${rt}="true" ${i}${o ? "/>" : `>${a}</${e}>`}`
            }
            , ""))(e, t, r)
        }
    }
}
  , St = e=>{
    const {baseTag: t, bodyAttributes: r, encode: n=!0, htmlAttributes: s, noscriptTags: i, styleTags: a, title: o="", titleAttributes: l, prioritizeSeoTags: c} = e;
    let {linkTags: d, metaTags: u, scriptTags: p} = e
      , h = {
        toComponent: ()=>{}
        ,
        toString: ()=>""
    };
    return c && ({priorityMethods: h, linkTags: d, metaTags: u, scriptTags: p} = (({metaTags: e, linkTags: t, scriptTags: r, encode: n})=>{
        const s = gt(e, Ze)
          , i = gt(t, Ue)
          , a = gt(r, Qe);
        return {
            priorityMethods: {
                toComponent: ()=>[...Tt("meta", s.priority), ...Tt("link", i.priority), ...Tt("script", a.priority)],
                toString: ()=>`${Nt("meta", s.priority, n)} ${Nt("link", i.priority, n)} ${Nt("script", a.priority, n)}`
            },
            metaTags: s.default,
            linkTags: i.default,
            scriptTags: a.default
        }
    }
    )(e)),
    {
        priority: h,
        base: Nt("base", t, n),
        bodyAttributes: Nt("bodyAttributes", r, n),
        htmlAttributes: Nt("htmlAttributes", s, n),
        link: Nt("link", d, n),
        meta: Nt("meta", u, n),
        noscript: Nt("noscript", i, n),
        script: Nt("script", p, n),
        style: Nt("style", a, n),
        title: Nt("title", {
            title: o,
            titleAttributes: l
        }, n)
    }
}
  , kt = []
  , Et = !("undefined" == typeof window || !window.document || !window.document.createElement)
  , _t = class {
    constructor(e, t) {
        n(this, "instances", []),
        n(this, "canUseDOM", Et),
        n(this, "context"),
        n(this, "value", {
            setHelmet: e=>{
                this.context.helmet = e
            }
            ,
            helmetInstances: {
                get: ()=>this.canUseDOM ? kt : this.instances,
                add: e=>{
                    (this.canUseDOM ? kt : this.instances).push(e)
                }
                ,
                remove: e=>{
                    const t = (this.canUseDOM ? kt : this.instances).indexOf(e);
                    (this.canUseDOM ? kt : this.instances).splice(t, 1)
                }
            }
        }),
        this.context = e,
        this.canUseDOM = t || !1,
        t || (e.helmet = St({
            baseTag: [],
            bodyAttributes: {},
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {}
        }))
    }
}
  , Ct = V.createContext({})
  , Mt = (e = class extends G.Component {
    constructor(t) {
        super(t),
        n(this, "helmetData"),
        this.helmetData = new _t(this.props.context || {},e.canUseDOM)
    }
    render() {
        return V.createElement(Ct.Provider, {
            value: this.helmetData.value
        }, this.props.children)
    }
}
,
n(e, "canUseDOM", Et),
e)
  , Pt = (e,t)=>{
    const r = document.head || document.querySelector("head")
      , n = r.querySelectorAll(`${e}[${rt}]`)
      , s = [].slice.call(n)
      , i = [];
    let a;
    return t && t.length && t.forEach(t=>{
        const r = document.createElement(e);
        for (const e in t)
            if (Object.prototype.hasOwnProperty.call(t, e))
                if ("innerHTML" === e)
                    r.innerHTML = t.innerHTML;
                else if ("cssText" === e)
                    r.styleSheet ? r.styleSheet.cssText = t.cssText : r.appendChild(document.createTextNode(t.cssText));
                else {
                    const n = e
                      , s = void 0 === t[n] ? "" : t[n];
                    r.setAttribute(e, s)
                }
        r.setAttribute(rt, "true"),
        s.some((e,t)=>(a = t,
        r.isEqualNode(e))) ? s.splice(a, 1) : i.push(r)
    }
    ),
    s.forEach(e=>{
        var t;
        return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
    }
    ),
    i.forEach(e=>r.appendChild(e)),
    {
        oldTags: s,
        newTags: i
    }
}
  , Ot = (e,t)=>{
    const r = document.getElementsByTagName(e)[0];
    if (!r)
        return;
    const n = r.getAttribute(rt)
      , s = n ? n.split(",") : []
      , i = [...s]
      , a = Object.keys(t);
    for (const o of a) {
        const e = t[o] || "";
        r.getAttribute(o) !== e && r.setAttribute(o, e),
        -1 === s.indexOf(o) && s.push(o);
        const n = i.indexOf(o);
        -1 !== n && i.splice(n, 1)
    }
    for (let o = i.length - 1; o >= 0; o -= 1)
        r.removeAttribute(i[o]);
    s.length === i.length ? r.removeAttribute(rt) : r.getAttribute(rt) !== a.join(",") && r.setAttribute(rt, a.join(","))
}
  , At = (e,t)=>{
    const {baseTag: r, bodyAttributes: n, htmlAttributes: s, linkTags: i, metaTags: a, noscriptTags: o, onChangeClientState: l, scriptTags: c, styleTags: d, title: u, titleAttributes: p} = e;
    Ot("body", n),
    Ot("html", s),
    ((e,t)=>{
        void 0 !== e && document.title !== e && (document.title = xt(e)),
        Ot("title", t)
    }
    )(u, p);
    const h = {
        baseTag: Pt("base", r),
        linkTags: Pt("link", i),
        metaTags: Pt("meta", a),
        noscriptTags: Pt("noscript", o),
        scriptTags: Pt("script", c),
        styleTags: Pt("style", d)
    }
      , m = {}
      , f = {};
    Object.keys(h).forEach(e=>{
        const {newTags: t, oldTags: r} = h[e];
        t.length && (m[e] = t),
        r.length && (f[e] = h[e].oldTags)
    }
    ),
    t && t(),
    l(e, m, f)
}
  , Lt = null
  , It = e=>{
    Lt && cancelAnimationFrame(Lt),
    e.defer ? Lt = requestAnimationFrame(()=>{
        At(e, ()=>{
            Lt = null
        }
        )
    }
    ) : (At(e),
    Lt = null)
}
  , Dt = class extends G.Component {
    constructor() {
        super(...arguments),
        n(this, "rendered", !1)
    }
    shouldComponentUpdate(e) {
        return !Xe(e, this.props)
    }
    componentDidUpdate() {
        this.emitChange()
    }
    componentWillUnmount() {
        const {helmetInstances: e} = this.props.context;
        e.remove(this),
        this.emitChange()
    }
    emitChange() {
        const {helmetInstances: e, setHelmet: t} = this.props.context;
        let r = null;
        const n = (s = e.get().map(e=>{
            const t = {
                ...e.props
            };
            return delete t.context,
            t
        }
        ),
        {
            baseTag: ht(["href"], s),
            bodyAttributes: pt("bodyAttributes", s),
            defer: ct(s, st),
            encode: ct(s, it),
            htmlAttributes: pt("htmlAttributes", s),
            linkTags: mt("link", ["rel", "href"], s),
            metaTags: mt("meta", ["name", "charset", "http-equiv", "property", "itemprop"], s),
            noscriptTags: mt("noscript", ["innerHTML"], s),
            onChangeClientState: ut(s),
            scriptTags: mt("script", ["src", "innerHTML"], s),
            styleTags: mt("style", ["cssText"], s),
            title: dt(s),
            titleAttributes: pt("titleAttributes", s),
            prioritizeSeoTags: ft(s, lt)
        });
        var s;
        Mt.canUseDOM ? It(n) : St && (r = St(n)),
        t(r)
    }
    init() {
        if (this.rendered)
            return;
        this.rendered = !0;
        const {helmetInstances: e} = this.props.context;
        e.add(this),
        this.emitChange()
    }
    render() {
        return this.init(),
        null
    }
}
  , Rt = (t = class extends G.Component {
    shouldComponentUpdate(e) {
        return !We(wt(this.props, "helmetData"), wt(e, "helmetData"))
    }
    mapNestedChildrenToProps(e, t) {
        if (!t)
            return null;
        switch (e.type) {
        case "script":
        case "noscript":
            return {
                innerHTML: t
            };
        case "style":
            return {
                cssText: t
            };
        default:
            throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)
        }
    }
    flattenArrayTypeChildren(e, t, r, n) {
        return {
            ...t,
            [e.type]: [...t[e.type] || [], {
                ...r,
                ...this.mapNestedChildrenToProps(e, n)
            }]
        }
    }
    mapObjectTypeChildren(e, t, r, n) {
        switch (e.type) {
        case "title":
            return {
                ...t,
                [e.type]: n,
                titleAttributes: {
                    ...r
                }
            };
        case "body":
            return {
                ...t,
                bodyAttributes: {
                    ...r
                }
            };
        case "html":
            return {
                ...t,
                htmlAttributes: {
                    ...r
                }
            };
        default:
            return {
                ...t,
                [e.type]: {
                    ...r
                }
            }
        }
    }
    mapArrayTypeChildrenToProps(e, t) {
        let r = {
            ...t
        };
        return Object.keys(e).forEach(t=>{
            r = {
                ...r,
                [t]: e[t]
            }
        }
        ),
        r
    }
    warnOnInvalidChildren(e, t) {
        return Ye(Je.some(t=>e.type === t), "function" == typeof e.type ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${Je.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),
        Ye(!t || "string" == typeof t || Array.isArray(t) && !t.some(e=>"string" != typeof e), `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),
        !0
    }
    mapChildrenToProps(e, t) {
        let r = {};
        return V.Children.forEach(e, e=>{
            if (!e || !e.props)
                return;
            const {children: n, ...s} = e.props
              , i = Object.keys(s).reduce((e,t)=>(e[tt[t] || t] = s[t],
            e), {});
            let {type: a} = e;
            switch ("symbol" == typeof a ? a = a.toString() : this.warnOnInvalidChildren(e, n),
            a) {
            case "Symbol(react.fragment)":
                t = this.mapChildrenToProps(n, t);
                break;
            case "link":
            case "meta":
            case "noscript":
            case "script":
            case "style":
                r = this.flattenArrayTypeChildren(e, r, i, n);
                break;
            default:
                t = this.mapObjectTypeChildren(e, t, i, n)
            }
        }
        ),
        this.mapArrayTypeChildrenToProps(r, t)
    }
    render() {
        const {children: e, ...t} = this.props;
        let r = {
            ...t
        }
          , {helmetData: n} = t;
        if (e && (r = this.mapChildrenToProps(e, r)),
        n && !(n instanceof _t)) {
            n = new _t(n.context,!0),
            delete r.helmetData
        }
        return n ? V.createElement(Dt, {
            ...r,
            context: n.value
        }) : V.createElement(Ct.Consumer, null, e=>V.createElement(Dt, {
            ...r,
            context: e
        }))
    }
}
,
n(t, "defaultProps", {
    defer: !0,
    encodeSpecialCharacters: !0,
    prioritizeSeoTags: !1
}),
t);
function zt() {
    const e = function() {
        const [e,t] = G.useState(!1);
        return G.useEffect(()=>{
            const e = window.matchMedia("(max-width: 767px)")
              , r = ()=>t(e.matches);
            return r(),
            e.addEventListener("change", r),
            ()=>e.removeEventListener("change", r)
        }
        , []),
        e
    }()
      , t = G.useRef(null)
      , r = s(0)
      , n = s(0)
      , [l,c] = G.useState(!1);
    return i(r, [0, 1], [-6, 6]),
    i(n, [0, 1], [-6, 6]),
    G.useEffect(()=>{
        const e = window.matchMedia("(prefers-reduced-motion: reduce)").matches
          , t = window.innerWidth < 768 || "ontouchstart"in window;
        if (e || t)
            return;
        c(!0);
        let s = !1
          , i = 0;
        const a = e=>{
            if (s)
                return;
            s = !0;
            const t = performance.now();
            t - i < 50 ? s = !1 : (i = t,
            requestAnimationFrame(()=>{
                const {innerWidth: t, innerHeight: i} = window;
                r.set(e.clientX / t),
                n.set(e.clientY / i),
                s = !1
            }
            ))
        }
        ;
        return window.addEventListener("mousemove", a, {
            passive: !0
        }),
        ()=>window.removeEventListener("mousemove", a)
    }
    , [r, n]),
    a.jsxs("div", {
        ref: t,
        className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        children: [a.jsx("div", {
            className: "absolute inset-0 bg-[#050505]"
        }), !e && a.jsxs(a.Fragment, {
            children: [a.jsxs("div", {
                className: "absolute inset-0 opacity-20 blur-3xl",
                children: [a.jsx("div", {
                    className: "absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-purple-500/30 via-transparent to-transparent rounded-full"
                }), a.jsx("div", {
                    className: "absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/30 via-transparent to-transparent rounded-full"
                }), a.jsx("div", {
                    className: "absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-blue-500/20 via-transparent to-transparent rounded-full"
                })]
            }), a.jsx("div", {
                className: "absolute inset-0",
                children: [...Array(4)].map((e,t)=>a.jsx(o.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: [.03, .08, .03],
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1]
                    },
                    transition: {
                        duration: 12 + 3 * t,
                        repeat: 1 / 0,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        delay: .5 * t
                    },
                    className: "absolute w-72 h-72 rounded-full",
                    style: {
                        left: 15 + 20 * t + "%",
                        top: 10 + 15 * t + "%",
                        background: t % 2 == 0 ? "radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.15), transparent 70%)" : "radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.15), transparent 70%)",
                        filter: "blur(40px)"
                    }
                }, t))
            }), a.jsx("div", {
                className: "absolute inset-0",
                children: [...Array(30)].map((e,t)=>a.jsx(o.div, {
                    className: "absolute w-1 h-1 bg-white rounded-full",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: [.2, .8, .2]
                    },
                    transition: {
                        duration: 3 + 2 * Math.random(),
                        repeat: 1 / 0,
                        delay: 3 * Math.random(),
                        ease: "easeInOut"
                    },
                    style: {
                        left: 100 * Math.random() + "%",
                        top: 100 * Math.random() + "%"
                    }
                }, `star-${t}`))
            }), a.jsx("div", {
                className: "absolute inset-0 opacity-[0.04] mix-blend-overlay",
                style: {
                    backgroundImage: "url(https://grainy-gradients.vercel.app/noise.svg)",
                    backgroundSize: "cover"
                }
            })]
        }), a.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5))]"
        })]
    })
}
function Ft() {
    return a.jsx("svg", {
        className: "fixed -z-10 w-0 h-0",
        children: a.jsx("defs", {
            children: a.jsxs("filter", {
                id: "dg-distort",
                x: "-20%",
                y: "-20%",
                width: "140%",
                height: "140%",
                children: [a.jsx("feTurbulence", {
                    type: "fractalNoise",
                    baseFrequency: "0.006",
                    numOctaves: "2",
                    seed: "2",
                    result: "noise"
                }), a.jsx("feDisplacementMap", {
                    in: "SourceGraphic",
                    in2: "noise",
                    scale: "8",
                    xChannelSelector: "R",
                    yChannelSelector: "G"
                })]
            })
        })
    })
}
function Gt({src: e}) {
    const [t,r] = G.useState(!1);
    G.useEffect(()=>{
        const e = setTimeout(()=>{
            r(!0)
        }
        , 1e3);
        return ()=>clearTimeout(e)
    }
    , []);
    return e ? a.jsx(o.div, {
        initial: {
            y: -100,
            opacity: 0
        },
        animate: t ? {
            y: 0,
            opacity: 1
        } : {
            y: -100,
            opacity: 0
        },
        transition: {
            duration: .6,
            ease: "easeOut",
            delay: 0
        },
        className: "hidden md:block fixed top-6 left-6 z-20",
        children: a.jsxs(o.button, {
            onClick: ()=>{
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                }),
                document.documentElement.scrollTop = 0,
                document.body.scrollTop = 0
            }
            ,
            whileHover: {
                scale: 1.05
            },
            whileTap: {
                scale: .95
            },
            className: "group relative inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-transparent transition-all duration-300 cursor-pointer overflow-hidden h-12",
            children: [a.jsxs(o.div, {
                whileHover: {
                    rotate: [0, -10, 10, -10, 0]
                },
                transition: {
                    duration: .5
                },
                className: "relative z-10",
                children: [a.jsx("img", {
                    src: e,
                    alt: "DearGift logo",
                    className: "w-10 h-10 object-contain drop-shadow-[0_0_25px_rgba(236,72,153,0.5)] group-hover:drop-shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-all duration-300 shrink-0"
                }), a.jsx("div", {
                    className: "absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/30 via-cyan-400/30 to-pink-400/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                })]
            }), a.jsx("span", {
                className: "relative z-10 text-sm font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300 font-romance italic drop-shadow-[0_0_10px_rgba(139,92,246,0.3)] leading-none",
                children: "DearGift"
            }), a.jsx("div", {
                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                children: [...Array(3)].map((e,t)=>a.jsx(o.div, {
                    className: "absolute w-1 h-1 bg-white rounded-full",
                    style: {
                        left: 20 + 30 * t + "%",
                        top: 30 + 20 * t + "%"
                    },
                    animate: {
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                    },
                    transition: {
                        duration: 1.5,
                        repeat: 1 / 0,
                        delay: .3 * t
                    }
                }, t))
            })]
        })
    }) : null
}
const Vt = ["top", "right", "bottom", "left"]
  , $t = Math.min
  , Bt = Math.max
  , Ht = Math.round
  , qt = Math.floor
  , Wt = e=>({
    x: e,
    y: e
})
  , Yt = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , Xt = {
    start: "end",
    end: "start"
};
function Kt(e, t, r) {
    return Bt(e, $t(t, r))
}
function Ut(e, t) {
    return "function" == typeof e ? e(t) : e
}
function Qt(e) {
    return e.split("-")[0]
}
function Zt(e) {
    return e.split("-")[1]
}
function Jt(e) {
    return "x" === e ? "y" : "x"
}
function er(e) {
    return "y" === e ? "height" : "width"
}
const tr = new Set(["top", "bottom"]);
function rr(e) {
    return tr.has(Qt(e)) ? "y" : "x"
}
function nr(e) {
    return Jt(rr(e))
}
function sr(e) {
    return e.replace(/start|end/g, e=>Xt[e])
}
const ir = ["left", "right"]
  , ar = ["right", "left"]
  , or = ["top", "bottom"]
  , lr = ["bottom", "top"];
function cr(e, t, r, n) {
    const s = Zt(e);
    let i = function(e, t, r) {
        switch (e) {
        case "top":
        case "bottom":
            return r ? t ? ar : ir : t ? ir : ar;
        case "left":
        case "right":
            return t ? or : lr;
        default:
            return []
        }
    }(Qt(e), "start" === r, n);
    return s && (i = i.map(e=>e + "-" + s),
    t && (i = i.concat(i.map(sr)))),
    i
}
function dr(e) {
    return e.replace(/left|right|bottom|top/g, e=>Yt[e])
}
function ur(e) {
    return "number" != typeof e ? function(e) {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
        }
    }(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function pr(e) {
    const {x: t, y: r, width: n, height: s} = e;
    return {
        width: n,
        height: s,
        top: r,
        left: t,
        right: t + n,
        bottom: r + s,
        x: t,
        y: r
    }
}
function hr(e, t, r) {
    let {reference: n, floating: s} = e;
    const i = rr(t)
      , a = nr(t)
      , o = er(a)
      , l = Qt(t)
      , c = "y" === i
      , d = n.x + n.width / 2 - s.width / 2
      , u = n.y + n.height / 2 - s.height / 2
      , p = n[o] / 2 - s[o] / 2;
    let h;
    switch (l) {
    case "top":
        h = {
            x: d,
            y: n.y - s.height
        };
        break;
    case "bottom":
        h = {
            x: d,
            y: n.y + n.height
        };
        break;
    case "right":
        h = {
            x: n.x + n.width,
            y: u
        };
        break;
    case "left":
        h = {
            x: n.x - s.width,
            y: u
        };
        break;
    default:
        h = {
            x: n.x,
            y: n.y
        }
    }
    switch (Zt(t)) {
    case "start":
        h[a] -= p * (r && c ? -1 : 1);
        break;
    case "end":
        h[a] += p * (r && c ? -1 : 1)
    }
    return h
}
async function mr(e, t) {
    var r;
    void 0 === t && (t = {});
    const {x: n, y: s, platform: i, rects: a, elements: o, strategy: l} = e
      , {boundary: c="clippingAncestors", rootBoundary: d="viewport", elementContext: u="floating", altBoundary: p=!1, padding: h=0} = Ut(t, e)
      , m = ur(h)
      , f = o[p ? "floating" === u ? "reference" : "floating" : u]
      , x = pr(await i.getClippingRect({
        element: null == (r = await (null == i.isElement ? void 0 : i.isElement(f))) || r ? f : f.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(o.floating)),
        boundary: c,
        rootBoundary: d,
        strategy: l
    }))
      , g = "floating" === u ? {
        x: n,
        y: s,
        width: a.floating.width,
        height: a.floating.height
    } : a.reference
      , w = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(o.floating))
      , b = await (null == i.isElement ? void 0 : i.isElement(w)) && await (null == i.getScale ? void 0 : i.getScale(w)) || {
        x: 1,
        y: 1
    }
      , v = pr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: o,
        rect: g,
        offsetParent: w,
        strategy: l
    }) : g);
    return {
        top: (x.top - v.top + m.top) / b.y,
        bottom: (v.bottom - x.bottom + m.bottom) / b.y,
        left: (x.left - v.left + m.left) / b.x,
        right: (v.right - x.right + m.right) / b.x
    }
}
function fr(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function xr(e) {
    return Vt.some(t=>e[t] >= 0)
}
const gr = new Set(["left", "top"]);
function wr() {
    return "undefined" != typeof window
}
function br(e) {
    return jr(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function vr(e) {
    var t;
    return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
}
function yr(e) {
    var t;
    return null == (t = (jr(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
}
function jr(e) {
    return !!wr() && (e instanceof Node || e instanceof vr(e).Node)
}
function Tr(e) {
    return !!wr() && (e instanceof Element || e instanceof vr(e).Element)
}
function Nr(e) {
    return !!wr() && (e instanceof HTMLElement || e instanceof vr(e).HTMLElement)
}
function Sr(e) {
    return !(!wr() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof vr(e).ShadowRoot)
}
const kr = new Set(["inline", "contents"]);
function Er(e) {
    const {overflow: t, overflowX: r, overflowY: n, display: s} = Fr(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !kr.has(s)
}
const _r = new Set(["table", "td", "th"]);
function Cr(e) {
    return _r.has(br(e))
}
const Mr = [":popover-open", ":modal"];
function Pr(e) {
    return Mr.some(t=>{
        try {
            return e.matches(t)
        } catch (r) {
            return !1
        }
    }
    )
}
const Or = ["transform", "translate", "scale", "rotate", "perspective"]
  , Ar = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , Lr = ["paint", "layout", "strict", "content"];
function Ir(e) {
    const t = Dr()
      , r = Tr(e) ? Fr(e) : e;
    return Or.some(e=>!!r[e] && "none" !== r[e]) || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || Ar.some(e=>(r.willChange || "").includes(e)) || Lr.some(e=>(r.contain || "").includes(e))
}
function Dr() {
    return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
}
const Rr = new Set(["html", "body", "#document"]);
function zr(e) {
    return Rr.has(br(e))
}
function Fr(e) {
    return vr(e).getComputedStyle(e)
}
function Gr(e) {
    return Tr(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Vr(e) {
    if ("html" === br(e))
        return e;
    const t = e.assignedSlot || e.parentNode || Sr(e) && e.host || yr(e);
    return Sr(t) ? t.host : t
}
function $r(e) {
    const t = Vr(e);
    return zr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Nr(t) && Er(t) ? t : $r(t)
}
function Br(e, t, r) {
    var n;
    void 0 === t && (t = []),
    void 0 === r && (r = !0);
    const s = $r(e)
      , i = s === (null == (n = e.ownerDocument) ? void 0 : n.body)
      , a = vr(s);
    if (i) {
        const e = Hr(a);
        return t.concat(a, a.visualViewport || [], Er(s) ? s : [], e && r ? Br(e) : [])
    }
    return t.concat(s, Br(s, [], r))
}
function Hr(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function qr(e) {
    const t = Fr(e);
    let r = parseFloat(t.width) || 0
      , n = parseFloat(t.height) || 0;
    const s = Nr(e)
      , i = s ? e.offsetWidth : r
      , a = s ? e.offsetHeight : n
      , o = Ht(r) !== i || Ht(n) !== a;
    return o && (r = i,
    n = a),
    {
        width: r,
        height: n,
        $: o
    }
}
function Wr(e) {
    return Tr(e) ? e : e.contextElement
}
function Yr(e) {
    const t = Wr(e);
    if (!Nr(t))
        return Wt(1);
    const r = t.getBoundingClientRect()
      , {width: n, height: s, $: i} = qr(t);
    let a = (i ? Ht(r.width) : r.width) / n
      , o = (i ? Ht(r.height) : r.height) / s;
    return a && Number.isFinite(a) || (a = 1),
    o && Number.isFinite(o) || (o = 1),
    {
        x: a,
        y: o
    }
}
const Xr = Wt(0);
function Kr(e) {
    const t = vr(e);
    return Dr() && t.visualViewport ? {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    } : Xr
}
function Ur(e, t, r, n) {
    void 0 === t && (t = !1),
    void 0 === r && (r = !1);
    const s = e.getBoundingClientRect()
      , i = Wr(e);
    let a = Wt(1);
    t && (n ? Tr(n) && (a = Yr(n)) : a = Yr(e));
    const o = function(e, t, r) {
        return void 0 === t && (t = !1),
        !(!r || t && r !== vr(e)) && t
    }(i, r, n) ? Kr(i) : Wt(0);
    let l = (s.left + o.x) / a.x
      , c = (s.top + o.y) / a.y
      , d = s.width / a.x
      , u = s.height / a.y;
    if (i) {
        const e = vr(i)
          , t = n && Tr(n) ? vr(n) : n;
        let r = e
          , s = Hr(r);
        for (; s && n && t !== r; ) {
            const e = Yr(s)
              , t = s.getBoundingClientRect()
              , n = Fr(s)
              , i = t.left + (s.clientLeft + parseFloat(n.paddingLeft)) * e.x
              , a = t.top + (s.clientTop + parseFloat(n.paddingTop)) * e.y;
            l *= e.x,
            c *= e.y,
            d *= e.x,
            u *= e.y,
            l += i,
            c += a,
            r = vr(s),
            s = Hr(r)
        }
    }
    return pr({
        width: d,
        height: u,
        x: l,
        y: c
    })
}
function Qr(e, t) {
    const r = Gr(e).scrollLeft;
    return t ? t.left + r : Ur(yr(e)).left + r
}
function Zr(e, t) {
    const r = e.getBoundingClientRect();
    return {
        x: r.left + t.scrollLeft - Qr(e, r),
        y: r.top + t.scrollTop
    }
}
const Jr = new Set(["absolute", "fixed"]);
function en(e, t, r) {
    let n;
    if ("viewport" === t)
        n = function(e, t) {
            const r = vr(e)
              , n = yr(e)
              , s = r.visualViewport;
            let i = n.clientWidth
              , a = n.clientHeight
              , o = 0
              , l = 0;
            if (s) {
                i = s.width,
                a = s.height;
                const e = Dr();
                (!e || e && "fixed" === t) && (o = s.offsetLeft,
                l = s.offsetTop)
            }
            const c = Qr(n);
            if (c <= 0) {
                const e = n.ownerDocument
                  , t = e.body
                  , r = getComputedStyle(t)
                  , s = "CSS1Compat" === e.compatMode && parseFloat(r.marginLeft) + parseFloat(r.marginRight) || 0
                  , a = Math.abs(n.clientWidth - t.clientWidth - s);
                a <= 25 && (i -= a)
            } else
                c <= 25 && (i += c);
            return {
                width: i,
                height: a,
                x: o,
                y: l
            }
        }(e, r);
    else if ("document" === t)
        n = function(e) {
            const t = yr(e)
              , r = Gr(e)
              , n = e.ownerDocument.body
              , s = Bt(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth)
              , i = Bt(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
            let a = -r.scrollLeft + Qr(e);
            const o = -r.scrollTop;
            return "rtl" === Fr(n).direction && (a += Bt(t.clientWidth, n.clientWidth) - s),
            {
                width: s,
                height: i,
                x: a,
                y: o
            }
        }(yr(e));
    else if (Tr(t))
        n = function(e, t) {
            const r = Ur(e, !0, "fixed" === t)
              , n = r.top + e.clientTop
              , s = r.left + e.clientLeft
              , i = Nr(e) ? Yr(e) : Wt(1);
            return {
                width: e.clientWidth * i.x,
                height: e.clientHeight * i.y,
                x: s * i.x,
                y: n * i.y
            }
        }(t, r);
    else {
        const r = Kr(e);
        n = {
            x: t.x - r.x,
            y: t.y - r.y,
            width: t.width,
            height: t.height
        }
    }
    return pr(n)
}
function tn(e, t) {
    const r = Vr(e);
    return !(r === t || !Tr(r) || zr(r)) && ("fixed" === Fr(r).position || tn(r, t))
}
function rn(e, t, r) {
    const n = Nr(t)
      , s = yr(t)
      , i = "fixed" === r
      , a = Ur(e, !0, i, t);
    let o = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Wt(0);
    function c() {
        l.x = Qr(s)
    }
    if (n || !n && !i)
        if (("body" !== br(t) || Er(s)) && (o = Gr(t)),
        n) {
            const e = Ur(t, !0, i, t);
            l.x = e.x + t.clientLeft,
            l.y = e.y + t.clientTop
        } else
            s && c();
    i && !n && s && c();
    const d = !s || n || i ? Wt(0) : Zr(s, o);
    return {
        x: a.left + o.scrollLeft - l.x - d.x,
        y: a.top + o.scrollTop - l.y - d.y,
        width: a.width,
        height: a.height
    }
}
function nn(e) {
    return "static" === Fr(e).position
}
function sn(e, t) {
    if (!Nr(e) || "fixed" === Fr(e).position)
        return null;
    if (t)
        return t(e);
    let r = e.offsetParent;
    return yr(e) === r && (r = r.ownerDocument.body),
    r
}
function an(e, t) {
    const r = vr(e);
    if (Pr(e))
        return r;
    if (!Nr(e)) {
        let t = Vr(e);
        for (; t && !zr(t); ) {
            if (Tr(t) && !nn(t))
                return t;
            t = Vr(t)
        }
        return r
    }
    let n = sn(e, t);
    for (; n && Cr(n) && nn(n); )
        n = sn(n, t);
    return n && zr(n) && nn(n) && !Ir(n) ? r : n || function(e) {
        let t = Vr(e);
        for (; Nr(t) && !zr(t); ) {
            if (Ir(t))
                return t;
            if (Pr(t))
                return null;
            t = Vr(t)
        }
        return null
    }(e) || r
}
const on = {
    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
        let {elements: t, rect: r, offsetParent: n, strategy: s} = e;
        const i = "fixed" === s
          , a = yr(n)
          , o = !!t && Pr(t.floating);
        if (n === a || o && i)
            return r;
        let l = {
            scrollLeft: 0,
            scrollTop: 0
        }
          , c = Wt(1);
        const d = Wt(0)
          , u = Nr(n);
        if ((u || !u && !i) && (("body" !== br(n) || Er(a)) && (l = Gr(n)),
        Nr(n))) {
            const e = Ur(n);
            c = Yr(n),
            d.x = e.x + n.clientLeft,
            d.y = e.y + n.clientTop
        }
        const p = !a || u || i ? Wt(0) : Zr(a, l);
        return {
            width: r.width * c.x,
            height: r.height * c.y,
            x: r.x * c.x - l.scrollLeft * c.x + d.x + p.x,
            y: r.y * c.y - l.scrollTop * c.y + d.y + p.y
        }
    },
    getDocumentElement: yr,
    getClippingRect: function(e) {
        let {element: t, boundary: r, rootBoundary: n, strategy: s} = e;
        const i = [..."clippingAncestors" === r ? Pr(t) ? [] : function(e, t) {
            const r = t.get(e);
            if (r)
                return r;
            let n = Br(e, [], !1).filter(e=>Tr(e) && "body" !== br(e))
              , s = null;
            const i = "fixed" === Fr(e).position;
            let a = i ? Vr(e) : e;
            for (; Tr(a) && !zr(a); ) {
                const t = Fr(a)
                  , r = Ir(a);
                r || "fixed" !== t.position || (s = null),
                (i ? !r && !s : !r && "static" === t.position && s && Jr.has(s.position) || Er(a) && !r && tn(e, a)) ? n = n.filter(e=>e !== a) : s = t,
                a = Vr(a)
            }
            return t.set(e, n),
            n
        }(t, this._c) : [].concat(r), n]
          , a = i[0]
          , o = i.reduce((e,r)=>{
            const n = en(t, r, s);
            return e.top = Bt(n.top, e.top),
            e.right = $t(n.right, e.right),
            e.bottom = $t(n.bottom, e.bottom),
            e.left = Bt(n.left, e.left),
            e
        }
        , en(t, a, s));
        return {
            width: o.right - o.left,
            height: o.bottom - o.top,
            x: o.left,
            y: o.top
        }
    },
    getOffsetParent: an,
    getElementRects: async function(e) {
        const t = this.getOffsetParent || an
          , r = this.getDimensions
          , n = await r(e.floating);
        return {
            reference: rn(e.reference, await t(e.floating), e.strategy),
            floating: {
                x: 0,
                y: 0,
                width: n.width,
                height: n.height
            }
        }
    },
    getClientRects: function(e) {
        return Array.from(e.getClientRects())
    },
    getDimensions: function(e) {
        const {width: t, height: r} = qr(e);
        return {
            width: t,
            height: r
        }
    },
    getScale: Yr,
    isElement: Tr,
    isRTL: function(e) {
        return "rtl" === Fr(e).direction
    }
};
function ln(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function cn(e, t, r, n) {
    void 0 === n && (n = {});
    const {ancestorScroll: s=!0, ancestorResize: i=!0, elementResize: a="function" == typeof ResizeObserver, layoutShift: o="function" == typeof IntersectionObserver, animationFrame: l=!1} = n
      , c = Wr(e)
      , d = s || i ? [...c ? Br(c) : [], ...Br(t)] : [];
    d.forEach(e=>{
        s && e.addEventListener("scroll", r, {
            passive: !0
        }),
        i && e.addEventListener("resize", r)
    }
    );
    const u = c && o ? function(e, t) {
        let r, n = null;
        const s = yr(e);
        function i() {
            var e;
            clearTimeout(r),
            null == (e = n) || e.disconnect(),
            n = null
        }
        return function a(o, l) {
            void 0 === o && (o = !1),
            void 0 === l && (l = 1),
            i();
            const c = e.getBoundingClientRect()
              , {left: d, top: u, width: p, height: h} = c;
            if (o || t(),
            !p || !h)
                return;
            const m = {
                rootMargin: -qt(u) + "px " + -qt(s.clientWidth - (d + p)) + "px " + -qt(s.clientHeight - (u + h)) + "px " + -qt(d) + "px",
                threshold: Bt(0, $t(1, l)) || 1
            };
            let f = !0;
            function x(t) {
                const n = t[0].intersectionRatio;
                if (n !== l) {
                    if (!f)
                        return a();
                    n ? a(!1, n) : r = setTimeout(()=>{
                        a(!1, 1e-7)
                    }
                    , 1e3)
                }
                1 !== n || ln(c, e.getBoundingClientRect()) || a(),
                f = !1
            }
            try {
                n = new IntersectionObserver(x,{
                    ...m,
                    root: s.ownerDocument
                })
            } catch (g) {
                n = new IntersectionObserver(x,m)
            }
            n.observe(e)
        }(!0),
        i
    }(c, r) : null;
    let p, h = -1, m = null;
    a && (m = new ResizeObserver(e=>{
        let[n] = e;
        n && n.target === c && m && (m.unobserve(t),
        cancelAnimationFrame(h),
        h = requestAnimationFrame(()=>{
            var e;
            null == (e = m) || e.observe(t)
        }
        )),
        r()
    }
    ),
    c && !l && m.observe(c),
    m.observe(t));
    let f = l ? Ur(e) : null;
    return l && function t() {
        const n = Ur(e);
        f && !ln(f, n) && r();
        f = n,
        p = requestAnimationFrame(t)
    }(),
    r(),
    ()=>{
        var e;
        d.forEach(e=>{
            s && e.removeEventListener("scroll", r),
            i && e.removeEventListener("resize", r)
        }
        ),
        null == u || u(),
        null == (e = m) || e.disconnect(),
        m = null,
        l && cancelAnimationFrame(p)
    }
}
const dn = function(e) {
    return void 0 === e && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var r, n;
            const {x: s, y: i, placement: a, middlewareData: o} = t
              , l = await async function(e, t) {
                const {placement: r, platform: n, elements: s} = e
                  , i = await (null == n.isRTL ? void 0 : n.isRTL(s.floating))
                  , a = Qt(r)
                  , o = Zt(r)
                  , l = "y" === rr(r)
                  , c = gr.has(a) ? -1 : 1
                  , d = i && l ? -1 : 1
                  , u = Ut(t, e);
                let {mainAxis: p, crossAxis: h, alignmentAxis: m} = "number" == typeof u ? {
                    mainAxis: u,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: u.mainAxis || 0,
                    crossAxis: u.crossAxis || 0,
                    alignmentAxis: u.alignmentAxis
                };
                return o && "number" == typeof m && (h = "end" === o ? -1 * m : m),
                l ? {
                    x: h * d,
                    y: p * c
                } : {
                    x: p * c,
                    y: h * d
                }
            }(t, e);
            return a === (null == (r = o.offset) ? void 0 : r.placement) && null != (n = o.arrow) && n.alignmentOffset ? {} : {
                x: s + l.x,
                y: i + l.y,
                data: {
                    ...l,
                    placement: a
                }
            }
        }
    }
}
  , un = function(e) {
    return void 0 === e && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: r, y: n, placement: s} = t
              , {mainAxis: i=!0, crossAxis: a=!1, limiter: o={
                fn: e=>{
                    let {x: t, y: r} = e;
                    return {
                        x: t,
                        y: r
                    }
                }
            }, ...l} = Ut(e, t)
              , c = {
                x: r,
                y: n
            }
              , d = await mr(t, l)
              , u = rr(Qt(s))
              , p = Jt(u);
            let h = c[p]
              , m = c[u];
            if (i) {
                const e = "y" === p ? "bottom" : "right";
                h = Kt(h + d["y" === p ? "top" : "left"], h, h - d[e])
            }
            if (a) {
                const e = "y" === u ? "bottom" : "right";
                m = Kt(m + d["y" === u ? "top" : "left"], m, m - d[e])
            }
            const f = o.fn({
                ...t,
                [p]: h,
                [u]: m
            });
            return {
                ...f,
                data: {
                    x: f.x - r,
                    y: f.y - n,
                    enabled: {
                        [p]: i,
                        [u]: a
                    }
                }
            }
        }
    }
}
  , pn = function(e) {
    return void 0 === e && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var r, n;
            const {placement: s, middlewareData: i, rects: a, initialPlacement: o, platform: l, elements: c} = t
              , {mainAxis: d=!0, crossAxis: u=!0, fallbackPlacements: p, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: m="none", flipAlignment: f=!0, ...x} = Ut(e, t);
            if (null != (r = i.arrow) && r.alignmentOffset)
                return {};
            const g = Qt(s)
              , w = rr(o)
              , b = Qt(o) === o
              , v = await (null == l.isRTL ? void 0 : l.isRTL(c.floating))
              , y = p || (b || !f ? [dr(o)] : function(e) {
                const t = dr(e);
                return [sr(e), t, sr(t)]
            }(o))
              , j = "none" !== m;
            !p && j && y.push(...cr(o, f, m, v));
            const T = [o, ...y]
              , N = await mr(t, x)
              , S = [];
            let k = (null == (n = i.flip) ? void 0 : n.overflows) || [];
            if (d && S.push(N[g]),
            u) {
                const e = function(e, t, r) {
                    void 0 === r && (r = !1);
                    const n = Zt(e)
                      , s = nr(e)
                      , i = er(s);
                    let a = "x" === s ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                    return t.reference[i] > t.floating[i] && (a = dr(a)),
                    [a, dr(a)]
                }(s, a, v);
                S.push(N[e[0]], N[e[1]])
            }
            if (k = [...k, {
                placement: s,
                overflows: S
            }],
            !S.every(e=>e <= 0)) {
                var E, _;
                const e = ((null == (E = i.flip) ? void 0 : E.index) || 0) + 1
                  , t = T[e];
                if (t) {
                    if (!("alignment" === u && w !== rr(t)) || k.every(e=>rr(e.placement) !== w || e.overflows[0] > 0))
                        return {
                            data: {
                                index: e,
                                overflows: k
                            },
                            reset: {
                                placement: t
                            }
                        }
                }
                let r = null == (_ = k.filter(e=>e.overflows[0] <= 0).sort((e,t)=>e.overflows[1] - t.overflows[1])[0]) ? void 0 : _.placement;
                if (!r)
                    switch (h) {
                    case "bestFit":
                        {
                            var C;
                            const e = null == (C = k.filter(e=>{
                                if (j) {
                                    const t = rr(e.placement);
                                    return t === w || "y" === t
                                }
                                return !0
                            }
                            ).map(e=>[e.placement, e.overflows.filter(e=>e > 0).reduce((e,t)=>e + t, 0)]).sort((e,t)=>e[1] - t[1])[0]) ? void 0 : C[0];
                            e && (r = e);
                            break
                        }
                    case "initialPlacement":
                        r = o
                    }
                if (s !== r)
                    return {
                        reset: {
                            placement: r
                        }
                    }
            }
            return {}
        }
    }
}
  , hn = function(e) {
    return void 0 === e && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var r, n;
            const {placement: s, rects: i, platform: a, elements: o} = t
              , {apply: l=()=>{}
            , ...c} = Ut(e, t)
              , d = await mr(t, c)
              , u = Qt(s)
              , p = Zt(s)
              , h = "y" === rr(s)
              , {width: m, height: f} = i.floating;
            let x, g;
            "top" === u || "bottom" === u ? (x = u,
            g = p === (await (null == a.isRTL ? void 0 : a.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (g = u,
            x = "end" === p ? "top" : "bottom");
            const w = f - d.top - d.bottom
              , b = m - d.left - d.right
              , v = $t(f - d[x], w)
              , y = $t(m - d[g], b)
              , j = !t.middlewareData.shift;
            let T = v
              , N = y;
            if (null != (r = t.middlewareData.shift) && r.enabled.x && (N = b),
            null != (n = t.middlewareData.shift) && n.enabled.y && (T = w),
            j && !p) {
                const e = Bt(d.left, 0)
                  , t = Bt(d.right, 0)
                  , r = Bt(d.top, 0)
                  , n = Bt(d.bottom, 0);
                h ? N = m - 2 * (0 !== e || 0 !== t ? e + t : Bt(d.left, d.right)) : T = f - 2 * (0 !== r || 0 !== n ? r + n : Bt(d.top, d.bottom))
            }
            await l({
                ...t,
                availableWidth: N,
                availableHeight: T
            });
            const S = await a.getDimensions(o.floating);
            return m !== S.width || f !== S.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
}
  , mn = function(e) {
    return void 0 === e && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: r} = t
              , {strategy: n="referenceHidden", ...s} = Ut(e, t);
            switch (n) {
            case "referenceHidden":
                {
                    const e = fr(await mr(t, {
                        ...s,
                        elementContext: "reference"
                    }), r.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: e,
                            referenceHidden: xr(e)
                        }
                    }
                }
            case "escaped":
                {
                    const e = fr(await mr(t, {
                        ...s,
                        altBoundary: !0
                    }), r.floating);
                    return {
                        data: {
                            escapedOffsets: e,
                            escaped: xr(e)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , fn = e=>({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: r, y: n, placement: s, rects: i, platform: a, elements: o, middlewareData: l} = t
          , {element: c, padding: d=0} = Ut(e, t) || {};
        if (null == c)
            return {};
        const u = ur(d)
          , p = {
            x: r,
            y: n
        }
          , h = nr(s)
          , m = er(h)
          , f = await a.getDimensions(c)
          , x = "y" === h
          , g = x ? "top" : "left"
          , w = x ? "bottom" : "right"
          , b = x ? "clientHeight" : "clientWidth"
          , v = i.reference[m] + i.reference[h] - p[h] - i.floating[m]
          , y = p[h] - i.reference[h]
          , j = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(c));
        let T = j ? j[b] : 0;
        T && await (null == a.isElement ? void 0 : a.isElement(j)) || (T = o.floating[b] || i.floating[m]);
        const N = v / 2 - y / 2
          , S = T / 2 - f[m] / 2 - 1
          , k = $t(u[g], S)
          , E = $t(u[w], S)
          , _ = k
          , C = T - f[m] - E
          , M = T / 2 - f[m] / 2 + N
          , P = Kt(_, M, C)
          , O = !l.arrow && null != Zt(s) && M !== P && i.reference[m] / 2 - (M < _ ? k : E) - f[m] / 2 < 0
          , A = O ? M < _ ? M - _ : M - C : 0;
        return {
            [h]: p[h] + A,
            data: {
                [h]: P,
                centerOffset: M - P - A,
                ...O && {
                    alignmentOffset: A
                }
            },
            reset: O
        }
    }
})
  , xn = function(e) {
    return void 0 === e && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: r, y: n, placement: s, rects: i, middlewareData: a} = t
              , {offset: o=0, mainAxis: l=!0, crossAxis: c=!0} = Ut(e, t)
              , d = {
                x: r,
                y: n
            }
              , u = rr(s)
              , p = Jt(u);
            let h = d[p]
              , m = d[u];
            const f = Ut(o, t)
              , x = "number" == typeof f ? {
                mainAxis: f,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...f
            };
            if (l) {
                const e = "y" === p ? "height" : "width"
                  , t = i.reference[p] - i.floating[e] + x.mainAxis
                  , r = i.reference[p] + i.reference[e] - x.mainAxis;
                h < t ? h = t : h > r && (h = r)
            }
            if (c) {
                var g, w;
                const e = "y" === p ? "width" : "height"
                  , t = gr.has(Qt(s))
                  , r = i.reference[u] - i.floating[e] + (t && (null == (g = a.offset) ? void 0 : g[u]) || 0) + (t ? 0 : x.crossAxis)
                  , n = i.reference[u] + i.reference[e] + (t ? 0 : (null == (w = a.offset) ? void 0 : w[u]) || 0) - (t ? x.crossAxis : 0);
                m < r ? m = r : m > n && (m = n)
            }
            return {
                [p]: h,
                [u]: m
            }
        }
    }
}
  , gn = (e,t,r)=>{
    const n = new Map
      , s = {
        platform: on,
        ...r
    }
      , i = {
        ...s.platform,
        _c: n
    };
    return (async(e,t,r)=>{
        const {placement: n="bottom", strategy: s="absolute", middleware: i=[], platform: a} = r
          , o = i.filter(Boolean)
          , l = await (null == a.isRTL ? void 0 : a.isRTL(t));
        let c = await a.getElementRects({
            reference: e,
            floating: t,
            strategy: s
        })
          , {x: d, y: u} = hr(c, n, l)
          , p = n
          , h = {}
          , m = 0;
        for (let f = 0; f < o.length; f++) {
            const {name: r, fn: i} = o[f]
              , {x: x, y: g, data: w, reset: b} = await i({
                x: d,
                y: u,
                initialPlacement: n,
                placement: p,
                strategy: s,
                middlewareData: h,
                rects: c,
                platform: a,
                elements: {
                    reference: e,
                    floating: t
                }
            });
            d = null != x ? x : d,
            u = null != g ? g : u,
            h = {
                ...h,
                [r]: {
                    ...h[r],
                    ...w
                }
            },
            b && m <= 50 && (m++,
            "object" == typeof b && (b.placement && (p = b.placement),
            b.rects && (c = !0 === b.rects ? await a.getElementRects({
                reference: e,
                floating: t,
                strategy: s
            }) : b.rects),
            ({x: d, y: u} = hr(c, p, l))),
            f = -1)
        }
        return {
            x: d,
            y: u,
            placement: p,
            strategy: s,
            middlewareData: h
        }
    }
    )(e, t, {
        ...s,
        platform: i
    })
}
;
var wn = "undefined" != typeof document ? G.useLayoutEffect : function() {}
;
function bn(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if ("function" == typeof e && e.toString() === t.toString())
        return !0;
    let r, n, s;
    if (e && t && "object" == typeof e) {
        if (Array.isArray(e)) {
            if (r = e.length,
            r !== t.length)
                return !1;
            for (n = r; 0 !== n--; )
                if (!bn(e[n], t[n]))
                    return !1;
            return !0
        }
        if (s = Object.keys(e),
        r = s.length,
        r !== Object.keys(t).length)
            return !1;
        for (n = r; 0 !== n--; )
            if (!{}.hasOwnProperty.call(t, s[n]))
                return !1;
        for (n = r; 0 !== n--; ) {
            const r = s[n];
            if (("_owner" !== r || !e.$$typeof) && !bn(e[r], t[r]))
                return !1
        }
        return !0
    }
    return e != e && t != t
}
function vn(e) {
    if ("undefined" == typeof window)
        return 1;
    return (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function yn(e, t) {
    const r = vn(e);
    return Math.round(t * r) / r
}
function jn(e) {
    const t = G.useRef(e);
    return wn(()=>{
        t.current = e
    }
    ),
    t
}
const Tn = e=>({
    name: "arrow",
    options: e,
    fn(t) {
        const {element: r, padding: n} = "function" == typeof e ? e(t) : e;
        return r && (s = r,
        {}.hasOwnProperty.call(s, "current")) ? null != r.current ? fn({
            element: r.current,
            padding: n
        }).fn(t) : {} : r ? fn({
            element: r,
            padding: n
        }).fn(t) : {};
        var s
    }
})
  , Nn = (e,t)=>({
    ...un(e),
    options: [e, t]
})
  , Sn = (e,t)=>({
    ...xn(e),
    options: [e, t]
})
  , kn = (e,t)=>({
    ...pn(e),
    options: [e, t]
})
  , En = (e,t)=>({
    ...hn(e),
    options: [e, t]
})
  , _n = (e,t)=>({
    ...mn(e),
    options: [e, t]
})
  , Cn = (e,t)=>({
    ...Tn(e),
    options: [e, t]
});
var Mn = G.forwardRef((e,t)=>{
    const {children: r, width: n=10, height: s=5, ...i} = e;
    return a.jsx(l.svg, {
        ...i,
        ref: t,
        width: n,
        height: s,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? r : a.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Mn.displayName = "Arrow";
var Pn = Mn;
var On = "Popper"
  , [An,Ln] = d(On)
  , [In,Dn] = An(On)
  , Rn = e=>{
    const {__scopePopper: t, children: r} = e
      , [n,s] = G.useState(null);
    return a.jsx(In, {
        scope: t,
        anchor: n,
        onAnchorChange: s,
        children: r
    })
}
;
Rn.displayName = On;
var zn = "PopperAnchor"
  , Fn = G.forwardRef((e,t)=>{
    const {__scopePopper: r, virtualRef: n, ...s} = e
      , i = Dn(zn, r)
      , o = G.useRef(null)
      , c = u(t, o)
      , d = G.useRef(null);
    return G.useEffect(()=>{
        const e = d.current;
        d.current = (null == n ? void 0 : n.current) || o.current,
        e !== d.current && i.onAnchorChange(d.current)
    }
    ),
    n ? null : a.jsx(l.div, {
        ...s,
        ref: c
    })
}
);
Fn.displayName = zn;
var Gn = "PopperContent"
  , [Vn,$n] = An(Gn)
  , Bn = G.forwardRef((e,t)=>{
    var r, n, s, i, o, d;
    const {__scopePopper: h, side: m="bottom", sideOffset: f=0, align: x="center", alignOffset: g=0, arrowPadding: w=0, avoidCollisions: b=!0, collisionBoundary: v=[], collisionPadding: y=0, sticky: j="partial", hideWhenDetached: T=!1, updatePositionStrategy: N="optimized", onPlaced: S, ...k} = e
      , E = Dn(Gn, h)
      , [_,C] = G.useState(null)
      , M = u(t, e=>C(e))
      , [P,O] = G.useState(null)
      , A = function(e) {
        const [t,r] = G.useState(void 0);
        return c(()=>{
            if (e) {
                r({
                    width: e.offsetWidth,
                    height: e.offsetHeight
                });
                const t = new ResizeObserver(t=>{
                    if (!Array.isArray(t))
                        return;
                    if (!t.length)
                        return;
                    const n = t[0];
                    let s, i;
                    if ("borderBoxSize"in n) {
                        const e = n.borderBoxSize
                          , t = Array.isArray(e) ? e[0] : e;
                        s = t.inlineSize,
                        i = t.blockSize
                    } else
                        s = e.offsetWidth,
                        i = e.offsetHeight;
                    r({
                        width: s,
                        height: i
                    })
                }
                );
                return t.observe(e, {
                    box: "border-box"
                }),
                ()=>t.unobserve(e)
            }
            r(void 0)
        }
        , [e]),
        t
    }(P)
      , L = (null == A ? void 0 : A.width) ?? 0
      , I = (null == A ? void 0 : A.height) ?? 0
      , D = m + ("center" !== x ? "-" + x : "")
      , R = "number" == typeof y ? y : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...y
    }
      , F = Array.isArray(v) ? v : [v]
      , V = F.length > 0
      , $ = {
        padding: R,
        boundary: F.filter(Yn),
        altBoundary: V
    }
      , {refs: B, floatingStyles: H, placement: q, isPositioned: W, middlewareData: Y} = function(e) {
        void 0 === e && (e = {});
        const {placement: t="bottom", strategy: r="absolute", middleware: n=[], platform: s, elements: {reference: i, floating: a}={}, transform: o=!0, whileElementsMounted: l, open: c} = e
          , [d,u] = G.useState({
            x: 0,
            y: 0,
            strategy: r,
            placement: t,
            middlewareData: {},
            isPositioned: !1
        })
          , [p,h] = G.useState(n);
        bn(p, n) || h(n);
        const [m,f] = G.useState(null)
          , [x,g] = G.useState(null)
          , w = G.useCallback(e=>{
            e !== j.current && (j.current = e,
            f(e))
        }
        , [])
          , b = G.useCallback(e=>{
            e !== T.current && (T.current = e,
            g(e))
        }
        , [])
          , v = i || m
          , y = a || x
          , j = G.useRef(null)
          , T = G.useRef(null)
          , N = G.useRef(d)
          , S = null != l
          , k = jn(l)
          , E = jn(s)
          , _ = jn(c)
          , C = G.useCallback(()=>{
            if (!j.current || !T.current)
                return;
            const e = {
                placement: t,
                strategy: r,
                middleware: p
            };
            E.current && (e.platform = E.current),
            gn(j.current, T.current, e).then(e=>{
                const t = {
                    ...e,
                    isPositioned: !1 !== _.current
                };
                M.current && !bn(N.current, t) && (N.current = t,
                z.flushSync(()=>{
                    u(t)
                }
                ))
            }
            )
        }
        , [p, t, r, E, _]);
        wn(()=>{
            !1 === c && N.current.isPositioned && (N.current.isPositioned = !1,
            u(e=>({
                ...e,
                isPositioned: !1
            })))
        }
        , [c]);
        const M = G.useRef(!1);
        wn(()=>(M.current = !0,
        ()=>{
            M.current = !1
        }
        ), []),
        wn(()=>{
            if (v && (j.current = v),
            y && (T.current = y),
            v && y) {
                if (k.current)
                    return k.current(v, y, C);
                C()
            }
        }
        , [v, y, C, k, S]);
        const P = G.useMemo(()=>({
            reference: j,
            floating: T,
            setReference: w,
            setFloating: b
        }), [w, b])
          , O = G.useMemo(()=>({
            reference: v,
            floating: y
        }), [v, y])
          , A = G.useMemo(()=>{
            const e = {
                position: r,
                left: 0,
                top: 0
            };
            if (!O.floating)
                return e;
            const t = yn(O.floating, d.x)
              , n = yn(O.floating, d.y);
            return o ? {
                ...e,
                transform: "translate(" + t + "px, " + n + "px)",
                ...vn(O.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: r,
                left: t,
                top: n
            }
        }
        , [r, o, O.floating, d.x, d.y]);
        return G.useMemo(()=>({
            ...d,
            update: C,
            refs: P,
            elements: O,
            floatingStyles: A
        }), [d, C, P, O, A])
    }({
        strategy: "fixed",
        placement: D,
        whileElementsMounted: (...e)=>cn(...e, {
            animationFrame: "always" === N
        }),
        elements: {
            reference: E.anchor
        },
        middleware: [(X = {
            mainAxis: f + I,
            alignmentAxis: g
        },
        {
            ...dn(X),
            options: [X, K]
        }), b && Nn({
            mainAxis: !0,
            crossAxis: !1,
            limiter: "partial" === j ? Sn() : void 0,
            ...$
        }), b && kn({
            ...$
        }), En({
            ...$,
            apply: ({elements: e, rects: t, availableWidth: r, availableHeight: n})=>{
                const {width: s, height: i} = t.reference
                  , a = e.floating.style;
                a.setProperty("--radix-popper-available-width", `${r}px`),
                a.setProperty("--radix-popper-available-height", `${n}px`),
                a.setProperty("--radix-popper-anchor-width", `${s}px`),
                a.setProperty("--radix-popper-anchor-height", `${i}px`)
            }
        }), P && Cn({
            element: P,
            padding: w
        }), Xn({
            arrowWidth: L,
            arrowHeight: I
        }), T && _n({
            strategy: "referenceHidden",
            ...$
        })]
    });
    var X, K;
    const [U,Q] = Kn(q)
      , Z = p(S);
    c(()=>{
        W && (null == Z || Z())
    }
    , [W, Z]);
    const J = null == (r = Y.arrow) ? void 0 : r.x
      , ee = null == (n = Y.arrow) ? void 0 : n.y
      , te = 0 !== (null == (s = Y.arrow) ? void 0 : s.centerOffset)
      , [re,ne] = G.useState();
    return c(()=>{
        _ && ne(window.getComputedStyle(_).zIndex)
    }
    , [_]),
    a.jsx("div", {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...H,
            transform: W ? H.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: re,
            "--radix-popper-transform-origin": [null == (i = Y.transformOrigin) ? void 0 : i.x, null == (o = Y.transformOrigin) ? void 0 : o.y].join(" "),
            ...(null == (d = Y.hide) ? void 0 : d.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: a.jsx(Vn, {
            scope: h,
            placedSide: U,
            onArrowChange: O,
            arrowX: J,
            arrowY: ee,
            shouldHideArrow: te,
            children: a.jsx(l.div, {
                "data-side": U,
                "data-align": Q,
                ...k,
                ref: M,
                style: {
                    ...k.style,
                    animation: W ? void 0 : "none"
                }
            })
        })
    })
}
);
Bn.displayName = Gn;
var Hn = "PopperArrow"
  , qn = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Wn = G.forwardRef(function(e, t) {
    const {__scopePopper: r, ...n} = e
      , s = $n(Hn, r)
      , i = qn[s.placedSide];
    return a.jsx("span", {
        ref: s.onArrowChange,
        style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [i]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[s.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: a.jsx(Pn, {
            ...n,
            ref: t,
            style: {
                ...n.style,
                display: "block"
            }
        })
    })
});
function Yn(e) {
    return null !== e
}
Wn.displayName = Hn;
var Xn = e=>({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var r, n, s;
        const {placement: i, rects: a, middlewareData: o} = t
          , l = 0 !== (null == (r = o.arrow) ? void 0 : r.centerOffset)
          , c = l ? 0 : e.arrowWidth
          , d = l ? 0 : e.arrowHeight
          , [u,p] = Kn(i)
          , h = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[p]
          , m = ((null == (n = o.arrow) ? void 0 : n.x) ?? 0) + c / 2
          , f = ((null == (s = o.arrow) ? void 0 : s.y) ?? 0) + d / 2;
        let x = ""
          , g = "";
        return "bottom" === u ? (x = l ? h : `${m}px`,
        g = -d + "px") : "top" === u ? (x = l ? h : `${m}px`,
        g = `${a.floating.height + d}px`) : "right" === u ? (x = -d + "px",
        g = l ? h : `${f}px`) : "left" === u && (x = `${a.floating.width + d}px`,
        g = l ? h : `${f}px`),
        {
            data: {
                x: x,
                y: g
            }
        }
    }
});
function Kn(e) {
    const [t,r="center"] = e.split("-");
    return [t, r]
}
var Un = Rn
  , Qn = Fn
  , Zn = Bn
  , Jn = Wn
  , es = ["Enter", " "]
  , ts = ["ArrowUp", "PageDown", "End"]
  , rs = ["ArrowDown", "PageUp", "Home", ...ts]
  , ns = {
    ltr: [...es, "ArrowRight"],
    rtl: [...es, "ArrowLeft"]
}
  , ss = {
    ltr: ["ArrowLeft"],
    rtl: ["ArrowRight"]
}
  , is = "Menu"
  , [as,os,ls] = h(is)
  , [cs,ds] = d(is, [ls, Ln, m])
  , us = Ln()
  , ps = m()
  , [hs,ms] = cs(is)
  , [fs,xs] = cs(is)
  , gs = e=>{
    const {__scopeMenu: t, open: r=!1, children: n, dir: s, onOpenChange: i, modal: o=!0} = e
      , l = us(t)
      , [c,d] = G.useState(null)
      , u = G.useRef(!1)
      , h = p(i)
      , m = f(s);
    return G.useEffect(()=>{
        const e = ()=>{
            u.current = !0,
            document.addEventListener("pointerdown", t, {
                capture: !0,
                once: !0
            }),
            document.addEventListener("pointermove", t, {
                capture: !0,
                once: !0
            })
        }
          , t = ()=>u.current = !1;
        return document.addEventListener("keydown", e, {
            capture: !0
        }),
        ()=>{
            document.removeEventListener("keydown", e, {
                capture: !0
            }),
            document.removeEventListener("pointerdown", t, {
                capture: !0
            }),
            document.removeEventListener("pointermove", t, {
                capture: !0
            })
        }
    }
    , []),
    a.jsx(Un, {
        ...l,
        children: a.jsx(hs, {
            scope: t,
            open: r,
            onOpenChange: h,
            content: c,
            onContentChange: d,
            children: a.jsx(fs, {
                scope: t,
                onClose: G.useCallback(()=>h(!1), [h]),
                isUsingKeyboardRef: u,
                dir: m,
                modal: o,
                children: n
            })
        })
    })
}
;
gs.displayName = is;
var ws = G.forwardRef((e,t)=>{
    const {__scopeMenu: r, ...n} = e
      , s = us(r);
    return a.jsx(Qn, {
        ...s,
        ...n,
        ref: t
    })
}
);
ws.displayName = "MenuAnchor";
var bs = "MenuPortal"
  , [vs,ys] = cs(bs, {
    forceMount: void 0
})
  , js = e=>{
    const {__scopeMenu: t, forceMount: r, children: n, container: s} = e
      , i = ms(bs, t);
    return a.jsx(vs, {
        scope: t,
        forceMount: r,
        children: a.jsx(x, {
            present: r || i.open,
            children: a.jsx(g, {
                asChild: !0,
                container: s,
                children: n
            })
        })
    })
}
;
js.displayName = bs;
var Ts = "MenuContent"
  , [Ns,Ss] = cs(Ts)
  , ks = G.forwardRef((e,t)=>{
    const r = ys(Ts, e.__scopeMenu)
      , {forceMount: n=r.forceMount, ...s} = e
      , i = ms(Ts, e.__scopeMenu)
      , o = xs(Ts, e.__scopeMenu);
    return a.jsx(as.Provider, {
        scope: e.__scopeMenu,
        children: a.jsx(x, {
            present: n || i.open,
            children: a.jsx(as.Slot, {
                scope: e.__scopeMenu,
                children: o.modal ? a.jsx(Es, {
                    ...s,
                    ref: t
                }) : a.jsx(_s, {
                    ...s,
                    ref: t
                })
            })
        })
    })
}
)
  , Es = G.forwardRef((e,t)=>{
    const r = ms(Ts, e.__scopeMenu)
      , n = G.useRef(null)
      , s = u(t, n);
    return G.useEffect(()=>{
        const e = n.current;
        if (e)
            return b(e)
    }
    , []),
    a.jsx(Ms, {
        ...e,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: w(e.onFocusOutside, e=>e.preventDefault(), {
            checkForDefaultPrevented: !1
        }),
        onDismiss: ()=>r.onOpenChange(!1)
    })
}
)
  , _s = G.forwardRef((e,t)=>{
    const r = ms(Ts, e.__scopeMenu);
    return a.jsx(Ms, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: ()=>r.onOpenChange(!1)
    })
}
)
  , Cs = N("MenuContent.ScrollLock")
  , Ms = G.forwardRef((e,t)=>{
    const {__scopeMenu: r, loop: n=!1, trapFocus: s, onOpenAutoFocus: i, onCloseAutoFocus: o, disableOutsidePointerEvents: l, onEntryFocus: c, onEscapeKeyDown: d, onPointerDownOutside: p, onFocusOutside: h, onInteractOutside: m, onDismiss: f, disableOutsideScroll: x, ...g} = e
      , b = ms(Ts, r)
      , v = xs(Ts, r)
      , y = us(r)
      , N = ps(r)
      , _ = os(r)
      , [C,M] = G.useState(null)
      , P = G.useRef(null)
      , O = u(t, P, b.onContentChange)
      , A = G.useRef(0)
      , L = G.useRef("")
      , I = G.useRef(0)
      , D = G.useRef(null)
      , R = G.useRef("right")
      , z = G.useRef(0)
      , F = x ? T : G.Fragment
      , V = x ? {
        as: Cs,
        allowPinchZoom: !0
    } : void 0
      , $ = e=>{
        var t, r;
        const n = L.current + e
          , s = _().filter(e=>!e.disabled)
          , i = document.activeElement
          , a = null == (t = s.find(e=>e.ref.current === i)) ? void 0 : t.textValue
          , o = function(e, t, r) {
            const n = t.length > 1 && Array.from(t).every(e=>e === t[0])
              , s = n ? t[0] : t
              , i = r ? e.indexOf(r) : -1;
            let a = (o = e,
            l = Math.max(i, 0),
            o.map((e,t)=>o[(l + t) % o.length]));
            var o, l;
            1 === s.length && (a = a.filter(e=>e !== r));
            const c = a.find(e=>e.toLowerCase().startsWith(s.toLowerCase()));
            return c !== r ? c : void 0
        }(s.map(e=>e.textValue), n, a)
          , l = null == (r = s.find(e=>e.textValue === o)) ? void 0 : r.ref.current;
        !function e(t) {
            L.current = t,
            window.clearTimeout(A.current),
            "" !== t && (A.current = window.setTimeout(()=>e(""), 1e3))
        }(n),
        l && setTimeout(()=>l.focus())
    }
    ;
    G.useEffect(()=>()=>window.clearTimeout(A.current), []),
    j();
    const B = G.useCallback(e=>{
        var t, r;
        return R.current === (null == (t = D.current) ? void 0 : t.side) && function(e, t) {
            if (!t)
                return !1;
            const r = {
                x: e.clientX,
                y: e.clientY
            };
            return function(e, t) {
                const {x: r, y: n} = e;
                let s = !1;
                for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
                    const e = t[i]
                      , o = t[a]
                      , l = e.x
                      , c = e.y
                      , d = o.x
                      , u = o.y;
                    c > n != u > n && r < (d - l) * (n - c) / (u - c) + l && (s = !s)
                }
                return s
            }(r, t)
        }(e, null == (r = D.current) ? void 0 : r.area)
    }
    , []);
    return a.jsx(Ns, {
        scope: r,
        searchRef: L,
        onItemEnter: G.useCallback(e=>{
            B(e) && e.preventDefault()
        }
        , [B]),
        onItemLeave: G.useCallback(e=>{
            var t;
            B(e) || (null == (t = P.current) || t.focus(),
            M(null))
        }
        , [B]),
        onTriggerLeave: G.useCallback(e=>{
            B(e) && e.preventDefault()
        }
        , [B]),
        pointerGraceTimerRef: I,
        onPointerGraceIntentChange: G.useCallback(e=>{
            D.current = e
        }
        , []),
        children: a.jsx(F, {
            ...V,
            children: a.jsx(S, {
                asChild: !0,
                trapped: s,
                onMountAutoFocus: w(i, e=>{
                    var t;
                    e.preventDefault(),
                    null == (t = P.current) || t.focus({
                        preventScroll: !0
                    })
                }
                ),
                onUnmountAutoFocus: o,
                children: a.jsx(k, {
                    asChild: !0,
                    disableOutsidePointerEvents: l,
                    onEscapeKeyDown: d,
                    onPointerDownOutside: p,
                    onFocusOutside: h,
                    onInteractOutside: m,
                    onDismiss: f,
                    children: a.jsx(E, {
                        asChild: !0,
                        ...N,
                        dir: v.dir,
                        orientation: "vertical",
                        loop: n,
                        currentTabStopId: C,
                        onCurrentTabStopIdChange: M,
                        onEntryFocus: w(c, e=>{
                            v.isUsingKeyboardRef.current || e.preventDefault()
                        }
                        ),
                        preventScrollOnEntryFocus: !0,
                        children: a.jsx(Zn, {
                            role: "menu",
                            "aria-orientation": "vertical",
                            "data-state": ri(b.open),
                            "data-radix-menu-content": "",
                            dir: v.dir,
                            ...y,
                            ...g,
                            ref: O,
                            style: {
                                outline: "none",
                                ...g.style
                            },
                            onKeyDown: w(g.onKeyDown, e=>{
                                const t = e.target.closest("[data-radix-menu-content]") === e.currentTarget
                                  , r = e.ctrlKey || e.altKey || e.metaKey
                                  , n = 1 === e.key.length;
                                t && ("Tab" === e.key && e.preventDefault(),
                                !r && n && $(e.key));
                                const s = P.current;
                                if (e.target !== s)
                                    return;
                                if (!rs.includes(e.key))
                                    return;
                                e.preventDefault();
                                const i = _().filter(e=>!e.disabled).map(e=>e.ref.current);
                                ts.includes(e.key) && i.reverse(),
                                function(e) {
                                    const t = document.activeElement;
                                    for (const r of e) {
                                        if (r === t)
                                            return;
                                        if (r.focus(),
                                        document.activeElement !== t)
                                            return
                                    }
                                }(i)
                            }
                            ),
                            onBlur: w(e.onBlur, e=>{
                                e.currentTarget.contains(e.target) || (window.clearTimeout(A.current),
                                L.current = "")
                            }
                            ),
                            onPointerMove: w(e.onPointerMove, ii(e=>{
                                const t = e.target
                                  , r = z.current !== e.clientX;
                                if (e.currentTarget.contains(t) && r) {
                                    const t = e.clientX > z.current ? "right" : "left";
                                    R.current = t,
                                    z.current = e.clientX
                                }
                            }
                            ))
                        })
                    })
                })
            })
        })
    })
}
);
ks.displayName = Ts;
var Ps = G.forwardRef((e,t)=>{
    const {__scopeMenu: r, ...n} = e;
    return a.jsx(l.div, {
        role: "group",
        ...n,
        ref: t
    })
}
);
Ps.displayName = "MenuGroup";
var Os = G.forwardRef((e,t)=>{
    const {__scopeMenu: r, ...n} = e;
    return a.jsx(l.div, {
        ...n,
        ref: t
    })
}
);
Os.displayName = "MenuLabel";
var As = "MenuItem"
  , Ls = "menu.itemSelect"
  , Is = G.forwardRef((e,t)=>{
    const {disabled: r=!1, onSelect: n, ...s} = e
      , i = G.useRef(null)
      , o = xs(As, e.__scopeMenu)
      , l = Ss(As, e.__scopeMenu)
      , c = u(t, i)
      , d = G.useRef(!1);
    return a.jsx(Ds, {
        ...s,
        ref: c,
        disabled: r,
        onClick: w(e.onClick, ()=>{
            const e = i.current;
            if (!r && e) {
                const t = new CustomEvent(Ls,{
                    bubbles: !0,
                    cancelable: !0
                });
                e.addEventListener(Ls, e=>null == n ? void 0 : n(e), {
                    once: !0
                }),
                y(e, t),
                t.defaultPrevented ? d.current = !1 : o.onClose()
            }
        }
        ),
        onPointerDown: t=>{
            var r;
            null == (r = e.onPointerDown) || r.call(e, t),
            d.current = !0
        }
        ,
        onPointerUp: w(e.onPointerUp, e=>{
            var t;
            d.current || null == (t = e.currentTarget) || t.click()
        }
        ),
        onKeyDown: w(e.onKeyDown, e=>{
            const t = "" !== l.searchRef.current;
            r || t && " " === e.key || es.includes(e.key) && (e.currentTarget.click(),
            e.preventDefault())
        }
        )
    })
}
);
Is.displayName = As;
var Ds = G.forwardRef((e,t)=>{
    const {__scopeMenu: r, disabled: n=!1, textValue: s, ...i} = e
      , o = Ss(As, r)
      , c = ps(r)
      , d = G.useRef(null)
      , p = u(t, d)
      , [h,m] = G.useState(!1)
      , [f,x] = G.useState("");
    return G.useEffect(()=>{
        const e = d.current;
        e && x((e.textContent ?? "").trim())
    }
    , [i.children]),
    a.jsx(as.ItemSlot, {
        scope: r,
        disabled: n,
        textValue: s ?? f,
        children: a.jsx(v, {
            asChild: !0,
            ...c,
            focusable: !n,
            children: a.jsx(l.div, {
                role: "menuitem",
                "data-highlighted": h ? "" : void 0,
                "aria-disabled": n || void 0,
                "data-disabled": n ? "" : void 0,
                ...i,
                ref: p,
                onPointerMove: w(e.onPointerMove, ii(e=>{
                    if (n)
                        o.onItemLeave(e);
                    else if (o.onItemEnter(e),
                    !e.defaultPrevented) {
                        e.currentTarget.focus({
                            preventScroll: !0
                        })
                    }
                }
                )),
                onPointerLeave: w(e.onPointerLeave, ii(e=>o.onItemLeave(e))),
                onFocus: w(e.onFocus, ()=>m(!0)),
                onBlur: w(e.onBlur, ()=>m(!1))
            })
        })
    })
}
)
  , Rs = G.forwardRef((e,t)=>{
    const {checked: r=!1, onCheckedChange: n, ...s} = e;
    return a.jsx(qs, {
        scope: e.__scopeMenu,
        checked: r,
        children: a.jsx(Is, {
            role: "menuitemcheckbox",
            "aria-checked": ni(r) ? "mixed" : r,
            ...s,
            ref: t,
            "data-state": si(r),
            onSelect: w(s.onSelect, ()=>null == n ? void 0 : n(!!ni(r) || !r), {
                checkForDefaultPrevented: !1
            })
        })
    })
}
);
Rs.displayName = "MenuCheckboxItem";
var zs = "MenuRadioGroup"
  , [Fs,Gs] = cs(zs, {
    value: void 0,
    onValueChange: ()=>{}
})
  , Vs = G.forwardRef((e,t)=>{
    const {value: r, onValueChange: n, ...s} = e
      , i = p(n);
    return a.jsx(Fs, {
        scope: e.__scopeMenu,
        value: r,
        onValueChange: i,
        children: a.jsx(Ps, {
            ...s,
            ref: t
        })
    })
}
);
Vs.displayName = zs;
var $s = "MenuRadioItem"
  , Bs = G.forwardRef((e,t)=>{
    const {value: r, ...n} = e
      , s = Gs($s, e.__scopeMenu)
      , i = r === s.value;
    return a.jsx(qs, {
        scope: e.__scopeMenu,
        checked: i,
        children: a.jsx(Is, {
            role: "menuitemradio",
            "aria-checked": i,
            ...n,
            ref: t,
            "data-state": si(i),
            onSelect: w(n.onSelect, ()=>{
                var e;
                return null == (e = s.onValueChange) ? void 0 : e.call(s, r)
            }
            , {
                checkForDefaultPrevented: !1
            })
        })
    })
}
);
Bs.displayName = $s;
var Hs = "MenuItemIndicator"
  , [qs,Ws] = cs(Hs, {
    checked: !1
})
  , Ys = G.forwardRef((e,t)=>{
    const {__scopeMenu: r, forceMount: n, ...s} = e
      , i = Ws(Hs, r);
    return a.jsx(x, {
        present: n || ni(i.checked) || !0 === i.checked,
        children: a.jsx(l.span, {
            ...s,
            ref: t,
            "data-state": si(i.checked)
        })
    })
}
);
Ys.displayName = Hs;
var Xs = G.forwardRef((e,t)=>{
    const {__scopeMenu: r, ...n} = e;
    return a.jsx(l.div, {
        role: "separator",
        "aria-orientation": "horizontal",
        ...n,
        ref: t
    })
}
);
Xs.displayName = "MenuSeparator";
var Ks = G.forwardRef((e,t)=>{
    const {__scopeMenu: r, ...n} = e
      , s = us(r);
    return a.jsx(Jn, {
        ...s,
        ...n,
        ref: t
    })
}
);
Ks.displayName = "MenuArrow";
var [Us,Qs] = cs("MenuSub")
  , Zs = "MenuSubTrigger"
  , Js = G.forwardRef((e,t)=>{
    const r = ms(Zs, e.__scopeMenu)
      , n = xs(Zs, e.__scopeMenu)
      , s = Qs(Zs, e.__scopeMenu)
      , i = Ss(Zs, e.__scopeMenu)
      , o = G.useRef(null)
      , {pointerGraceTimerRef: l, onPointerGraceIntentChange: c} = i
      , d = {
        __scopeMenu: e.__scopeMenu
    }
      , u = G.useCallback(()=>{
        o.current && window.clearTimeout(o.current),
        o.current = null
    }
    , []);
    return G.useEffect(()=>u, [u]),
    G.useEffect(()=>{
        const e = l.current;
        return ()=>{
            window.clearTimeout(e),
            c(null)
        }
    }
    , [l, c]),
    a.jsx(ws, {
        asChild: !0,
        ...d,
        children: a.jsx(Ds, {
            id: s.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": r.open,
            "aria-controls": s.contentId,
            "data-state": ri(r.open),
            ...e,
            ref: _(t, s.onTriggerChange),
            onClick: t=>{
                var n;
                null == (n = e.onClick) || n.call(e, t),
                e.disabled || t.defaultPrevented || (t.currentTarget.focus(),
                r.open || r.onOpenChange(!0))
            }
            ,
            onPointerMove: w(e.onPointerMove, ii(t=>{
                i.onItemEnter(t),
                t.defaultPrevented || e.disabled || r.open || o.current || (i.onPointerGraceIntentChange(null),
                o.current = window.setTimeout(()=>{
                    r.onOpenChange(!0),
                    u()
                }
                , 100))
            }
            )),
            onPointerLeave: w(e.onPointerLeave, ii(e=>{
                var t, n;
                u();
                const s = null == (t = r.content) ? void 0 : t.getBoundingClientRect();
                if (s) {
                    const t = null == (n = r.content) ? void 0 : n.dataset.side
                      , a = "right" === t
                      , o = a ? -5 : 5
                      , c = s[a ? "left" : "right"]
                      , d = s[a ? "right" : "left"];
                    i.onPointerGraceIntentChange({
                        area: [{
                            x: e.clientX + o,
                            y: e.clientY
                        }, {
                            x: c,
                            y: s.top
                        }, {
                            x: d,
                            y: s.top
                        }, {
                            x: d,
                            y: s.bottom
                        }, {
                            x: c,
                            y: s.bottom
                        }],
                        side: t
                    }),
                    window.clearTimeout(l.current),
                    l.current = window.setTimeout(()=>i.onPointerGraceIntentChange(null), 300)
                } else {
                    if (i.onTriggerLeave(e),
                    e.defaultPrevented)
                        return;
                    i.onPointerGraceIntentChange(null)
                }
            }
            )),
            onKeyDown: w(e.onKeyDown, t=>{
                var s;
                const a = "" !== i.searchRef.current;
                e.disabled || a && " " === t.key || ns[n.dir].includes(t.key) && (r.onOpenChange(!0),
                null == (s = r.content) || s.focus(),
                t.preventDefault())
            }
            )
        })
    })
}
);
Js.displayName = Zs;
var ei = "MenuSubContent"
  , ti = G.forwardRef((e,t)=>{
    const r = ys(Ts, e.__scopeMenu)
      , {forceMount: n=r.forceMount, ...s} = e
      , i = ms(Ts, e.__scopeMenu)
      , o = xs(Ts, e.__scopeMenu)
      , l = Qs(ei, e.__scopeMenu)
      , c = G.useRef(null)
      , d = u(t, c);
    return a.jsx(as.Provider, {
        scope: e.__scopeMenu,
        children: a.jsx(x, {
            present: n || i.open,
            children: a.jsx(as.Slot, {
                scope: e.__scopeMenu,
                children: a.jsx(Ms, {
                    id: l.contentId,
                    "aria-labelledby": l.triggerId,
                    ...s,
                    ref: d,
                    align: "start",
                    side: "rtl" === o.dir ? "left" : "right",
                    disableOutsidePointerEvents: !1,
                    disableOutsideScroll: !1,
                    trapFocus: !1,
                    onOpenAutoFocus: e=>{
                        var t;
                        o.isUsingKeyboardRef.current && (null == (t = c.current) || t.focus()),
                        e.preventDefault()
                    }
                    ,
                    onCloseAutoFocus: e=>e.preventDefault(),
                    onFocusOutside: w(e.onFocusOutside, e=>{
                        e.target !== l.trigger && i.onOpenChange(!1)
                    }
                    ),
                    onEscapeKeyDown: w(e.onEscapeKeyDown, e=>{
                        o.onClose(),
                        e.preventDefault()
                    }
                    ),
                    onKeyDown: w(e.onKeyDown, e=>{
                        var t;
                        const r = e.currentTarget.contains(e.target)
                          , n = ss[o.dir].includes(e.key);
                        r && n && (i.onOpenChange(!1),
                        null == (t = l.trigger) || t.focus(),
                        e.preventDefault())
                    }
                    )
                })
            })
        })
    })
}
);
function ri(e) {
    return e ? "open" : "closed"
}
function ni(e) {
    return "indeterminate" === e
}
function si(e) {
    return ni(e) ? "indeterminate" : e ? "checked" : "unchecked"
}
function ii(e) {
    return t=>"mouse" === t.pointerType ? e(t) : void 0
}
ti.displayName = ei;
var ai = gs
  , oi = ws
  , li = js
  , ci = ks
  , di = Ps
  , ui = Os
  , pi = Is
  , hi = Rs
  , mi = Vs
  , fi = Bs
  , xi = Ys
  , gi = Xs
  , wi = Ks
  , bi = Js
  , vi = ti
  , yi = "DropdownMenu"
  , [ji] = d(yi, [ds])
  , Ti = ds()
  , [Ni,Si] = ji(yi)
  , ki = e=>{
    const {__scopeDropdownMenu: t, children: r, dir: n, open: s, defaultOpen: i, onOpenChange: o, modal: l=!0} = e
      , c = Ti(t)
      , d = G.useRef(null)
      , [u,p] = C({
        prop: s,
        defaultProp: i ?? !1,
        onChange: o,
        caller: yi
    });
    return a.jsx(Ni, {
        scope: t,
        triggerId: M(),
        triggerRef: d,
        contentId: M(),
        open: u,
        onOpenChange: p,
        onOpenToggle: G.useCallback(()=>p(e=>!e), [p]),
        modal: l,
        children: a.jsx(ai, {
            ...c,
            open: u,
            onOpenChange: p,
            dir: n,
            modal: l,
            children: r
        })
    })
}
;
ki.displayName = yi;
var Ei = "DropdownMenuTrigger"
  , _i = G.forwardRef((e,t)=>{
    const {__scopeDropdownMenu: r, disabled: n=!1, ...s} = e
      , i = Si(Ei, r)
      , o = Ti(r);
    return a.jsx(oi, {
        asChild: !0,
        ...o,
        children: a.jsx(l.button, {
            type: "button",
            id: i.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": i.open,
            "aria-controls": i.open ? i.contentId : void 0,
            "data-state": i.open ? "open" : "closed",
            "data-disabled": n ? "" : void 0,
            disabled: n,
            ...s,
            ref: _(t, i.triggerRef),
            onPointerDown: w(e.onPointerDown, e=>{
                n || 0 !== e.button || !1 !== e.ctrlKey || (i.onOpenToggle(),
                i.open || e.preventDefault())
            }
            ),
            onKeyDown: w(e.onKeyDown, e=>{
                n || (["Enter", " "].includes(e.key) && i.onOpenToggle(),
                "ArrowDown" === e.key && i.onOpenChange(!0),
                ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
            }
            )
        })
    })
}
);
_i.displayName = Ei;
var Ci = e=>{
    const {__scopeDropdownMenu: t, ...r} = e
      , n = Ti(t);
    return a.jsx(li, {
        ...n,
        ...r
    })
}
;
Ci.displayName = "DropdownMenuPortal";
var Mi = "DropdownMenuContent"
  , Pi = G.forwardRef((e,t)=>{
    const {__scopeDropdownMenu: r, ...n} = e
      , s = Si(Mi, r)
      , i = Ti(r)
      , o = G.useRef(!1);
    return a.jsx(ci, {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...i,
        ...n,
        ref: t,
        onCloseAutoFocus: w(e.onCloseAutoFocus, e=>{
            var t;
            o.current || null == (t = s.triggerRef.current) || t.focus(),
            o.current = !1,
            e.preventDefault()
        }
        ),
        onInteractOutside: w(e.onInteractOutside, e=>{
            const t = e.detail.originalEvent
              , r = 0 === t.button && !0 === t.ctrlKey
              , n = 2 === t.button || r;
            s.modal && !n || (o.current = !0)
        }
        ),
        style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
Pi.displayName = Mi;
G.forwardRef((e,t)=>{
    const {__scopeDropdownMenu: r, ...n} = e
      , s = Ti(r);
    return a.jsx(di, {
        ...s,
        ...n,
        ref: t
    })
}
).displayName = "DropdownMenuGroup";
G.forwardRef((e,t)=>{
    const {__scopeDropdownMenu: r, ...n} = e
      , s = Ti(r);
    return a.jsx(ui, {
        ...s,
        ...n,
        ref: t
    })
}
).displayName = "DropdownMenuLabel";
var Oi = G.forwardRef((e,t)=>{
    const {__scopeDropdownMenu: r, ...n} = e
      , s = Ti(r);
    return a.jsx(pi, {
        ...s,
        ...n,
        ref: t
    })
}
);
Oi.displayName = "DropdownMenuItem";
G.forwardRef((e,t)=>{
    const {__scopeDropdownMenu: r, ...n} = e
      , s = Ti(r);
    return a.jsx(hi, {
        ...s,
        ...n,
        ref: t
    })
}
).displayName = "DropdownMenuCheckboxItem";
G.forwardRef((e,t)=>{
    const {__scopeDropdownMenu: r, ...n} = e
      , s = Ti(r);
    return a.jsx(mi, {
        ...s,
        ...n,
        ref: t
    })
}
).displayName = "DropdownMenuRadioGroup";
G.forwardRef((e,t)=>{
    const {__scopeDropdownMenu: r, ...n} = e
      , s = Ti(r);
    return a.jsx(fi, {
        ...s,
        ...n,
        ref: t
    })
}
).displayName = "DropdownMenuRadioItem";
G.forwardRef((e,t)=>{
    const {__scopeDropdownMenu: r, ...n} = e
      , s = Ti(r);
    return a.jsx(xi, {
        ...s,
        ...n,
        ref: t
    })
}
).displayName = "DropdownMenuItemIndicator";
var Ai = G.forwardRef((e,t)=>{
    const {__scopeDropdownMenu: r, ...n} = e
      , s = Ti(r);
    return a.jsx(gi, {
        ...s,
        ...n,
        ref: t
    })
}
);
Ai.displayName = "DropdownMenuSeparator";
G.forwardRef((e,t)=>{
    const {__scopeDropdownMenu: r, ...n} = e
      , s = Ti(r);
    return a.jsx(wi, {
        ...s,
        ...n,
        ref: t
    })
}
).displayName = "DropdownMenuArrow";
G.forwardRef((e,t)=>{
    const {__scopeDropdownMenu: r, ...n} = e
      , s = Ti(r);
    return a.jsx(bi, {
        ...s,
        ...n,
        ref: t
    })
}
).displayName = "DropdownMenuSubTrigger";
G.forwardRef((e,t)=>{
    const {__scopeDropdownMenu: r, ...n} = e
      , s = Ti(r);
    return a.jsx(vi, {
        ...s,
        ...n,
        ref: t,
        style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
).displayName = "DropdownMenuSubContent";
var Li = ki
  , Ii = _i
  , Di = Ci
  , Ri = Pi
  , zi = Oi
  , Fi = Ai;
const Gi = {
    apiKey: "AIzaSyDN3YxOpqxqfBQgHOvtFk6JJvztlV3vTH8",
    authDomain: "deargift-e6488.firebaseapp.com",
    projectId: "deargift-e6488",
    storageBucket: "deargift-e6488.appspot.com",
    messagingSenderId: "391379008795",
    appId: "1:391379008795:web:4b1c98f17f824690e2e7be",
    measurementId: "G-VGBLRMQM9L"
};
let Vi = null
  , $i = null
  , Bi = null;
if (Gi.apiKey && Gi.authDomain && Gi.projectId)
    try {
        Vi = Ae(Gi),
        $i = Le(Vi),
        Bi = new Ie,
        Bi.addScope("profile"),
        Bi.addScope("email")
    } catch (rl) {
        U.warn("Firebase initialization error:", rl)
    }
else
    U.warn("Firebase config chưa được thiết lập. Google login sẽ không hoạt động.");
function Hi({open: e, onOpenChange: t}) {
    const [r,n] = G.useState("login")
      , [s,i] = G.useState(!1)
      , [l,c] = G.useState("")
      , [d,u] = G.useState("")
      , {login: p} = Pe()
      , h = Q()
      , [m,f] = G.useState("")
      , [x,g] = G.useState("")
      , [w,b] = G.useState("")
      , [v,y] = G.useState("")
      , [j,T] = G.useState("")
      , [N,S] = G.useState("")
      , [k,E] = G.useState(null)
      , [_,C] = G.useState(null)
      , M = e=>{
        e || (n("login"),
        c(""),
        u(""),
        f(""),
        g(""),
        b(""),
        y(""),
        T(""),
        S(""),
        E(null),
        C(null)),
        t(e)
    }
      , R = async()=>{
        if ($i && Bi) {
            c(""),
            u(""),
            i(!0);
            try {
                U.info("Attempting Google login");
                const e = await De($i, Bi)
                  , t = await e.user.getIdToken()
                  , n = await ie.loginGoogle(t);
                if (n.success) {
                    p(n.user, n.token),
                    U.info("Google login successful:", n.user);
                    const e = "register" === r ? "Đăng ký thành công!" : "Đăng nhập thành công!";
                    h.success(e, `Chào mừng ${n.user.displayName || n.user.email}`),
                    u(e),
                    setTimeout(()=>{
                        M(!1)
                    }
                    , 1e3)
                } else
                    U.warn("Google login failed:", n.message),
                    c(n.message || "Đăng nhập thất bại")
            } catch (e) {
                U.error("Google Auth Error:", e),
                "auth/popup-closed-by-user" === e.code ? c("Bạn đã đóng cửa sổ đăng nhập") : "auth/popup-blocked" === e.code ? c("Cửa sổ popup bị chặn. Vui lòng cho phép popup và thử lại.") : (c("Lỗi đăng nhập Google. Vui lòng thử lại."),
                h.error("Lỗi Google", "Không thể đăng nhập bằng Google"))
            }
            i(!1)
        } else
            c("Google login chưa được cấu hình. Vui lòng liên hệ admin.")
    }
    ;
    return a.jsx(P, {
        open: e,
        onOpenChange: M,
        children: a.jsxs(O, {
            container: document.body,
            children: [a.jsx(A, {
                className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]",
                style: {
                    zIndex: 9998
                }
            }), a.jsx(L, {
                className: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-md rounded-3xl overflow-hidden z-[9999]",
                style: {
                    zIndex: 9999
                },
                children: a.jsxs(o.div, {
                    initial: {
                        opacity: 0,
                        y: 18,
                        scale: .98
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    transition: {
                        duration: .35,
                        ease: "easeOut"
                    },
                    className: "relative p-6 bg-[#0a0a0a]/90 border border-white/10 backdrop-blur-xl",
                    children: [a.jsx("div", {
                        className: "absolute -top-24 -left-24 w-72 h-72 bg-pink-500/25 blur-3xl rounded-full"
                    }), a.jsx("div", {
                        className: "absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-400/25 blur-3xl rounded-full"
                    }), a.jsx("div", {
                        className: "absolute inset-0 opacity-[0.08] mix-blend-soft-light",
                        style: {
                            backgroundImage: "url(https://grainy-gradients.vercel.app/noise.svg)"
                        }
                    }), a.jsxs("div", {
                        className: "relative flex items-center justify-between mb-4",
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [a.jsx(Z, {
                                className: "w-5 h-5 text-pink-400"
                            }), a.jsx(I, {
                                className: "text-white text-lg font-display",
                                children: "DearGift"
                            })]
                        }), a.jsx(D, {
                            className: "p-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white",
                            children: a.jsx(J, {
                                className: "w-4 h-4"
                            })
                        })]
                    }), a.jsxs("div", {
                        className: "relative mb-6 flex items-center gap-2",
                        children: [a.jsx("button", {
                            onClick: ()=>n("login"),
                            className: "px-4 py-2 rounded-full text-sm border backdrop-blur-md transition-all " + ("login" === r ? "text-white border-cyan-400/50 bg-white/10 shadow-[0_0_20px_rgba(56,189,248,0.25)]" : "text-white/70 border-white/10 hover:text-white"),
                            children: "Đăng nhập"
                        }), a.jsx("button", {
                            onClick: ()=>n("register"),
                            className: "px-4 py-2 rounded-full text-sm border backdrop-blur-md transition-all " + ("register" === r ? "text-white border-pink-400/50 bg-white/10 shadow-[0_0_20px_rgba(236,72,153,0.25)]" : "text-white/70 border-white/10 hover:text-white"),
                            children: "Đăng ký"
                        })]
                    }), l && a.jsx("div", {
                        className: "mb-4 px-4 py-3 rounded-xl bg-red-500/20 border border-red-500/50 text-red-300 text-sm",
                        children: l
                    }), d && a.jsx("div", {
                        className: "mb-4 px-4 py-3 rounded-xl bg-green-500/20 border border-green-500/50 text-green-300 text-sm",
                        children: d
                    }), "login" === r ? a.jsxs("form", {
                        onSubmit: async e=>{
                            if (e.preventDefault(),
                            c(""),
                            u(""),
                            i(!0),
                            !m || !x)
                                return c("Vui lòng nhập email và mật khẩu"),
                                void i(!1);
                            U.info("Attempting email login:", m);
                            const t = await ie.loginEmail(m, x);
                            t.success ? (p(t.user, t.token),
                            U.info("Login successful:", t.user),
                            h.success("Đăng nhập thành công!", `Chào mừng ${t.user.displayName || t.user.email}`),
                            u("Đăng nhập thành công!"),
                            setTimeout(()=>{
                                M(!1)
                            }
                            , 1e3)) : (U.warn("Login failed:", t.message),
                            c(t.message || "Đăng nhập thất bại")),
                            i(!1)
                        }
                        ,
                        className: "relative space-y-4",
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10",
                            children: [a.jsx(ee, {
                                className: "w-4 h-4 text-white/70"
                            }), a.jsx("input", {
                                type: "email",
                                placeholder: "Email",
                                value: m,
                                onChange: e=>f(e.target.value),
                                disabled: s,
                                className: "w-full bg-transparent text-white placeholder-white/50 outline-none disabled:opacity-50",
                                required: !0
                            })]
                        }), a.jsxs("div", {
                            className: "flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10",
                            children: [a.jsx(te, {
                                className: "w-4 h-4 text-white/70"
                            }), a.jsx("input", {
                                type: "password",
                                placeholder: "Mật khẩu",
                                value: x,
                                onChange: e=>g(e.target.value),
                                disabled: s,
                                className: "w-full bg-transparent text-white placeholder-white/50 outline-none disabled:opacity-50",
                                required: !0
                            })]
                        }), a.jsxs("button", {
                            type: "submit",
                            disabled: s,
                            className: "w-full group relative inline-flex items-center justify-center px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-white/90 hover:text-white shadow-[0_0_30px_rgba(99,102,241,0.25)] disabled:opacity-50 disabled:cursor-not-allowed",
                            children: [s ? a.jsxs(a.Fragment, {
                                children: [a.jsx(re, {
                                    className: "w-4 h-4 mr-2 animate-spin"
                                }), a.jsx("span", {
                                    children: "Đang xử lý..."
                                })]
                            }) : a.jsx("span", {
                                children: "Đăng nhập"
                            }), a.jsx("span", {
                                className: "absolute inset-0 rounded-2xl border border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity"
                            })]
                        }), a.jsxs("div", {
                            className: "relative my-4",
                            children: [a.jsx("div", {
                                className: "absolute inset-0 flex items-center",
                                children: a.jsx("div", {
                                    className: "w-full border-t border-white/10"
                                })
                            }), a.jsx("div", {
                                className: "relative flex justify-center text-xs",
                                children: a.jsx("span", {
                                    className: "px-2 bg-[#0a0a0a]/90 text-white/50",
                                    children: "hoặc"
                                })
                            })]
                        }), $i && Bi && a.jsxs("button", {
                            type: "button",
                            onClick: R,
                            disabled: s,
                            className: "w-full group relative inline-flex items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-white/90 hover:text-white hover:bg-white/15 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300",
                            children: [a.jsx("img", {
                                src: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",
                                alt: "Google",
                                className: "w-5 h-5"
                            }), a.jsx("span", {
                                className: "font-medium",
                                children: "Đăng nhập bằng Google"
                            }), a.jsx("span", {
                                className: "absolute inset-0 rounded-2xl border border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity"
                            })]
                        })]
                    }) : a.jsxs("form", {
                        onSubmit: async e=>{
                            if (e.preventDefault(),
                            c(""),
                            u(""),
                            i(!0),
                            !w || !v)
                                return c("Vui lòng nhập email và mật khẩu"),
                                void i(!1);
                            if (v.length < 6)
                                return c("Mật khẩu phải có ít nhất 6 ký tự"),
                                void i(!1);
                            if (v !== N)
                                return c("Mật khẩu xác nhận không khớp"),
                                void i(!1);
                            U.info("Attempting registration:", w);
                            const t = await ie.register(w, v, j || null, k || null);
                            t.success ? (p(t.user, t.token),
                            U.info("Registration successful:", t.user),
                            h.success("Đăng ký thành công!", `Chào mừng ${t.user.displayName || t.user.email}`),
                            u("Đăng ký thành công!"),
                            setTimeout(()=>{
                                M(!1)
                            }
                            , 1e3)) : (U.warn("Registration failed:", t.message),
                            c(t.message || "Đăng ký thất bại")),
                            i(!1)
                        }
                        ,
                        className: "relative space-y-4",
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [a.jsx("div", {
                                className: "relative w-16 h-16 rounded-full overflow-hidden bg-white/5 border border-white/10 flex-shrink-0",
                                children: _ ? a.jsx("img", {
                                    src: _,
                                    alt: "Avatar preview",
                                    className: "w-full h-full object-cover"
                                }) : a.jsx("div", {
                                    className: "w-full h-full flex items-center justify-center",
                                    children: a.jsx(ne, {
                                        className: "w-6 h-6 text-white/50"
                                    })
                                })
                            }), a.jsxs("label", {
                                className: "flex-1 cursor-pointer",
                                children: [a.jsx("input", {
                                    type: "file",
                                    accept: "image/jpeg,image/jpg,image/png,image/gif,image/webp",
                                    onChange: e=>{
                                        const t = e.target.files[0];
                                        if (t) {
                                            if (t.size > 10485760)
                                                return void c("Ảnh không được vượt quá 10MB");
                                            if (!["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"].includes(t.type))
                                                return void c("Chỉ chấp nhận file ảnh (JPG, PNG, GIF, WEBP)");
                                            E(t);
                                            const e = new FileReader;
                                            e.onloadend = ()=>{
                                                C(e.result)
                                            }
                                            ,
                                            e.readAsDataURL(t)
                                        }
                                    }
                                    ,
                                    disabled: s,
                                    className: "hidden"
                                }), a.jsxs("div", {
                                    className: "flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white text-sm transition-colors",
                                    children: [a.jsx(se, {
                                        className: "w-4 h-4"
                                    }), a.jsx("span", {
                                        children: k ? "Đổi ảnh" : "Chọn ảnh đại diện"
                                    })]
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: "flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10",
                            children: [a.jsx(ne, {
                                className: "w-4 h-4 text-white/70"
                            }), a.jsx("input", {
                                type: "text",
                                placeholder: "Họ và tên (tùy chọn)",
                                value: j,
                                onChange: e=>T(e.target.value),
                                disabled: s,
                                className: "w-full bg-transparent text-white placeholder-white/50 outline-none disabled:opacity-50"
                            })]
                        }), a.jsxs("div", {
                            className: "flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10",
                            children: [a.jsx(ee, {
                                className: "w-4 h-4 text-white/70"
                            }), a.jsx("input", {
                                type: "email",
                                placeholder: "Email",
                                value: w,
                                onChange: e=>b(e.target.value),
                                disabled: s,
                                className: "w-full bg-transparent text-white placeholder-white/50 outline-none disabled:opacity-50",
                                required: !0
                            })]
                        }), a.jsxs("div", {
                            className: "flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10",
                            children: [a.jsx(te, {
                                className: "w-4 h-4 text-white/70"
                            }), a.jsx("input", {
                                type: "password",
                                placeholder: "Mật khẩu (tối thiểu 6 ký tự)",
                                value: v,
                                onChange: e=>y(e.target.value),
                                disabled: s,
                                className: "w-full bg-transparent text-white placeholder-white/50 outline-none disabled:opacity-50",
                                required: !0,
                                minLength: 6
                            })]
                        }), a.jsxs("div", {
                            className: "flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10",
                            children: [a.jsx(te, {
                                className: "w-4 h-4 text-white/70"
                            }), a.jsx("input", {
                                type: "password",
                                placeholder: "Xác nhận mật khẩu",
                                value: N,
                                onChange: e=>S(e.target.value),
                                disabled: s,
                                className: "w-full bg-transparent text-white placeholder-white/50 outline-none disabled:opacity-50",
                                required: !0
                            })]
                        }), a.jsxs("button", {
                            type: "submit",
                            disabled: s,
                            className: "w-full group relative inline-flex items-center justify-center px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-white/90 hover:text-white shadow-[0_0_30px_rgba(236,72,153,0.25)] disabled:opacity-50 disabled:cursor-not-allowed",
                            children: [s ? a.jsxs(a.Fragment, {
                                children: [a.jsx(re, {
                                    className: "w-4 h-4 mr-2 animate-spin"
                                }), a.jsx("span", {
                                    children: "Đang xử lý..."
                                })]
                            }) : a.jsx("span", {
                                children: "Tạo tài khoản"
                            }), a.jsx("span", {
                                className: "absolute inset-0 rounded-2xl border border-pink-400/40 opacity-0 group-hover:opacity-100 transition-opacity"
                            })]
                        }), a.jsxs("div", {
                            className: "relative my-4",
                            children: [a.jsx("div", {
                                className: "absolute inset-0 flex items-center",
                                children: a.jsx("div", {
                                    className: "w-full border-t border-white/10"
                                })
                            }), a.jsx("div", {
                                className: "relative flex justify-center text-xs",
                                children: a.jsx("span", {
                                    className: "px-2 bg-[#0a0a0a]/90 text-white/50",
                                    children: "hoặc"
                                })
                            })]
                        }), $i && Bi && a.jsxs("button", {
                            type: "button",
                            onClick: R,
                            disabled: s,
                            className: "w-full group relative inline-flex items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-white/90 hover:text-white hover:bg-white/15 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300",
                            children: [a.jsx("img", {
                                src: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",
                                alt: "Google",
                                className: "w-5 h-5"
                            }), a.jsx("span", {
                                className: "font-medium",
                                children: "Đăng ký bằng Google"
                            }), a.jsx("span", {
                                className: "absolute inset-0 rounded-2xl border border-pink-400/40 opacity-0 group-hover:opacity-100 transition-opacity"
                            })]
                        })]
                    })]
                })
            })]
        })
    })
}
const qi = [{
    label: "Sản phẩm",
    target: "products"
}, {
    label: "Thống kê",
    target: "statistics"
}, {
    label: "Ý tưởng",
    target: "contribution"
}, {
    label: "Đánh giá",
    target: "reviews"
}];
function Wi() {
    var e, t;
    const r = function() {
        const [e,t] = G.useState(!1);
        return G.useEffect(()=>{
            const e = window.matchMedia("(max-width: 767px)")
              , r = ()=>t(e.matches);
            return r(),
            e.addEventListener("change", r),
            ()=>e.removeEventListener("change", r)
        }
        , []),
        e
    }()
      , [n,s] = G.useState(!1)
      , [i,l] = G.useState(!0)
      , [c,d] = G.useState(!1)
      , [u,p] = G.useState(!1)
      , {user: h, logout: m, isAuthenticated: f} = Pe();
    G.useEffect(()=>{
        if (r)
            return void p(!0);
        const e = setTimeout(()=>p(!0), 1e3);
        return ()=>clearTimeout(e)
    }
    , [r]),
    G.useEffect(()=>{
        let e = !1
          , t = 0;
        const r = ()=>{
            e || (window.requestAnimationFrame(()=>{
                const r = window.scrollY || window.pageYOffset;
                Math.abs(r - t) > 5 && (r > 50 ? (l(!1),
                d(!1)) : l(!0),
                t = r),
                e = !1
            }
            ),
            e = !0)
        }
        ;
        return window.addEventListener("scroll", r, {
            passive: !0
        }),
        r(),
        ()=>{
            window.removeEventListener("scroll", r)
        }
    }
    , []);
    const x = e=>{
        d(!1),
        setTimeout(()=>{
            const t = document.getElementById(e);
            if (t) {
                const e = -20
                  , r = t.getBoundingClientRect().top + window.pageYOffset + e;
                window.scrollTo({
                    top: r,
                    behavior: "smooth"
                })
            }
        }
        , 250)
    }
      , g = a.jsxs("div", {
        className: "mx-auto max-w-6xl pl-3 sm:pl-4 pr-2 sm:pr-3",
        children: [a.jsxs("div", {
            className: "mt-6 flex justify-end items-center",
            children: [a.jsxs("div", {
                className: "hidden sm:flex items-center gap-3 rounded-full bg-black/30 backdrop-blur-xl px-4 py-2.5 shadow-[0_10px_50px_rgba(0,0,0,0.35)]",
                children: [a.jsx("div", {
                    className: "flex items-center gap-2 sm:gap-4",
                    children: qi.map(e=>a.jsx("button", {
                        onClick: ()=>x(e.target),
                        className: "px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors shrink-0",
                        children: e.label
                    }, e.target))
                }), a.jsxs("div", {
                    className: "flex items-center gap-2 ml-2",
                    children: [f && h ? a.jsxs(a.Fragment, {
                        children: [a.jsx($, {
                            to: "/affiliate",
                            className: "inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10 text-white/85 hover:text-white backdrop-blur-xl shrink-0",
                            children: "Affiliate"
                        }), a.jsx($, {
                            to: "admin" === h.role ? "/admin" : "/dashboard",
                            className: "inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10 text-white/85 hover:text-white backdrop-blur-xl shadow-[0_0_20px_rgba(236,72,153,0.25)] shrink-0",
                            children: "Quản lý"
                        })]
                    }) : a.jsx(o.button, {
                        whileHover: {
                            scale: 1.04
                        },
                        whileTap: {
                            scale: .98
                        },
                        onClick: ()=>s(!0),
                        className: "inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10 text-white/85 hover:text-white backdrop-blur-xl shadow-[0_0_20px_rgba(236,72,153,0.25)] shrink-0",
                        children: "Quản lý"
                    }), f && h ? a.jsxs(Li, {
                        children: [a.jsx(Ii, {
                            asChild: !0,
                            children: a.jsxs(o.button, {
                                whileHover: {
                                    scale: 1.04
                                },
                                whileTap: {
                                    scale: .98
                                },
                                className: "inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10 text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(99,102,241,0.25)] shrink-0 transition-all",
                                children: [h.photoURL ? a.jsx("img", {
                                    src: h.photoURL,
                                    alt: h.displayName || h.email,
                                    className: "w-6 h-6 rounded-full object-cover border border-white/20"
                                }) : a.jsx("div", {
                                    className: "w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center border border-white/20",
                                    children: a.jsx(ne, {
                                        className: "w-3 h-3 text-white"
                                    })
                                }), a.jsx("span", {
                                    className: "hidden sm:inline",
                                    children: h.displayName || (null == (e = h.email) ? void 0 : e.split("@")[0]) || "User"
                                })]
                            })
                        }), a.jsx(Di, {
                            children: a.jsxs(Ri, {
                                className: "min-w-[220px] bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-xl p-3 shadow-xl z-50",
                                sideOffset: 5,
                                children: [a.jsx("div", {
                                    className: "px-3 py-3 rounded-lg bg-white/5 border border-white/10 mb-2",
                                    children: a.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [h.photoURL ? a.jsx("img", {
                                            src: h.photoURL,
                                            alt: h.displayName || h.email,
                                            className: "w-10 h-10 rounded-full object-cover border-2 border-white/20"
                                        }) : a.jsx("div", {
                                            className: "w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center border-2 border-white/20",
                                            children: a.jsx(ne, {
                                                className: "w-5 h-5 text-white"
                                            })
                                        }), a.jsxs("div", {
                                            className: "flex-1 min-w-0",
                                            children: [a.jsx("div", {
                                                className: "font-semibold text-white text-sm truncate",
                                                children: h.displayName || "Người dùng"
                                            }), a.jsx("div", {
                                                className: "text-xs text-white/60 truncate",
                                                children: h.email
                                            })]
                                        })]
                                    })
                                }), a.jsx(Fi, {
                                    className: "h-px bg-white/10 my-2"
                                }), a.jsx(zi, {
                                    asChild: !0,
                                    children: a.jsx($, {
                                        to: "/affiliate",
                                        className: "px-3 py-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 flex items-center gap-2 text-sm cursor-pointer block",
                                        children: "Affiliate"
                                    })
                                }), a.jsxs(zi, {
                                    className: "px-3 py-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 cursor-pointer flex items-center gap-2 text-sm transition-colors",
                                    onClick: m,
                                    children: [a.jsx(ae, {
                                        className: "w-4 h-4"
                                    }), "Đăng xuất"]
                                })]
                            })
                        })]
                    }) : a.jsx(o.button, {
                        whileHover: {
                            scale: 1.04
                        },
                        whileTap: {
                            scale: .98
                        },
                        onClick: ()=>s(!0),
                        className: "inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10 text-white/85 hover:text-white backdrop-blur-xl shadow-[0_0_20px_rgba(99,102,241,0.25)] shrink-0",
                        children: "Đăng nhập"
                    })]
                })]
            }), a.jsxs("div", {
                className: "sm:hidden w-full flex items-center justify-between gap-2",
                children: [a.jsx("button", {
                    type: "button",
                    onClick: ()=>d(!c),
                    className: "flex items-center justify-center w-10 h-10 rounded-full bg-black/30 backdrop-blur-xl text-white hover:bg-white/10 transition-colors shrink-0",
                    "aria-label": "Menu",
                    children: a.jsx("span", {
                        className: "text-xl",
                        children: "☰"
                    })
                }), a.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [f && h ? a.jsxs(a.Fragment, {
                        children: [a.jsx($, {
                            to: "/affiliate",
                            className: "inline-flex items-center gap-1.5 px-3 py-2 text-xs rounded-full bg-white/5 border border-white/10 text-white/85 hover:text-white backdrop-blur-xl shrink-0",
                            children: "Affiliate"
                        }), a.jsx($, {
                            to: "admin" === h.role ? "/admin" : "/dashboard",
                            className: "inline-flex items-center gap-1.5 px-3 py-2 text-xs rounded-full bg-white/5 border border-white/10 text-white/85 hover:text-white backdrop-blur-xl shadow-[0_0_20px_rgba(236,72,153,0.25)] shrink-0",
                            children: "Quản lý"
                        })]
                    }) : a.jsx("button", {
                        type: "button",
                        onClick: ()=>s(!0),
                        className: "inline-flex items-center gap-1.5 px-3 py-2 text-xs rounded-full bg-white/5 border border-white/10 text-white/85 hover:text-white backdrop-blur-xl shadow-[0_0_20px_rgba(236,72,153,0.25)] shrink-0",
                        children: "Quản lý"
                    }), f && h ? a.jsxs(Li, {
                        children: [a.jsx(Ii, {
                            asChild: !0,
                            children: a.jsxs("button", {
                                type: "button",
                                className: "inline-flex items-center gap-1.5 px-3 py-2 text-xs rounded-full bg-white/5 border border-white/10 text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(99,102,241,0.25)] shrink-0 transition-all",
                                children: [h.photoURL ? a.jsx("img", {
                                    src: h.photoURL,
                                    alt: h.displayName || h.email,
                                    className: "w-5 h-5 rounded-full object-cover border border-white/20"
                                }) : a.jsx("div", {
                                    className: "w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center border border-white/20",
                                    children: a.jsx(ne, {
                                        className: "w-3 h-3 text-white"
                                    })
                                }), a.jsx("span", {
                                    className: "truncate max-w-[80px]",
                                    children: (null == (t = h.email) ? void 0 : t.split("@")[0]) || "User"
                                })]
                            })
                        }), a.jsx(Di, {
                            children: a.jsxs(Ri, {
                                className: "min-w-[220px] bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-xl p-3 shadow-xl z-50",
                                sideOffset: 5,
                                align: "end",
                                children: [a.jsx("div", {
                                    className: "px-3 py-3 rounded-lg bg-white/5 border border-white/10 mb-2",
                                    children: a.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [h.photoURL ? a.jsx("img", {
                                            src: h.photoURL,
                                            alt: h.displayName || h.email,
                                            className: "w-10 h-10 rounded-full object-cover border-2 border-white/20"
                                        }) : a.jsx("div", {
                                            className: "w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center border-2 border-white/20",
                                            children: a.jsx(ne, {
                                                className: "w-5 h-5 text-white"
                                            })
                                        }), a.jsxs("div", {
                                            className: "flex-1 min-w-0",
                                            children: [a.jsx("div", {
                                                className: "font-semibold text-white text-sm truncate",
                                                children: h.displayName || "Người dùng"
                                            }), a.jsx("div", {
                                                className: "text-xs text-white/60 truncate",
                                                children: h.email
                                            })]
                                        })]
                                    })
                                }), a.jsx(Fi, {
                                    className: "h-px bg-white/10 my-2"
                                }), a.jsx(zi, {
                                    asChild: !0,
                                    children: a.jsx($, {
                                        to: "/affiliate",
                                        className: "px-3 py-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 flex items-center gap-2 text-sm cursor-pointer block",
                                        children: "Affiliate"
                                    })
                                }), a.jsxs(zi, {
                                    className: "px-3 py-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 cursor-pointer flex items-center gap-2 text-sm transition-colors",
                                    onClick: m,
                                    children: [a.jsx(ae, {
                                        className: "w-4 h-4"
                                    }), "Đăng xuất"]
                                })]
                            })
                        })]
                    }) : a.jsx("button", {
                        type: "button",
                        onClick: ()=>s(!0),
                        className: "inline-flex items-center gap-1.5 px-3 py-2 text-xs rounded-full bg-white/5 border border-white/10 text-white/85 hover:text-white backdrop-blur-xl shadow-[0_0_20px_rgba(99,102,241,0.25)] shrink-0",
                        children: "Đăng nhập"
                    })]
                })]
            })]
        }), r ? c && a.jsx("div", {
            className: "sm:hidden mt-3 overflow-hidden",
            children: a.jsx("div", {
                className: "rounded-2xl bg-black/40 backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.35)] overflow-hidden",
                children: qi.map(e=>a.jsx("button", {
                    type: "button",
                    onClick: ()=>x(e.target),
                    className: "w-full text-left px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-b-0",
                    children: e.label
                }, e.target))
            })
        }) : a.jsx(R, {
            children: c && a.jsx(o.div, {
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: "auto"
                },
                exit: {
                    opacity: 0,
                    height: 0
                },
                transition: {
                    duration: .2
                },
                className: "sm:hidden mt-3 overflow-hidden",
                children: a.jsx("div", {
                    className: "rounded-2xl bg-black/40 backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.35)] overflow-hidden",
                    children: qi.map((e,t)=>a.jsx(o.button, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            delay: .05 * t
                        },
                        onClick: ()=>x(e.target),
                        className: "w-full text-left px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-b-0",
                        children: e.label
                    }, e.target))
                })
            })
        })]
    });
    return a.jsxs(a.Fragment, {
        children: [a.jsx(R, {
            children: i && u && (r ? a.jsx("nav", {
                className: "fixed top-0 inset-x-0 z-40",
                children: g
            }) : a.jsx(o.nav, {
                initial: {
                    y: -100,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                exit: {
                    y: -100,
                    opacity: 0
                },
                transition: {
                    duration: .6,
                    ease: "easeOut",
                    delay: 0
                },
                className: "fixed top-0 inset-x-0 z-40",
                children: g
            }))
        }), a.jsx(Hi, {
            open: n,
            onOpenChange: s
        })]
    })
}
function Yi() {
    const e = function() {
        const [e,t] = G.useState(!1);
        return G.useEffect(()=>{
            const e = window.matchMedia("(max-width: 767px)")
              , r = ()=>t(e.matches);
            return r(),
            e.addEventListener("change", r),
            ()=>e.removeEventListener("change", r)
        }
        , []),
        e
    }()
      , [t,r] = G.useState(!1)
      , n = G.useRef(null);
    G.useEffect(()=>{
        if (e)
            return void r(!0);
        const t = setTimeout(()=>r(!0), 300);
        return ()=>clearTimeout(t)
    }
    , [e]),
    G.useEffect(()=>{
        const e = n.current;
        if (!e)
            return;
        if (window.innerWidth < 768)
            return;
        const t = ()=>{
            e.width = window.innerWidth,
            e.height = window.innerHeight
        }
        ;
        t(),
        window.addEventListener("resize", t);
        let r = null;
        const s = setTimeout(()=>{
            const t = e.getContext("2d");
            if (!t)
                return;
            const n = e.width / 2
              , s = e.height
              , i = ()=>{
                const e = Math.PI + Math.random() * Math.PI
                  , t = n + 350 * Math.cos(e)
                  , r = s + 350 * Math.sin(e)
                  , i = 1.2 * Math.random() + .4;
                return {
                    x: t,
                    y: r,
                    vx: Math.cos(e) * i,
                    vy: Math.sin(e) * i,
                    radius: 2 * Math.random() + 1.5,
                    opacity: .5 * Math.random() + .6,
                    life: 1,
                    decay: .005 * Math.random() + .002
                }
            }
              , a = Array.from({
                length: 100
            }, i)
              , o = ()=>{
                t.clearRect(0, 0, e.width, e.height),
                a.forEach((e,r)=>{
                    e.x += e.vx,
                    e.y += e.vy,
                    e.life -= e.decay,
                    e.life <= 0 ? a[r] = i() : (t.beginPath(),
                    t.arc(e.x, e.y, e.radius, 0, 2 * Math.PI),
                    t.fillStyle = `rgba(255, 255, 255, ${e.opacity * e.life})`,
                    t.fill())
                }
                ),
                r = requestAnimationFrame(o)
            }
            ;
            o()
        }
        , 1e3);
        return ()=>{
            clearTimeout(s),
            r && cancelAnimationFrame(r),
            window.removeEventListener("resize", t)
        }
    }
    , []);
    const s = ()=>{
        const e = document.getElementById("products");
        e && e.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
    ;
    return a.jsxs("section", {
        className: "relative h-screen w-full overflow-hidden bg-black",
        children: [a.jsx("canvas", {
            ref: n,
            className: "hidden md:block absolute inset-0 z-0 pointer-events-none"
        }), a.jsxs("div", {
            className: "absolute inset-0 z-[1]",
            children: [a.jsx("img", {
                src: "/hero-image-mobile.png",
                alt: "Hero background mobile",
                className: "block md:hidden w-full h-full object-cover object-center"
            }), a.jsx("img", {
                src: "/hero-image.png",
                alt: "Hero background desktop",
                className: "hidden md:block w-full h-full object-cover object-[center_75%]"
            }), a.jsx("div", {
                className: "absolute inset-0 bg-[#050505]/40"
            })]
        }), a.jsxs("div", {
            className: "relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20 md:pt-24 min-h-0",
            children: [e ? a.jsxs(a.Fragment, {
                children: [a.jsx("h1", {
                    className: "text-7xl md:text-[8.5rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-[radial-gradient(circle_at_20%_0%,#60a5fa,transparent_35%),radial-gradient(circle_at_80%_0%,#a78bfa,transparent_35%),radial-gradient(circle_at_50%_100%,#06b6d4,transparent_35%)] drop-shadow-[0_0_35px_rgba(99,102,241,0.25)]",
                    children: "DearGift"
                }), a.jsx("p", {
                    className: "mt-6 text-lg md:text-xl text-white/85 max-w-2xl font-romance",
                    children: "Gửi cảm xúc. Không chỉ là lời nhắn."
                }), a.jsx("div", {
                    className: "mt-52 md:mt-30",
                    children: a.jsx("button", {
                        onClick: s,
                        type: "button",
                        className: "btn-cta",
                        children: "Bắt đầu ngay"
                    })
                }), a.jsx("div", {
                    className: "mt-12 md:mt-16",
                    children: a.jsxs("div", {
                        className: "inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/80",
                        children: [a.jsx("div", {
                            className: "w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
                        }), a.jsx("span", {
                            className: "text-sm font-romance ",
                            children: "Cuộn để bước vào vũ trụ"
                        })]
                    })
                })]
            }) : a.jsxs(a.Fragment, {
                children: [a.jsx(o.h1, {
                    initial: {
                        opacity: 0,
                        y: 40,
                        scale: .98
                    },
                    animate: t ? {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    } : {
                        opacity: 0,
                        y: 40,
                        scale: .98
                    },
                    transition: {
                        duration: 1.2,
                        ease: [.16, 1, .3, 1]
                    },
                    className: "text-7xl md:text-[8.5rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-[radial-gradient(circle_at_20%_0%,#60a5fa,transparent_35%),radial-gradient(circle_at_80%_0%,#a78bfa,transparent_35%),radial-gradient(circle_at_50%_100%,#06b6d4,transparent_35%)] drop-shadow-[0_0_35px_rgba(99,102,241,0.25)]",
                    children: "DearGift"
                }), a.jsx(o.p, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: t ? {
                        opacity: 1,
                        y: 0
                    } : {
                        opacity: 0,
                        y: 30
                    },
                    transition: {
                        delay: .3,
                        duration: .9,
                        ease: "easeOut"
                    },
                    className: "mt-6 text-lg md:text-xl text-white/85 max-w-2xl font-romance",
                    children: "Gửi cảm xúc. Không chỉ là lời nhắn."
                }), a.jsx(o.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: t ? {
                        opacity: 1,
                        y: 0
                    } : {
                        opacity: 0,
                        y: 20
                    },
                    transition: {
                        delay: .6,
                        duration: .8
                    },
                    className: "mt-52 md:mt-30",
                    children: a.jsx("button", {
                        onClick: s,
                        type: "button",
                        className: "btn-cta",
                        children: "Bắt đầu ngay"
                    })
                }), a.jsx(o.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: t ? {
                        opacity: 1
                    } : {
                        opacity: 0
                    },
                    transition: {
                        delay: .8
                    },
                    className: "mt-12 md:mt-16",
                    children: a.jsxs("div", {
                        className: "inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/80",
                        children: [a.jsx("div", {
                            className: "w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
                        }), a.jsx("span", {
                            className: "text-sm font-romance ",
                            children: "Cuộn để bước vào vũ trụ"
                        })]
                    })
                })]
            }), a.jsx("div", {
                className: "absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#050505]"
            })]
        }), a.jsxs("button", {
            onClick: ()=>window.dispatchEvent(new CustomEvent("voucher-dialog:open")),
            type: "button",
            className: "absolute top-20 right-4 md:top-24 md:right-6 z-20 inline-flex items-center justify-center gap-1.5 md:gap-2 rounded-full px-3 py-2 md:px-5 md:py-3 text-xs md:text-base font-semibold text-white bg-gradient-to-r from-pink-500/90 to-rose-500/90 border border-pink-400/30 backdrop-blur-md shadow-[0_0_24px_rgba(236,72,153,0.3)] hover:from-pink-500 hover:to-rose-500 hover:shadow-[0_0_32px_rgba(236,72,153,0.4)] transition-all duration-300",
            children: [a.jsx(oe, {
                className: "w-3.5 h-3.5 md:w-5 md:h-5 shrink-0"
            }), "Voucher tạo miễn phí 100%"]
        })]
    })
}
function Xi(e) {
    return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
}
function Ki(e, t) {
    void 0 === e && (e = {}),
    void 0 === t && (t = {});
    const r = ["__proto__", "constructor", "prototype"];
    Object.keys(t).filter(e=>r.indexOf(e) < 0).forEach(r=>{
        void 0 === e[r] ? e[r] = t[r] : Xi(t[r]) && Xi(e[r]) && Object.keys(t[r]).length > 0 && Ki(e[r], t[r])
    }
    )
}
const Ui = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector: ()=>null,
    querySelectorAll: ()=>[],
    getElementById: ()=>null,
    createEvent: ()=>({
        initEvent() {}
    }),
    createElement: ()=>({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: ()=>[]
    }),
    createElementNS: ()=>({}),
    importNode: ()=>null,
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function Qi() {
    const e = "undefined" != typeof document ? document : {};
    return Ki(e, Ui),
    e
}
const Zi = {
    document: Ui,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: ()=>({
        getPropertyValue: ()=>""
    }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: ()=>({}),
    requestAnimationFrame: e=>"undefined" == typeof setTimeout ? (e(),
    null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e)
    }
};
function Ji() {
    const e = "undefined" != typeof window ? window : {};
    return Ki(e, Zi),
    e
}
function ea(e, t) {
    return void 0 === t && (t = 0),
    setTimeout(e, t)
}
function ta() {
    return Date.now()
}
function ra(e, t) {
    void 0 === t && (t = "x");
    const r = Ji();
    let n, s, i;
    const a = function(e) {
        const t = Ji();
        let r;
        return t.getComputedStyle && (r = t.getComputedStyle(e, null)),
        !r && e.currentStyle && (r = e.currentStyle),
        r || (r = e.style),
        r
    }(e);
    return r.WebKitCSSMatrix ? (s = a.transform || a.webkitTransform,
    s.split(",").length > 6 && (s = s.split(", ").map(e=>e.replace(",", ".")).join(", ")),
    i = new r.WebKitCSSMatrix("none" === s ? "" : s)) : (i = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    n = i.toString().split(",")),
    "x" === t && (s = r.WebKitCSSMatrix ? i.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])),
    "y" === t && (s = r.WebKitCSSMatrix ? i.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])),
    s || 0
}
function na(e) {
    return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
}
function sa(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
}
function ia() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0])
      , t = ["__proto__", "constructor", "prototype"];
    for (let r = 1; r < arguments.length; r += 1) {
        const n = r < 0 || arguments.length <= r ? void 0 : arguments[r];
        if (null != n && !sa(n)) {
            const r = Object.keys(Object(n)).filter(e=>t.indexOf(e) < 0);
            for (let t = 0, s = r.length; t < s; t += 1) {
                const s = r[t]
                  , i = Object.getOwnPropertyDescriptor(n, s);
                void 0 !== i && i.enumerable && (na(e[s]) && na(n[s]) ? n[s].__swiper__ ? e[s] = n[s] : ia(e[s], n[s]) : !na(e[s]) && na(n[s]) ? (e[s] = {},
                n[s].__swiper__ ? e[s] = n[s] : ia(e[s], n[s])) : e[s] = n[s])
            }
        }
    }
    return e
}
function aa(e, t, r) {
    e.style.setProperty(t, r)
}
function oa(e) {
    let {swiper: t, targetPosition: r, side: n} = e;
    const s = Ji()
      , i = -t.translate;
    let a, o = null;
    const l = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none",
    s.cancelAnimationFrame(t.cssModeFrameID);
    const c = r > i ? "next" : "prev"
      , d = (e,t)=>"next" === c && e >= t || "prev" === c && e <= t
      , u = ()=>{
        a = (new Date).getTime(),
        null === o && (o = a);
        const e = Math.max(Math.min((a - o) / l, 1), 0)
          , c = .5 - Math.cos(e * Math.PI) / 2;
        let p = i + c * (r - i);
        if (d(p, r) && (p = r),
        t.wrapperEl.scrollTo({
            [n]: p
        }),
        d(p, r))
            return t.wrapperEl.style.overflow = "hidden",
            t.wrapperEl.style.scrollSnapType = "",
            setTimeout(()=>{
                t.wrapperEl.style.overflow = "",
                t.wrapperEl.scrollTo({
                    [n]: p
                })
            }
            ),
            void s.cancelAnimationFrame(t.cssModeFrameID);
        t.cssModeFrameID = s.requestAnimationFrame(u)
    }
    ;
    u()
}
function la(e) {
    return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
}
function ca(e, t) {
    void 0 === t && (t = "");
    const r = Ji()
      , n = [...e.children];
    return r.HTMLSlotElement && e instanceof HTMLSlotElement && n.push(...e.assignedElements()),
    t ? n.filter(e=>e.matches(t)) : n
}
function da(e) {
    try {
        return
    } catch (t) {}
}
function ua(e, t) {
    void 0 === t && (t = []);
    const r = document.createElement(e);
    return r.classList.add(...Array.isArray(t) ? t : function(e) {
        return void 0 === e && (e = ""),
        e.trim().split(" ").filter(e=>!!e.trim())
    }(t)),
    r
}
function pa(e, t) {
    return Ji().getComputedStyle(e, null).getPropertyValue(t)
}
function ha(e) {
    let t, r = e;
    if (r) {
        for (t = 0; null !== (r = r.previousSibling); )
            1 === r.nodeType && (t += 1);
        return t
    }
}
function ma(e, t) {
    const r = [];
    let n = e.parentElement;
    for (; n; )
        t ? n.matches(t) && r.push(n) : r.push(n),
        n = n.parentElement;
    return r
}
function fa(e, t, r) {
    const n = Ji();
    return e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom"))
}
function xa(e) {
    return (Array.isArray(e) ? e : [e]).filter(e=>!!e)
}
function ga(e, t) {
    void 0 === t && (t = ""),
    "undefined" != typeof trustedTypes ? e.innerHTML = trustedTypes.createPolicy("html", {
        createHTML: e=>e
    }).createHTML(t) : e.innerHTML = t
}
let wa, ba, va;
function ya() {
    return wa || (wa = function() {
        const e = Ji()
          , t = Qi();
        return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior"in t.documentElement.style,
            touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch)
        }
    }()),
    wa
}
function ja(e) {
    return void 0 === e && (e = {}),
    ba || (ba = function(e) {
        let {userAgent: t} = void 0 === e ? {} : e;
        const r = ya()
          , n = Ji()
          , s = n.navigator.platform
          , i = t || n.navigator.userAgent
          , a = {
            ios: !1,
            android: !1
        }
          , o = n.screen.width
          , l = n.screen.height
          , c = i.match(/(Android);?[\s\/]+([\d.]+)?/);
        let d = i.match(/(iPad).*OS\s([\d_]+)/);
        const u = i.match(/(iPod)(.*OS\s([\d_]+))?/)
          , p = !d && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
          , h = "Win32" === s;
        let m = "MacIntel" === s;
        return !d && m && r.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x ${l}`) >= 0 && (d = i.match(/(Version)\/([\d.]+)/),
        d || (d = [0, 1, "13_0_0"]),
        m = !1),
        c && !h && (a.os = "android",
        a.android = !0),
        (d || p || u) && (a.os = "ios",
        a.ios = !0),
        a
    }(e)),
    ba
}
function Ta() {
    return va || (va = function() {
        const e = Ji()
          , t = ja();
        let r = !1;
        function n() {
            const t = e.navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
        }
        if (n()) {
            const t = String(e.navigator.userAgent);
            if (t.includes("Version/")) {
                const [e,n] = t.split("Version/")[1].split(" ")[0].split(".").map(e=>Number(e));
                r = e < 16 || 16 === e && n < 2
            }
        }
        const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
          , i = n();
        return {
            isSafari: r || i,
            needPerspectiveFix: r,
            need3dFix: i || s && t.ios,
            isWebView: s
        }
    }()),
    va
}
const Na = (e,t,r)=>{
    t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r)
}
;
const Sa = (e,t,r)=>{
    t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r)
}
;
const ka = (e,t)=>{
    if (!e || e.destroyed || !e.params)
        return;
    const r = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
    if (r) {
        let t = r.querySelector(`.${e.params.lazyPreloaderClass}`);
        !t && e.isElement && (r.shadowRoot ? t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(()=>{
            r.shadowRoot && (t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),
            t && t.remove())
        }
        )),
        t && t.remove()
    }
}
  , Ea = (e,t)=>{
    if (!e.slides[t])
        return;
    const r = e.slides[t].querySelector('[loading="lazy"]');
    r && r.removeAttribute("loading")
}
  , _a = e=>{
    if (!e || e.destroyed || !e.params)
        return;
    let t = e.params.lazyPreloadPrevNext;
    const r = e.slides.length;
    if (!r || !t || t < 0)
        return;
    t = Math.min(t, r);
    const n = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView)
      , s = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
        const r = s
          , i = [r - t];
        return i.push(...Array.from({
            length: t
        }).map((e,t)=>r + n + t)),
        void e.slides.forEach((t,r)=>{
            i.includes(t.column) && Ea(e, r)
        }
        )
    }
    const i = s + n - 1;
    if (e.params.rewind || e.params.loop)
        for (let a = s - t; a <= i + t; a += 1) {
            const t = (a % r + r) % r;
            (t < s || t > i) && Ea(e, t)
        }
    else
        for (let a = Math.max(s - t, 0); a <= Math.min(i + t, r - 1); a += 1)
            a !== s && (a > i || a < s) && Ea(e, a)
}
;
function Ca(e) {
    let {swiper: t, runCallbacks: r, direction: n, step: s} = e;
    const {activeIndex: i, previousIndex: a} = t;
    let o = n;
    o || (o = i > a ? "next" : i < a ? "prev" : "reset"),
    t.emit(`transition ${s}`),
    r && "reset" === o ? t.emit(`slideResetTransition ${s}`) : r && i !== a && (t.emit(`slideChangeTransition ${s}`),
    "next" === o ? t.emit(`slideNextTransition ${s}`) : t.emit(`slidePrevTransition ${s}`))
}
function Ma(e, t, r) {
    const n = Ji()
      , {params: s} = e
      , i = s.edgeSwipeDetection
      , a = s.edgeSwipeThreshold;
    return !i || !(r <= a || r >= n.innerWidth - a) || "prevent" === i && (t.preventDefault(),
    !0)
}
function Pa(e) {
    const t = this
      , r = Qi();
    let n = e;
    n.originalEvent && (n = n.originalEvent);
    const s = t.touchEventsData;
    if ("pointerdown" === n.type) {
        if (null !== s.pointerId && s.pointerId !== n.pointerId)
            return;
        s.pointerId = n.pointerId
    } else
        "touchstart" === n.type && 1 === n.targetTouches.length && (s.touchId = n.targetTouches[0].identifier);
    if ("touchstart" === n.type)
        return void Ma(t, n, n.targetTouches[0].pageX);
    const {params: i, touches: a, enabled: o} = t;
    if (!o)
        return;
    if (!i.simulateTouch && "mouse" === n.pointerType)
        return;
    if (t.animating && i.preventInteractionOnTransition)
        return;
    !t.animating && i.cssMode && i.loop && t.loopFix();
    let l = n.target;
    if ("wrapper" === i.touchEventsTarget && !function(e, t) {
        const r = Ji();
        let n = t.contains(e);
        !n && r.HTMLSlotElement && t instanceof HTMLSlotElement && (n = [...t.assignedElements()].includes(e),
        n || (n = function(e, t) {
            const r = [t];
            for (; r.length > 0; ) {
                const t = r.shift();
                if (e === t)
                    return !0;
                r.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : [])
            }
        }(e, t)));
        return n
    }(l, t.wrapperEl))
        return;
    if ("which"in n && 3 === n.which)
        return;
    if ("button"in n && n.button > 0)
        return;
    if (s.isTouched && s.isMoved)
        return;
    const c = !!i.noSwipingClass && "" !== i.noSwipingClass
      , d = n.composedPath ? n.composedPath() : n.path;
    c && n.target && n.target.shadowRoot && d && (l = d[0]);
    const u = i.noSwipingSelector ? i.noSwipingSelector : `.${i.noSwipingClass}`
      , p = !(!n.target || !n.target.shadowRoot);
    if (i.noSwiping && (p ? function(e, t) {
        return void 0 === t && (t = this),
        function t(r) {
            if (!r || r === Qi() || r === Ji())
                return null;
            r.assignedSlot && (r = r.assignedSlot);
            const n = r.closest(e);
            return n || r.getRootNode ? n || t(r.getRootNode().host) : null
        }(t)
    }(u, l) : l.closest(u)))
        return void (t.allowClick = !0);
    if (i.swipeHandler && !l.closest(i.swipeHandler))
        return;
    a.currentX = n.pageX,
    a.currentY = n.pageY;
    const h = a.currentX
      , m = a.currentY;
    if (!Ma(t, n, h))
        return;
    Object.assign(s, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    a.startX = h,
    a.startY = m,
    s.touchStartTime = ta(),
    t.allowClick = !0,
    t.updateSize(),
    t.swipeDirection = void 0,
    i.threshold > 0 && (s.allowThresholdMove = !1);
    let f = !0;
    l.matches(s.focusableElements) && (f = !1,
    "SELECT" === l.nodeName && (s.isTouched = !1)),
    r.activeElement && r.activeElement.matches(s.focusableElements) && r.activeElement !== l && ("mouse" === n.pointerType || "mouse" !== n.pointerType && !l.matches(s.focusableElements)) && r.activeElement.blur();
    const x = f && t.allowTouchMove && i.touchStartPreventDefault;
    !i.touchStartForcePreventDefault && !x || l.isContentEditable || n.preventDefault(),
    i.freeMode && i.freeMode.enabled && t.freeMode && t.animating && !i.cssMode && t.freeMode.onTouchStart(),
    t.emit("touchStart", n)
}
function Oa(e) {
    const t = Qi()
      , r = this
      , n = r.touchEventsData
      , {params: s, touches: i, rtlTranslate: a, enabled: o} = r;
    if (!o)
        return;
    if (!s.simulateTouch && "mouse" === e.pointerType)
        return;
    let l, c = e;
    if (c.originalEvent && (c = c.originalEvent),
    "pointermove" === c.type) {
        if (null !== n.touchId)
            return;
        if (c.pointerId !== n.pointerId)
            return
    }
    if ("touchmove" === c.type) {
        if (l = [...c.changedTouches].find(e=>e.identifier === n.touchId),
        !l || l.identifier !== n.touchId)
            return
    } else
        l = c;
    if (!n.isTouched)
        return void (n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", c));
    const d = l.pageX
      , u = l.pageY;
    if (c.preventedByNestedSwiper)
        return i.startX = d,
        void (i.startY = u);
    if (!r.allowTouchMove)
        return c.target.matches(n.focusableElements) || (r.allowClick = !1),
        void (n.isTouched && (Object.assign(i, {
            startX: d,
            startY: u,
            currentX: d,
            currentY: u
        }),
        n.touchStartTime = ta()));
    if (s.touchReleaseOnEdges && !s.loop)
        if (r.isVertical()) {
            if (u < i.startY && r.translate <= r.maxTranslate() || u > i.startY && r.translate >= r.minTranslate())
                return n.isTouched = !1,
                void (n.isMoved = !1)
        } else {
            if (a && (d > i.startX && -r.translate <= r.maxTranslate() || d < i.startX && -r.translate >= r.minTranslate()))
                return;
            if (!a && (d < i.startX && r.translate <= r.maxTranslate() || d > i.startX && r.translate >= r.minTranslate()))
                return
        }
    if (t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== c.target && "mouse" !== c.pointerType && t.activeElement.blur(),
    t.activeElement && c.target === t.activeElement && c.target.matches(n.focusableElements))
        return n.isMoved = !0,
        void (r.allowClick = !1);
    n.allowTouchCallbacks && r.emit("touchMove", c),
    i.previousX = i.currentX,
    i.previousY = i.currentY,
    i.currentX = d,
    i.currentY = u;
    const p = i.currentX - i.startX
      , h = i.currentY - i.startY;
    if (r.params.threshold && Math.sqrt(p ** 2 + h ** 2) < r.params.threshold)
        return;
    if (void 0 === n.isScrolling) {
        let e;
        r.isHorizontal() && i.currentY === i.startY || r.isVertical() && i.currentX === i.startX ? n.isScrolling = !1 : p * p + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(p)) / Math.PI,
        n.isScrolling = r.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
    }
    if (n.isScrolling && r.emit("touchMoveOpposite", c),
    void 0 === n.startMoving && (i.currentX === i.startX && i.currentY === i.startY || (n.startMoving = !0)),
    n.isScrolling || "touchmove" === c.type && n.preventTouchMoveFromPointerMove)
        return void (n.isTouched = !1);
    if (!n.startMoving)
        return;
    r.allowClick = !1,
    !s.cssMode && c.cancelable && c.preventDefault(),
    s.touchMoveStopPropagation && !s.nested && c.stopPropagation();
    let m = r.isHorizontal() ? p : h
      , f = r.isHorizontal() ? i.currentX - i.previousX : i.currentY - i.previousY;
    s.oneWayMovement && (m = Math.abs(m) * (a ? 1 : -1),
    f = Math.abs(f) * (a ? 1 : -1)),
    i.diff = m,
    m *= s.touchRatio,
    a && (m = -m,
    f = -f);
    const x = r.touchesDirection;
    r.swipeDirection = m > 0 ? "prev" : "next",
    r.touchesDirection = f > 0 ? "prev" : "next";
    const g = r.params.loop && !s.cssMode
      , w = "next" === r.touchesDirection && r.allowSlideNext || "prev" === r.touchesDirection && r.allowSlidePrev;
    if (!n.isMoved) {
        if (g && w && r.loopFix({
            direction: r.swipeDirection
        }),
        n.startTranslate = r.getTranslate(),
        r.setTransition(0),
        r.animating) {
            const e = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0,
                detail: {
                    bySwiperTouchMove: !0
                }
            });
            r.wrapperEl.dispatchEvent(e)
        }
        n.allowMomentumBounce = !1,
        !s.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0),
        r.emit("sliderFirstMove", c)
    }
    if ((new Date).getTime(),
    !1 !== s._loopSwapReset && n.isMoved && n.allowThresholdMove && x !== r.touchesDirection && g && w && Math.abs(m) >= 1)
        return Object.assign(i, {
            startX: d,
            startY: u,
            currentX: d,
            currentY: u,
            startTranslate: n.currentTranslate
        }),
        n.loopSwapReset = !0,
        void (n.startTranslate = n.currentTranslate);
    r.emit("sliderMove", c),
    n.isMoved = !0,
    n.currentTranslate = m + n.startTranslate;
    let b = !0
      , v = s.resistanceRatio;
    if (s.touchReleaseOnEdges && (v = 0),
    m > 0 ? (g && w && n.allowThresholdMove && n.currentTranslate > (s.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] - ("auto" !== s.slidesPerView && r.slides.length - s.slidesPerView >= 2 ? r.slidesSizesGrid[r.activeIndex + 1] + r.params.spaceBetween : 0) - r.params.spaceBetween : r.minTranslate()) && r.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    n.currentTranslate > r.minTranslate() && (b = !1,
    s.resistance && (n.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + n.startTranslate + m) ** v))) : m < 0 && (g && w && n.allowThresholdMove && n.currentTranslate < (s.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween + ("auto" !== s.slidesPerView && r.slides.length - s.slidesPerView >= 2 ? r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween : 0) : r.maxTranslate()) && r.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: r.slides.length - ("auto" === s.slidesPerView ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
    }),
    n.currentTranslate < r.maxTranslate() && (b = !1,
    s.resistance && (n.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - n.startTranslate - m) ** v))),
    b && (c.preventedByNestedSwiper = !0),
    !r.allowSlideNext && "next" === r.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate),
    !r.allowSlidePrev && "prev" === r.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate),
    r.allowSlidePrev || r.allowSlideNext || (n.currentTranslate = n.startTranslate),
    s.threshold > 0) {
        if (!(Math.abs(m) > s.threshold || n.allowThresholdMove))
            return void (n.currentTranslate = n.startTranslate);
        if (!n.allowThresholdMove)
            return n.allowThresholdMove = !0,
            i.startX = i.currentX,
            i.startY = i.currentY,
            n.currentTranslate = n.startTranslate,
            void (i.diff = r.isHorizontal() ? i.currentX - i.startX : i.currentY - i.startY)
    }
    s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && r.freeMode || s.watchSlidesProgress) && (r.updateActiveIndex(),
    r.updateSlidesClasses()),
    s.freeMode && s.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(),
    r.updateProgress(n.currentTranslate),
    r.setTranslate(n.currentTranslate))
}
function Aa(e) {
    const t = this
      , r = t.touchEventsData;
    let n, s = e;
    s.originalEvent && (s = s.originalEvent);
    if ("touchend" === s.type || "touchcancel" === s.type) {
        if (n = [...s.changedTouches].find(e=>e.identifier === r.touchId),
        !n || n.identifier !== r.touchId)
            return
    } else {
        if (null !== r.touchId)
            return;
        if (s.pointerId !== r.pointerId)
            return;
        n = s
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type)) {
        if (!(["pointercancel", "contextmenu"].includes(s.type) && (t.browser.isSafari || t.browser.isWebView)))
            return
    }
    r.pointerId = null,
    r.touchId = null;
    const {params: i, touches: a, rtlTranslate: o, slidesGrid: l, enabled: c} = t;
    if (!c)
        return;
    if (!i.simulateTouch && "mouse" === s.pointerType)
        return;
    if (r.allowTouchCallbacks && t.emit("touchEnd", s),
    r.allowTouchCallbacks = !1,
    !r.isTouched)
        return r.isMoved && i.grabCursor && t.setGrabCursor(!1),
        r.isMoved = !1,
        void (r.startMoving = !1);
    i.grabCursor && r.isMoved && r.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    const d = ta()
      , u = d - r.touchStartTime;
    if (t.allowClick) {
        const e = s.path || s.composedPath && s.composedPath();
        t.updateClickedSlide(e && e[0] || s.target, e),
        t.emit("tap click", s),
        u < 300 && d - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", s)
    }
    if (r.lastClickTime = ta(),
    ea(()=>{
        t.destroyed || (t.allowClick = !0)
    }
    ),
    !r.isTouched || !r.isMoved || !t.swipeDirection || 0 === a.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset)
        return r.isTouched = !1,
        r.isMoved = !1,
        void (r.startMoving = !1);
    let p;
    if (r.isTouched = !1,
    r.isMoved = !1,
    r.startMoving = !1,
    p = i.followFinger ? o ? t.translate : -t.translate : -r.currentTranslate,
    i.cssMode)
        return;
    if (i.freeMode && i.freeMode.enabled)
        return void t.freeMode.onTouchEnd({
            currentPos: p
        });
    const h = p >= -t.maxTranslate() && !t.params.loop;
    let m = 0
      , f = t.slidesSizesGrid[0];
    for (let v = 0; v < l.length; v += v < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
        const e = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== l[v + e] ? (h || p >= l[v] && p < l[v + e]) && (m = v,
        f = l[v + e] - l[v]) : (h || p >= l[v]) && (m = v,
        f = l[l.length - 1] - l[l.length - 2])
    }
    let x = null
      , g = null;
    i.rewind && (t.isBeginning ? g = i.virtual && i.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (x = 0));
    const w = (p - l[m]) / f
      , b = m < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (u > i.longSwipesMs) {
        if (!i.longSwipes)
            return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (w >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? x : m + b) : t.slideTo(m)),
        "prev" === t.swipeDirection && (w > 1 - i.longSwipesRatio ? t.slideTo(m + b) : null !== g && w < 0 && Math.abs(w) > i.longSwipesRatio ? t.slideTo(g) : t.slideTo(m))
    } else {
        if (!i.shortSwipes)
            return void t.slideTo(t.activeIndex);
        t.navigation && (s.target === t.navigation.nextEl || s.target === t.navigation.prevEl) ? s.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== x ? x : m + b),
        "prev" === t.swipeDirection && t.slideTo(null !== g ? g : m))
    }
}
function La() {
    const e = this
      , {params: t, el: r} = e;
    if (r && 0 === r.offsetWidth)
        return;
    t.breakpoints && e.setBreakpoint();
    const {allowSlideNext: n, allowSlidePrev: s, snapGrid: i} = e
      , a = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0,
    e.allowSlidePrev = !0,
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
    const o = a && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0),
    e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout),
    e.autoplay.resizeTimeout = setTimeout(()=>{
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
    }
    , 500)),
    e.allowSlidePrev = s,
    e.allowSlideNext = n,
    e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow()
}
function Ia(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
    t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
    e.stopImmediatePropagation())))
}
function Da() {
    const e = this
      , {wrapperEl: t, rtlTranslate: r, enabled: n} = e;
    if (!n)
        return;
    let s;
    e.previousTranslate = e.translate,
    e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
    0 === e.translate && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
    const i = e.maxTranslate() - e.minTranslate();
    s = 0 === i ? 0 : (e.translate - e.minTranslate()) / i,
    s !== e.progress && e.updateProgress(r ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1)
}
function Ra(e) {
    const t = this;
    ka(t, e.target),
    t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
}
function za() {
    const e = this;
    e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0,
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
}
const Fa = (e,t)=>{
    const r = Qi()
      , {params: n, el: s, wrapperEl: i, device: a} = e
      , o = !!n.nested
      , l = "on" === t ? "addEventListener" : "removeEventListener"
      , c = t;
    s && "string" != typeof s && (r[l]("touchstart", e.onDocumentTouchStart, {
        passive: !1,
        capture: o
    }),
    s[l]("touchstart", e.onTouchStart, {
        passive: !1
    }),
    s[l]("pointerdown", e.onTouchStart, {
        passive: !1
    }),
    r[l]("touchmove", e.onTouchMove, {
        passive: !1,
        capture: o
    }),
    r[l]("pointermove", e.onTouchMove, {
        passive: !1,
        capture: o
    }),
    r[l]("touchend", e.onTouchEnd, {
        passive: !0
    }),
    r[l]("pointerup", e.onTouchEnd, {
        passive: !0
    }),
    r[l]("pointercancel", e.onTouchEnd, {
        passive: !0
    }),
    r[l]("touchcancel", e.onTouchEnd, {
        passive: !0
    }),
    r[l]("pointerout", e.onTouchEnd, {
        passive: !0
    }),
    r[l]("pointerleave", e.onTouchEnd, {
        passive: !0
    }),
    r[l]("contextmenu", e.onTouchEnd, {
        passive: !0
    }),
    (n.preventClicks || n.preventClicksPropagation) && s[l]("click", e.onClick, !0),
    n.cssMode && i[l]("scroll", e.onScroll),
    n.updateOnWindowResize ? e[c](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", La, !0) : e[c]("observerUpdate", La, !0),
    s[l]("load", e.onLoad, {
        capture: !0
    }))
}
;
const Ga = (e,t)=>e.grid && t.grid && t.grid.rows > 1;
var Va = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function $a(e, t) {
    return function(r) {
        void 0 === r && (r = {});
        const n = Object.keys(r)[0]
          , s = r[n];
        "object" == typeof s && null !== s ? (!0 === e[n] && (e[n] = {
            enabled: !0
        }),
        "navigation" === n && e[n] && e[n].enabled && !e[n].prevEl && !e[n].nextEl && (e[n].auto = !0),
        ["pagination", "scrollbar"].indexOf(n) >= 0 && e[n] && e[n].enabled && !e[n].el && (e[n].auto = !0),
        n in e && "enabled"in s ? ("object" != typeof e[n] || "enabled"in e[n] || (e[n].enabled = !0),
        e[n] || (e[n] = {
            enabled: !1
        }),
        ia(t, r)) : ia(t, r)) : ia(t, r)
    }
}
const Ba = {
    eventsEmitter: {
        on(e, t, r) {
            const n = this;
            if (!n.eventsListeners || n.destroyed)
                return n;
            if ("function" != typeof t)
                return n;
            const s = r ? "unshift" : "push";
            return e.split(" ").forEach(e=>{
                n.eventsListeners[e] || (n.eventsListeners[e] = []),
                n.eventsListeners[e][s](t)
            }
            ),
            n
        },
        once(e, t, r) {
            const n = this;
            if (!n.eventsListeners || n.destroyed)
                return n;
            if ("function" != typeof t)
                return n;
            function s() {
                n.off(e, s),
                s.__emitterProxy && delete s.__emitterProxy;
                for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
                    i[a] = arguments[a];
                t.apply(n, i)
            }
            return s.__emitterProxy = t,
            n.on(e, s, r)
        },
        onAny(e, t) {
            const r = this;
            if (!r.eventsListeners || r.destroyed)
                return r;
            if ("function" != typeof e)
                return r;
            const n = t ? "unshift" : "push";
            return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[n](e),
            r
        },
        offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed)
                return t;
            if (!t.eventsAnyListeners)
                return t;
            const r = t.eventsAnyListeners.indexOf(e);
            return r >= 0 && t.eventsAnyListeners.splice(r, 1),
            t
        },
        off(e, t) {
            const r = this;
            return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (e.split(" ").forEach(e=>{
                void 0 === t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach((n,s)=>{
                    (n === t || n.__emitterProxy && n.__emitterProxy === t) && r.eventsListeners[e].splice(s, 1)
                }
                )
            }
            ),
            r) : r
        },
        emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed)
                return e;
            if (!e.eventsListeners)
                return e;
            let t, r, n;
            for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++)
                i[a] = arguments[a];
            "string" == typeof i[0] || Array.isArray(i[0]) ? (t = i[0],
            r = i.slice(1, i.length),
            n = e) : (t = i[0].events,
            r = i[0].data,
            n = i[0].context || e),
            r.unshift(n);
            return (Array.isArray(t) ? t : t.split(" ")).forEach(t=>{
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e=>{
                    e.apply(n, [t, ...r])
                }
                ),
                e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(e=>{
                    e.apply(n, r)
                }
                )
            }
            ),
            e
        }
    },
    update: {
        updateSize: function() {
            const e = this;
            let t, r;
            const n = e.el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : n.clientWidth,
            r = void 0 !== e.params.height && null !== e.params.height ? e.params.height : n.clientHeight,
            0 === t && e.isHorizontal() || 0 === r && e.isVertical() || (t = t - parseInt(pa(n, "padding-left") || 0, 10) - parseInt(pa(n, "padding-right") || 0, 10),
            r = r - parseInt(pa(n, "padding-top") || 0, 10) - parseInt(pa(n, "padding-bottom") || 0, 10),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(r) && (r = 0),
            Object.assign(e, {
                width: t,
                height: r,
                size: e.isHorizontal() ? t : r
            }))
        },
        updateSlides: function() {
            const e = this;
            function t(t, r) {
                return parseFloat(t.getPropertyValue(e.getDirectionLabel(r)) || 0)
            }
            const r = e.params
              , {wrapperEl: n, slidesEl: s, size: i, rtlTranslate: a, wrongRTL: o} = e
              , l = e.virtual && r.virtual.enabled
              , c = l ? e.virtual.slides.length : e.slides.length
              , d = ca(s, `.${e.params.slideClass}, swiper-slide`)
              , u = l ? e.virtual.slides.length : d.length;
            let p = [];
            const h = []
              , m = [];
            let f = r.slidesOffsetBefore;
            "function" == typeof f && (f = r.slidesOffsetBefore.call(e));
            let x = r.slidesOffsetAfter;
            "function" == typeof x && (x = r.slidesOffsetAfter.call(e));
            const g = e.snapGrid.length
              , w = e.slidesGrid.length;
            let b = r.spaceBetween
              , v = -f
              , y = 0
              , j = 0;
            if (void 0 === i)
                return;
            "string" == typeof b && b.indexOf("%") >= 0 ? b = parseFloat(b.replace("%", "")) / 100 * i : "string" == typeof b && (b = parseFloat(b)),
            e.virtualSize = -b,
            d.forEach(e=>{
                a ? e.style.marginLeft = "" : e.style.marginRight = "",
                e.style.marginBottom = "",
                e.style.marginTop = ""
            }
            ),
            r.centeredSlides && r.cssMode && (aa(n, "--swiper-centered-offset-before", ""),
            aa(n, "--swiper-centered-offset-after", ""));
            const T = r.grid && r.grid.rows > 1 && e.grid;
            let N;
            T ? e.grid.initSlides(d) : e.grid && e.grid.unsetSlides();
            const S = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter(e=>void 0 !== r.breakpoints[e].slidesPerView).length > 0;
            for (let k = 0; k < u; k += 1) {
                let n;
                if (N = 0,
                d[k] && (n = d[k]),
                T && e.grid.updateSlide(k, n, d),
                !d[k] || "none" !== pa(n, "display")) {
                    if ("auto" === r.slidesPerView) {
                        S && (d[k].style[e.getDirectionLabel("width")] = "");
                        const s = getComputedStyle(n)
                          , i = n.style.transform
                          , a = n.style.webkitTransform;
                        if (i && (n.style.transform = "none"),
                        a && (n.style.webkitTransform = "none"),
                        r.roundLengths)
                            N = e.isHorizontal() ? fa(n, "width") : fa(n, "height");
                        else {
                            const e = t(s, "width")
                              , r = t(s, "padding-left")
                              , i = t(s, "padding-right")
                              , a = t(s, "margin-left")
                              , o = t(s, "margin-right")
                              , l = s.getPropertyValue("box-sizing");
                            if (l && "border-box" === l)
                                N = e + a + o;
                            else {
                                const {clientWidth: t, offsetWidth: s} = n;
                                N = e + r + i + a + o + (s - t)
                            }
                        }
                        i && (n.style.transform = i),
                        a && (n.style.webkitTransform = a),
                        r.roundLengths && (N = Math.floor(N))
                    } else
                        N = (i - (r.slidesPerView - 1) * b) / r.slidesPerView,
                        r.roundLengths && (N = Math.floor(N)),
                        d[k] && (d[k].style[e.getDirectionLabel("width")] = `${N}px`);
                    d[k] && (d[k].swiperSlideSize = N),
                    m.push(N),
                    r.centeredSlides ? (v = v + N / 2 + y / 2 + b,
                    0 === y && 0 !== k && (v = v - i / 2 - b),
                    0 === k && (v = v - i / 2 - b),
                    Math.abs(v) < .001 && (v = 0),
                    r.roundLengths && (v = Math.floor(v)),
                    j % r.slidesPerGroup === 0 && p.push(v),
                    h.push(v)) : (r.roundLengths && (v = Math.floor(v)),
                    (j - Math.min(e.params.slidesPerGroupSkip, j)) % e.params.slidesPerGroup === 0 && p.push(v),
                    h.push(v),
                    v = v + N + b),
                    e.virtualSize += N + b,
                    y = N,
                    j += 1
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, i) + x,
            a && o && ("slide" === r.effect || "coverflow" === r.effect) && (n.style.width = `${e.virtualSize + b}px`),
            r.setWrapperSize && (n.style[e.getDirectionLabel("width")] = `${e.virtualSize + b}px`),
            T && e.grid.updateWrapperSize(N, p),
            !r.centeredSlides) {
                const t = [];
                for (let n = 0; n < p.length; n += 1) {
                    let s = p[n];
                    r.roundLengths && (s = Math.floor(s)),
                    p[n] <= e.virtualSize - i && t.push(s)
                }
                p = t,
                Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - i)
            }
            if (l && r.loop) {
                const t = m[0] + b;
                if (r.slidesPerGroup > 1) {
                    const n = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup)
                      , s = t * r.slidesPerGroup;
                    for (let e = 0; e < n; e += 1)
                        p.push(p[p.length - 1] + s)
                }
                for (let n = 0; n < e.virtual.slidesBefore + e.virtual.slidesAfter; n += 1)
                    1 === r.slidesPerGroup && p.push(p[p.length - 1] + t),
                    h.push(h[h.length - 1] + t),
                    e.virtualSize += t
            }
            if (0 === p.length && (p = [0]),
            0 !== b) {
                const t = e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight");
                d.filter((e,t)=>!(r.cssMode && !r.loop) || t !== d.length - 1).forEach(e=>{
                    e.style[t] = `${b}px`
                }
                )
            }
            if (r.centeredSlides && r.centeredSlidesBounds) {
                let e = 0;
                m.forEach(t=>{
                    e += t + (b || 0)
                }
                ),
                e -= b;
                const t = e > i ? e - i : 0;
                p = p.map(e=>e <= 0 ? -f : e > t ? t + x : e)
            }
            if (r.centerInsufficientSlides) {
                let e = 0;
                m.forEach(t=>{
                    e += t + (b || 0)
                }
                ),
                e -= b;
                const t = (r.slidesOffsetBefore || 0) + (r.slidesOffsetAfter || 0);
                if (e + t < i) {
                    const r = (i - e - t) / 2;
                    p.forEach((e,t)=>{
                        p[t] = e - r
                    }
                    ),
                    h.forEach((e,t)=>{
                        h[t] = e + r
                    }
                    )
                }
            }
            if (Object.assign(e, {
                slides: d,
                snapGrid: p,
                slidesGrid: h,
                slidesSizesGrid: m
            }),
            r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
                aa(n, "--swiper-centered-offset-before", -p[0] + "px"),
                aa(n, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                const t = -e.snapGrid[0]
                  , r = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map(e=>e + t),
                e.slidesGrid = e.slidesGrid.map(e=>e + r)
            }
            if (u !== c && e.emit("slidesLengthChange"),
            p.length !== g && (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
            h.length !== w && e.emit("slidesGridLengthChange"),
            r.watchSlidesProgress && e.updateSlidesOffset(),
            e.emit("slidesUpdated"),
            !(l || r.cssMode || "slide" !== r.effect && "fade" !== r.effect)) {
                const t = `${r.containerModifierClass}backface-hidden`
                  , n = e.el.classList.contains(t);
                u <= r.maxBackfaceHiddenSlides ? n || e.el.classList.add(t) : n && e.el.classList.remove(t)
            }
        },
        updateAutoHeight: function(e) {
            const t = this
              , r = []
              , n = t.virtual && t.params.virtual.enabled;
            let s, i = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const a = e=>n ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                if (t.params.centeredSlides)
                    (t.visibleSlides || []).forEach(e=>{
                        r.push(e)
                    }
                    );
                else
                    for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                        const e = t.activeIndex + s;
                        if (e > t.slides.length && !n)
                            break;
                        r.push(a(e))
                    }
            else
                r.push(a(t.activeIndex));
            for (s = 0; s < r.length; s += 1)
                if (void 0 !== r[s]) {
                    const e = r[s].offsetHeight;
                    i = e > i ? e : i
                }
            (i || 0 === i) && (t.wrapperEl.style.height = `${i}px`)
        },
        updateSlidesOffset: function() {
            const e = this
              , t = e.slides
              , r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
            for (let n = 0; n < t.length; n += 1)
                t[n].swiperSlideOffset = (e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) - r - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this
              , r = t.params
              , {slides: n, rtlTranslate: s, snapGrid: i} = t;
            if (0 === n.length)
                return;
            void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
            let a = -e;
            s && (a = e),
            t.visibleSlidesIndexes = [],
            t.visibleSlides = [];
            let o = r.spaceBetween;
            "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
            for (let l = 0; l < n.length; l += 1) {
                const e = n[l];
                let c = e.swiperSlideOffset;
                r.cssMode && r.centeredSlides && (c -= n[0].swiperSlideOffset);
                const d = (a + (r.centeredSlides ? t.minTranslate() : 0) - c) / (e.swiperSlideSize + o)
                  , u = (a - i[0] + (r.centeredSlides ? t.minTranslate() : 0) - c) / (e.swiperSlideSize + o)
                  , p = -(a - c)
                  , h = p + t.slidesSizesGrid[l]
                  , m = p >= 0 && p <= t.size - t.slidesSizesGrid[l]
                  , f = p >= 0 && p < t.size - 1 || h > 1 && h <= t.size || p <= 0 && h >= t.size;
                f && (t.visibleSlides.push(e),
                t.visibleSlidesIndexes.push(l)),
                Na(e, f, r.slideVisibleClass),
                Na(e, m, r.slideFullyVisibleClass),
                e.progress = s ? -d : d,
                e.originalProgress = s ? -u : u
            }
        },
        updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
                const r = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * r || 0
            }
            const r = t.params
              , n = t.maxTranslate() - t.minTranslate();
            let {progress: s, isBeginning: i, isEnd: a, progressLoop: o} = t;
            const l = i
              , c = a;
            if (0 === n)
                s = 0,
                i = !0,
                a = !0;
            else {
                s = (e - t.minTranslate()) / n;
                const r = Math.abs(e - t.minTranslate()) < 1
                  , o = Math.abs(e - t.maxTranslate()) < 1;
                i = r || s <= 0,
                a = o || s >= 1,
                r && (s = 0),
                o && (s = 1)
            }
            if (r.loop) {
                const r = t.getSlideIndexByData(0)
                  , n = t.getSlideIndexByData(t.slides.length - 1)
                  , s = t.slidesGrid[r]
                  , i = t.slidesGrid[n]
                  , a = t.slidesGrid[t.slidesGrid.length - 1]
                  , l = Math.abs(e);
                o = l >= s ? (l - s) / a : (l + a - i) / a,
                o > 1 && (o -= 1)
            }
            Object.assign(t, {
                progress: s,
                progressLoop: o,
                isBeginning: i,
                isEnd: a
            }),
            (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e),
            i && !l && t.emit("reachBeginning toEdge"),
            a && !c && t.emit("reachEnd toEdge"),
            (l && !i || c && !a) && t.emit("fromEdge"),
            t.emit("progress", s)
        },
        updateSlidesClasses: function() {
            const e = this
              , {slides: t, params: r, slidesEl: n, activeIndex: s} = e
              , i = e.virtual && r.virtual.enabled
              , a = e.grid && r.grid && r.grid.rows > 1
              , o = e=>ca(n, `.${r.slideClass}${e}, swiper-slide ${e}`)[0];
            let l, c, d;
            if (i)
                if (r.loop) {
                    let t = s - e.virtual.slidesBefore;
                    t < 0 && (t = e.virtual.slides.length + t),
                    t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                    l = o(`[data-swiper-slide-index="${t}"]`)
                } else
                    l = o(`[data-swiper-slide-index="${s}"]`);
            else
                a ? (l = t.find(e=>e.column === s),
                d = t.find(e=>e.column === s + 1),
                c = t.find(e=>e.column === s - 1)) : l = t[s];
            l && (a || (d = function(e, t) {
                const r = [];
                for (; e.nextElementSibling; ) {
                    const n = e.nextElementSibling;
                    t ? n.matches(t) && r.push(n) : r.push(n),
                    e = n
                }
                return r
            }(l, `.${r.slideClass}, swiper-slide`)[0],
            r.loop && !d && (d = t[0]),
            c = function(e, t) {
                const r = [];
                for (; e.previousElementSibling; ) {
                    const n = e.previousElementSibling;
                    t ? n.matches(t) && r.push(n) : r.push(n),
                    e = n
                }
                return r
            }(l, `.${r.slideClass}, swiper-slide`)[0],
            r.loop && 0 === !c && (c = t[t.length - 1]))),
            t.forEach(e=>{
                Sa(e, e === l, r.slideActiveClass),
                Sa(e, e === d, r.slideNextClass),
                Sa(e, e === c, r.slidePrevClass)
            }
            ),
            e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
            const t = this
              , r = t.rtlTranslate ? t.translate : -t.translate
              , {snapGrid: n, params: s, activeIndex: i, realIndex: a, snapIndex: o} = t;
            let l, c = e;
            const d = e=>{
                let r = e - t.virtual.slidesBefore;
                return r < 0 && (r = t.virtual.slides.length + r),
                r >= t.virtual.slides.length && (r -= t.virtual.slides.length),
                r
            }
            ;
            if (void 0 === c && (c = function(e) {
                const {slidesGrid: t, params: r} = e
                  , n = e.rtlTranslate ? e.translate : -e.translate;
                let s;
                for (let i = 0; i < t.length; i += 1)
                    void 0 !== t[i + 1] ? n >= t[i] && n < t[i + 1] - (t[i + 1] - t[i]) / 2 ? s = i : n >= t[i] && n < t[i + 1] && (s = i + 1) : n >= t[i] && (s = i);
                return r.normalizeSlideIndex && (s < 0 || void 0 === s) && (s = 0),
                s
            }(t)),
            n.indexOf(r) >= 0)
                l = n.indexOf(r);
            else {
                const e = Math.min(s.slidesPerGroupSkip, c);
                l = e + Math.floor((c - e) / s.slidesPerGroup)
            }
            if (l >= n.length && (l = n.length - 1),
            c === i && !t.params.loop)
                return void (l !== o && (t.snapIndex = l,
                t.emit("snapIndexChange")));
            if (c === i && t.params.loop && t.virtual && t.params.virtual.enabled)
                return void (t.realIndex = d(c));
            const u = t.grid && s.grid && s.grid.rows > 1;
            let p;
            if (t.virtual && s.virtual.enabled && s.loop)
                p = d(c);
            else if (u) {
                const e = t.slides.find(e=>e.column === c);
                let r = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(r) && (r = Math.max(t.slides.indexOf(e), 0)),
                p = Math.floor(r / s.grid.rows)
            } else if (t.slides[c]) {
                const e = t.slides[c].getAttribute("data-swiper-slide-index");
                p = e ? parseInt(e, 10) : c
            } else
                p = c;
            Object.assign(t, {
                previousSnapIndex: o,
                snapIndex: l,
                previousRealIndex: a,
                realIndex: p,
                previousIndex: i,
                activeIndex: c
            }),
            t.initialized && _a(t),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) && (a !== p && t.emit("realIndexChange"),
            t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
            const r = this
              , n = r.params;
            let s = e.closest(`.${n.slideClass}, swiper-slide`);
            !s && r.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e=>{
                !s && e.matches && e.matches(`.${n.slideClass}, swiper-slide`) && (s = e)
            }
            );
            let i, a = !1;
            if (s)
                for (let o = 0; o < r.slides.length; o += 1)
                    if (r.slides[o] === s) {
                        a = !0,
                        i = o;
                        break
                    }
            if (!s || !a)
                return r.clickedSlide = void 0,
                void (r.clickedIndex = void 0);
            r.clickedSlide = s,
            r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = i,
            n.slideToClickedSlide && void 0 !== r.clickedIndex && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide()
        }
    },
    translate: {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {params: t, rtlTranslate: r, translate: n, wrapperEl: s} = this;
            if (t.virtualTranslate)
                return r ? -n : n;
            if (t.cssMode)
                return n;
            let i = ra(s, e);
            return i += this.cssOverflowAdjustment(),
            r && (i = -i),
            i || 0
        },
        setTranslate: function(e, t) {
            const r = this
              , {rtlTranslate: n, params: s, wrapperEl: i, progress: a} = r;
            let o, l = 0, c = 0;
            r.isHorizontal() ? l = n ? -e : e : c = e,
            s.roundLengths && (l = Math.floor(l),
            c = Math.floor(c)),
            r.previousTranslate = r.translate,
            r.translate = r.isHorizontal() ? l : c,
            s.cssMode ? i[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -c : s.virtualTranslate || (r.isHorizontal() ? l -= r.cssOverflowAdjustment() : c -= r.cssOverflowAdjustment(),
            i.style.transform = `translate3d(${l}px, ${c}px, 0px)`);
            const d = r.maxTranslate() - r.minTranslate();
            o = 0 === d ? 0 : (e - r.minTranslate()) / d,
            o !== a && r.updateProgress(e),
            r.emit("setTranslate", r.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e, t, r, n, s) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === r && (r = !0),
            void 0 === n && (n = !0);
            const i = this
              , {params: a, wrapperEl: o} = i;
            if (i.animating && a.preventInteractionOnTransition)
                return !1;
            const l = i.minTranslate()
              , c = i.maxTranslate();
            let d;
            if (d = n && e > l ? l : n && e < c ? c : e,
            i.updateProgress(d),
            a.cssMode) {
                const e = i.isHorizontal();
                if (0 === t)
                    o[e ? "scrollLeft" : "scrollTop"] = -d;
                else {
                    if (!i.support.smoothScroll)
                        return oa({
                            swiper: i,
                            targetPosition: -d,
                            side: e ? "left" : "top"
                        }),
                        !0;
                    o.scrollTo({
                        [e ? "left" : "top"]: -d,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return 0 === t ? (i.setTransition(0),
            i.setTranslate(d),
            r && (i.emit("beforeTransitionStart", t, s),
            i.emit("transitionEnd"))) : (i.setTransition(t),
            i.setTranslate(d),
            r && (i.emit("beforeTransitionStart", t, s),
            i.emit("transitionStart")),
            i.animating || (i.animating = !0,
            i.onTranslateToWrapperTransitionEnd || (i.onTranslateToWrapperTransitionEnd = function(e) {
                i && !i.destroyed && e.target === this && (i.wrapperEl.removeEventListener("transitionend", i.onTranslateToWrapperTransitionEnd),
                i.onTranslateToWrapperTransitionEnd = null,
                delete i.onTranslateToWrapperTransitionEnd,
                i.animating = !1,
                r && i.emit("transitionEnd"))
            }
            ),
            i.wrapperEl.addEventListener("transitionend", i.onTranslateToWrapperTransitionEnd))),
            !0
        }
    },
    transition: {
        setTransition: function(e, t) {
            const r = this;
            r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${e}ms`,
            r.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""),
            r.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            const r = this
              , {params: n} = r;
            n.cssMode || (n.autoHeight && r.updateAutoHeight(),
            Ca({
                swiper: r,
                runCallbacks: e,
                direction: t,
                step: "Start"
            }))
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            const r = this
              , {params: n} = r;
            r.animating = !1,
            n.cssMode || (r.setTransition(0),
            Ca({
                swiper: r,
                runCallbacks: e,
                direction: t,
                step: "End"
            }))
        }
    },
    slide: {
        slideTo: function(e, t, r, n, s) {
            void 0 === e && (e = 0),
            void 0 === r && (r = !0),
            "string" == typeof e && (e = parseInt(e, 10));
            const i = this;
            let a = e;
            a < 0 && (a = 0);
            const {params: o, snapGrid: l, slidesGrid: c, previousIndex: d, activeIndex: u, rtlTranslate: p, wrapperEl: h, enabled: m} = i;
            if (!m && !n && !s || i.destroyed || i.animating && o.preventInteractionOnTransition)
                return !1;
            void 0 === t && (t = i.params.speed);
            const f = Math.min(i.params.slidesPerGroupSkip, a);
            let x = f + Math.floor((a - f) / i.params.slidesPerGroup);
            x >= l.length && (x = l.length - 1);
            const g = -l[x];
            if (o.normalizeSlideIndex)
                for (let y = 0; y < c.length; y += 1) {
                    const e = -Math.floor(100 * g)
                      , t = Math.floor(100 * c[y])
                      , r = Math.floor(100 * c[y + 1]);
                    void 0 !== c[y + 1] ? e >= t && e < r - (r - t) / 2 ? a = y : e >= t && e < r && (a = y + 1) : e >= t && (a = y)
                }
            if (i.initialized && a !== u) {
                if (!i.allowSlideNext && (p ? g > i.translate && g > i.minTranslate() : g < i.translate && g < i.minTranslate()))
                    return !1;
                if (!i.allowSlidePrev && g > i.translate && g > i.maxTranslate() && (u || 0) !== a)
                    return !1
            }
            let w;
            a !== (d || 0) && r && i.emit("beforeSlideChangeStart"),
            i.updateProgress(g),
            w = a > u ? "next" : a < u ? "prev" : "reset";
            const b = i.virtual && i.params.virtual.enabled;
            if (!(b && s) && (p && -g === i.translate || !p && g === i.translate))
                return i.updateActiveIndex(a),
                o.autoHeight && i.updateAutoHeight(),
                i.updateSlidesClasses(),
                "slide" !== o.effect && i.setTranslate(g),
                "reset" !== w && (i.transitionStart(r, w),
                i.transitionEnd(r, w)),
                !1;
            if (o.cssMode) {
                const e = i.isHorizontal()
                  , r = p ? g : -g;
                if (0 === t)
                    b && (i.wrapperEl.style.scrollSnapType = "none",
                    i._immediateVirtual = !0),
                    b && !i._cssModeVirtualInitialSet && i.params.initialSlide > 0 ? (i._cssModeVirtualInitialSet = !0,
                    requestAnimationFrame(()=>{
                        h[e ? "scrollLeft" : "scrollTop"] = r
                    }
                    )) : h[e ? "scrollLeft" : "scrollTop"] = r,
                    b && requestAnimationFrame(()=>{
                        i.wrapperEl.style.scrollSnapType = "",
                        i._immediateVirtual = !1
                    }
                    );
                else {
                    if (!i.support.smoothScroll)
                        return oa({
                            swiper: i,
                            targetPosition: r,
                            side: e ? "left" : "top"
                        }),
                        !0;
                    h.scrollTo({
                        [e ? "left" : "top"]: r,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            const v = Ta().isSafari;
            return b && !s && v && i.isElement && i.virtual.update(!1, !1, a),
            i.setTransition(t),
            i.setTranslate(g),
            i.updateActiveIndex(a),
            i.updateSlidesClasses(),
            i.emit("beforeTransitionStart", t, n),
            i.transitionStart(r, w),
            0 === t ? i.transitionEnd(r, w) : i.animating || (i.animating = !0,
            i.onSlideToWrapperTransitionEnd || (i.onSlideToWrapperTransitionEnd = function(e) {
                i && !i.destroyed && e.target === this && (i.wrapperEl.removeEventListener("transitionend", i.onSlideToWrapperTransitionEnd),
                i.onSlideToWrapperTransitionEnd = null,
                delete i.onSlideToWrapperTransitionEnd,
                i.transitionEnd(r, w))
            }
            ),
            i.wrapperEl.addEventListener("transitionend", i.onSlideToWrapperTransitionEnd)),
            !0
        },
        slideToLoop: function(e, t, r, n) {
            if (void 0 === e && (e = 0),
            void 0 === r && (r = !0),
            "string" == typeof e) {
                e = parseInt(e, 10)
            }
            const s = this;
            if (s.destroyed)
                return;
            void 0 === t && (t = s.params.speed);
            const i = s.grid && s.params.grid && s.params.grid.rows > 1;
            let a = e;
            if (s.params.loop)
                if (s.virtual && s.params.virtual.enabled)
                    a += s.virtual.slidesBefore;
                else {
                    let e;
                    if (i) {
                        const t = a * s.params.grid.rows;
                        e = s.slides.find(e=>1 * e.getAttribute("data-swiper-slide-index") === t).column
                    } else
                        e = s.getSlideIndexByData(a);
                    const t = i ? Math.ceil(s.slides.length / s.params.grid.rows) : s.slides.length
                      , {centeredSlides: r} = s.params;
                    let o = s.params.slidesPerView;
                    "auto" === o ? o = s.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(s.params.slidesPerView, 10)),
                    r && o % 2 == 0 && (o += 1));
                    let l = t - e < o;
                    if (r && (l = l || e < Math.ceil(o / 2)),
                    n && r && "auto" !== s.params.slidesPerView && !i && (l = !1),
                    l) {
                        const n = r ? e < s.activeIndex ? "prev" : "next" : e - s.activeIndex - 1 < s.params.slidesPerView ? "next" : "prev";
                        s.loopFix({
                            direction: n,
                            slideTo: !0,
                            activeSlideIndex: "next" === n ? e + 1 : e - t + 1,
                            slideRealIndex: "next" === n ? s.realIndex : void 0
                        })
                    }
                    if (i) {
                        const e = a * s.params.grid.rows;
                        a = s.slides.find(t=>1 * t.getAttribute("data-swiper-slide-index") === e).column
                    } else
                        a = s.getSlideIndexByData(a)
                }
            return requestAnimationFrame(()=>{
                s.slideTo(a, t, r, n)
            }
            ),
            s
        },
        slideNext: function(e, t, r) {
            void 0 === t && (t = !0);
            const n = this
              , {enabled: s, params: i, animating: a} = n;
            if (!s || n.destroyed)
                return n;
            void 0 === e && (e = n.params.speed);
            let o = i.slidesPerGroup;
            "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
            const l = n.activeIndex < i.slidesPerGroupSkip ? 1 : o
              , c = n.virtual && i.virtual.enabled;
            if (i.loop) {
                if (a && !c && i.loopPreventsSliding)
                    return !1;
                if (n.loopFix({
                    direction: "next"
                }),
                n._clientLeft = n.wrapperEl.clientLeft,
                n.activeIndex === n.slides.length - 1 && i.cssMode)
                    return requestAnimationFrame(()=>{
                        n.slideTo(n.activeIndex + l, e, t, r)
                    }
                    ),
                    !0
            }
            return i.rewind && n.isEnd ? n.slideTo(0, e, t, r) : n.slideTo(n.activeIndex + l, e, t, r)
        },
        slidePrev: function(e, t, r) {
            void 0 === t && (t = !0);
            const n = this
              , {params: s, snapGrid: i, slidesGrid: a, rtlTranslate: o, enabled: l, animating: c} = n;
            if (!l || n.destroyed)
                return n;
            void 0 === e && (e = n.params.speed);
            const d = n.virtual && s.virtual.enabled;
            if (s.loop) {
                if (c && !d && s.loopPreventsSliding)
                    return !1;
                n.loopFix({
                    direction: "prev"
                }),
                n._clientLeft = n.wrapperEl.clientLeft
            }
            function u(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const p = u(o ? n.translate : -n.translate)
              , h = i.map(e=>u(e))
              , m = s.freeMode && s.freeMode.enabled;
            let f = i[h.indexOf(p) - 1];
            if (void 0 === f && (s.cssMode || m)) {
                let e;
                i.forEach((t,r)=>{
                    p >= t && (e = r)
                }
                ),
                void 0 !== e && (f = m ? i[e] : i[e > 0 ? e - 1 : e])
            }
            let x = 0;
            if (void 0 !== f && (x = a.indexOf(f),
            x < 0 && (x = n.activeIndex - 1),
            "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (x = x - n.slidesPerViewDynamic("previous", !0) + 1,
            x = Math.max(x, 0))),
            s.rewind && n.isBeginning) {
                const s = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
                return n.slideTo(s, e, t, r)
            }
            return s.loop && 0 === n.activeIndex && s.cssMode ? (requestAnimationFrame(()=>{
                n.slideTo(x, e, t, r)
            }
            ),
            !0) : n.slideTo(x, e, t, r)
        },
        slideReset: function(e, t, r) {
            void 0 === t && (t = !0);
            const n = this;
            if (!n.destroyed)
                return void 0 === e && (e = n.params.speed),
                n.slideTo(n.activeIndex, e, t, r)
        },
        slideToClosest: function(e, t, r, n) {
            void 0 === t && (t = !0),
            void 0 === n && (n = .5);
            const s = this;
            if (s.destroyed)
                return;
            void 0 === e && (e = s.params.speed);
            let i = s.activeIndex;
            const a = Math.min(s.params.slidesPerGroupSkip, i)
              , o = a + Math.floor((i - a) / s.params.slidesPerGroup)
              , l = s.rtlTranslate ? s.translate : -s.translate;
            if (l >= s.snapGrid[o]) {
                const e = s.snapGrid[o];
                l - e > (s.snapGrid[o + 1] - e) * n && (i += s.params.slidesPerGroup)
            } else {
                const e = s.snapGrid[o - 1];
                l - e <= (s.snapGrid[o] - e) * n && (i -= s.params.slidesPerGroup)
            }
            return i = Math.max(i, 0),
            i = Math.min(i, s.slidesGrid.length - 1),
            s.slideTo(i, e, t, r)
        },
        slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed)
                return;
            const {params: t, slidesEl: r} = e
              , n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let s, i = e.getSlideIndexWhenGrid(e.clickedIndex);
            const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`
              , o = e.grid && e.params.grid && e.params.grid.rows > 1;
            if (t.loop) {
                if (e.animating)
                    return;
                s = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
                t.centeredSlides ? e.slideToLoop(s) : i > (o ? (e.slides.length - n) / 2 - (e.params.grid.rows - 1) : e.slides.length - n) ? (e.loopFix(),
                i = e.getSlideIndex(ca(r, `${a}[data-swiper-slide-index="${s}"]`)[0]),
                ea(()=>{
                    e.slideTo(i)
                }
                )) : e.slideTo(i)
            } else
                e.slideTo(i)
        }
    },
    loop: {
        loopCreate: function(e, t) {
            const r = this
              , {params: n, slidesEl: s} = r;
            if (!n.loop || r.virtual && r.params.virtual.enabled)
                return;
            const i = ()=>{
                ca(s, `.${n.slideClass}, swiper-slide`).forEach((e,t)=>{
                    e.setAttribute("data-swiper-slide-index", t)
                }
                )
            }
              , a = r.grid && n.grid && n.grid.rows > 1;
            n.loopAddBlankSlides && (n.slidesPerGroup > 1 || a) && (()=>{
                const e = ca(s, `.${n.slideBlankClass}`);
                e.forEach(e=>{
                    e.remove()
                }
                ),
                e.length > 0 && (r.recalcSlides(),
                r.updateSlides())
            }
            )();
            const o = n.slidesPerGroup * (a ? n.grid.rows : 1)
              , l = r.slides.length % o !== 0
              , c = a && r.slides.length % n.grid.rows !== 0
              , d = e=>{
                for (let t = 0; t < e; t += 1) {
                    const e = r.isElement ? ua("swiper-slide", [n.slideBlankClass]) : ua("div", [n.slideClass, n.slideBlankClass]);
                    r.slidesEl.append(e)
                }
            }
            ;
            if (l) {
                if (n.loopAddBlankSlides) {
                    d(o - r.slides.length % o),
                    r.recalcSlides(),
                    r.updateSlides()
                } else
                    da();
                i()
            } else if (c) {
                if (n.loopAddBlankSlides) {
                    d(n.grid.rows - r.slides.length % n.grid.rows),
                    r.recalcSlides(),
                    r.updateSlides()
                } else
                    da();
                i()
            } else
                i();
            r.loopFix({
                slideRealIndex: e,
                direction: n.centeredSlides ? void 0 : "next",
                initial: t
            })
        },
        loopFix: function(e) {
            let {slideRealIndex: t, slideTo: r=!0, direction: n, setTranslate: s, activeSlideIndex: i, initial: a, byController: o, byMousewheel: l} = void 0 === e ? {} : e;
            const c = this;
            if (!c.params.loop)
                return;
            c.emit("beforeLoopFix");
            const {slides: d, allowSlidePrev: u, allowSlideNext: p, slidesEl: h, params: m} = c
              , {centeredSlides: f, initialSlide: x} = m;
            if (c.allowSlidePrev = !0,
            c.allowSlideNext = !0,
            c.virtual && m.virtual.enabled)
                return r && (m.centeredSlides || 0 !== c.snapIndex ? m.centeredSlides && c.snapIndex < m.slidesPerView ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0) : c.snapIndex === c.snapGrid.length - 1 && c.slideTo(c.virtual.slidesBefore, 0, !1, !0) : c.slideTo(c.virtual.slides.length, 0, !1, !0)),
                c.allowSlidePrev = u,
                c.allowSlideNext = p,
                void c.emit("loopFix");
            let g = m.slidesPerView;
            "auto" === g ? g = c.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(m.slidesPerView, 10)),
            f && g % 2 == 0 && (g += 1));
            const w = m.slidesPerGroupAuto ? g : m.slidesPerGroup;
            let b = f ? Math.max(w, Math.ceil(g / 2)) : w;
            b % w !== 0 && (b += w - b % w),
            b += m.loopAdditionalSlides,
            c.loopedSlides = b;
            const v = c.grid && m.grid && m.grid.rows > 1;
            (d.length < g + b || "cards" === c.params.effect && d.length < g + 2 * b || v && "row" === m.grid.fill) && da();
            const y = []
              , j = []
              , T = v ? Math.ceil(d.length / m.grid.rows) : d.length
              , N = a && T - x < g && !f;
            let S = N ? x : c.activeIndex;
            void 0 === i ? i = c.getSlideIndex(d.find(e=>e.classList.contains(m.slideActiveClass))) : S = i;
            const k = "next" === n || !n
              , E = "prev" === n || !n;
            let _ = 0
              , C = 0;
            const M = (v ? d[i].column : i) + (f && void 0 === s ? -g / 2 + .5 : 0);
            if (M < b) {
                _ = Math.max(b - M, w);
                for (let e = 0; e < b - M; e += 1) {
                    const t = e - Math.floor(e / T) * T;
                    if (v) {
                        const e = T - t - 1;
                        for (let t = d.length - 1; t >= 0; t -= 1)
                            d[t].column === e && y.push(t)
                    } else
                        y.push(T - t - 1)
                }
            } else if (M + g > T - b) {
                C = Math.max(M - (T - 2 * b), w),
                N && (C = Math.max(C, g - T + x + 1));
                for (let e = 0; e < C; e += 1) {
                    const t = e - Math.floor(e / T) * T;
                    v ? d.forEach((e,r)=>{
                        e.column === t && j.push(r)
                    }
                    ) : j.push(t)
                }
            }
            if (c.__preventObserver__ = !0,
            requestAnimationFrame(()=>{
                c.__preventObserver__ = !1
            }
            ),
            "cards" === c.params.effect && d.length < g + 2 * b && (j.includes(i) && j.splice(j.indexOf(i), 1),
            y.includes(i) && y.splice(y.indexOf(i), 1)),
            E && y.forEach(e=>{
                d[e].swiperLoopMoveDOM = !0,
                h.prepend(d[e]),
                d[e].swiperLoopMoveDOM = !1
            }
            ),
            k && j.forEach(e=>{
                d[e].swiperLoopMoveDOM = !0,
                h.append(d[e]),
                d[e].swiperLoopMoveDOM = !1
            }
            ),
            c.recalcSlides(),
            "auto" === m.slidesPerView ? c.updateSlides() : v && (y.length > 0 && E || j.length > 0 && k) && c.slides.forEach((e,t)=>{
                c.grid.updateSlide(t, e, c.slides)
            }
            ),
            m.watchSlidesProgress && c.updateSlidesOffset(),
            r)
                if (y.length > 0 && E) {
                    if (void 0 === t) {
                        const e = c.slidesGrid[S]
                          , t = c.slidesGrid[S + _] - e;
                        l ? c.setTranslate(c.translate - t) : (c.slideTo(S + Math.ceil(_), 0, !1, !0),
                        s && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t,
                        c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t))
                    } else if (s) {
                        const e = v ? y.length / m.grid.rows : y.length;
                        c.slideTo(c.activeIndex + e, 0, !1, !0),
                        c.touchEventsData.currentTranslate = c.translate
                    }
                } else if (j.length > 0 && k)
                    if (void 0 === t) {
                        const e = c.slidesGrid[S]
                          , t = c.slidesGrid[S - C] - e;
                        l ? c.setTranslate(c.translate - t) : (c.slideTo(S - C, 0, !1, !0),
                        s && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t,
                        c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t))
                    } else {
                        const e = v ? j.length / m.grid.rows : j.length;
                        c.slideTo(c.activeIndex - e, 0, !1, !0)
                    }
            if (c.allowSlidePrev = u,
            c.allowSlideNext = p,
            c.controller && c.controller.control && !o) {
                const e = {
                    slideRealIndex: t,
                    direction: n,
                    setTranslate: s,
                    activeSlideIndex: i,
                    byController: !0
                };
                Array.isArray(c.controller.control) ? c.controller.control.forEach(t=>{
                    !t.destroyed && t.params.loop && t.loopFix({
                        ...e,
                        slideTo: t.params.slidesPerView === m.slidesPerView && r
                    })
                }
                ) : c.controller.control instanceof c.constructor && c.controller.control.params.loop && c.controller.control.loopFix({
                    ...e,
                    slideTo: c.controller.control.params.slidesPerView === m.slidesPerView && r
                })
            }
            c.emit("loopFix")
        },
        loopDestroy: function() {
            const e = this
              , {params: t, slidesEl: r} = e;
            if (!t.loop || !r || e.virtual && e.params.virtual.enabled)
                return;
            e.recalcSlides();
            const n = [];
            e.slides.forEach(e=>{
                const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                n[t] = e
            }
            ),
            e.slides.forEach(e=>{
                e.removeAttribute("data-swiper-slide-index")
            }
            ),
            n.forEach(e=>{
                r.append(e)
            }
            ),
            e.recalcSlides(),
            e.slideTo(e.realIndex, 0)
        }
    },
    grabCursor: {
        setGrabCursor: function(e) {
            const t = this;
            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                return;
            const r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0),
            r.style.cursor = "move",
            r.style.cursor = e ? "grabbing" : "grab",
            t.isElement && requestAnimationFrame(()=>{
                t.__preventObserver__ = !1
            }
            )
        },
        unsetGrabCursor: function() {
            const e = this;
            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0),
            e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "",
            e.isElement && requestAnimationFrame(()=>{
                e.__preventObserver__ = !1
            }
            ))
        }
    },
    events: {
        attachEvents: function() {
            const e = this
              , {params: t} = e;
            e.onTouchStart = Pa.bind(e),
            e.onTouchMove = Oa.bind(e),
            e.onTouchEnd = Aa.bind(e),
            e.onDocumentTouchStart = za.bind(e),
            t.cssMode && (e.onScroll = Da.bind(e)),
            e.onClick = Ia.bind(e),
            e.onLoad = Ra.bind(e),
            Fa(e, "on")
        },
        detachEvents: function() {
            Fa(this, "off")
        }
    },
    breakpoints: {
        setBreakpoint: function() {
            const e = this
              , {realIndex: t, initialized: r, params: n, el: s} = e
              , i = n.breakpoints;
            if (!i || i && 0 === Object.keys(i).length)
                return;
            const a = Qi()
              , o = "window" !== n.breakpointsBase && n.breakpointsBase ? "container" : n.breakpointsBase
              , l = ["window", "container"].includes(n.breakpointsBase) || !n.breakpointsBase ? e.el : a.querySelector(n.breakpointsBase)
              , c = e.getBreakpoint(i, o, l);
            if (!c || e.currentBreakpoint === c)
                return;
            const d = (c in i ? i[c] : void 0) || e.originalParams
              , u = Ga(e, n)
              , p = Ga(e, d)
              , h = e.params.grabCursor
              , m = d.grabCursor
              , f = n.enabled;
            u && !p ? (s.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`),
            e.emitContainerClasses()) : !u && p && (s.classList.add(`${n.containerModifierClass}grid`),
            (d.grid.fill && "column" === d.grid.fill || !d.grid.fill && "column" === n.grid.fill) && s.classList.add(`${n.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
            h && !m ? e.unsetGrabCursor() : !h && m && e.setGrabCursor(),
            ["navigation", "pagination", "scrollbar"].forEach(t=>{
                if (void 0 === d[t])
                    return;
                const r = n[t] && n[t].enabled
                  , s = d[t] && d[t].enabled;
                r && !s && e[t].disable(),
                !r && s && e[t].enable()
            }
            );
            const x = d.direction && d.direction !== n.direction
              , g = n.loop && (d.slidesPerView !== n.slidesPerView || x)
              , w = n.loop;
            x && r && e.changeDirection(),
            ia(e.params, d);
            const b = e.params.enabled
              , v = e.params.loop;
            Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
            }),
            f && !b ? e.disable() : !f && b && e.enable(),
            e.currentBreakpoint = c,
            e.emit("_beforeBreakpoint", d),
            r && (g ? (e.loopDestroy(),
            e.loopCreate(t),
            e.updateSlides()) : !w && v ? (e.loopCreate(t),
            e.updateSlides()) : w && !v && e.loopDestroy()),
            e.emit("breakpoint", d)
        },
        getBreakpoint: function(e, t, r) {
            if (void 0 === t && (t = "window"),
            !e || "container" === t && !r)
                return;
            let n = !1;
            const s = Ji()
              , i = "window" === t ? s.innerHeight : r.clientHeight
              , a = Object.keys(e).map(e=>{
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                        value: i * t,
                        point: e
                    }
                }
                return {
                    value: e,
                    point: e
                }
            }
            );
            a.sort((e,t)=>parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let o = 0; o < a.length; o += 1) {
                const {point: e, value: i} = a[o];
                "window" === t ? s.matchMedia(`(min-width: ${i}px)`).matches && (n = e) : i <= r.clientWidth && (n = e)
            }
            return n || "max"
        }
    },
    checkOverflow: {
        checkOverflow: function() {
            const e = this
              , {isLocked: t, params: r} = e
              , {slidesOffsetBefore: n} = r;
            if (n) {
                const t = e.slides.length - 1
                  , r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
                e.isLocked = e.size > r
            } else
                e.isLocked = 1 === e.snapGrid.length;
            !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
        }
    },
    classes: {
        addClasses: function() {
            const e = this
              , {classNames: t, params: r, rtl: n, el: s, device: i} = e
              , a = function(e, t) {
                const r = [];
                return e.forEach(e=>{
                    "object" == typeof e ? Object.keys(e).forEach(n=>{
                        e[n] && r.push(t + n)
                    }
                    ) : "string" == typeof e && r.push(t + e)
                }
                ),
                r
            }(["initialized", r.direction, {
                "free-mode": e.params.freeMode && r.freeMode.enabled
            }, {
                autoheight: r.autoHeight
            }, {
                rtl: n
            }, {
                grid: r.grid && r.grid.rows > 1
            }, {
                "grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill
            }, {
                android: i.android
            }, {
                ios: i.ios
            }, {
                "css-mode": r.cssMode
            }, {
                centered: r.cssMode && r.centeredSlides
            }, {
                "watch-progress": r.watchSlidesProgress
            }], r.containerModifierClass);
            t.push(...a),
            s.classList.add(...t),
            e.emitContainerClasses()
        },
        removeClasses: function() {
            const {el: e, classNames: t} = this;
            e && "string" != typeof e && (e.classList.remove(...t),
            this.emitContainerClasses())
        }
    }
}
  , Ha = {};
let qa = class e {
    constructor() {
        let t, r;
        for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
            s[i] = arguments[i];
        1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? r = s[0] : [t,r] = s,
        r || (r = {}),
        r = ia({}, r),
        t && !r.el && (r.el = t);
        const a = Qi();
        if (r.el && "string" == typeof r.el && a.querySelectorAll(r.el).length > 1) {
            const t = [];
            return a.querySelectorAll(r.el).forEach(n=>{
                const s = ia({}, r, {
                    el: n
                });
                t.push(new e(s))
            }
            ),
            t
        }
        const o = this;
        o.__swiper__ = !0,
        o.support = ya(),
        o.device = ja({
            userAgent: r.userAgent
        }),
        o.browser = Ta(),
        o.eventsListeners = {},
        o.eventsAnyListeners = [],
        o.modules = [...o.__modules__],
        r.modules && Array.isArray(r.modules) && o.modules.push(...r.modules);
        const l = {};
        o.modules.forEach(e=>{
            e({
                params: r,
                swiper: o,
                extendParams: $a(r, l),
                on: o.on.bind(o),
                once: o.once.bind(o),
                off: o.off.bind(o),
                emit: o.emit.bind(o)
            })
        }
        );
        const c = ia({}, Va, l);
        return o.params = ia({}, c, Ha, r),
        o.originalParams = ia({}, o.params),
        o.passedParams = ia({}, r),
        o.params && o.params.on && Object.keys(o.params.on).forEach(e=>{
            o.on(e, o.params.on[e])
        }
        ),
        o.params && o.params.onAny && o.onAny(o.params.onAny),
        Object.assign(o, {
            enabled: o.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: ()=>"horizontal" === o.params.direction,
            isVertical: ()=>"vertical" === o.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: o.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: o.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }),
        o.emit("_swiper"),
        o.params.init && o.init(),
        o
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[e]
    }
    getSlideIndex(e) {
        const {slidesEl: t, params: r} = this
          , n = ha(ca(t, `.${r.slideClass}, swiper-slide`)[0]);
        return ha(e) - n
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.find(t=>1 * t.getAttribute("data-swiper-slide-index") === e))
    }
    getSlideIndexWhenGrid(e) {
        return this.grid && this.params.grid && this.params.grid.rows > 1 && ("column" === this.params.grid.fill ? e = Math.floor(e / this.params.grid.rows) : "row" === this.params.grid.fill && (e %= Math.ceil(this.slides.length / this.params.grid.rows))),
        e
    }
    recalcSlides() {
        const {slidesEl: e, params: t} = this;
        this.slides = ca(e, `.${t.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0,
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1,
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"))
    }
    setProgress(e, t) {
        const r = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = r.minTranslate()
          , s = (r.maxTranslate() - n) * e + n;
        r.translateTo(s, void 0 === t ? 0 : t),
        r.updateActiveIndex(),
        r.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = e.el.className.split(" ").filter(t=>0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
        e.emit("_containerClasses", t.join(" "))
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(e=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = [];
        e.slides.forEach(r=>{
            const n = e.getSlideClasses(r);
            t.push({
                slideEl: r,
                classNames: n
            }),
            e.emit("_slideClass", r, n)
        }
        ),
        e.emit("_slideClasses", t)
    }
    slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"),
        void 0 === t && (t = !1);
        const {params: r, slides: n, slidesGrid: s, slidesSizesGrid: i, size: a, activeIndex: o} = this;
        let l = 1;
        if ("number" == typeof r.slidesPerView)
            return r.slidesPerView;
        if (r.centeredSlides) {
            let e, t = n[o] ? Math.ceil(n[o].swiperSlideSize) : 0;
            for (let r = o + 1; r < n.length; r += 1)
                n[r] && !e && (t += Math.ceil(n[r].swiperSlideSize),
                l += 1,
                t > a && (e = !0));
            for (let r = o - 1; r >= 0; r -= 1)
                n[r] && !e && (t += n[r].swiperSlideSize,
                l += 1,
                t > a && (e = !0))
        } else if ("current" === e)
            for (let c = o + 1; c < n.length; c += 1) {
                (t ? s[c] + i[c] - s[o] < a : s[c] - s[o] < a) && (l += 1)
            }
        else
            for (let c = o - 1; c >= 0; c -= 1) {
                s[o] - s[c] < a && (l += 1)
            }
        return l
    }
    update() {
        const e = this;
        if (!e || e.destroyed)
            return;
        const {snapGrid: t, params: r} = e;
        function n() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate
              , r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(r),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        let s;
        if (r.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach(t=>{
            t.complete && ka(e, t)
        }
        ),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        r.freeMode && r.freeMode.enabled && !r.cssMode)
            n(),
            r.autoHeight && e.updateAutoHeight();
        else {
            if (("auto" === r.slidesPerView || r.slidesPerView > 1) && e.isEnd && !r.centeredSlides) {
                const t = e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
                s = e.slideTo(t.length - 1, 0, !1, !0)
            } else
                s = e.slideTo(e.activeIndex, 0, !1, !0);
            s || n()
        }
        r.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update")
    }
    changeDirection(e, t) {
        void 0 === t && (t = !0);
        const r = this
          , n = r.params.direction;
        return e || (e = "horizontal" === n ? "vertical" : "horizontal"),
        e === n || "horizontal" !== e && "vertical" !== e || (r.el.classList.remove(`${r.params.containerModifierClass}${n}`),
        r.el.classList.add(`${r.params.containerModifierClass}${e}`),
        r.emitContainerClasses(),
        r.params.direction = e,
        r.slides.forEach(t=>{
            "vertical" === e ? t.style.width = "" : t.style.height = ""
        }
        ),
        r.emit("changeDirection"),
        t && r.update()),
        r
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e,
        t.rtlTranslate = "horizontal" === t.params.direction && t.rtl,
        t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "ltr"),
        t.update())
    }
    mount(e) {
        const t = this;
        if (t.mounted)
            return !0;
        let r = e || t.params.el;
        if ("string" == typeof r && (r = document.querySelector(r)),
        !r)
            return !1;
        r.swiper = t,
        r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
        const n = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let s = (()=>{
            if (r && r.shadowRoot && r.shadowRoot.querySelector) {
                return r.shadowRoot.querySelector(n())
            }
            return ca(r, n())[0]
        }
        )();
        return !s && t.params.createElements && (s = ua("div", t.params.wrapperClass),
        r.append(s),
        ca(r, `.${t.params.slideClass}`).forEach(e=>{
            s.append(e)
        }
        )),
        Object.assign(t, {
            el: r,
            wrapperEl: s,
            slidesEl: t.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : s,
            hostEl: t.isElement ? r.parentNode.host : r,
            mounted: !0,
            rtl: "rtl" === r.dir.toLowerCase() || "rtl" === pa(r, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === pa(r, "direction")),
            wrongRTL: "-webkit-box" === pa(s, "display")
        }),
        !0
    }
    init(e) {
        const t = this;
        if (t.initialized)
            return t;
        if (!1 === t.mount(e))
            return t;
        t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
        t.params.loop && t.loopCreate(void 0, !0),
        t.attachEvents();
        const r = [...t.el.querySelectorAll('[loading="lazy"]')];
        return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        r.forEach(e=>{
            e.complete ? ka(t, e) : e.addEventListener("load", e=>{
                ka(t, e.target)
            }
            )
        }
        ),
        _a(t),
        t.initialized = !0,
        _a(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
    }
    destroy(e, t) {
        void 0 === e && (e = !0),
        void 0 === t && (t = !0);
        const r = this
          , {params: n, el: s, wrapperEl: i, slides: a} = r;
        return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"),
        r.initialized = !1,
        r.detachEvents(),
        n.loop && r.loopDestroy(),
        t && (r.removeClasses(),
        s && "string" != typeof s && s.removeAttribute("style"),
        i && i.removeAttribute("style"),
        a && a.length && a.forEach(e=>{
            e.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass),
            e.removeAttribute("style"),
            e.removeAttribute("data-swiper-slide-index")
        }
        )),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach(e=>{
            r.off(e)
        }
        ),
        !1 !== e && (r.el && "string" != typeof r.el && (r.el.swiper = null),
        function(e) {
            const t = e;
            Object.keys(t).forEach(e=>{
                try {
                    t[e] = null
                } catch (r) {}
                try {
                    delete t[e]
                } catch (r) {}
            }
            )
        }(r)),
        r.destroyed = !0),
        null
    }
    static extendDefaults(e) {
        ia(Ha, e)
    }
    static get extendedDefaults() {
        return Ha
    }
    static get defaults() {
        return Va
    }
    static installModule(t) {
        e.prototype.__modules__ || (e.prototype.__modules__ = []);
        const r = e.prototype.__modules__;
        "function" == typeof t && r.indexOf(t) < 0 && r.push(t)
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach(t=>e.installModule(t)),
        e) : (e.installModule(t),
        e)
    }
}
;
Object.keys(Ba).forEach(e=>{
    Object.keys(Ba[e]).forEach(t=>{
        qa.prototype[t] = Ba[e][t]
    }
    )
}
),
qa.use([function(e) {
    let {swiper: t, on: r, emit: n} = e;
    const s = Ji();
    let i = null
      , a = null;
    const o = ()=>{
        t && !t.destroyed && t.initialized && (n("beforeResize"),
        n("resize"))
    }
      , l = ()=>{
        t && !t.destroyed && t.initialized && n("orientationchange")
    }
    ;
    r("init", ()=>{
        t.params.resizeObserver && void 0 !== s.ResizeObserver ? t && !t.destroyed && t.initialized && (i = new ResizeObserver(e=>{
            a = s.requestAnimationFrame(()=>{
                const {width: r, height: n} = t;
                let s = r
                  , i = n;
                e.forEach(e=>{
                    let {contentBoxSize: r, contentRect: n, target: a} = e;
                    a && a !== t.el || (s = n ? n.width : (r[0] || r).inlineSize,
                    i = n ? n.height : (r[0] || r).blockSize)
                }
                ),
                s === r && i === n || o()
            }
            )
        }
        ),
        i.observe(t.el)) : (s.addEventListener("resize", o),
        s.addEventListener("orientationchange", l))
    }
    ),
    r("destroy", ()=>{
        a && s.cancelAnimationFrame(a),
        i && i.unobserve && t.el && (i.unobserve(t.el),
        i = null),
        s.removeEventListener("resize", o),
        s.removeEventListener("orientationchange", l)
    }
    )
}
, function(e) {
    let {swiper: t, extendParams: r, on: n, emit: s} = e;
    const i = []
      , a = Ji()
      , o = function(e, r) {
        void 0 === r && (r = {});
        const n = new (a.MutationObserver || a.WebkitMutationObserver)(e=>{
            if (t.__preventObserver__)
                return;
            if (1 === e.length)
                return void s("observerUpdate", e[0]);
            const r = function() {
                s("observerUpdate", e[0])
            };
            a.requestAnimationFrame ? a.requestAnimationFrame(r) : a.setTimeout(r, 0)
        }
        );
        n.observe(e, {
            attributes: void 0 === r.attributes || r.attributes,
            childList: t.isElement || (void 0 === r.childList || r).childList,
            characterData: void 0 === r.characterData || r.characterData
        }),
        i.push(n)
    };
    r({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    n("init", ()=>{
        if (t.params.observer) {
            if (t.params.observeParents) {
                const e = ma(t.hostEl);
                for (let t = 0; t < e.length; t += 1)
                    o(e[t])
            }
            o(t.hostEl, {
                childList: t.params.observeSlideChildren
            }),
            o(t.wrapperEl, {
                attributes: !1
            })
        }
    }
    ),
    n("destroy", ()=>{
        i.forEach(e=>{
            e.disconnect()
        }
        ),
        i.splice(0, i.length)
    }
    )
}
]);
const Wa = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];
function Ya(e) {
    return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
}
function Xa(e, t) {
    const r = ["__proto__", "constructor", "prototype"];
    Object.keys(t).filter(e=>r.indexOf(e) < 0).forEach(r=>{
        void 0 === e[r] ? e[r] = t[r] : Ya(t[r]) && Ya(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : Xa(e[r], t[r]) : e[r] = t[r]
    }
    )
}
function Ka(e) {
    return void 0 === e && (e = {}),
    e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
}
function Ua(e) {
    return void 0 === e && (e = {}),
    e.pagination && void 0 === e.pagination.el
}
function Qa(e) {
    return void 0 === e && (e = {}),
    e.scrollbar && void 0 === e.scrollbar.el
}
function Za(e) {
    void 0 === e && (e = "");
    const t = e.split(" ").map(e=>e.trim()).filter(e=>!!e)
      , r = [];
    return t.forEach(e=>{
        r.indexOf(e) < 0 && r.push(e)
    }
    ),
    r.join(" ")
}
function Ja(e) {
    return void 0 === e && (e = ""),
    e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
}
function eo() {
    return eo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    eo.apply(this, arguments)
}
function to(e) {
    return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
}
function ro(e) {
    const t = [];
    return V.Children.toArray(e).forEach(e=>{
        to(e) ? t.push(e) : e.props && e.props.children && ro(e.props.children).forEach(e=>t.push(e))
    }
    ),
    t
}
function no(e) {
    const t = []
      , r = {
        "container-start": [],
        "container-end": [],
        "wrapper-start": [],
        "wrapper-end": []
    };
    return V.Children.toArray(e).forEach(e=>{
        if (to(e))
            t.push(e);
        else if (e.props && e.props.slot && r[e.props.slot])
            r[e.props.slot].push(e);
        else if (e.props && e.props.children) {
            const n = ro(e.props.children);
            n.length > 0 ? n.forEach(e=>t.push(e)) : r["container-end"].push(e)
        } else
            r["container-end"].push(e)
    }
    ),
    {
        slides: t,
        slots: r
    }
}
function so(e, t) {
    return "undefined" == typeof window ? G.useEffect(e, t) : G.useLayoutEffect(e, t)
}
const io = G.createContext(null)
  , ao = G.createContext(null)
  , oo = G.forwardRef(function(e, t) {
    let {className: r, tag: n="div", wrapperTag: s="div", children: i, onSwiper: a, ...o} = void 0 === e ? {} : e
      , l = !1;
    const [c,d] = G.useState("swiper")
      , [u,p] = G.useState(null)
      , [h,m] = G.useState(!1)
      , f = G.useRef(!1)
      , x = G.useRef(null)
      , g = G.useRef(null)
      , w = G.useRef(null)
      , b = G.useRef(null)
      , v = G.useRef(null)
      , y = G.useRef(null)
      , j = G.useRef(null)
      , T = G.useRef(null)
      , {params: N, passedParams: S, rest: k, events: E} = function(e, t) {
        void 0 === e && (e = {}),
        void 0 === t && (t = !0);
        const r = {
            on: {}
        }
          , n = {}
          , s = {};
        Xa(r, Va),
        r._emitClasses = !0,
        r.init = !1;
        const i = {}
          , a = Wa.map(e=>e.replace(/_/, ""))
          , o = Object.assign({}, e);
        return Object.keys(o).forEach(o=>{
            void 0 !== e[o] && (a.indexOf(o) >= 0 ? Ya(e[o]) ? (r[o] = {},
            s[o] = {},
            Xa(r[o], e[o]),
            Xa(s[o], e[o])) : (r[o] = e[o],
            s[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof e[o] ? t ? n[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : r.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : i[o] = e[o])
        }
        ),
        ["navigation", "pagination", "scrollbar"].forEach(e=>{
            !0 === r[e] && (r[e] = {}),
            !1 === r[e] && delete r[e]
        }
        ),
        {
            params: r,
            passedParams: s,
            rest: i,
            events: n
        }
    }(o)
      , {slides: _, slots: C} = no(i)
      , M = ()=>{
        m(!h)
    }
    ;
    Object.assign(N.on, {
        _containerClasses(e, t) {
            d(t)
        }
    });
    const P = ()=>{
        Object.assign(N.on, E),
        l = !0;
        const e = {
            ...N
        };
        if (delete e.wrapperClass,
        g.current = new qa(e),
        g.current.virtual && g.current.params.virtual.enabled) {
            g.current.virtual.slides = _;
            const e = {
                cache: !1,
                slides: _,
                renderExternal: p,
                renderExternalUpdate: !1
            };
            Xa(g.current.params.virtual, e),
            Xa(g.current.originalParams.virtual, e)
        }
    }
    ;
    x.current || P(),
    g.current && g.current.on("_beforeBreakpoint", M);
    return G.useEffect(()=>()=>{
        g.current && g.current.off("_beforeBreakpoint", M)
    }
    ),
    G.useEffect(()=>{
        !f.current && g.current && (g.current.emitSlidesClasses(),
        f.current = !0)
    }
    ),
    so(()=>{
        if (t && (t.current = x.current),
        x.current)
            return g.current.destroyed && P(),
            function(e, t) {
                let {el: r, nextEl: n, prevEl: s, paginationEl: i, scrollbarEl: a, swiper: o} = e;
                Ka(t) && n && s && (o.params.navigation.nextEl = n,
                o.originalParams.navigation.nextEl = n,
                o.params.navigation.prevEl = s,
                o.originalParams.navigation.prevEl = s),
                Ua(t) && i && (o.params.pagination.el = i,
                o.originalParams.pagination.el = i),
                Qa(t) && a && (o.params.scrollbar.el = a,
                o.originalParams.scrollbar.el = a),
                o.init(r)
            }({
                el: x.current,
                nextEl: v.current,
                prevEl: y.current,
                paginationEl: j.current,
                scrollbarEl: T.current,
                swiper: g.current
            }, N),
            a && !g.current.destroyed && a(g.current),
            ()=>{
                g.current && !g.current.destroyed && g.current.destroy(!0, !1)
            }
    }
    , []),
    so(()=>{
        !l && E && g.current && Object.keys(E).forEach(e=>{
            g.current.on(e, E[e])
        }
        );
        const e = function(e, t, r, n, s) {
            const i = [];
            if (!t)
                return i;
            const a = e=>{
                i.indexOf(e) < 0 && i.push(e)
            }
            ;
            if (r && n) {
                const e = n.map(s)
                  , t = r.map(s);
                e.join("") !== t.join("") && a("children"),
                n.length !== r.length && a("children")
            }
            return Wa.filter(e=>"_" === e[0]).map(e=>e.replace(/_/, "")).forEach(r=>{
                if (r in e && r in t)
                    if (Ya(e[r]) && Ya(t[r])) {
                        const n = Object.keys(e[r])
                          , s = Object.keys(t[r]);
                        n.length !== s.length ? a(r) : (n.forEach(n=>{
                            e[r][n] !== t[r][n] && a(r)
                        }
                        ),
                        s.forEach(n=>{
                            e[r][n] !== t[r][n] && a(r)
                        }
                        ))
                    } else
                        e[r] !== t[r] && a(r)
            }
            ),
            i
        }(S, w.current, _, b.current, e=>e.key);
        return w.current = S,
        b.current = _,
        e.length && g.current && !g.current.destroyed && function(e) {
            let {swiper: t, slides: r, passedParams: n, changedParams: s, nextEl: i, prevEl: a, scrollbarEl: o, paginationEl: l} = e;
            const c = s.filter(e=>"children" !== e && "direction" !== e && "wrapperClass" !== e)
              , {params: d, pagination: u, navigation: p, scrollbar: h, virtual: m, thumbs: f} = t;
            let x, g, w, b, v, y, j, T;
            s.includes("thumbs") && n.thumbs && n.thumbs.swiper && !n.thumbs.swiper.destroyed && d.thumbs && (!d.thumbs.swiper || d.thumbs.swiper.destroyed) && (x = !0),
            s.includes("controller") && n.controller && n.controller.control && d.controller && !d.controller.control && (g = !0),
            s.includes("pagination") && n.pagination && (n.pagination.el || l) && (d.pagination || !1 === d.pagination) && u && !u.el && (w = !0),
            s.includes("scrollbar") && n.scrollbar && (n.scrollbar.el || o) && (d.scrollbar || !1 === d.scrollbar) && h && !h.el && (b = !0),
            s.includes("navigation") && n.navigation && (n.navigation.prevEl || a) && (n.navigation.nextEl || i) && (d.navigation || !1 === d.navigation) && p && !p.prevEl && !p.nextEl && (v = !0);
            const N = e=>{
                t[e] && (t[e].destroy(),
                "navigation" === e ? (t.isElement && (t[e].prevEl.remove(),
                t[e].nextEl.remove()),
                d[e].prevEl = void 0,
                d[e].nextEl = void 0,
                t[e].prevEl = void 0,
                t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(),
                d[e].el = void 0,
                t[e].el = void 0))
            }
            ;
            s.includes("loop") && t.isElement && (d.loop && !n.loop ? y = !0 : !d.loop && n.loop ? j = !0 : T = !0),
            c.forEach(e=>{
                if (Ya(d[e]) && Ya(n[e]))
                    Object.assign(d[e], n[e]),
                    "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled"in n[e]) || n[e].enabled || N(e);
                else {
                    const t = n[e];
                    !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? d[e] = n[e] : !1 === t && N(e)
                }
            }
            ),
            c.includes("controller") && !g && t.controller && t.controller.control && d.controller && d.controller.control && (t.controller.control = d.controller.control),
            s.includes("children") && r && m && d.virtual.enabled ? (m.slides = r,
            m.update(!0)) : s.includes("virtual") && m && d.virtual.enabled && (r && (m.slides = r),
            m.update(!0)),
            s.includes("children") && r && d.loop && (T = !0),
            x && f.init() && f.update(!0);
            g && (t.controller.control = d.controller.control),
            w && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"),
            l.classList.add("swiper-pagination"),
            l.part.add("pagination"),
            t.el.appendChild(l)),
            l && (d.pagination.el = l),
            u.init(),
            u.render(),
            u.update()),
            b && (!t.isElement || o && "string" != typeof o || (o = document.createElement("div"),
            o.classList.add("swiper-scrollbar"),
            o.part.add("scrollbar"),
            t.el.appendChild(o)),
            o && (d.scrollbar.el = o),
            h.init(),
            h.updateSize(),
            h.setTranslate()),
            v && (t.isElement && (i && "string" != typeof i || (i = document.createElement("div"),
            i.classList.add("swiper-button-next"),
            ga(i, t.hostEl.constructor.nextButtonSvg),
            i.part.add("button-next"),
            t.el.appendChild(i)),
            a && "string" != typeof a || (a = document.createElement("div"),
            a.classList.add("swiper-button-prev"),
            ga(a, t.hostEl.constructor.prevButtonSvg),
            a.part.add("button-prev"),
            t.el.appendChild(a))),
            i && (d.navigation.nextEl = i),
            a && (d.navigation.prevEl = a),
            p.init(),
            p.update()),
            s.includes("allowSlideNext") && (t.allowSlideNext = n.allowSlideNext),
            s.includes("allowSlidePrev") && (t.allowSlidePrev = n.allowSlidePrev),
            s.includes("direction") && t.changeDirection(n.direction, !1),
            (y || T) && t.loopDestroy(),
            (j || T) && t.loopCreate(),
            t.update()
        }({
            swiper: g.current,
            slides: _,
            passedParams: S,
            changedParams: e,
            nextEl: v.current,
            prevEl: y.current,
            scrollbarEl: T.current,
            paginationEl: j.current
        }),
        ()=>{
            E && g.current && Object.keys(E).forEach(e=>{
                g.current.off(e, E[e])
            }
            )
        }
    }
    ),
    so(()=>{
        var e;
        !(e = g.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.emit("_virtualUpdated"),
        e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
    }
    , [u]),
    V.createElement(n, eo({
        ref: x,
        className: Za(`${c}${r ? ` ${r}` : ""}`)
    }, k), V.createElement(ao.Provider, {
        value: g.current
    }, C["container-start"], V.createElement(s, {
        className: Ja(N.wrapperClass)
    }, C["wrapper-start"], N.virtual ? function(e, t, r) {
        if (!r)
            return null;
        const n = e=>{
            let r = e;
            return e < 0 ? r = t.length + e : r >= t.length && (r -= t.length),
            r
        }
          , s = e.isHorizontal() ? {
            [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
        } : {
            top: `${r.offset}px`
        }
          , {from: i, to: a} = r
          , o = e.params.loop ? -t.length : 0
          , l = e.params.loop ? 2 * t.length : t.length
          , c = [];
        for (let d = o; d < l; d += 1)
            d >= i && d <= a && c.push(t[n(d)]);
        return c.map((t,r)=>V.cloneElement(t, {
            swiper: e,
            style: s,
            key: t.props.virtualIndex || t.key || `slide-${r}`
        }))
    }(g.current, _, u) : _.map((e,t)=>V.cloneElement(e, {
        swiper: g.current,
        swiperSlideIndex: t
    })), C["wrapper-end"]), Ka(N) && V.createElement(V.Fragment, null, V.createElement("div", {
        ref: y,
        className: "swiper-button-prev"
    }), V.createElement("div", {
        ref: v,
        className: "swiper-button-next"
    })), Qa(N) && V.createElement("div", {
        ref: T,
        className: "swiper-scrollbar"
    }), Ua(N) && V.createElement("div", {
        ref: j,
        className: "swiper-pagination"
    }), C["container-end"]))
});
oo.displayName = "Swiper";
const lo = G.forwardRef(function(e, t) {
    let {tag: r="div", children: n, className: s="", swiper: i, zoom: a, lazy: o, virtualIndex: l, swiperSlideIndex: c, ...d} = void 0 === e ? {} : e;
    const u = G.useRef(null)
      , [p,h] = G.useState("swiper-slide")
      , [m,f] = G.useState(!1);
    function x(e, t, r) {
        t === u.current && h(r)
    }
    so(()=>{
        if (void 0 !== c && (u.current.swiperSlideIndex = c),
        t && (t.current = u.current),
        u.current && i) {
            if (!i.destroyed)
                return i.on("_slideClass", x),
                ()=>{
                    i && i.off("_slideClass", x)
                }
                ;
            "swiper-slide" !== p && h("swiper-slide")
        }
    }
    ),
    so(()=>{
        i && u.current && !i.destroyed && h(i.getSlideClasses(u.current))
    }
    , [i]);
    const g = {
        isActive: p.indexOf("swiper-slide-active") >= 0,
        isVisible: p.indexOf("swiper-slide-visible") >= 0,
        isPrev: p.indexOf("swiper-slide-prev") >= 0,
        isNext: p.indexOf("swiper-slide-next") >= 0
    }
      , w = ()=>"function" == typeof n ? n(g) : n;
    return V.createElement(r, eo({
        ref: u,
        className: Za(`${p}${s ? ` ${s}` : ""}`),
        "data-swiper-slide-index": l,
        onLoad: ()=>{
            f(!0)
        }
    }, d), a && V.createElement(io.Provider, {
        value: g
    }, V.createElement("div", {
        className: "swiper-zoom-container",
        "data-swiper-zoom": "number" == typeof a ? a : void 0
    }, w(), o && !m && V.createElement("div", {
        className: "swiper-lazy-preloader"
    }))), !a && V.createElement(io.Provider, {
        value: g
    }, w(), o && !m && V.createElement("div", {
        className: "swiper-lazy-preloader"
    })))
});
function co(e) {
    let {swiper: t, extendParams: r, on: n, emit: s} = e;
    const i = Ji();
    let a;
    r({
        mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
            noMousewheelClass: "swiper-no-mousewheel"
        }
    }),
    t.mousewheel = {
        enabled: !1
    };
    let o, l = ta();
    const c = [];
    function d() {
        t.enabled && (t.mouseEntered = !0)
    }
    function u() {
        t.enabled && (t.mouseEntered = !1)
    }
    function p(e) {
        return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && ta() - l < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && ta() - l < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(),
        s("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(),
        s("scroll", e.raw)),
        l = (new i.Date).getTime(),
        !1)))
    }
    function h(e) {
        let r = e
          , n = !0;
        if (!t.enabled)
            return;
        if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))
            return;
        const i = t.params.mousewheel;
        t.params.cssMode && r.preventDefault();
        let l = t.el;
        "container" !== t.params.mousewheel.eventsTarget && (l = document.querySelector(t.params.mousewheel.eventsTarget));
        const d = l && l.contains(r.target);
        if (!t.mouseEntered && !d && !i.releaseOnEdges)
            return !0;
        r.originalEvent && (r = r.originalEvent);
        let u = 0;
        const h = t.rtlTranslate ? -1 : 1
          , m = function(e) {
            let t = 0
              , r = 0
              , n = 0
              , s = 0;
            return "detail"in e && (r = e.detail),
            "wheelDelta"in e && (r = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (r = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = r,
            r = 0),
            n = 10 * t,
            s = 10 * r,
            "deltaY"in e && (s = e.deltaY),
            "deltaX"in e && (n = e.deltaX),
            e.shiftKey && !n && (n = s,
            s = 0),
            (n || s) && e.deltaMode && (1 === e.deltaMode ? (n *= 40,
            s *= 40) : (n *= 800,
            s *= 800)),
            n && !t && (t = n < 1 ? -1 : 1),
            s && !r && (r = s < 1 ? -1 : 1),
            {
                spinX: t,
                spinY: r,
                pixelX: n,
                pixelY: s
            }
        }(r);
        if (i.forceToAxis)
            if (t.isHorizontal()) {
                if (!(Math.abs(m.pixelX) > Math.abs(m.pixelY)))
                    return !0;
                u = -m.pixelX * h
            } else {
                if (!(Math.abs(m.pixelY) > Math.abs(m.pixelX)))
                    return !0;
                u = -m.pixelY
            }
        else
            u = Math.abs(m.pixelX) > Math.abs(m.pixelY) ? -m.pixelX * h : -m.pixelY;
        if (0 === u)
            return !0;
        i.invert && (u = -u);
        let f = t.getTranslate() + u * i.sensitivity;
        if (f >= t.minTranslate() && (f = t.minTranslate()),
        f <= t.maxTranslate() && (f = t.maxTranslate()),
        n = !!t.params.loop || !(f === t.minTranslate() || f === t.maxTranslate()),
        n && t.params.nested && r.stopPropagation(),
        t.params.freeMode && t.params.freeMode.enabled) {
            const e = {
                time: ta(),
                delta: Math.abs(u),
                direction: Math.sign(u)
            }
              , n = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
            if (!n) {
                o = void 0;
                let l = t.getTranslate() + u * i.sensitivity;
                const d = t.isBeginning
                  , p = t.isEnd;
                if (l >= t.minTranslate() && (l = t.minTranslate()),
                l <= t.maxTranslate() && (l = t.maxTranslate()),
                t.setTransition(0),
                t.setTranslate(l),
                t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses(),
                (!d && t.isBeginning || !p && t.isEnd) && t.updateSlidesClasses(),
                t.params.loop && t.loopFix({
                    direction: e.direction < 0 ? "next" : "prev",
                    byMousewheel: !0
                }),
                t.params.freeMode.sticky) {
                    clearTimeout(a),
                    a = void 0,
                    c.length >= 15 && c.shift();
                    const r = c.length ? c[c.length - 1] : void 0
                      , n = c[0];
                    if (c.push(e),
                    r && (e.delta > r.delta || e.direction !== r.direction))
                        c.splice(0);
                    else if (c.length >= 15 && e.time - n.time < 500 && n.delta - e.delta >= 1 && e.delta <= 6) {
                        const r = u > 0 ? .8 : .2;
                        o = e,
                        c.splice(0),
                        a = ea(()=>{
                            !t.destroyed && t.params && t.slideToClosest(t.params.speed, !0, void 0, r)
                        }
                        , 0)
                    }
                    a || (a = ea(()=>{
                        if (t.destroyed || !t.params)
                            return;
                        o = e,
                        c.splice(0),
                        t.slideToClosest(t.params.speed, !0, void 0, .5)
                    }
                    , 500))
                }
                if (n || s("scroll", r),
                t.params.autoplay && t.params.autoplay.disableOnInteraction && t.autoplay.stop(),
                i.releaseOnEdges && (l === t.minTranslate() || l === t.maxTranslate()))
                    return !0
            }
        } else {
            const r = {
                time: ta(),
                delta: Math.abs(u),
                direction: Math.sign(u),
                raw: e
            };
            c.length >= 2 && c.shift();
            const n = c.length ? c[c.length - 1] : void 0;
            if (c.push(r),
            n ? (r.direction !== n.direction || r.delta > n.delta || r.time > n.time + 150) && p(r) : p(r),
            function(e) {
                const r = t.params.mousewheel;
                if (e.direction < 0) {
                    if (t.isEnd && !t.params.loop && r.releaseOnEdges)
                        return !0
                } else if (t.isBeginning && !t.params.loop && r.releaseOnEdges)
                    return !0;
                return !1
            }(r))
                return !0
        }
        return r.preventDefault ? r.preventDefault() : r.returnValue = !1,
        !1
    }
    function m(e) {
        let r = t.el;
        "container" !== t.params.mousewheel.eventsTarget && (r = document.querySelector(t.params.mousewheel.eventsTarget)),
        r[e]("mouseenter", d),
        r[e]("mouseleave", u),
        r[e]("wheel", h)
    }
    function f() {
        return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", h),
        !0) : !t.mousewheel.enabled && (m("addEventListener"),
        t.mousewheel.enabled = !0,
        !0)
    }
    function x() {
        return t.params.cssMode ? (t.wrapperEl.addEventListener(event, h),
        !0) : !!t.mousewheel.enabled && (m("removeEventListener"),
        t.mousewheel.enabled = !1,
        !0)
    }
    n("init", ()=>{
        !t.params.mousewheel.enabled && t.params.cssMode && x(),
        t.params.mousewheel.enabled && f()
    }
    ),
    n("destroy", ()=>{
        t.params.cssMode && f(),
        t.mousewheel.enabled && x()
    }
    ),
    Object.assign(t.mousewheel, {
        enable: f,
        disable: x
    })
}
function uo(e, t) {
    const r = la(t);
    return r !== t && (r.style.backfaceVisibility = "hidden",
    r.style["-webkit-backface-visibility"] = "hidden"),
    r
}
function po(e, t, r) {
    const n = `swiper-slide-shadow ${r ? `-${r}` : ""} swiper-slide-shadow-${e}`
      , s = la(t);
    let i = s.querySelector(`.${n.split(" ").join(".")}`);
    return i || (i = ua("div", n.split(" ")),
    s.append(i)),
    i
}
function ho(e) {
    let {swiper: t, extendParams: r, on: n} = e;
    r({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0
        }
    });
    !function(e) {
        const {effect: t, swiper: r, on: n, setTranslate: s, setTransition: i, overwriteParams: a, perspective: o, recreateShadows: l, getEffectParams: c} = e;
        let d;
        n("beforeInit", ()=>{
            if (r.params.effect !== t)
                return;
            r.classNames.push(`${r.params.containerModifierClass}${t}`),
            o && o() && r.classNames.push(`${r.params.containerModifierClass}3d`);
            const e = a ? a() : {};
            Object.assign(r.params, e),
            Object.assign(r.originalParams, e)
        }
        ),
        n("setTranslate _virtualUpdated", ()=>{
            r.params.effect === t && s()
        }
        ),
        n("setTransition", (e,n)=>{
            r.params.effect === t && i(n)
        }
        ),
        n("transitionEnd", ()=>{
            if (r.params.effect === t && l) {
                if (!c || !c().slideShadows)
                    return;
                r.slides.forEach(e=>{
                    e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(e=>e.remove())
                }
                ),
                l()
            }
        }
        ),
        n("virtualUpdate", ()=>{
            r.params.effect === t && (r.slides.length || (d = !0),
            requestAnimationFrame(()=>{
                d && r.slides && r.slides.length && (s(),
                d = !1)
            }
            ))
        }
        )
    }({
        effect: "coverflow",
        swiper: t,
        on: n,
        setTranslate: ()=>{
            const {width: e, height: r, slides: n, slidesSizesGrid: s} = t
              , i = t.params.coverflowEffect
              , a = t.isHorizontal()
              , o = t.translate
              , l = a ? e / 2 - o : r / 2 - o
              , c = a ? i.rotate : -i.rotate
              , d = i.depth
              , u = function(e) {
                return t=>Math.abs(t) > 0 && e.browser && e.browser.need3dFix && Math.abs(t) % 90 == 0 ? t + .001 : t
            }(t);
            for (let t = 0, p = n.length; t < p; t += 1) {
                const e = n[t]
                  , r = s[t]
                  , o = (l - e.swiperSlideOffset - r / 2) / r
                  , p = "function" == typeof i.modifier ? i.modifier(o) : o * i.modifier;
                let h = a ? c * p : 0
                  , m = a ? 0 : c * p
                  , f = -d * Math.abs(p)
                  , x = i.stretch;
                "string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(i.stretch) / 100 * r);
                let g = a ? 0 : x * p
                  , w = a ? x * p : 0
                  , b = 1 - (1 - i.scale) * Math.abs(p);
                Math.abs(w) < .001 && (w = 0),
                Math.abs(g) < .001 && (g = 0),
                Math.abs(f) < .001 && (f = 0),
                Math.abs(h) < .001 && (h = 0),
                Math.abs(m) < .001 && (m = 0),
                Math.abs(b) < .001 && (b = 0);
                const v = `translate3d(${w}px,${g}px,${f}px)  rotateX(${u(m)}deg) rotateY(${u(h)}deg) scale(${b})`;
                if (uo(0, e).style.transform = v,
                e.style.zIndex = 1 - Math.abs(Math.round(p)),
                i.slideShadows) {
                    let t = a ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top")
                      , r = a ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
                    t || (t = po("coverflow", e, a ? "left" : "top")),
                    r || (r = po("coverflow", e, a ? "right" : "bottom")),
                    t && (t.style.opacity = p > 0 ? p : 0),
                    r && (r.style.opacity = -p > 0 ? -p : 0)
                }
            }
        }
        ,
        setTransition: e=>{
            t.slides.map(e=>la(e)).forEach(t=>{
                t.style.transitionDuration = `${e}ms`,
                t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(t=>{
                    t.style.transitionDuration = `${e}ms`
                }
                )
            }
            )
        }
        ,
        perspective: ()=>!0,
        overwriteParams: ()=>({
            watchSlidesProgress: !0
        })
    })
}
lo.displayName = "SwiperSlide";
const mo = ["from-fuchsia-500/40 via-cyan-400/40 to-blue-500/40", "from-purple-500/40 via-pink-400/40 to-cyan-400/40", "from-blue-500/40 via-cyan-400/40 to-fuchsia-500/40", "from-cyan-400/40 via-blue-500/40 to-purple-500/40", "from-pink-500/40 via-purple-500/40 to-blue-500/40", "from-orange-500/40 via-red-400/40 to-pink-500/40", "from-green-500/40 via-emerald-400/40 to-teal-500/40", "from-yellow-500/40 via-orange-400/40 to-red-500/40"];
function fo(e) {
    if (!e)
        return e;
    const t = "undefined" != typeof sessionStorage ? sessionStorage.getItem("affiliateRef") : null;
    if (!t)
        return e;
    const r = e.includes("?") ? "&" : "?";
    return `${e}${r}ref=${encodeURIComponent(t)}`
}
function xo() {
    const e = G.useRef(null)
      , [t,r] = G.useState([])
      , [n,s] = G.useState(!1)
      , [i,l] = G.useState(!0)
      , [c,d] = G.useState(null);
    G.useEffect(()=>{
        !async function() {
            try {
                l(!0),
                d(null);
                const e = await ie.getHotProductsWithCache(20);
                if (e.success)
                    r(e.data),
                    e.fromCache && l(!1);
                else {
                    const t = e.error || "Không thể tải sản phẩm hot";
                    U.error("Error fetching hot products:", t),
                    d(t),
                    r([])
                }
            } catch (e) {
                const t = e.message || "Lỗi kết nối server";
                U.error("Error fetching hot products:", t),
                d(t),
                r([])
            } finally {
                l(!1)
            }
        }();
        const e = e=>{
            e.detail && e.detail.products && r(e.detail.products)
        }
          , t = e=>{
            e.detail && e.detail.products && r(e.detail.products)
        }
        ;
        return window.addEventListener("hot-products-cache-updated", e),
        window.addEventListener("hot-products-counts-updated", t),
        ()=>{
            window.removeEventListener("hot-products-cache-updated", e),
            window.removeEventListener("hot-products-counts-updated", t)
        }
    }
    , []);
    const u = [...t].sort((e,t)=>(e.priority ?? 999) - (t.priority ?? 999))
      , p = (()=>{
        if (0 === u.length)
            return [];
        const e = u.slice(0, 5);
        return [...[3, 1, 0, 2, 4].map(t=>e[t]).filter(Boolean), ...u.slice(5)]
    }
    )()
      , h = n ? p : p.slice(0, 5)
      , m = t.length > 5
      , f = Math.min(2, Math.floor(h.length / 2));
    return i ? a.jsxs("div", {
        className: "relative hidden md:block",
        children: [a.jsx("h3", {
            className: "text-center text-5xl font-bold text-white mb-10",
            children: "Top sản phẩm"
        }), a.jsx("div", {
            className: "text-center py-20",
            children: a.jsx(le, {
                text: "Đang tải..."
            })
        })]
    }) : c ? a.jsxs("div", {
        className: "relative hidden md:block",
        children: [a.jsx("h3", {
            className: "text-center text-5xl font-bold text-white mb-10",
            children: "Top sản phẩm"
        }), a.jsxs("div", {
            className: "text-center py-20",
            children: [a.jsxs("p", {
                className: "text-red-400 text-lg mb-4",
                children: ["⚠️ Lỗi: ", c]
            }), a.jsx("button", {
                onClick: ()=>window.location.reload(),
                className: "px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg",
                children: "Thử lại"
            })]
        })]
    }) : 0 === t.length ? null : a.jsxs("div", {
        className: "relative hidden md:block",
        children: [a.jsx(o.h3, {
            initial: {
                opacity: 0,
                y: 40,
                scale: .9
            },
            whileInView: {
                opacity: 1,
                y: 0,
                scale: 1
            },
            viewport: {
                once: !0
            },
            transition: {
                duration: .8,
                ease: [.16, 1, .3, 1]
            },
            className: "text-center text-5xl font-bold text-white mb-10",
            children: "Top sản phẩm"
        }), a.jsx(o.div, {
            initial: {
                opacity: 0,
                y: 50,
                scale: .95
            },
            whileInView: {
                opacity: 1,
                y: 0,
                scale: 1
            },
            viewport: {
                once: !0,
                amount: .2
            },
            transition: {
                duration: 1,
                delay: .3,
                ease: [.16, 1, .3, 1]
            },
            className: "mx-auto max-w-[1400px] px-4",
            children: a.jsx(oo, {
                onSwiper: t=>e.current = t.el,
                modules: [ho, co],
                effect: "coverflow",
                mousewheel: {
                    forceToAxis: !0
                },
                slidesPerView: 3.5,
                centeredSlides: !0,
                spaceBetween: 30,
                initialSlide: f,
                watchSlidesProgress: !0,
                coverflowEffect: {
                    rotate: 15,
                    stretch: 30,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !1
                },
                className: "!overflow-visible",
                children: h.map((e,t)=>{
                    const r = e.productId || e.id
                      , n = mo[t % mo.length]
                      , s = e.link_create && "" !== e.link_create.trim()
                      , i = e.link_demo && "" !== e.link_demo.trim()
                      , o = e.source_code && "" !== e.source_code.trim()
                      , l = e.slug || ""
                      , c = s && "heart-qr" !== l && void 0 !== e.userCount && null !== e.userCount;
                    return a.jsx(lo, {
                        children: a.jsxs("div", {
                            className: "group relative aspect-[2/3] rounded-3xl overflow-hidden cursor-pointer transition-all duration-300",
                            children: [a.jsx("div", {
                                className: "absolute inset-0 bg-black/40 backdrop-blur-2xl border border-white/10 group-hover:border-white/15 transition-all duration-300"
                            }), a.jsx("div", {
                                className: `absolute inset-0 bg-gradient-to-br ${n} opacity-30 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-35`
                            }), a.jsxs("div", {
                                className: "relative h-full flex flex-col z-10",
                                children: [a.jsxs("div", {
                                    className: "relative h-1/2 overflow-hidden",
                                    children: [e.thumbnail ? a.jsxs(a.Fragment, {
                                        children: [a.jsx("img", {
                                            src: e.thumbnail,
                                            alt: e.name,
                                            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                                            loading: "lazy"
                                        }), a.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"
                                        })]
                                    }) : a.jsx("div", {
                                        className: `w-full h-full bg-gradient-to-br ${n} flex items-center justify-center`,
                                        children: a.jsx("div", {
                                            className: "text-6xl font-black text-white/20",
                                            children: e.name.charAt(0)
                                        })
                                    }), a.jsx("div", {
                                        className: "absolute top-3 right-3 z-10",
                                        children: a.jsx("div", {
                                            className: "relative",
                                            children: a.jsx("div", {
                                                className: "relative px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/30",
                                                children: a.jsx("span", {
                                                    className: "text-white font-semibold text-xs tracking-wide",
                                                    children: (d = e.price.min,
                                                    u = e.price.max,
                                                    0 === d && 0 === u ? "Miễn phí" : d === u ? `${(d / 1e3).toFixed(0)}K` : `${(d / 1e3).toFixed(0)}K - ${(u / 1e3).toFixed(0)}K`)
                                                })
                                            })
                                        })
                                    })]
                                }), a.jsxs("div", {
                                    className: "relative flex-1 flex flex-col p-6",
                                    children: [a.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                                    }), a.jsxs("div", {
                                        className: "relative flex-1 flex flex-col",
                                        children: [a.jsx("h3", {
                                            className: "text-2xl font-bold text-white mb-3 line-clamp-2 leading-tight transition-all duration-300",
                                            children: e.name
                                        }), a.jsx("p", {
                                            className: "text-gray-300 text-sm leading-relaxed line-clamp-2 mb-5 transition-colors duration-300",
                                            children: e.description
                                        }), a.jsxs("div", {
                                            className: "mt-auto space-y-3",
                                            children: [s && a.jsxs("div", {
                                                className: "space-y-2",
                                                children: [c && a.jsx("div", {
                                                    className: "text-center",
                                                    children: a.jsxs("span", {
                                                        className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20",
                                                        children: [a.jsx("span", {
                                                            className: "text-cyan-400 text-xs font-semibold",
                                                            children: "👥"
                                                        }), a.jsxs("span", {
                                                            className: "text-white/90 text-xs font-medium",
                                                            children: [e.userCount.toLocaleString("vi-VN"), " người đã tạo"]
                                                        })]
                                                    })
                                                }), a.jsx("a", {
                                                    href: fo(e.link_create),
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    onClick: e=>e.stopPropagation(),
                                                    className: "block w-full px-5 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-semibold text-white text-base text-center transition-all duration-300",
                                                    children: "Tạo ngay"
                                                })]
                                            }), (i || o) && a.jsxs("div", {
                                                className: "flex gap-3",
                                                children: [i && a.jsx("a", {
                                                    href: e.link_demo,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    onClick: e=>e.stopPropagation(),
                                                    className: "flex-1 px-4 py-2.5 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm font-medium text-center transition-all duration-300",
                                                    children: "Demo"
                                                }), o && a.jsx("a", {
                                                    href: e.source_code,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    onClick: e=>e.stopPropagation(),
                                                    className: "flex-1 px-4 py-2.5 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm font-medium text-center transition-all duration-300",
                                                    children: "Code"
                                                })]
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })
                    }, r);
                    var d, u
                }
                )
            })
        }), m && a.jsx(o.div, {
            initial: {
                opacity: 0,
                y: 30,
                scale: .9
            },
            whileInView: {
                opacity: 1,
                y: 0,
                scale: 1
            },
            viewport: {
                once: !0
            },
            transition: {
                duration: .7,
                delay: .5,
                ease: [.16, 1, .3, 1]
            },
            className: "mt-8 flex justify-center",
            children: a.jsx(o.button, {
                type: "button",
                onClick: ()=>s(e=>!e),
                whileHover: {
                    scale: 1.05
                },
                whileTap: {
                    scale: .95
                },
                className: "btn-cta-secondary",
                children: n ? "Thu gọn" : "Xem toàn bộ"
            })
        })]
    })
}
function go(e) {
    if (!e)
        return e;
    const t = "undefined" != typeof sessionStorage ? sessionStorage.getItem("affiliateRef") : null;
    if (!t)
        return e;
    const r = e.includes("?") ? "&" : "?";
    return `${e}${r}ref=${encodeURIComponent(t)}`
}
function wo({product: e, gradient: t, index: r=0}) {
    const n = function() {
        const [e,t] = G.useState(!1);
        return G.useEffect(()=>{
            const e = window.matchMedia("(max-width: 767px)")
              , r = ()=>t(e.matches);
            return r(),
            e.addEventListener("change", r),
            ()=>e.removeEventListener("change", r)
        }
        , []),
        e
    }()
      , s = e.link_create && "" !== e.link_create.trim()
      , i = e.link_demo && "" !== e.link_demo.trim()
      , l = e.source_code && "" !== e.source_code.trim()
      , c = s && "heart-qr" !== e.slug && void 0 !== e.userCount && null !== e.userCount
      , d = a.jsx(a.Fragment, {
        children: a.jsx("div", {
            className: "product-card-neumo relative aspect-[3/4] overflow-hidden transition-shadow duration-300 group-hover:shadow-[10px_10px_24px_rgba(0,0,0,0.45),-10px_-10px_24px_rgba(255,255,255,0.05)]",
            children: a.jsxs("div", {
                className: "relative h-full flex flex-col z-[1]",
                children: [a.jsxs("div", {
                    className: "relative h-[48%] overflow-hidden rounded-t-[2rem]",
                    children: [e.thumbnail ? a.jsxs(a.Fragment, {
                        children: [a.jsx("img", {
                            src: e.thumbnail,
                            alt: e.name,
                            className: "w-full h-full object-cover transition-all duration-500 group-hover:scale-105",
                            loading: "lazy"
                        }), a.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black/85"
                        })]
                    }) : a.jsx("div", {
                        className: `w-full h-full bg-gradient-to-br ${t} opacity-40 flex items-center justify-center`,
                        children: a.jsx("span", {
                            className: "text-6xl font-black text-white/30",
                            children: e.name.charAt(0)
                        })
                    }), a.jsx("div", {
                        className: "absolute top-3 right-3 z-10",
                        children: a.jsx("div", {
                            className: "product-card-neumo__badge px-3 py-1.5",
                            children: a.jsx("span", {
                                className: "text-[var(--card-text)] font-semibold text-xs",
                                children: (u = e.price.min,
                                p = e.price.max,
                                0 === u && 0 === p ? "Miễn phí" : u === p ? `${(u / 1e3).toFixed(0)}K` : `${(u / 1e3).toFixed(0)}K - ${(p / 1e3).toFixed(0)}K`)
                            })
                        })
                    }), c && a.jsx("div", {
                        className: "absolute bottom-3 left-3 z-10",
                        children: a.jsxs("div", {
                            className: "product-card-neumo__badge flex items-center gap-1.5 px-2.5 py-1",
                            children: [a.jsx(ce, {
                                className: "w-3.5 h-3.5 text-cyan-400/90"
                            }), a.jsx("span", {
                                className: "text-[var(--card-text-muted)] text-xs font-medium",
                                children: e.userCount.toLocaleString("vi-VN")
                            })]
                        })
                    })]
                }), a.jsxs("div", {
                    className: "h-[52%] min-h-0 p-5 flex flex-col flex-1",
                    children: [a.jsxs("div", {
                        className: "flex items-start gap-2 mb-2 flex-shrink-0",
                        children: [a.jsx("div", {
                            className: "product-card-neumo__badge mt-0.5 p-1.5",
                            children: a.jsx(Z, {
                                className: "w-3.5 h-3.5 text-pink-400/90"
                            })
                        }), a.jsx("h3", {
                            className: "flex-1 text-lg font-bold text-[var(--card-text)] line-clamp-2 leading-tight min-w-0",
                            children: e.name
                        })]
                    }), a.jsx("p", {
                        className: "text-[var(--card-text-muted)] text-sm leading-relaxed line-clamp-3 mb-4 min-w-0 overflow-hidden",
                        children: e.description
                    }), a.jsxs("div", {
                        className: "mt-auto space-y-2",
                        children: [s && a.jsxs("a", {
                            href: go(e.link_create),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "product-card-neumo__btn block w-full py-3 px-4 text-center font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2",
                            children: [a.jsx(Z, {
                                className: "w-4 h-4 opacity-90"
                            }), a.jsx("span", {
                                children: "Tạo ngay"
                            }), a.jsx(de, {
                                className: "w-4 h-4 opacity-80"
                            })]
                        }), (i || l) && a.jsxs("div", {
                            className: "flex gap-2",
                            children: [i && a.jsxs("a", {
                                href: e.link_demo,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "product-card-neumo__btn product-card-neumo__btn--sm flex-1 py-2.5 px-3 flex items-center justify-center gap-1.5 text-[var(--card-text-muted)] hover:text-[var(--card-text)] text-xs font-medium",
                                children: [a.jsx(de, {
                                    className: "w-3.5 h-3.5"
                                }), a.jsx("span", {
                                    children: "Demo"
                                })]
                            }), l && a.jsxs("a", {
                                href: e.source_code,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "product-card-neumo__btn product-card-neumo__btn--sm flex-1 py-2.5 px-3 flex items-center justify-center gap-1.5 text-[var(--card-text-muted)] hover:text-[var(--card-text)] text-xs font-medium",
                                children: [a.jsx(ue, {
                                    className: "w-3.5 h-3.5"
                                }), a.jsx("span", {
                                    children: "Code"
                                })]
                            })]
                        })]
                    })]
                })]
            })
        })
    });
    var u, p;
    return n ? a.jsx("div", {
        className: "group relative",
        children: d
    }) : a.jsx(o.div, {
        initial: {
            opacity: 0,
            y: 40,
            scale: .9
        },
        whileInView: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        viewport: {
            once: !0,
            amount: .2
        },
        transition: {
            duration: .6,
            delay: .02 * r,
            ease: [.16, 1, .3, 1]
        },
        className: "group relative",
        children: d
    })
}
const bo = ["from-fuchsia-500/40 via-cyan-400/40 to-blue-500/40", "from-purple-500/40 via-pink-400/40 to-cyan-400/40", "from-blue-500/40 via-cyan-400/40 to-fuchsia-500/40", "from-cyan-400/40 via-blue-500/40 to-purple-500/40", "from-pink-500/40 via-purple-500/40 to-blue-500/40", "from-orange-500/40 via-red-400/40 to-pink-500/40", "from-green-500/40 via-emerald-400/40 to-teal-500/40", "from-yellow-500/40 via-orange-400/40 to-red-500/40"];
function vo() {
    const [e,t] = G.useState("")
      , [r,n] = G.useState("all")
      , [s,i] = G.useState("all")
      , [o,l] = G.useState("priority")
      , [c,d] = G.useState(!1)
      , [u,p] = G.useState(!1)
      , [h,m] = G.useState([])
      , [f,x] = G.useState(null)
      , [g,w] = G.useState([])
      , [b,v] = G.useState(!0)
      , [y,j] = G.useState(null)
      , T = ie.getMetadata();
    G.useEffect(()=>{
        !async function() {
            try {
                const e = await ie.getCategories();
                if (e.success) {
                    const t = {
                        "sinh-nhat": {
                            name: "Sinh nhật",
                            icon: "🎂"
                        },
                        valentine: {
                            name: "Valentine",
                            icon: "💝"
                        },
                        "women-day": {
                            name: "Ngày Phụ Nữ",
                            icon: "🌹"
                        },
                        teacherday: {
                            name: "Ngày Nhà Giáo",
                            icon: "🎓"
                        },
                        "le-hoi": {
                            name: "Lễ hội",
                            icon: "🎉"
                        },
                        "3d": {
                            name: "3D",
                            icon: "🎮"
                        },
                        "tien-ich": {
                            name: "Tiện ích",
                            icon: "🛠️"
                        },
                        tet: {
                            name: "Tết",
                            icon: "🎆"
                        }
                    }
                      , r = e.data.map(e=>({
                        id: e,
                        ...t[e]
                    }));
                    w(r)
                }
            } catch (e) {}
        }()
    }
    , []),
    G.useEffect(()=>{
        const t = setTimeout(()=>{
            !async function() {
                try {
                    let t;
                    if (v(!0),
                    j(null),
                    e.trim())
                        t = await ie.searchProducts(e.trim(), 100);
                    else {
                        const e = {
                            sort: o
                        };
                        if ("all" !== r && (e.category = r),
                        "all" !== s) {
                            const t = T.price_ranges.find(e=>e.id === s);
                            t && (e.minPrice = t.min,
                            e.maxPrice = t.max)
                        }
                        t = "all" === r && "all" === s ? await ie.getProductsWithCache(e) : await ie.getProducts(e)
                    }
                    if (t.success)
                        m(t.data || []),
                        void 0 !== t.count && null !== t.count && x(t.count),
                        t.fromCache && v(!1);
                    else {
                        const e = t.error || t.details || "Không thể tải sản phẩm từ server";
                        j(e),
                        m([])
                    }
                } catch (t) {
                    j("Lỗi kết nối server"),
                    m([])
                } finally {
                    v(!1)
                }
            }()
        }
        , e.trim() ? 500 : 0)
          , n = e=>{
            e.detail && e.detail.products && (m(e.detail.products),
            void 0 !== e.detail.count && x(e.detail.count))
        }
          , i = e=>{
            e.detail && void 0 !== e.detail.count && x(e.detail.count)
        }
          , a = e=>{
            e.detail && e.detail.products && m(e.detail.products)
        }
        ;
        return window.addEventListener("products-cache-updated", n),
        window.addEventListener("products-count-updated", i),
        window.addEventListener("products-counts-updated", a),
        ()=>{
            clearTimeout(t),
            window.removeEventListener("products-cache-updated", n),
            window.removeEventListener("products-count-updated", i),
            window.removeEventListener("products-counts-updated", a)
        }
    }
    , [e, r, s, o]),
    G.useEffect(()=>{
        d(!1)
    }
    , [e, r, s, o]);
    const N = G.useMemo(()=>c ? h : h.slice(0, 6), [h, c])
      , S = h.length > 6;
    return a.jsxs("div", {
        className: "space-y-8",
        children: [a.jsxs("div", {
            className: "space-y-4 sm:space-y-6",
            children: [a.jsxs("div", {
                className: "relative",
                children: [a.jsx("input", {
                    type: "text",
                    value: e,
                    onChange: e=>t(e.target.value),
                    placeholder: "Tìm kiếm sản phẩm...",
                    className: "w-full px-4 py-2.5 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white text-sm sm:text-base placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                }), a.jsx("svg", {
                    className: "absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/50",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: a.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    })
                })]
            }), a.jsxs("div", {
                className: "flex items-center gap-3",
                children: [a.jsxs("select", {
                    value: r,
                    onChange: e=>n(e.target.value),
                    className: "flex-1 px-3 sm:px-4 py-2.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400/50",
                    children: [a.jsx("option", {
                        value: "all",
                        children: "Tất cả danh mục"
                    }), g.map(e=>a.jsxs("option", {
                        value: e.id,
                        className: "bg-gray-800",
                        children: [e.icon, " ", e.name]
                    }, e.id))]
                }), a.jsx("button", {
                    onClick: ()=>p(!u),
                    className: "px-4 py-2.5 sm:py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-lg text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50",
                    "aria-label": "Toggle filters",
                    children: a.jsx("svg", {
                        className: "w-5 h-5 transition-transform duration-300 " + (u ? "rotate-180" : ""),
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: a.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                        })
                    })
                })]
            }), u && a.jsx("div", {
                className: "space-y-4 animate-in fade-in slide-in-from-top-2 duration-300",
                children: a.jsxs("div", {
                    className: "flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4",
                    children: [a.jsxs("select", {
                        value: s,
                        onChange: e=>i(e.target.value),
                        className: "w-full sm:w-auto flex-1 px-3 sm:px-4 py-2.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400/50",
                        children: [a.jsx("option", {
                            value: "all",
                            children: "Tất cả giá"
                        }), T.price_ranges.map(e=>a.jsx("option", {
                            value: e.id,
                            className: "bg-gray-800",
                            children: e.name
                        }, e.id))]
                    }), a.jsx("select", {
                        value: o,
                        onChange: e=>l(e.target.value),
                        className: "w-full sm:w-auto sm:ml-auto px-3 sm:px-4 py-2.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400/50",
                        children: T.sort_options.map(e=>a.jsx("option", {
                            value: e.id,
                            className: "bg-gray-800",
                            children: e.name
                        }, e.id))
                    })]
                })
            }), a.jsx("div", {
                className: "text-white/70 text-xs sm:text-sm min-h-[1.25rem]",
                children: !b && `Tìm thấy ${null !== f ? f : h.length} sản phẩm`
            })]
        }), b ? a.jsx(pe, {
            text: "Đang tải ..."
        }) : y ? a.jsx(he, {
            title: "Không thể tải sản phẩm",
            message: y,
            type: "network",
            onRetry: ()=>window.location.reload()
        }) : 0 === h.length ? a.jsx(me, {
            title: e ? "Không tìm thấy kết quả" : "Chưa có sản phẩm",
            description: e ? `Không tìm thấy sản phẩm nào với từ khóa "${e}"` : "Hiện tại chưa có sản phẩm nào trong danh mục này",
            icon: e ? "search" : "package"
        }) : a.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
            children: N.map((e,t)=>{
                const r = bo[t % bo.length];
                return a.jsx(wo, {
                    product: e,
                    gradient: r,
                    index: t
                }, e.productId || e.id)
            }
            )
        }), S && a.jsx("div", {
            className: "flex justify-center",
            children: a.jsx("button", {
                type: "button",
                onClick: ()=>d(e=>!e),
                className: "btn-cta-secondary",
                children: c ? "Thu gọn" : "Xem toàn bộ"
            })
        })]
    })
}
function yo() {
    const e = function() {
        const [e,t] = G.useState(!1);
        return G.useEffect(()=>{
            const e = window.matchMedia("(max-width: 767px)")
              , r = ()=>t(e.matches);
            return r(),
            e.addEventListener("change", r),
            ()=>e.removeEventListener("change", r)
        }
        , []),
        e
    }();
    return a.jsx("section", {
        id: "products",
        className: "relative py-20",
        children: a.jsxs("div", {
            className: "mx-auto max-w-6xl px-6",
            children: [e ? a.jsx("div", {
                children: a.jsx(xo, {})
            }) : a.jsx(o.div, {
                initial: {
                    opacity: 0,
                    y: 60,
                    scale: .95
                },
                whileInView: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                },
                viewport: {
                    once: !0,
                    amount: .1,
                    margin: "100px"
                },
                transition: {
                    duration: 1,
                    ease: [.16, 1, .3, 1]
                },
                children: a.jsx(xo, {})
            }), e ? a.jsxs("div", {
                className: "mt-8 md:mt-20",
                children: [a.jsx("h3", {
                    className: "text-center text-4xl md:text-5xl font-bold text-white mb-10",
                    children: "Tất cả sản phẩm"
                }), a.jsx(vo, {})]
            }) : a.jsxs(o.div, {
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: !0,
                    amount: .05,
                    margin: "150px"
                },
                transition: {
                    duration: .5
                },
                className: "mt-8 md:mt-20",
                children: [a.jsx(o.h3, {
                    initial: {
                        opacity: 0,
                        y: 30,
                        scale: .9
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .8,
                        ease: [.16, 1, .3, 1]
                    },
                    className: "text-center text-4xl md:text-5xl font-bold text-white mb-10",
                    children: "Tất cả sản phẩm"
                }), a.jsx(vo, {})]
            })]
        })
    })
}
function jo() {
    const e = function() {
        const [e,t] = G.useState(!1);
        return G.useEffect(()=>{
            const e = window.matchMedia("(max-width: 767px)")
              , r = ()=>t(e.matches);
            return r(),
            e.addEventListener("change", r),
            ()=>e.removeEventListener("change", r)
        }
        , []),
        e
    }()
      , t = [{
        icon: fe,
        label: "Facebook",
        href: "https://www.facebook.com/iamtritoan/"
    }, {
        icon: ({className: e=""})=>a.jsx("svg", {
            className: e,
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: a.jsx("path", {
                d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
            })
        }),
        label: "TikTok",
        href: "https://www.tiktok.com/@iamtritoan?is_from_webapp=1&sender_device=pc"
    }, {
        icon: xe,
        label: "GitHub",
        href: "https://github.com/tritoan24"
    }, {
        icon: ee,
        label: "Email",
        href: "mailto:deargiftonline@gmail.com"
    }];
    return a.jsxs("footer", {
        className: "relative mt-10",
        children: [!e && a.jsx("div", {
            className: "absolute -top-32 left-1/2 -translate-x-1/2 w-[80%] h-56 bg-gradient-to-b from-pink-500/20 via-violet-500/10 to-transparent blur-3xl -z-10"
        }), a.jsxs("div", {
            className: "mx-auto max-w-6xl px-6 py-12",
            children: [a.jsxs("div", {
                className: "flex flex-col md:flex-row items-center md:items-end justify-between gap-8",
                children: [a.jsxs("div", {
                    children: [e ? a.jsx("h4", {
                        className: "text-2xl font-display font-semibold text-white",
                        children: "DearGift"
                    }) : a.jsx(o.h4, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .5
                        },
                        className: "text-2xl font-display font-semibold text-white",
                        children: "DearGift"
                    }), a.jsx("p", {
                        className: "mt-2 text-white/70 font-romance italic text-sm",
                        children: "Biến cảm xúc thành nghệ thuật kỹ thuật số."
                    })]
                }), a.jsx("div", {
                    className: "flex items-center gap-3",
                    children: t.map(t=>{
                        const r = t.icon
                          , n = "inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors";
                        return e ? a.jsx("a", {
                            href: t.href,
                            target: "Email" !== t.label ? "_blank" : void 0,
                            rel: "Email" !== t.label ? "noopener noreferrer" : void 0,
                            className: n,
                            children: a.jsx(r, {
                                className: "w-4 h-4"
                            })
                        }, t.label) : a.jsx(o.a, {
                            href: t.href,
                            target: "Email" !== t.label ? "_blank" : void 0,
                            rel: "Email" !== t.label ? "noopener noreferrer" : void 0,
                            whileHover: {
                                scale: 1.06
                            },
                            whileTap: {
                                scale: .98
                            },
                            className: n,
                            children: a.jsx(r, {
                                className: "w-4 h-4"
                            })
                        }, t.label)
                    }
                    )
                })]
            }), a.jsxs("div", {
                className: "mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60",
                children: [a.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [a.jsx($, {
                        to: "/contact",
                        className: "hover:text-white/90 transition-colors",
                        children: "Liên hệ"
                    }), a.jsx("span", {
                        className: "opacity-30",
                        children: "•"
                    }), a.jsx($, {
                        to: "/terms",
                        className: "hover:text-white/90 transition-colors",
                        children: "Điều khoản"
                    }), a.jsx("span", {
                        className: "opacity-30",
                        children: "•"
                    }), a.jsx($, {
                        to: "/privacy",
                        className: "hover:text-white/90 transition-colors",
                        children: "Quyền riêng tư"
                    })]
                }), a.jsxs("div", {
                    children: ["© ", (new Date).getFullYear(), " DearGift. All rights reserved."]
                })]
            })]
        }), a.jsx("div", {
            className: "h-10 w-full bg-gradient-to-b from-transparent to-black/60"
        })]
    })
}
function To() {
    const e = function() {
        const [e,t] = G.useState(!1);
        return G.useEffect(()=>{
            const e = window.matchMedia("(max-width: 767px)")
              , r = ()=>t(e.matches);
            return r(),
            e.addEventListener("change", r),
            ()=>e.removeEventListener("change", r)
        }
        , []),
        e
    }()
      , [t,r] = G.useState(!1)
      , [n,s] = G.useState(!1)
      , i = G.useRef(null)
      , l = G.useRef(null);
    if (G.useEffect(()=>{
        let e = !1
          , t = 0;
        const n = .8 * window.innerHeight
          , s = ()=>{
            e || (window.requestAnimationFrame(()=>{
                const s = window.scrollY || window.pageYOffset;
                Math.abs(s - t) > 20 && (r(s > n),
                t = s),
                e = !1
            }
            ),
            e = !0)
        }
        ;
        return s(),
        window.addEventListener("scroll", s, {
            passive: !0
        }),
        ()=>window.removeEventListener("scroll", s)
    }
    , []),
    G.useEffect(()=>{
        const e = e=>{
            n && i.current && l.current && !i.current.contains(e.target) && !l.current.contains(e.target) && s(!1)
        }
        ;
        if (n)
            return document.addEventListener("mousedown", e),
            ()=>document.removeEventListener("mousedown", e)
    }
    , [n]),
    !t)
        return null;
    const c = a.jsx("button", {
        ref: i,
        type: "button",
        onClick: ()=>s(!n),
        className: "fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/30 flex items-center justify-center bg-black/40",
        children: a.jsx("img", {
            src: "/support.png",
            alt: "Support",
            className: "w-6 h-6 md:w-8 md:h-8 object-contain"
        })
    })
      , d = n && a.jsx("div", {
        ref: l,
        className: "fixed bottom-20 right-4 md:bottom-24 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-[280px] md:w-72",
        children: a.jsxs("div", {
            className: "relative p-3 md:p-4 bg-[#0a0a0a]/95 border border-white/20 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] " + (e ? "" : "backdrop-blur-xl"),
            children: [a.jsx("div", {
                className: "absolute -top-12 -left-12 w-32 h-32 bg-pink-500/20 blur-2xl rounded-full"
            }), a.jsx("div", {
                className: "absolute -bottom-12 -right-12 w-32 h-32 bg-rose-500/20 blur-2xl rounded-full"
            }), a.jsx("button", {
                onClick: ()=>s(!1),
                className: "absolute top-3 right-3 p-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors",
                children: a.jsx(J, {
                    className: "w-4 h-4"
                })
            }), a.jsx("h3", {
                className: "text-white font-semibold text-base md:text-lg mb-3 md:mb-4 pr-8",
                children: "Liên hệ hỗ trợ"
            }), a.jsxs("div", {
                className: "space-y-2",
                children: [a.jsxs("a", {
                    href: "https://www.facebook.com/iamtritoan/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "group/social flex items-center gap-2 md:gap-3 p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300",
                    children: [a.jsx("div", {
                        className: "w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center group-hover/social:bg-blue-500/30 transition-colors flex-shrink-0",
                        children: a.jsx("img", {
                            src: "/icons8-facebook-48.png",
                            alt: "Facebook",
                            className: "w-5 h-5 md:w-6 md:h-6 object-contain"
                        })
                    }), a.jsx("span", {
                        className: "text-white/90 group-hover/social:text-white font-medium text-sm md:text-base",
                        children: "Nhắn qua Facebook"
                    })]
                }), a.jsxs("a", {
                    href: "https://zalo.me/0862613348",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "group/social flex items-center gap-2 md:gap-3 p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300",
                    children: [a.jsx("div", {
                        className: "w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-400/20 border border-blue-300/30 flex items-center justify-center group-hover/social:bg-blue-400/30 transition-colors flex-shrink-0",
                        children: a.jsx("img", {
                            src: "/icons8-zalo-48.png",
                            alt: "Zalo",
                            className: "w-5 h-5 md:w-6 md:h-6 object-contain"
                        })
                    }), a.jsx("span", {
                        className: "text-white/90 group-hover/social:text-white font-medium text-sm md:text-base",
                        children: "Nhắn qua Zalo"
                    })]
                }), a.jsxs("a", {
                    href: "https://www.tiktok.com/@iamtritoan?is_from_webapp=1&sender_device=pc",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "group/social flex items-center gap-2 md:gap-3 p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300",
                    children: [a.jsx("div", {
                        className: "w-8 h-8 md:w-10 md:h-10 rounded-lg bg-black/40 border border-white/20 flex items-center justify-center group-hover/social:bg-black/60 transition-colors flex-shrink-0",
                        children: a.jsx("svg", {
                            className: "w-4 h-4 md:w-5 md:h-5 text-white",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            children: a.jsx("path", {
                                d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                            })
                        })
                    }), a.jsx("span", {
                        className: "text-white/90 group-hover/social:text-white font-medium text-sm md:text-base",
                        children: "Nhắn qua TikTok"
                    })]
                })]
            })]
        })
    });
    return e ? a.jsxs(a.Fragment, {
        children: [c, d]
    }) : a.jsxs(a.Fragment, {
        children: [a.jsx(o.button, {
            ref: i,
            initial: {
                opacity: 0,
                scale: .8,
                y: 20
            },
            animate: {
                opacity: 1,
                scale: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                scale: .8,
                y: 20
            },
            transition: {
                duration: .3,
                ease: "easeOut"
            },
            onClick: ()=>s(!n),
            className: "fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/30 flex items-center justify-center",
            children: a.jsx("img", {
                src: "/support.png",
                alt: "Support",
                className: "w-6 h-6 md:w-8 md:h-8 object-contain"
            })
        }), a.jsx(R, {
            children: n && a.jsx(o.div, {
                ref: l,
                initial: {
                    opacity: 0,
                    scale: .8,
                    x: -20,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    scale: .8,
                    x: -20,
                    y: -20
                },
                transition: {
                    duration: .2,
                    ease: "easeOut"
                },
                className: "fixed bottom-20 right-4 md:bottom-24 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-[280px] md:w-72",
                children: a.jsxs("div", {
                    className: "relative p-3 md:p-4 bg-[#0a0a0a]/95 border border-white/20 backdrop-blur-xl rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]",
                    children: [a.jsx("div", {
                        className: "absolute -top-12 -left-12 w-32 h-32 bg-pink-500/20 blur-2xl rounded-full"
                    }), a.jsx("div", {
                        className: "absolute -bottom-12 -right-12 w-32 h-32 bg-rose-500/20 blur-2xl rounded-full"
                    }), a.jsx("button", {
                        onClick: ()=>s(!1),
                        className: "absolute top-3 right-3 p-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors",
                        children: a.jsx(J, {
                            className: "w-4 h-4"
                        })
                    }), a.jsx("h3", {
                        className: "text-white font-semibold text-base md:text-lg mb-3 md:mb-4 pr-8",
                        children: "Liên hệ hỗ trợ"
                    }), a.jsxs("div", {
                        className: "space-y-2",
                        children: [a.jsxs("a", {
                            href: "https://www.facebook.com/iamtritoan/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group/social flex items-center gap-2 md:gap-3 p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300",
                            children: [a.jsx("div", {
                                className: "w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center group-hover/social:bg-blue-500/30 transition-colors flex-shrink-0",
                                children: a.jsx("img", {
                                    src: "/icons8-facebook-48.png",
                                    alt: "Facebook",
                                    className: "w-5 h-5 md:w-6 md:h-6 object-contain"
                                })
                            }), a.jsx("span", {
                                className: "text-white/90 group-hover/social:text-white font-medium text-sm md:text-base",
                                children: "Nhắn qua Facebook"
                            })]
                        }), a.jsxs("a", {
                            href: "https://zalo.me/0862613348",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group/social flex items-center gap-2 md:gap-3 p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300",
                            children: [a.jsx("div", {
                                className: "w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-400/20 border border-blue-300/30 flex items-center justify-center group-hover/social:bg-blue-400/30 transition-colors flex-shrink-0",
                                children: a.jsx("img", {
                                    src: "/icons8-zalo-48.png",
                                    alt: "Zalo",
                                    className: "w-5 h-5 md:w-6 md:h-6 object-contain"
                                })
                            }), a.jsx("span", {
                                className: "text-white/90 group-hover/social:text-white font-medium text-sm md:text-base",
                                children: "Nhắn qua Zalo"
                            })]
                        }), a.jsxs("a", {
                            href: "https://www.tiktok.com/@iamtritoan?is_from_webapp=1&sender_device=pc",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group/social flex items-center gap-2 md:gap-3 p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300",
                            children: [a.jsx("div", {
                                className: "w-8 h-8 md:w-10 md:h-10 rounded-lg bg-black/40 border border-white/20 flex items-center justify-center group-hover/social:bg-black/60 transition-colors flex-shrink-0",
                                children: a.jsx("svg", {
                                    className: "w-4 h-4 md:w-5 md:h-5 text-white",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: a.jsx("path", {
                                        d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                                    })
                                })
                            }), a.jsx("span", {
                                className: "text-white/90 group-hover/social:text-white font-medium text-sm md:text-base",
                                children: "Nhắn qua TikTok"
                            })]
                        })]
                    })]
                })
            })
        })]
    })
}
function No({title: e="Tạo Website Quà Tặng Số Miễn Phí - Valentine, Sinh Nhật, Tết | DearGift", description: t="Tạo website quà tặng số & mã QR đẹp miễn phí. Website Valentine, sinh nhật, Tết. QR code tình yêu, QR trái tim. Làm web tặng người yêu, bạn gái, crush. Tạo QR tỏ tình dễ dàng, nhiều mẫu đẹp.", keywords: r="tạo website quà tặng, làm website tặng người yêu, trang web valentine, website sinh nhật, quà tặng số, website tết, trang web tặng bạn gái, làm web tặng crush, website quà tặng miễn phí, tạo trang web tặng quà, website romantic, trang web tỏ tình, làm quà tặng online, website ngày lễ, tạo web valentine, tạo mã QR, QR code tình yêu, QR trái tim, mã QR valentine, tạo QR đẹp, QR code miễn phí, cách tạo mã QR, QR sinh nhật, QR tỏ tình, mã QR romantic, tạo QR online, DearGift", ogImage: n="https://pub-ea15a16ffb8645eeb558504fe95165ee.r2.dev/uploads/original.png", ogType: s="website", canonical: i}) {
    const o = e.includes("DearGift") ? e : `${e} | DearGift`
      , l = i || ("undefined" != typeof window ? window.location.href : "");
    return a.jsxs(Rt, {
        children: [a.jsx("title", {
            children: o
        }), a.jsx("meta", {
            name: "description",
            content: t
        }), a.jsx("meta", {
            name: "keywords",
            content: r
        }), l && a.jsx("link", {
            rel: "canonical",
            href: l
        }), a.jsx("meta", {
            property: "og:type",
            content: s
        }), a.jsx("meta", {
            property: "og:title",
            content: o
        }), a.jsx("meta", {
            property: "og:description",
            content: t
        }), a.jsx("meta", {
            property: "og:image",
            content: n
        }), l && a.jsx("meta", {
            property: "og:url",
            content: l
        }), a.jsx("meta", {
            property: "og:site_name",
            content: "DearGift"
        }), a.jsx("meta", {
            name: "twitter:card",
            content: "summary_large_image"
        }), a.jsx("meta", {
            name: "twitter:title",
            content: o
        }), a.jsx("meta", {
            name: "twitter:description",
            content: t
        }), a.jsx("meta", {
            name: "twitter:image",
            content: n
        }), a.jsx("meta", {
            name: "author",
            content: "DearGift"
        }), a.jsx("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0"
        }), a.jsx("meta", {
            httpEquiv: "Content-Type",
            content: "text/html; charset=utf-8"
        }), a.jsx("meta", {
            name: "language",
            content: "Vietnamese"
        }), a.jsx("meta", {
            name: "robots",
            content: "index, follow"
        })]
    })
}
const So = G.lazy(()=>ze(()=>import("./SplitHeartSection-Bt4XtrWA.js"), __vite__mapDeps([0, 1, 2])))
  , ko = G.lazy(()=>ze(()=>import("./EmotionalConcept-C6d-v1ok.js"), []))
  , Eo = G.lazy(()=>ze(()=>import("./StatisticsSection-0gFrRiot.js"), __vite__mapDeps([3, 1, 2, 4, 5, 6, 7])))
  , _o = G.lazy(()=>ze(()=>import("./HowItWorks-F4htI-0M.js"), __vite__mapDeps([8, 1, 2, 4])))
  , Co = G.lazy(()=>ze(()=>import("./About-B1ffKpqG.js"), __vite__mapDeps([9, 1, 2, 4])))
  , Mo = G.lazy(()=>ze(()=>import("./Contribution-DQWKBfw9.js"), __vite__mapDeps([10, 1, 2, 6, 4])))
  , Po = G.lazy(()=>ze(()=>import("./Reviews-CrMzY70N.js"), __vite__mapDeps([11, 1, 2, 6, 4, 5, 7, 12])))
  , Oo = G.lazy(()=>ze(()=>import("./CTA-CTMLv5LJ.js"), __vite__mapDeps([13, 1, 2])));
function Ao() {
    ge({
        tkName: "key",
        md5: "9ac7ec230e0e4513578f309d6d3579ad",
        interval: "100",
        enabled: !0
    }),
    G.useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        }),
        document.documentElement.scrollTop = 0,
        document.body.scrollTop = 0;
        const e = setTimeout(()=>{
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
            }),
            document.documentElement.scrollTop = 0,
            document.body.scrollTop = 0
        }
        , 0);
        return ()=>clearTimeout(e)
    }
    , []),
    G.useEffect(()=>{
        const e = window.matchMedia("(prefers-reduced-motion: reduce)").matches
          , t = window.innerWidth < 768 || "ontouchstart"in window;
        if (e || t)
            return;
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        }),
        document.documentElement.scrollTop = 0,
        document.body.scrollTop = 0;
        const r = new K({
            smooth: !0,
            lerp: .1,
            duration: 1,
            easing: e=>Math.min(1, 1.001 - Math.pow(2, -10 * e)),
            touchMultiplier: 2
        });
        let n = null
          , s = 0;
        return n = requestAnimationFrame(function e(t) {
            r.raf(t),
            t - s >= 20 ? (s = t,
            n = requestAnimationFrame(e)) : n = requestAnimationFrame(e)
        }),
        ()=>{
            n && cancelAnimationFrame(n),
            r.destroy()
        }
    }
    , []);
    return a.jsxs("div", {
        className: "min-h-screen",
        children: [a.jsx(No, {
            title: "Tạo Website Quà Tặng Số Miễn Phí - Valentine, Sinh Nhật, Tết",
            description: "Tạo website quà tặng số đẹp miễn phí cho Valentine, sinh nhật, Tết, ngày lễ. Làm trang web tặng người yêu, bạn gái, crush dễ dàng. Nhiều mẫu đẹp, romantic, tỏ tình online."
        }), a.jsx(Ft, {}), a.jsx(zt, {}), a.jsx(Gt, {
            src: "https://flamesimagestorage.blob.core.windows.net/files/449cc4a6-a581-4d8d-8b93-e2e5f234cd98_1767759813629_prj_j0bgrhq7/10934136-75a4-440e-8559-c2183bacbf0d-Ethereal_Gift_Shop_Logo_Style__1_.png"
        }), a.jsx(Wi, {}), a.jsx(Yi, {}), a.jsx(yo, {}), a.jsx(G.Suspense, {
            fallback: a.jsx(pe, {}),
            children: a.jsx(So, {})
        }), a.jsx(G.Suspense, {
            fallback: a.jsx(pe, {}),
            children: a.jsx(ko, {})
        }), a.jsx(G.Suspense, {
            fallback: a.jsx(pe, {}),
            children: a.jsx(Eo, {})
        }), a.jsx(G.Suspense, {
            fallback: a.jsx(pe, {}),
            children: a.jsx(_o, {})
        }), a.jsx(G.Suspense, {
            fallback: a.jsx(pe, {}),
            children: a.jsx(Oo, {})
        }), a.jsx(G.Suspense, {
            fallback: a.jsx(pe, {}),
            children: a.jsx(Co, {})
        }), a.jsx(G.Suspense, {
            fallback: a.jsx(pe, {}),
            children: a.jsx(Mo, {})
        }), a.jsx(G.Suspense, {
            fallback: a.jsx(pe, {}),
            children: a.jsx(Po, {})
        }), a.jsx(jo, {}), a.jsx(To, {})]
    })
}
function Lo() {
    return a.jsxs(a.Fragment, {
        children: [a.jsx(No, {
            title: "404 - Không tìm thấy trang",
            description: "Trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển. Quay lại trang chủ DearGift.",
            keywords: "404, không tìm thấy, lỗi"
        }), a.jsxs("section", {
            className: "relative min-h-screen flex items-center justify-center px-6 overflow-hidden",
            children: [a.jsxs("div", {
                className: "absolute inset-0 -z-10",
                children: [a.jsx("div", {
                    className: "absolute inset-0 bg-[#050505]"
                }), a.jsx("div", {
                    className: "absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(236,72,153,0.18),transparent_45%),radial-gradient(circle_at_85%_90%,rgba(168,85,247,0.18),transparent_45%),radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.12),transparent_55%)]"
                }), a.jsx("div", {
                    className: "absolute inset-0 opacity-[0.08] mix-blend-soft-light",
                    style: {
                        backgroundImage: "url(https://grainy-gradients.vercel.app/noise.svg)"
                    }
                }), a.jsx("div", {
                    className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.6))]"
                })]
            }), a.jsxs("div", {
                className: "mx-auto w-full max-w-5xl grid md:grid-cols-2 gap-10 items-center",
                children: [a.jsx(o.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        ease: "easeOut"
                    },
                    className: "relative",
                    children: a.jsxs("div", {
                        className: "relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(147,51,234,0.25)]",
                        children: [a.jsx("img", {
                            src: "https://flamesimagestorage.blob.core.windows.net/files/300c3cb2-24a5-41e4-97ed-61088005ee8c_1767760609250_prj_j0bgrhq7/5de916f4-b562-4496-8cd8-fdedeb3012de-image_container.png",
                            alt: "Lost in the love cosmos",
                            className: "w-full h-auto object-cover"
                        }), a.jsx("div", {
                            className: "absolute -top-24 -left-24 w-80 h-80 bg-pink-500/25 blur-3xl rounded-full"
                        }), a.jsx("div", {
                            className: "absolute -bottom-24 -right-24 w-80 h-80 bg-violet-500/25 blur-3xl rounded-full"
                        })]
                    })
                }), a.jsxs("div", {
                    className: "text-center md:text-left",
                    children: [a.jsx(o.h1, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .7
                        },
                        className: "text-6xl md:text-7xl font-display text-white",
                        children: "404"
                    }), a.jsx(o.p, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: .15,
                            duration: .6
                        },
                        className: "mt-3 text-white/85 font-romance italic text-lg",
                        children: "Lạc giữa vũ trụ tình yêu."
                    }), a.jsxs("div", {
                        className: "mt-8 flex flex-wrap items-center gap-4 md:justify-start justify-center",
                        children: [a.jsxs($, {
                            to: "/",
                            className: "group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white/90 hover:text-white backdrop-blur-xl shadow-[0_0_30px_rgba(56,189,248,0.25)] transition-colors",
                            children: [a.jsx("span", {
                                className: "relative",
                                children: "Trở về trang chủ"
                            }), a.jsx("span", {
                                className: "absolute inset-0 rounded-full border border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity"
                            })]
                        }), a.jsxs($, {
                            to: "/contact",
                            className: "group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white/90 hover:text-white backdrop-blur-xl shadow-[0_0_30px_rgba(236,72,153,0.25)] transition-colors",
                            children: [a.jsx("span", {
                                children: "Liên hệ"
                            }), a.jsx("span", {
                                className: "absolute inset-0 rounded-full border border-pink-400/40 opacity-0 group-hover:opacity-100 transition-opacity"
                            })]
                        })]
                    })]
                })]
            })]
        })]
    })
}
function Io() {
    return a.jsxs(a.Fragment, {
        children: [a.jsx(No, {
            title: "Không có kết nối mạng",
            description: "Vui lòng kiểm tra kết nối mạng của bạn"
        }), a.jsxs("section", {
            className: "relative min-h-screen flex items-center justify-center px-6 overflow-hidden",
            children: [a.jsxs("div", {
                className: "absolute inset-0 -z-10",
                children: [a.jsx("div", {
                    className: "absolute inset-0 bg-[#050505]"
                }), a.jsx("div", {
                    className: "absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(59,130,246,0.15),transparent_45%),radial-gradient(circle_at_85%_90%,rgba(99,102,241,0.15),transparent_45%),radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.10),transparent_55%)]"
                }), a.jsx("div", {
                    className: "absolute inset-0 opacity-[0.08] mix-blend-soft-light",
                    style: {
                        backgroundImage: "url(https://grainy-gradients.vercel.app/noise.svg)"
                    }
                }), a.jsx("div", {
                    className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.6))]"
                })]
            }), a.jsxs("div", {
                className: "mx-auto w-full max-w-2xl text-center",
                children: [a.jsxs(o.div, {
                    initial: {
                        opacity: 0,
                        scale: .8
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: .6,
                        ease: "easeOut"
                    },
                    className: "relative inline-block mb-8",
                    children: [a.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-3xl rounded-full"
                    }), a.jsx("div", {
                        className: "relative p-8 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.25)]",
                        children: a.jsx(o.div, {
                            animate: {
                                rotate: [0, -10, 10, -10, 0]
                            },
                            transition: {
                                duration: 2,
                                repeat: 1 / 0,
                                repeatDelay: 1
                            },
                            children: a.jsx(we, {
                                className: "w-20 h-20 sm:w-24 sm:h-24 text-blue-400",
                                strokeWidth: 1.5
                            })
                        })
                    })]
                }), a.jsxs(o.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .2
                    },
                    children: [a.jsx("h1", {
                        className: "text-4xl sm:text-5xl md:text-6xl font-display text-white mb-4",
                        children: "Không có kết nối mạng"
                    }), a.jsx("p", {
                        className: "text-white/70 text-base sm:text-lg mb-8 max-w-md mx-auto",
                        children: "Vui lòng kiểm tra kết nối mạng của bạn và thử lại"
                    }), a.jsxs("div", {
                        className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                        children: [a.jsxs("button", {
                            onClick: ()=>{
                                window.location.reload()
                            }
                            ,
                            className: "group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/90 hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(56,189,248,0.25)]",
                            children: [a.jsx(be, {
                                className: "w-5 h-5"
                            }), a.jsx("span", {
                                className: "font-medium",
                                children: "Thử lại"
                            }), a.jsx("span", {
                                className: "absolute inset-0 rounded-full border border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity"
                            })]
                        }), a.jsxs($, {
                            to: "/",
                            className: "group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/90 hover:text-white transition-all duration-300",
                            children: [a.jsx(ve, {
                                className: "w-5 h-5"
                            }), a.jsx("span", {
                                className: "font-medium",
                                children: "Về trang chủ"
                            }), a.jsx("span", {
                                className: "absolute inset-0 rounded-full border border-blue-400/40 opacity-0 group-hover:opacity-100 transition-opacity"
                            })]
                        })]
                    })]
                }), a.jsxs(o.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .6,
                        delay: .4
                    },
                    className: "mt-12 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10",
                    children: [a.jsx("h3", {
                        className: "text-white/90 font-semibold mb-3",
                        children: "Gợi ý khắc phục"
                    }), a.jsxs("ul", {
                        className: "text-white/60 text-sm space-y-2 text-left max-w-md mx-auto",
                        children: [a.jsxs("li", {
                            className: "flex items-start gap-2",
                            children: [a.jsx("span", {
                                className: "text-cyan-400 mt-0.5",
                                children: "•"
                            }), a.jsx("span", {
                                children: "Kiểm tra kết nối WiFi hoặc dữ liệu di động"
                            })]
                        }), a.jsxs("li", {
                            className: "flex items-start gap-2",
                            children: [a.jsx("span", {
                                className: "text-cyan-400 mt-0.5",
                                children: "•"
                            }), a.jsx("span", {
                                children: "Bật lại chế độ máy bay nếu đang sử dụng"
                            })]
                        }), a.jsxs("li", {
                            className: "flex items-start gap-2",
                            children: [a.jsx("span", {
                                className: "text-cyan-400 mt-0.5",
                                children: "•"
                            }), a.jsx("span", {
                                children: "Khởi động lại router hoặc modem"
                            })]
                        }), a.jsxs("li", {
                            className: "flex items-start gap-2",
                            children: [a.jsx("span", {
                                className: "text-cyan-400 mt-0.5",
                                children: "•"
                            }), a.jsx("span", {
                                children: "Liên hệ nhà cung cấp dịch vụ Internet nếu vấn đề vẫn tiếp diễn"
                            })]
                        })]
                    })]
                }), a.jsx(o.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .6,
                        delay: .6
                    },
                    className: "mt-8",
                    children: a.jsxs("div", {
                        className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm",
                        children: [a.jsx("div", {
                            className: "w-2 h-2 bg-red-400 rounded-full animate-pulse"
                        }), a.jsx("span", {
                            children: "Offline"
                        })]
                    })
                })]
            })]
        })]
    })
}
function Do() {
    const {user: e} = Pe()
      , t = B();
    return a.jsxs(a.Fragment, {
        children: [a.jsx(No, {
            title: "Truy cập bị từ chối",
            description: "Bạn không có quyền truy cập trang này"
        }), a.jsxs("section", {
            className: "relative min-h-screen flex items-center justify-center px-6 overflow-hidden",
            children: [a.jsxs("div", {
                className: "absolute inset-0 -z-10",
                children: [a.jsx("div", {
                    className: "absolute inset-0 bg-[#050505]"
                }), a.jsx("div", {
                    className: "absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(239,68,68,0.15),transparent_45%),radial-gradient(circle_at_85%_90%,rgba(245,158,11,0.15),transparent_45%),radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.10),transparent_55%)]"
                }), a.jsx("div", {
                    className: "absolute inset-0 opacity-[0.08] mix-blend-soft-light",
                    style: {
                        backgroundImage: "url(https://grainy-gradients.vercel.app/noise.svg)"
                    }
                }), a.jsx("div", {
                    className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.6))]"
                })]
            }), a.jsxs("div", {
                className: "mx-auto w-full max-w-2xl text-center",
                children: [a.jsxs(o.div, {
                    initial: {
                        opacity: 0,
                        scale: .8
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: .6,
                        ease: "easeOut"
                    },
                    className: "relative inline-block mb-8",
                    children: [a.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-red-500/30 to-orange-500/30 blur-3xl rounded-full"
                    }), a.jsx("div", {
                        className: "relative p-8 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(239,68,68,0.25)]",
                        children: a.jsx(o.div, {
                            animate: {
                                rotate: [0, -5, 5, -5, 0],
                                scale: [1, 1.05, 1]
                            },
                            transition: {
                                duration: 2,
                                repeat: 1 / 0,
                                repeatDelay: 2
                            },
                            children: a.jsx(ye, {
                                className: "w-20 h-20 sm:w-24 sm:h-24 text-red-400",
                                strokeWidth: 1.5
                            })
                        })
                    })]
                }), a.jsxs(o.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .2
                    },
                    children: [a.jsx("h1", {
                        className: "text-4xl sm:text-5xl md:text-6xl font-display text-white mb-4",
                        children: "Truy cập bị từ chối"
                    }), a.jsx("p", {
                        className: "text-white/70 text-base sm:text-lg mb-2 max-w-md mx-auto",
                        children: "Bạn không có quyền truy cập vào trang này"
                    }), e && a.jsxs("div", {
                        className: "mt-4 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 max-w-sm mx-auto",
                        children: [a.jsx("p", {
                            className: "text-white/60 text-sm mb-1",
                            children: "Tài khoản hiện tại:"
                        }), a.jsx("p", {
                            className: "text-white font-medium",
                            children: e.displayName || e.email
                        }), a.jsxs("p", {
                            className: "text-white/50 text-xs mt-1",
                            children: ["Role: ", a.jsx("span", {
                                className: "text-cyan-400",
                                children: e.role || "user"
                            })]
                        })]
                    }), a.jsx("p", {
                        className: "text-white/50 text-sm mt-6 max-w-md mx-auto",
                        children: "Trang này yêu cầu quyền cao hơn. Vui lòng liên hệ admin nếu bạn cần truy cập."
                    }), a.jsxs("div", {
                        className: "flex flex-col sm:flex-row items-center justify-center gap-4 mt-8",
                        children: [a.jsxs("button", {
                            onClick: ()=>t(-1),
                            className: "group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/90 hover:text-white transition-all duration-300",
                            children: [a.jsx(je, {
                                className: "w-5 h-5"
                            }), a.jsx("span", {
                                className: "font-medium",
                                children: "Quay lại"
                            }), a.jsx("span", {
                                className: "absolute inset-0 rounded-full border border-orange-400/40 opacity-0 group-hover:opacity-100 transition-opacity"
                            })]
                        }), a.jsxs($, {
                            to: "/",
                            className: "group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/90 hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(239,68,68,0.25)]",
                            children: [a.jsx(ve, {
                                className: "w-5 h-5"
                            }), a.jsx("span", {
                                className: "font-medium",
                                children: "Về trang chủ"
                            }), a.jsx("span", {
                                className: "absolute inset-0 rounded-full border border-red-400/40 opacity-0 group-hover:opacity-100 transition-opacity"
                            })]
                        })]
                    })]
                }), a.jsxs(o.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .6,
                        delay: .4
                    },
                    className: "mt-12 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10",
                    children: [a.jsx("h3", {
                        className: "text-white/90 font-semibold mb-3",
                        children: "Thông tin quyền truy cập"
                    }), a.jsxs("div", {
                        className: "text-white/60 text-sm space-y-2 text-left max-w-md mx-auto",
                        children: [a.jsxs("div", {
                            className: "flex items-start gap-2",
                            children: [a.jsx("span", {
                                className: "text-red-400 mt-0.5",
                                children: "•"
                            }), a.jsxs("span", {
                                children: [a.jsx("strong", {
                                    className: "text-white/80",
                                    children: "Trang Admin:"
                                }), " Chỉ dành cho quản trị viên"]
                            })]
                        }), a.jsxs("div", {
                            className: "flex items-start gap-2",
                            children: [a.jsx("span", {
                                className: "text-orange-400 mt-0.5",
                                children: "•"
                            }), a.jsxs("span", {
                                children: [a.jsx("strong", {
                                    className: "text-white/80",
                                    children: "Dashboard:"
                                }), " Cần đăng nhập"]
                            })]
                        }), a.jsxs("div", {
                            className: "flex items-start gap-2",
                            children: [a.jsx("span", {
                                className: "text-yellow-400 mt-0.5",
                                children: "•"
                            }), a.jsxs("span", {
                                children: [a.jsx("strong", {
                                    className: "text-white/80",
                                    children: "Tính năng đặc biệt:"
                                }), " Cần quyền cụ thể"]
                            })]
                        })]
                    })]
                })]
            })]
        })]
    })
}
function Ro({children: e, allowRoles: t, showAccessDenied: r=!0}) {
    const {user: n, loading: s, isAuthenticated: i} = Pe()
      , o = H();
    if (s)
        return a.jsx(pe, {
            fullScreen: !0,
            text: "Đang kiểm tra phiên đăng nhập..."
        });
    if (!i)
        return a.jsx(q, {
            to: "/",
            replace: !0,
            state: {
                from: o
            }
        });
    const l = (null == n ? void 0 : n.role) || "user";
    if (t && t.length > 0) {
        if (!t.includes(l)) {
            if (r)
                return a.jsx(Do, {});
            const e = "user" === l ? "/dashboard" : "/";
            return a.jsx(q, {
                to: e,
                replace: !0
            })
        }
    }
    return e
}
function zo() {
    const {pathname: e} = H();
    return G.useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        }),
        document.documentElement.scrollTop = 0,
        document.body.scrollTop = 0
    }
    , [e]),
    null
}
function Fo({children: e}) {
    const t = function() {
        const [e,t] = G.useState("undefined" == typeof navigator || navigator.onLine);
        return G.useEffect(()=>{
            const e = ()=>{
                t(!0)
            }
              , r = ()=>{
                t(!1)
            }
            ;
            return window.addEventListener("online", e),
            window.addEventListener("offline", r),
            ()=>{
                window.removeEventListener("online", e),
                window.removeEventListener("offline", r)
            }
        }
        , []),
        e
    }()
      , r = H()
      , n = B()
      , [s,i] = G.useState("/");
    G.useEffect(()=>{
        t ? "/offline" === r.pathname && (n(s, {
            replace: !0
        }),
        "undefined" != typeof window && window.showNotification && window.showNotification("Đã kết nối mạng trở lại", "success")) : "/offline" !== r.pathname && (i(r.pathname),
        n("/offline", {
            replace: !0
        }))
    }
    , [t, r.pathname, n, s]);
    const [o,l] = G.useState(!1);
    return G.useEffect(()=>{
        if (t) {
            const e = setTimeout(()=>{
                l(!1)
            }
            , 3e3);
            return ()=>clearTimeout(e)
        }
        l(!0)
    }
    , [t]),
    a.jsxs(a.Fragment, {
        children: [e, o && "/offline" !== r.pathname && a.jsxs("div", {
            className: "fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border shadow-lg animate-fade-in " + (t ? "bg-green-500/10 border-green-500/20 text-green-400" : "bg-red-500/10 border-red-500/20 text-red-400"),
            children: [a.jsx("div", {
                className: "w-2 h-2 rounded-full " + (t ? "bg-green-400" : "bg-red-400 animate-pulse")
            }), a.jsx("span", {
                className: "text-sm font-medium",
                children: t ? "Đã kết nối" : "Mất kết nối"
            })]
        })]
    })
}
const Go = "https://www.tiktok.com/@iamtritoan"
  , Vo = "Món quà đặc biệt cho ngày valentine trắng 14/3"
  , $o = "#valentinedeargift #valentinegift #qrdeargift #deargift";
function Bo({open: e, onOpenChange: t}) {
    const [r,n] = G.useState(!1)
      , [s,i] = G.useState(!1)
      , [l,c] = G.useState(!1)
      , d = async(e,t)=>{
        try {
            await navigator.clipboard.writeText(e),
            t(!0),
            setTimeout(()=>t(!1), 1500)
        } catch {
            t(!1)
        }
    }
    ;
    return G.useEffect(()=>{
        if (e) {
            const e = window.scrollY;
            document.body.style.position = "fixed",
            document.body.style.top = `-${e}px`,
            document.body.style.left = "0",
            document.body.style.right = "0",
            document.body.style.overflow = "hidden"
        } else {
            const e = document.body.style.top;
            document.body.style.position = "",
            document.body.style.top = "",
            document.body.style.left = "",
            document.body.style.right = "",
            document.body.style.overflow = "",
            e && window.scrollTo(0, -1 * parseInt(e || "0"))
        }
    }
    , [e]),
    a.jsx(P, {
        open: e,
        onOpenChange: t,
        children: a.jsxs(O, {
            children: [a.jsx(A, {
                className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999]"
            }), a.jsx(L, {
                className: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-lg max-h-[90vh] rounded-3xl overflow-hidden z-[10000] focus:outline-none flex flex-col",
                children: a.jsxs(o.div, {
                    initial: {
                        opacity: 0,
                        y: 20,
                        scale: .96
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    transition: {
                        duration: .3,
                        ease: "easeOut"
                    },
                    className: "relative flex flex-col min-h-0 max-h-[90vh] bg-[#0a0a0a]/95 border border-white/10 backdrop-blur-xl rounded-3xl",
                    children: [a.jsx("div", {
                        className: "absolute -top-24 -left-24 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full pointer-events-none"
                    }), a.jsx("div", {
                        className: "absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/15 blur-3xl rounded-full pointer-events-none"
                    }), a.jsx("div", {
                        className: "absolute inset-0 rounded-3xl overflow-hidden opacity-[0.06] mix-blend-soft-light pointer-events-none",
                        style: {
                            backgroundImage: "url(https://grainy-gradients.vercel.app/noise.svg)"
                        }
                    }), a.jsxs("div", {
                        className: "relative flex items-center justify-between p-4 md:p-5 border-b border-white/10 flex-shrink-0",
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [a.jsx("div", {
                                className: "w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/30 to-amber-500/30 border border-pink-400/30 flex items-center justify-center",
                                children: a.jsx(oe, {
                                    className: "w-5 h-5 text-pink-400"
                                })
                            }), a.jsx(I, {
                                className: "text-white text-lg md:text-xl font-display font-bold",
                                children: "🎁 NHẬN VOUCHER DEARGIFT"
                            })]
                        }), a.jsx(D, {
                            className: "p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0",
                            children: a.jsx(J, {
                                className: "w-5 h-5"
                            })
                        })]
                    }), a.jsxs("div", {
                        className: "relative overflow-y-auto overflow-x-hidden flex-1 min-h-0 p-4 md:p-5 space-y-5 overscroll-contain scrollbar-hide",
                        style: {
                            WebkitOverflowScrolling: "touch"
                        },
                        onWheel: e=>e.stopPropagation(),
                        children: [a.jsxs("div", {
                            className: "rounded-2xl bg-white/5 border border-white/10 p-4",
                            children: [a.jsxs("div", {
                                className: "flex items-center justify-between gap-3 flex-wrap",
                                children: [a.jsxs("h4", {
                                    className: "text-amber-400 font-semibold text-base flex items-center gap-2",
                                    children: [a.jsx("span", {
                                        className: "w-6 h-6 rounded-full bg-amber-500/30 flex items-center justify-center text-sm",
                                        children: "1"
                                    }), "Nhận Voucher 100%"]
                                }), a.jsx("button", {
                                    type: "button",
                                    onClick: ()=>n(!r),
                                    className: "px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 transition-all",
                                    children: r ? "Thu gọn" : "Nhận ngay"
                                })]
                            }), r && a.jsxs(o.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: .2
                                },
                                children: [a.jsx("p", {
                                    className: "text-white/90 font-medium text-sm mt-3 mb-3",
                                    children: "Yêu cầu để nhận voucher 100% như sau:"
                                }), a.jsxs("ul", {
                                    className: "space-y-2 text-white/90 text-sm",
                                    children: [a.jsxs("li", {
                                        className: "flex items-start gap-2",
                                        children: [a.jsx(Te, {
                                            className: "w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5"
                                        }), a.jsxs("span", {
                                            children: ["Follow kênh, thả tim + comment video ghim đầu trang của tớ là ", a.jsx("strong", {
                                                className: "text-amber-300",
                                                children: "Toán"
                                            })]
                                        })]
                                    }), a.jsxs("li", {
                                        className: "flex items-start gap-2",
                                        children: [a.jsx(Te, {
                                            className: "w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5"
                                        }), a.jsxs("span", {
                                            children: ["Dùng website ", a.jsx("strong", {
                                                className: "text-pink-300",
                                                children: "Valentine Pro"
                                            }), " nhập nội dung, tạo mẫu của chính bạn → ấn nút ", a.jsx("strong", {
                                                children: "Xem thử"
                                            }), " → rồi bắt đầu quay video(có thể quay màn hình đó hoặc tự do sáng tạo, edit tùy ý)"]
                                        })]
                                    }), a.jsxs("li", {
                                        className: "flex items-start gap-2",
                                        children: [a.jsx(Te, {
                                            className: "w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5"
                                        }), a.jsxs("span", {
                                            children: ["Sau đó dùng CapCut tua tốc độ lên ", a.jsx("strong", {
                                                children: "1.3X"
                                            })]
                                        })]
                                    }), a.jsxs("li", {
                                        className: "flex items-start gap-2",
                                        children: [a.jsx(Te, {
                                            className: "w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5"
                                        }), a.jsx("span", {
                                            children: "Tiếp theo ghép nhạc hoặc mẫu CapCut bạn thấy hợp"
                                        })]
                                    }), a.jsxs("li", {
                                        className: "flex items-start gap-2",
                                        children: [a.jsx(Te, {
                                            className: "w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5"
                                        }), a.jsx("span", {
                                            children: "Đăng lên kênh kèm hashtag(copy bên dưới)"
                                        })]
                                    }), a.jsxs("li", {
                                        className: "flex items-start gap-2",
                                        children: [a.jsx(Te, {
                                            className: "w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5"
                                        }), a.jsxs("span", {
                                            children: ["Trên clip cần có chữ: ", a.jsx("strong", {
                                                className: "text-cyan-300",
                                                children: '"Website Tạo: Deargift"'
                                            })]
                                        })]
                                    }), a.jsxs("li", {
                                        className: "flex items-start gap-2",
                                        children: [a.jsx(Te, {
                                            className: "w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5"
                                        }), a.jsx("span", {
                                            children: "Nội dung đăng video (copy bên dưới)"
                                        })]
                                    })]
                                }), a.jsxs("div", {
                                    className: "rounded-xl bg-black/30 border border-white/5 p-3 mt-4 text-sm text-white/80 space-y-3",
                                    children: [a.jsxs("div", {
                                        children: [a.jsx("p", {
                                            className: "font-medium text-white/90 mb-1",
                                            children: "Nội dung đăng video:"
                                        }), a.jsxs("div", {
                                            className: "flex items-start gap-2",
                                            children: [a.jsxs("p", {
                                                className: "italic flex-1",
                                                children: ['"', Vo, '"']
                                            }), a.jsx("button", {
                                                type: "button",
                                                onClick: ()=>d(Vo, i),
                                                className: "flex-shrink-0 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors",
                                                title: "Copy",
                                                children: s ? a.jsx(Ne, {
                                                    className: "w-4 h-4 text-emerald-400"
                                                }) : a.jsx(Se, {
                                                    className: "w-4 h-4"
                                                })
                                            })]
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [a.jsx("p", {
                                            className: "font-medium text-white/90 shrink-0",
                                            children: "Hashtag:"
                                        }), a.jsx("span", {
                                            className: "italic flex-1",
                                            children: $o
                                        }), a.jsx("button", {
                                            type: "button",
                                            onClick: ()=>d($o, c),
                                            className: "flex-shrink-0 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors",
                                            title: "Copy",
                                            children: l ? a.jsx(Ne, {
                                                className: "w-4 h-4 text-emerald-400"
                                            }) : a.jsx(Se, {
                                                className: "w-4 h-4"
                                            })
                                        })]
                                    })]
                                }), a.jsx("a", {
                                    href: "https://www.tiktok.com/@iamtritoan/video/7603327148664900882?is_from_webapp=1&sender_device=pc&web_id=7601852709575362055",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "mt-4 block w-full py-2.5 px-4 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 transition-all",
                                    children: "Mở TikTok làm nhiệm vụ →"
                                }), a.jsx("p", {
                                    className: "text-amber-400 font-medium text-sm mt-2",
                                    children: "→ Nhận voucher 100% (FREE)"
                                }), a.jsxs("div", {
                                    className: "rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-400/20 p-4 mt-4",
                                    children: [a.jsxs("h4", {
                                        className: "text-amber-300 font-semibold text-base mb-2 flex items-center gap-2",
                                        children: [a.jsx(ke, {
                                            className: "w-5 h-5"
                                        }), "Cơ hội nhận thưởng khi video viral"]
                                    }), a.jsxs("ul", {
                                        className: "space-y-1.5 text-white/90 text-sm",
                                        children: [a.jsx("li", {
                                            children: "100k view → Thưởng 100.000đ"
                                        }), a.jsx("li", {
                                            children: "300k view → Thưởng 500.000đ"
                                        }), a.jsx("li", {
                                            children: "500k view → Thưởng 1.000.000đ"
                                        })]
                                    })]
                                }), a.jsxs("div", {
                                    className: "rounded-2xl bg-red-500/10 border border-red-400/20 p-4 mt-4",
                                    children: [a.jsxs("h4", {
                                        className: "text-red-300 font-semibold text-base mb-2 flex items-center gap-2",
                                        children: [a.jsx(Ee, {
                                            className: "w-5 h-5"
                                        }), "Lưu ý"]
                                    }), a.jsxs("ul", {
                                        className: "space-y-1 text-white/90 text-sm",
                                        children: [a.jsx("li", {
                                            children: "• Cấm buff view / gian lận"
                                        }), a.jsx("li", {
                                            children: "• View phải tự nhiên từ TikTok"
                                        })]
                                    })]
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: "rounded-2xl bg-white/5 border border-white/10 p-4",
                            children: [a.jsxs("h4", {
                                className: "text-cyan-400 font-semibold text-base mb-2 flex items-center gap-2",
                                children: [a.jsx(_e, {
                                    className: "w-5 h-5"
                                }), "Nhận thưởng"]
                            }), a.jsxs("p", {
                                className: "text-white/90 text-sm",
                                children: ["Hoàn thành xong → Chụp màn hình lại và Inbox kênh TikTok ", a.jsx("a", {
                                    href: Go,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-cyan-400 hover:text-cyan-300 underline font-medium",
                                    children: '"tớ là Toán"'
                                }), " để nhận voucher & thưởng."]
                            })]
                        }), a.jsxs("div", {
                            className: "rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 p-4",
                            children: [a.jsxs("h4", {
                                className: "text-cyan-400 font-semibold text-base mb-2 flex items-center gap-2",
                                children: [a.jsx(Ce, {
                                    className: "w-5 h-5"
                                }), "Kiếm tiền với Affiliate"]
                            }), a.jsxs("p", {
                                className: "text-white/90 text-sm mb-3",
                                children: ["Đăng ký làm Affiliate ", a.jsx("strong", {
                                    className: "text-cyan-300",
                                    children: "nhận ngay 50.000đ"
                                }), " vào ví. Chia sẻ link, nhận hoa hồng khi người truy cập mua qua link của bạn."]
                            }), a.jsx($, {
                                to: "/affiliate",
                                onClick: ()=>t(!1),
                                className: "block w-full py-2.5 px-4 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all",
                                children: "Đăng ký làm Affiliate – Nhận 50.000đ ngay"
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "relative p-4 md:p-5 border-t border-white/10 flex-shrink-0",
                        children: [a.jsx("a", {
                            href: Go,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "block w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-pink-500/80 to-rose-500/80 hover:from-pink-500 hover:to-rose-500 text-white font-semibold text-center transition-all duration-300 shadow-[0_0_24px_rgba(236,72,153,0.3)] hover:shadow-[0_0_32px_rgba(236,72,153,0.4)]",
                            children: "Mở TikTok làm nhiệm vụ →"
                        }), a.jsx(D, {
                            asChild: !0,
                            children: a.jsx("button", {
                                className: "mt-3 w-full py-2.5 text-white/60 hover:text-white text-sm font-medium transition-colors",
                                children: "Không quan tâm, đóng lại"
                            })
                        })]
                    })]
                })
            })]
        })
    })
}
function Ho() {
    const e = new URLSearchParams(window.location.search).get("ref");
    !e || e.length < 4 || (sessionStorage.setItem("affiliateRef", e),
    fetch("https://api.deargift.online/api/affiliate/track-click", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ref: e
        }),
        keepalive: !0,
        credentials: "omit"
    }).catch(()=>{}
    ))
}
function qo() {
    const e = H();
    return G.useEffect(()=>{
        Ho()
    }
    , [e.search]),
    null
}
"undefined" != typeof window && Ho();
const Wo = G.lazy(()=>ze(()=>import("./Privacy-DXucp91O.js"), __vite__mapDeps([14, 1, 2, 5, 4, 6, 7])))
  , Yo = G.lazy(()=>ze(()=>import("./Terms-D-nSctAb.js"), __vite__mapDeps([15, 1, 2, 5, 4, 6, 7])))
  , Xo = G.lazy(()=>ze(()=>import("./Contact-Benb2tHX.js"), __vite__mapDeps([16, 1, 2, 4, 5, 6, 7])))
  , Ko = G.lazy(()=>ze(()=>import("./CreateQR-DTn4NKV7.js"), __vite__mapDeps([17, 1, 2, 4])))
  , Uo = G.lazy(()=>ze(()=>import("./dashboard-alebIhTu.js").then(e=>e.U), __vite__mapDeps([6, 1, 2, 4])))
  , Qo = G.lazy(()=>ze(()=>import("./admin-BlwOUnVr.js").then(e=>e.af), __vite__mapDeps([4, 1, 2])))
  , Zo = G.lazy(()=>ze(()=>import("./GalaxyViewerPage-368VUYeD.js"), __vite__mapDeps([18, 1, 2, 19, 4, 20])))
  , Jo = G.lazy(()=>ze(()=>import("./CreateGalaxyForm-CpRmT6aS.js"), __vite__mapDeps([21, 1, 2, 6, 4, 19, 22])))
  , el = G.lazy(()=>ze(()=>import("./AffiliateApp-ChUQa4GL.js"), __vite__mapDeps([23, 1, 2, 4])));
function tl() {
    const [e,t] = G.useState(!1)
      , r = H()
      , n = "/galaxy-viewer" === r.pathname || "/galaxy-viewer.html" === r.pathname || "/createqr" === r.pathname || "/heartqr.html" === r.pathname || r.pathname.startsWith("/affiliate");
    return G.useEffect(()=>{
        "/" !== r.pathname || n || "1" !== localStorage.getItem("voucher-dialog-seen") && t(!0)
    }
    , [r.pathname, n]),
    G.useEffect(()=>{
        const e = ()=>{
            n || t(!0)
        }
        ;
        return window.addEventListener("voucher-dialog:open", e),
        ()=>window.removeEventListener("voucher-dialog:open", e)
    }
    , [n]),
    G.useEffect(()=>{
        n && e && t(!1)
    }
    , [n, e]),
    a.jsxs(a.Fragment, {
        children: [a.jsx(qo, {}), a.jsx(G.Suspense, {
            fallback: a.jsx(pe, {
                fullScreen: !0,
                text: "Đang tải trang..."
            }),
            children: a.jsxs(Y, {
                children: [a.jsx(X, {
                    path: "/",
                    element: a.jsx(Ao, {})
                }), a.jsx(X, {
                    path: "/dashboard/*",
                    element: a.jsx(Ro, {
                        allowRoles: ["user", "admin"],
                        children: a.jsx(Uo, {})
                    })
                }), a.jsx(X, {
                    path: "/admin/*",
                    element: a.jsx(Ro, {
                        allowRoles: ["admin"],
                        children: a.jsx(Qo, {})
                    })
                }), a.jsx(X, {
                    path: "/privacy",
                    element: a.jsx(Wo, {})
                }), a.jsx(X, {
                    path: "/terms",
                    element: a.jsx(Yo, {})
                }), a.jsx(X, {
                    path: "/contact",
                    element: a.jsx(Xo, {})
                }), a.jsx(X, {
                    path: "/createqr",
                    element: a.jsx(Ko, {})
                }), a.jsx(X, {
                    path: "/heartqr.html",
                    element: a.jsx(Ko, {})
                }), a.jsx(X, {
                    path: "/galaxy-viewer",
                    element: a.jsx(Zo, {})
                }), a.jsx(X, {
                    path: "/galaxy-viewer.html",
                    element: a.jsx(Zo, {})
                }), a.jsx(X, {
                    path: "/galaxy/create",
                    element: a.jsx(Jo, {})
                }), a.jsx(X, {
                    path: "/affiliate/*",
                    element: a.jsx(Ro, {
                        allowRoles: ["user", "admin"],
                        children: a.jsx(el, {})
                    })
                }), a.jsx(X, {
                    path: "/offline",
                    element: a.jsx(Io, {})
                }), a.jsx(X, {
                    path: "/access-denied",
                    element: a.jsx(Do, {})
                }), a.jsx(X, {
                    path: "*",
                    element: a.jsx(Lo, {})
                })]
            })
        }), a.jsx(Bo, {
            open: e,
            onOpenChange: e=>{
                e || (sessionStorage.setItem("voucher-dialog-seen", "1"),
                localStorage.setItem("voucher-dialog-seen", "1")),
                t(e)
            }
        })]
    })
}
"scrollRestoration"in window.history && (window.history.scrollRestoration = "manual"),
window.scrollTo(0, 0),
document.documentElement.scrollTop = 0,
document.body.scrollTop = 0,
Fe.createRoot(document.getElementById("root")).render(a.jsx(V.StrictMode, {
    children: a.jsx(Mt, {
        children: a.jsx(W, {
            children: a.jsx(Me, {
                children: a.jsx(Oe, {
                    children: a.jsxs(Fo, {
                        children: [a.jsx(zo, {}), a.jsx(tl, {})]
                    })
                })
            })
        })
    })
}));
export {Hi as A, ho as E, No as S, ze as _, ma as a, fa as b, ua as c, ha as d, ca as e, oo as f, lo as g, xa as m, ga as s};
